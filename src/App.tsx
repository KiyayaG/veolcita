/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Car, SearchItem, resolveCarImage } from "./types";
import { recentSearches, featuredVehicles, galleryVehicles } from "./carData";
import FeaturedCars from "./components/FeaturedCars";
import RecentSearches from "./components/RecentSearches";
import CameraView from "./components/CameraView";
import GalleryView from "./components/GalleryView";
import CarDetails from "./components/CarDetails";
import AnimatedBackground from "./components/AnimatedBackground";
import AddCarModal from "./components/AddCarModal";
import { ContactSection } from "./components/ContactSection";
import LoadingScreen from "./components/LoadingScreen";
import { motion, AnimatePresence } from "motion/react";
import { 
  Menu, 
  Bell, 
  Home, 
  Camera, 
  Settings,
  ChevronRight,
  User,
  Trash2,
  Search,
  Plus
} from "lucide-react";

export default function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "camera" | "gallery" | "details" | "profile" | "search">("home");
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [historyList, setHistoryList] = useState<SearchItem[]>(() => {
    const savedHistory = localStorage.getItem("velocita_history");
    if (savedHistory) {
      try {
        return JSON.parse(savedHistory);
      } catch {
        // Fall back below
      }
    }
    return recentSearches;
  });
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem("velocita_dark_mode");
    return saved !== null ? saved === "true" : true; // Default to dark mode on fresh load / published site
  });
  const [showNotifications, setShowNotifications] = useState<boolean>(false);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("Tümü");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedBrand, setSelectedBrand] = useState<string>("Tümü");
  const [selectedModel, setSelectedModel] = useState<string>("Tümü");
  const [isAddCarModalOpen, setIsAddCarModalOpen] = useState<boolean>(false);

  // Initial site loading screen state (only on session initial load)
  const [isLoading, setIsLoading] = useState<boolean>(() => {
    try {
      const alreadyLoaded = sessionStorage.getItem("velocita_initial_loaded");
      return !alreadyLoaded;
    } catch {
      return true;
    }
  });

  const handleLoadingComplete = () => {
    setIsLoading(false);
    try {
      sessionStorage.setItem("velocita_initial_loaded", "true");
    } catch {
      // Ignore storage restrictions
    }
  };

  // User Added Cars state persistent in localStorage
  const [userAddedCars, setUserAddedCars] = useState<Car[]>(() => {
    try {
      const saved = localStorage.getItem("velocita_user_added_cars");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const handleAddCustomCar = (newCar: Car) => {
    setUserAddedCars(prev => {
      const updated = [newCar, ...prev];
      localStorage.setItem("velocita_user_added_cars", JSON.stringify(updated));
      return updated;
    });

    // Also push to history list
    const searchItem: SearchItem = {
      id: `history-${Date.now()}`,
      brand: newCar.brand,
      model: newCar.model,
      timestamp: new Date().toISOString(),
      timeAgo: "Yeni Eklendi",
      carData: newCar
    };

    setHistoryList(prev => {
      const next = [searchItem, ...prev];
      localStorage.setItem("velocita_history", JSON.stringify(next));
      return next;
    });

    setSelectedCar(newCar);
    setCurrentPage("details");
  };

  // Persistent Custom Images state (manually uploaded by user or custom URL)
  const [customCarImages, setCustomCarImages] = useState<Record<string, { image: string, gallery: string[] }>>(() => {
    try {
      const saved = localStorage.getItem("velocita_custom_car_images");
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const handleUpdateCarImage = (carId: string, newImage: string, newGallery?: string[]) => {
    setCustomCarImages((prev: Record<string, { image: string, gallery: string[] }>) => {
      let next: Record<string, { image: string, gallery: string[] }>;
      if (newImage === "") { // Revert back to original
        next = { ...prev };
        delete next[carId];
      } else {
        next = {
          ...prev,
          [carId]: {
            image: newImage,
            gallery: newGallery || (prev[carId]?.gallery || [])
          }
        };
      }
      localStorage.setItem("velocita_custom_car_images", JSON.stringify(next));
      return next;
    });

    // Also update selectedCar if open to keep current UI synced
    setSelectedCar((prev: Car | null) => {
      if (prev && prev.id === carId) {
        return {
          ...prev,
          image: newImage === "" ? "" : newImage, // If reset, it gets overwritten by original database in other steps
        };
      }
      return prev;
    });
  };

  // AI Global Search features state
  const [globalAiSearchResults, setGlobalAiSearchResults] = useState<Car[]>([]);
  const [globalAiSearchError, setGlobalAiSearchError] = useState<string>("");
  const [isSearchingGlobal, setIsSearchingGlobal] = useState<boolean>(false);
  const [searchedQueries, setSearchedQueries] = useState<string[]>([]);

  const handleGlobalAiSearch = async (query: string) => {
    if (!query || query.trim() === "" || query.trim().length < 3) return;
    const trimmed = query.trim().toLowerCase();
    if (searchedQueries.includes(trimmed)) return;

    setSearchedQueries((prev: string[]) => [...prev, trimmed]);
    setIsSearchingGlobal(true);
    setGlobalAiSearchError("");

    try {
      const response = await fetch("/api/global-search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
      });
      const resData = await response.json();
      if (resData.success && Array.isArray(resData.data)) {
        setGlobalAiSearchResults((prev: Car[]) => {
          // Keep search results unique
          const combined = [...resData.data, ...prev];
          return combined.filter((car, idx, self) => 
            self.findIndex(c => c.brand.toLowerCase() === car.brand.toLowerCase() && c.model.toLowerCase() === car.model.toLowerCase()) === idx
          );
        });
      }
    } catch (err) {
      console.error("AI Search Error:", err);
    } finally {
      setIsSearchingGlobal(false);
    }
  };

  // Otomatik Küresel AI Arama Tetikleyicisi (Yapay zekaya sor demeden direkt arşivi tarar)
  useEffect(() => {
    const query = searchQuery.trim();
    if (query.length < 3) return;

    const trimmed = query.toLowerCase();
    const alreadySearched = searchedQueries.some((q: string) => trimmed.includes(q) || q.includes(trimmed));
    if (alreadySearched) return;

    const timer = setTimeout(() => {
      handleGlobalAiSearch(query);
    }, 1000); // 1 saniye hareketsizlik sonrası otomatik küresel arama başlar

    return () => clearTimeout(timer);
  }, [searchQuery, searchedQueries]);

  // Construct a unique list of all cars from different databases for filtering
  const allCars: Car[] = [
    ...userAddedCars,
    ...globalAiSearchResults,
    ...featuredVehicles,
    ...Object.values(galleryVehicles),
    ...recentSearches.map(item => item.carData)
  ].filter((car, index, self) => 
    self.findIndex(c => c.id === car.id) === index
  ).map(car => {
    let baseImage = car.image;
    let baseGallery = car.gallery || [];
    if (customCarImages[car.id]) {
      baseImage = customCarImages[car.id].image || car.image;
      baseGallery = customCarImages[car.id].gallery && customCarImages[car.id].gallery.length > 0 
        ? customCarImages[car.id].gallery 
        : car.gallery;
    }
    return {
      ...car,
      image: resolveCarImage(baseImage),
      gallery: (baseGallery || []).map(img => resolveCarImage(img))
    };
  });

  // Extract unique brands and models from allCars for the select filter dropdowns
  const availableBrands = ["Tümü", ...Array.from(new Set(allCars.map(car => car.brand))).filter(Boolean).sort()];

  const availableModels = ["Tümü", ...Array.from(new Set(
    allCars
      .filter(car => selectedBrand === "Tümü" || car.brand.toLowerCase() === selectedBrand.toLowerCase())
      .map(car => car.model)
  )).filter(Boolean).sort()];

  // Filter cars dynamically based on category, query matches, brand, and model
  const filteredCars = allCars.filter(car => {
    // Brand filter matches
    if (selectedBrand !== "Tümü" && car.brand.toLowerCase() !== selectedBrand.toLowerCase()) {
      return false;
    }

    // Model filter matches
    if (selectedModel !== "Tümü" && car.model.toLowerCase() !== selectedModel.toLowerCase()) {
      return false;
    }

    const matchesQuery = 
      car.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      car.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (car.category && car.category.toLowerCase().includes(searchQuery.toLowerCase()));

    if (!matchesQuery) return false;

    if (selectedCategory === "Tümü") return true;
    if (selectedCategory === "Süper Spor") {
      return car.category === "Süper Spor" || car.category === "İngiliz Elit";
    }
    if (selectedCategory === "Elektrikli") {
      return car.category === "Elektrikli" || car.category === "Hybrid" || car.category === "Tam Elektrikli";
    }
    if (selectedCategory === "Performans") {
      return car.category === "Lüks Performans" || car.category === "Performans Wagon" || car.category === "Premium Sedan" || car.category === "Spor Coupe" || car.category === "V6 Motor";
    }
    if (selectedCategory === "Klasik") {
      return car.category === "Klasik Koleksiyon" || car.category === "Klasik Spor" || (car.category && (car.category.toLowerCase().includes("klasik") || car.category.toLowerCase().includes("nostalji") || car.category.toLowerCase().includes("efsane")));
    }
    if (selectedCategory === "Mühendislik & Aksesuar") {
      return car.category === "Mühendislik Sanatı" || car.category === "Aksesuar & Mühendislik" || car.category === "Karbon Parça & Aksesuar" || car.category === "Teknoloji & Yapay Zeka";
    }
    
    return car.category === selectedCategory;
  });

  // Track dark mode toggle
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("velocita_dark_mode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("velocita_dark_mode", "false");
    }
  }, [darkMode]);

  // Coordinate new scan results
  const handleAnalysisComplete = (newCar: Car) => {
    // Add to scanning history list
    const timestamp = new Date().toISOString();
    const searchItem: SearchItem = {
      id: `history-${Date.now()}`,
      brand: newCar.brand,
      model: newCar.model,
      timestamp: timestamp,
      timeAgo: "Az önce tarandı",
      carData: newCar
    };

    setHistoryList(prev => {
      const next = [searchItem, ...prev];
      localStorage.setItem("velocita_history", JSON.stringify(next));
      return next;
    });
    setSelectedCar(newCar);
    setCurrentPage("details");
  };

  const handleSelectCarDetails = (car: Car) => {
    let baseImage = car.image;
    let baseGallery = car.gallery || [];
    if (customCarImages[car.id]) {
      baseImage = customCarImages[car.id].image || car.image;
      baseGallery = customCarImages[car.id].gallery && customCarImages[car.id].gallery.length > 0 
        ? customCarImages[car.id].gallery 
        : car.gallery;
    }
    const carToSelect: Car = {
      ...car,
      image: resolveCarImage(baseImage),
      gallery: (baseGallery || []).map(img => resolveCarImage(img))
    };
    setSelectedCar(carToSelect);
    setCurrentPage("details");
  };

  const clearHistory = () => {
    setHistoryList([]);
    localStorage.setItem("velocita_history", JSON.stringify([]));
    alert("Arama geçmişiniz başarıyla temizlendi.");
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-slate-100/90 via-slate-50 to-slate-100/95 dark:from-[#080b11] dark:via-[#0c1018] dark:to-[#080b11] text-stone-900 dark:text-stone-100 font-sans transition-colors duration-500 overflow-x-hidden">
      
      {/* Initial Site Loading Screen Overlay */}
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      </AnimatePresence>

      {/* Dynamic High-Tech Moving Background (Orb mesh, scrolling grid, particles & light beams) */}
      <AnimatedBackground darkMode={darkMode} />
      
      {/* Top Application Bar Header (Only visible on main screens) */}
      {(currentPage === "home" || currentPage === "profile" || currentPage === "search") && (
        <header className="sticky top-0 z-40 bg-white/80 dark:bg-[#0c1018]/80 backdrop-blur-xl border-b border-stone-200/80 dark:border-stone-800/80 shadow-md shadow-stone-950/5 dark:shadow-black/20 transition-all duration-300">
          <div className="flex justify-between items-center px-6 h-16 max-w-screen-xl mx-auto">
            <button 
              onClick={() => setShowMenu(!showMenu)}
              className="p-2 text-stone-600 dark:text-stone-300 hover:text-[#00D1FF] dark:hover:text-[#00D1FF] hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer"
            >
              <Menu className="w-6 h-6" />
            </button>
            
            <h1 className="font-headline-md text-2xl font-black tracking-widest text-[#1c1917] dark:text-white font-serif cursor-pointer hover:opacity-90 active:scale-95 transition-all" onClick={() => setCurrentPage("home")}>
              VELOCITA
            </h1>
            
            <div className="flex items-center gap-1.5">
              <button 
                onClick={() => setIsAddCarModalOpen(true)}
                className="flex items-center gap-1.5 bg-[#00D1FF]/15 text-[#00D1FF] hover:bg-[#00D1FF] hover:text-stone-950 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer border border-[#00D1FF]/30 shadow-sm hover:shadow-[#00D1FF]/20"
                title="Yeni Araba Ekle"
              >
                <Plus className="w-4 h-4" />
                <span className="hidden sm:inline">Araba Ekle</span>
              </button>
              <button 
                onClick={() => setCurrentPage("search")}
                className={`p-2 hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer ${currentPage === "search" ? "text-[#00D1FF]" : "text-stone-600 dark:text-stone-300 hover:text-[#00D1FF]"}`}
              >
                <Search className="w-6 h-6" />
              </button>
              <button 
                onClick={() => setShowNotifications(!showNotifications)}
                className="p-2 text-stone-600 dark:text-stone-300 hover:text-[#00D1FF] dark:hover:text-[#00D1FF] hover:scale-110 relative active:scale-95 transition-all duration-200 cursor-pointer"
              >
                <Bell className="w-6 h-6" />
                <div className="absolute top-1 right-1 w-2.5 h-2.5 rounded-full bg-[#00D1FF] shadow-sm shadow-[#00D1FF]" />
              </button>
            </div>
          </div>
        </header>
      )}

      {/* Main Orchestrator Pages rendering */}
      <div className="relative z-10 max-w-screen-xl mx-auto pb-28">
        
        {/* HOMEPAGE VIEW */}
        {currentPage === "home" && (
          <motion.main 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="px-6 mt-8"
          >
            {/* Elegant Turkish Welcome Header */}
            <motion.section 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-10"
            >
              <span className="text-[10px] tracking-widest font-bold uppercase text-stone-400 block mb-1">
                HOŞ GELDİNİZ
              </span>
              <h2 className="font-headline-lg-mobile text-3xl font-extrabold font-headline-md text-stone-900 dark:text-white leading-tight">
                Sürüş Tutkunuzu Keşfedin
              </h2>
              <p className="text-sm text-stone-500 dark:text-stone-400 mt-2 max-w-md leading-relaxed text-justify">
                Geleceğin otomobil teknolojilerini Velocita ile deneyimleyin. Detaylı teknik özellikleri öğrenmek için aracı saniyeler içinde tarayın.
              </p>
            </motion.section>

            {/* Quick Actions - Hızlı Tara & Araba Ekle */}
            <section className="mb-10 w-full max-w-2xl grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Camera Live Scanner trigger button */}
              <button
                onClick={() => setCurrentPage("camera")}
                className="group relative overflow-hidden bg-stone-950/90 text-white rounded-2xl p-6 flex flex-col justify-between items-start h-56 hover:shadow-2xl hover:shadow-[#00D1FF]/15 hover:border-[#00D1FF]/50 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 ease-out cursor-pointer border border-stone-800 backdrop-blur-xl transform-gpu text-left"
              >
                <div className="z-10 text-left">
                  <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-[#00D1FF]/20 transition-all duration-300">
                    <Camera className="w-5 h-5 text-[#00D1FF]" />
                  </div>
                  <h3 className="text-lg font-bold font-headline-md tracking-tight mb-1 group-hover:text-[#00D1FF] transition-colors">
                    Hızlı Tara
                  </h3>
                  <p className="text-stone-400 text-xs leading-relaxed">
                    Kamerayı veya fotoğrafı kullanarak aracı anında analiz edin.
                  </p>
                </div>
                
                <div className="absolute inset-0 opacity-15 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none">
                  <img 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJHZmSrUS_IAl3rx4eGu_25AGhYiIg91PuIlmFsAmH9lzPAxidoobTsAR8CXI7awNVn79J0V4jbDY0BH3v2nx5admKYSAYUY2pxYcLgHOF-6gC6oBJRqLWw4_MN1h7CU9C-rezVUYCRYQREMyZ_mYiHt3f3RiwexZPR_LhRj16Fo0MEajps6EMsLWZZQRspIjobhhCuQikrQA6FtNzXetFBItOJhcC-4tp6V4_yByNzzDRiTSOZ59wqFuhDzkXIitNPaTxDd4uCJw" 
                    alt="Scan backdrop"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover" 
                  />
                </div>

                <span className="z-10 mt-auto font-semibold text-[11px] text-[#00D1FF] flex items-center gap-1 uppercase tracking-wider group-hover:translate-x-1 transition-transform duration-300">
                  ŞİMDİ BAŞLAT <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </button>

              {/* Add Custom Car button */}
              <button
                onClick={() => setIsAddCarModalOpen(true)}
                className="group relative overflow-hidden bg-gradient-to-br from-stone-900/90 via-stone-900/90 to-[#0c1824]/90 text-white rounded-2xl p-6 flex flex-col justify-between items-start h-56 hover:shadow-2xl hover:shadow-[#00D1FF]/20 hover:border-[#00D1FF]/60 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 ease-out cursor-pointer border border-[#00D1FF]/30 backdrop-blur-xl transform-gpu text-left"
              >
                <div className="z-10 text-left">
                  <div className="w-10 h-10 rounded-xl bg-[#00D1FF]/20 backdrop-blur-md flex items-center justify-center mb-3 text-[#00D1FF] group-hover:scale-110 group-hover:bg-[#00D1FF]/30 transition-all duration-300">
                    <Plus className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold font-headline-md tracking-tight mb-1 text-white group-hover:text-[#00D1FF] transition-colors">
                    Araba Ekle
                  </h3>
                  <p className="text-stone-300 text-xs leading-relaxed">
                    Kendi arabanızı fotoğraf, marka ve teknik özellikleriyle kaydedin.
                  </p>
                </div>

                <div className="absolute top-0 right-0 w-32 h-32 bg-[#00D1FF]/10 rounded-full blur-2xl pointer-events-none group-hover:bg-[#00D1FF]/30 transition-all duration-300" />

                <span className="z-10 mt-auto font-semibold text-[11px] text-[#00D1FF] flex items-center gap-1 uppercase tracking-wider group-hover:translate-x-1 transition-transform duration-300">
                  GARAJA EKLE <Plus className="w-3.5 h-3.5" />
                </span>
              </button>

            </section>

            {/* Custom reusable featured cars slider */}
            <FeaturedCars onSelectCar={handleSelectCarDetails} />

            {/* Simulated and customized search history */}
            <RecentSearches searches={historyList} onSelectCar={handleSelectCarDetails} />

          </motion.main>
        )}

        {/* LIVE CAMERA VIEWER PAGE */}
        {currentPage === "camera" && (
          <CameraView 
            onBack={() => setCurrentPage("home")} 
            onAnalysisComplete={handleAnalysisComplete} 
          />
        )}

        {/* PRE-CAPTURED GALLERY SELECTION PAGE */}
        {currentPage === "gallery" && (
          <GalleryView 
            onBack={() => setCurrentPage("home")} 
            onAnalysisComplete={handleAnalysisComplete} 
          />
        )}

        {/* INTERACTIVE CAR SEARCH & CATEGORY SELECTOR PAGE */}
        {currentPage === "search" && (
          <motion.main 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="px-6 mt-8 space-y-8"
          >
            {/* Header section with styling */}
            <section className="text-left">
              <span className="text-[10px] tracking-widest font-black uppercase text-[#00D1FF] block mb-1">
                AKILLI ARAÇ BULUCU
              </span>
              <h2 className="font-headline-lg-mobile text-3xl font-extrabold font-headline-md text-stone-900 dark:text-white leading-tight">
                Kategorileri Keşfet
              </h2>
              <p className="text-xs text-stone-500 dark:text-stone-400 mt-2 max-w-md leading-relaxed">
                Yüzlerce lüks ve spor otomobili, yedek parça ve motor sanatı başyapıtlarını filtreleyerek inceleyin.
              </p>
            </section>

            {/* Smart Search Bar */}
            <section className="relative max-w-xl text-left">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-stone-400">
                <Search className="w-5 h-5" />
              </div>
              <input
                type="text"
                placeholder="Marka, model veya kategori ara... (örn: Tofaş Şahin veya E30)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleGlobalAiSearch(searchQuery);
                  }
                }}
                className="w-full pl-12 pr-12 py-3.5 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-850 focus:border-[#00D1FF] dark:focus:border-[#00D1FF] focus:ring-1 focus:ring-[#00D1FF] outline-none text-xs shadow-sm transition-all placeholder:text-stone-400 dark:placeholder:text-stone-500 text-stone-900 dark:text-stone-100"
              />
              {searchQuery && (
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setGlobalAiSearchResults([]);
                  }}
                  className="absolute inset-y-0 right-4 flex items-center text-stone-400 hover:text-stone-600 dark:hover:text-stone-200 text-xs font-bold font-sans cursor-pointer"
                >
                  Temizle
                </button>
              )}
            </section>

            {/* AI Global Search Real-time Info Badge */}
            {searchQuery.trim().length >= 3 && (
              <div className="flex items-center gap-2 max-w-xl text-left bg-stone-100 dark:bg-stone-900 px-4 py-2.5 rounded-xl border border-stone-150 dark:border-stone-850">
                <span className="flex h-2 w-2 relative">
                  <span className={`animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00D1FF] opacity-75`}></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00D1FF]"></span>
                </span>
                <span className="text-[11px] text-stone-600 dark:text-stone-300">
                  {isSearchingGlobal ? (
                    <><b>"{searchQuery}"</b> dünya otomotiv arşivlerinde yapay zeka ile aranıyor...</>
                  ) : (
                    <><b>"{searchQuery}"</b> araması için akıllı evrensel veritabanı devrede.</>
                  )}
                </span>
              </div>
            )}

            {/* AI Search Custom Error Bar */}
            {globalAiSearchError && (
              <div className="max-w-xl bg-red-500/10 border border-red-500/20 rounded-2xl p-4 text-xs text-red-500 dark:text-red-400 text-left animate-fade-in">
                ⚠️ {globalAiSearchError}
              </div>
            )}

            {/* Premium Category selection grid */}
            <section className="space-y-3 text-left">
              <h3 className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Kategoriler</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: "Tümü", emoji: "⚡", label: "Tüm Araçlar" },
                  { name: "Günlük Kullanım", emoji: "🚗", label: "Günlük Kullanım" },
                  { name: "Süper Spor", emoji: "🏎️", label: "Süper Spor" },
                  { name: "Elektrikli", emoji: "🔋", label: "Elektrikli & Hibrit" },
                  { name: "Performans", emoji: "🏁", label: "Performans" },
                  { name: "Klasik", emoji: "🏆", label: "Klasik & Nostalji" },
                  { name: "Mühendislik & Aksesuar", emoji: "⚙️", label: "Motor & Aksesuar" }
                ].map((cat) => {
                  const isActive = selectedCategory === cat.name;
                  return (
                    <button
                      key={cat.name}
                      onClick={() => {
                        setSelectedCategory(cat.name);
                      }}
                      className={`inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-semibold cursor-pointer transition-all active:scale-[0.97] border ${
                        isActive
                          ? "bg-[#1c1917] dark:bg-[#00D1FF] text-white dark:text-stone-950 border-stone-900 dark:border-[#00D1FF]"
                          : "bg-white dark:bg-stone-900 text-stone-600 dark:text-stone-300 border-stone-150 dark:border-stone-850 hover:bg-stone-50 dark:hover:bg-stone-850"
                      }`}
                    >
                      <span className="text-sm">{cat.emoji}</span>
                      <span>{cat.label}</span>
                    </button>
                  );
                })}
              </div>
            </section>

            {/* Premium Brand & Model Interactive Selectors */}
            <section className="bg-stone-50 dark:bg-stone-900/45 border border-stone-150 dark:border-stone-850 p-5 rounded-2xl max-w-xl text-left space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-black tracking-widest text-[#00D1FF] uppercase">
                  🔍 DETAYLI MARKA VE MODEL FİLTRESİ
                </span>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Brand Selector Dropdown */}
                <div className="space-y-1.5">
                  <label htmlFor="brand-dropdown" className="block text-[10px] font-bold text-stone-400 uppercase tracking-wider">
                    Araç Markası Seç
                  </label>
                  <select
                    id="brand-dropdown"
                    value={selectedBrand}
                    onChange={(e) => {
                      setSelectedBrand(e.target.value);
                      setSelectedModel("Tümü"); // auto reset model when brand changes
                    }}
                    className="w-full bg-white dark:bg-stone-950 border border-stone-200 dark:border-stone-800 rounded-xl px-3 py-3 text-xs font-bold text-stone-800 dark:text-stone-200 focus:border-[#00D1FF] focus:ring-1 focus:ring-[#00D1FF] outline-none transition-all cursor-pointer shadow-sm"
                  >
                    {availableBrands.map((b) => (
                      <option key={b} value={b} className="text-stone-900 dark:text-stone-100 bg-white dark:bg-stone-950">
                        {b === "Tümü" ? "Tüm Markalar 🌟" : b}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Model Selector Dropdown */}
                <div className="space-y-1.5">
                  <label htmlFor="model-dropdown" className="block text-[10px] font-bold text-stone-400 uppercase tracking-wider">
                    Araç Modeli Seç
                  </label>
                  <select
                    id="model-dropdown"
                    value={selectedModel}
                    onChange={(e) => setSelectedModel(e.target.value)}
                    disabled={selectedBrand === "Tümü" && availableModels.length <= 1}
                    className="w-full bg-white dark:bg-stone-950 border border-stone-200 dark:border-stone-800 rounded-xl px-3 py-3 text-xs font-bold text-stone-800 dark:text-stone-200 focus:border-[#00D1FF] focus:ring-1 focus:ring-[#00D1FF] outline-none transition-all cursor-pointer shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {availableModels.map((m) => (
                      <option key={m} value={m} className="text-stone-900 dark:text-stone-100 bg-white dark:bg-stone-950">
                        {m === "Tümü" ? (selectedBrand === "Tümü" ? "Tüm Modeller 🚗" : `Tüm ${selectedBrand} Modelleri 🚗`) : m}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Status Indicator & Fast Clear Option */}
              {(selectedBrand !== "Tümü" || selectedModel !== "Tümü") && (
                <div className="flex items-center justify-between bg-stone-100/60 dark:bg-stone-950/40 p-2.5 rounded-xl border border-stone-150/40 dark:border-stone-850/40 animate-fade-in">
                  <span className="text-[10px] font-semibold text-stone-500 dark:text-stone-400 flex items-center gap-1.5">
                     Aktif Filtre: 
                    <span className="text-stone-800 dark:text-stone-200 font-extrabold uppercase">
                      {selectedBrand !== "Tümü" ? selectedBrand : "Tüm"} {selectedModel !== "Tümü" ? `/ ${selectedModel}` : ""}
                    </span>
                  </span>
                  <button
                    onClick={() => {
                      setSelectedBrand("Tümü");
                      setSelectedModel("Tümü");
                    }}
                    className="text-[10px] font-black text-[#00D1FF] hover:text-[#00c0eb] uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Temizle ×
                  </button>
                </div>
              )}
            </section>

            {/* AI Global Loading indicator */}
            {isSearchingGlobal && (
              <div className="p-10 rounded-3xl bg-white dark:bg-stone-900 border border-stone-100 dark:border-stone-850/60 text-center space-y-4 max-w-md mx-auto animate-pulse shadow-sm">
                <div className="relative w-16 h-16 mx-auto flex items-center justify-center">
                  <div className="absolute inset-0 border-4 border-[#00D1FF]/30 border-t-[#00D1FF] rounded-full animate-spin" />
                  <Search className="w-6 h-6 text-[#00D1FF]" />
                </div>
                <div className="space-y-1.5">
                  <p className="text-xs font-black text-stone-800 dark:text-stone-200">Velocita AI Küresel Veritabanını Örümcekliyor...</p>
                  <p className="text-[10px] text-stone-400 max-w-xs mx-auto leading-relaxed">
                    Yapay zeka motoru, "{searchQuery}" için teknik özellikleri, nostaljik verileri ve Unsplash yüksek çözünürlüklü görsellerini çözümlüyor.
                  </p>
                </div>
              </div>
            )}

            {/* Results Section */}
            <section className="space-y-4 text-left">
              <div className="flex justify-between items-center border-b border-stone-100 dark:border-stone-850 pb-2">
                <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">
                  Mevcut Model & Aksesuarlar ({filteredCars.length})
                </span>
                {selectedCategory !== "Tümü" || searchQuery !== "" || globalAiSearchResults.length > 0 || selectedBrand !== "Tümü" || selectedModel !== "Tümü" ? (
                  <button
                    onClick={() => {
                      setSelectedCategory("Tümü");
                      setSearchQuery("");
                      setGlobalAiSearchResults([]);
                      setSelectedBrand("Tümü");
                      setSelectedModel("Tümü");
                    }}
                    className="text-xs font-bold text-[#00D1FF] hover:underline"
                  >
                    Sıfırla
                  </button>
                ) : null}
              </div>

              {filteredCars.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {filteredCars.map((car, idx) => (
                    <motion.div
                      key={car.id}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: idx * 0.05 }}
                      onClick={() => handleSelectCarDetails(car)}
                      className="group bg-white/80 dark:bg-stone-900/80 backdrop-blur-xl border border-stone-200/80 dark:border-stone-800/80 hover:border-[#00D1FF]/40 dark:hover:border-[#00D1FF]/40 rounded-2xl overflow-hidden shadow-lg shadow-stone-950/5 dark:shadow-black/20 hover:shadow-2xl hover:shadow-[#00D1FF]/15 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 ease-out cursor-pointer flex flex-col h-full relative transform-gpu"
                    >
                      {car.id.startsWith("global-ai") && (
                        <div className="absolute top-2.5 right-2.5 z-10 bg-[#00D1FF] text-stone-950 text-[8px] font-black px-2 py-0.5 rounded-full shadow-md tracking-widest uppercase">
                          🌍 AI GLOBAL
                        </div>
                      )}
                      <div className="relative aspect-[16/10] bg-stone-100 dark:bg-stone-950 overflow-hidden">
                        <img
                          src={car.image}
                          alt={`${car.brand} ${car.model}`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute top-2.5 left-2.5 bg-stone-950/80 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[10px] font-bold text-white tracking-wide border border-white/10">
                          {car.category}
                        </div>
                      </div>

                      <div className="p-4 flex flex-col justify-between flex-1">
                        <div>
                          <span className="text-[9px] font-black text-stone-400 tracking-widest uppercase block">{car.brand}</span>
                          <h4 className="text-sm font-bold text-stone-900 dark:text-white mt-0.5 leading-tight group-hover:text-[#00D1FF] transition-colors">{car.model}</h4>
                          <p className="text-stone-400 dark:text-stone-400 text-xs mt-1.5 line-clamp-2 leading-relaxed h-8 text-left">
                            {car.description}
                          </p>
                        </div>

                        <div className="mt-4 pt-3.5 border-t border-stone-100 dark:border-stone-800 flex justify-between items-center">
                          <div className="flex gap-4">
                            <div>
                              <span className="text-[8px] font-bold text-stone-400 block uppercase">Güç</span>
                              <span className="text-[11px] font-bold text-stone-700 dark:text-stone-200 mt-0.5 block">{car.specs.power}</span>
                            </div>
                            <div>
                              <span className="text-[8px] font-bold text-stone-400 block uppercase">Üretim</span>
                              <span className="text-[11px] font-bold text-stone-700 dark:text-stone-200 mt-0.5 block">{car.year}</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <span className="text-[8px] font-bold text-[#00D1FF] block uppercase">Değer</span>
                            <span className="text-xs font-black text-stone-900 dark:text-white mt-0.5 block">{car.price}</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="bg-white dark:bg-stone-900 border border-stone-150/60 dark:border-stone-850/60 rounded-3xl py-12 px-6 text-center shadow-lg max-w-md mx-auto space-y-4">
                  <div className="w-16 h-16 bg-stone-100 dark:bg-stone-800 rounded-2xl flex items-center justify-center mx-auto text-2xl">
                    🕵️‍♂️
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-black text-stone-900 dark:text-white">Aradığınız araç bulunamadı.</p>
                    <p className="text-xs text-stone-500 leading-relaxed max-w-xs mx-auto text-center">
                      Küresel veritabanında bu isimle eşleşen bir model kaydı bulunamadı. Lütfen kelimeleri kontrol edip tekrar deneyiniz.
                    </p>
                  </div>
                  <div className="pt-2">
                    <button
                      onClick={() => {
                        setSelectedCategory("Tümü");
                        setSearchQuery("");
                        setGlobalAiSearchResults([]);
                        setSelectedBrand("Tümü");
                        setSelectedModel("Tümü");
                      }}
                      className="text-xs font-extrabold text-[#00D1FF] hover:underline uppercase tracking-wider cursor-pointer"
                    >
                      Aramayı Sıfırla
                    </button>
                  </div>
                </div>
              )}
            </section>
          </motion.main>
        )}

        {/* COMPREHENSIVE CAR TECHNICAL DETAILS PROFILE */}
        {currentPage === "details" && selectedCar && (
          <CarDetails 
            car={selectedCar} 
            onBack={() => setCurrentPage("home")} 
            onUpdateCarImage={handleUpdateCarImage}
            allCars={allCars}
          />
        )}

        {/* MINIMALIST USER PROFILE / SETTINGS PAGE */}
        {currentPage === "profile" && (
          <motion.main 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="px-6 mt-8 max-w-2xl mx-auto space-y-6"
          >
            <section className="bg-white/80 dark:bg-stone-900/80 backdrop-blur-xl border border-stone-200/80 dark:border-stone-800/80 p-6 rounded-3xl shadow-xl shadow-stone-950/5 dark:shadow-black/20 text-center">
              <div className="w-20 h-20 bg-[#00D1FF]/10 rounded-full flex items-center justify-center mx-auto text-[#00D1FF] mb-4 border border-[#00D1FF]/20 shadow-md shadow-[#00D1FF]/10">
                <User className="w-10 h-10" />
              </div>
              
              <h3 className="text-xl font-bold text-stone-900 dark:text-white font-headline-md leading-none">
                Sürücü Profili
              </h3>
              <p className="text-xs text-stone-400 dark:text-stone-500 mt-1.5">
                Velocita Akıllı Otomobil Analizcisi
              </p>
            </section>

            {/* My Garage / Custom Cars section */}
            <section className="bg-white/80 dark:bg-stone-900/80 backdrop-blur-xl border border-stone-200/80 dark:border-stone-800/80 p-6 rounded-3xl shadow-xl shadow-stone-950/5 dark:shadow-black/20 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-stone-900 dark:text-stone-100 text-sm">Özel Garajım ({userAddedCars.length})</h4>
                  <p className="text-xs text-stone-400 dark:text-stone-500 mt-0.5">Sisteme manuel veya fotoğrafla eklediğiniz arabalarınız</p>
                </div>
                <button
                  onClick={() => setIsAddCarModalOpen(true)}
                  className="flex items-center gap-1.5 bg-[#00D1FF] hover:bg-[#00b2dc] text-stone-950 px-3.5 py-2 rounded-xl text-xs font-bold transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-md shadow-[#00D1FF]/20"
                >
                  <Plus className="w-4 h-4" />
                  <span>Araba Ekle</span>
                </button>
              </div>

              {userAddedCars.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {userAddedCars.map(car => (
                    <div 
                      key={car.id}
                      onClick={() => handleSelectCarDetails(car)}
                      className="group flex items-center gap-3 p-3 bg-stone-50/80 dark:bg-stone-950/80 rounded-2xl border border-stone-200/60 dark:border-stone-800/60 hover:border-[#00D1FF]/50 dark:hover:border-[#00D1FF]/50 hover:scale-[1.03] hover:shadow-xl hover:shadow-[#00D1FF]/10 cursor-pointer transition-all duration-300 ease-out transform-gpu"
                    >
                      <img 
                        src={car.image} 
                        alt={`${car.brand} ${car.model}`}
                        className="w-16 h-12 rounded-xl object-cover shrink-0 group-hover:scale-105 transition-transform duration-300" 
                      />
                      <div className="min-w-0 flex-1">
                        <h5 className="font-bold text-xs text-stone-900 dark:text-white truncate group-hover:text-[#00D1FF] transition-colors">
                          {car.brand} {car.model}
                        </h5>
                        <p className="text-[10px] text-stone-400 mt-0.5">{car.year} • {car.category}</p>
                        <p className="text-[10px] font-bold text-[#00D1FF] mt-0.5">{car.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-4 bg-stone-50/80 dark:bg-stone-950/80 rounded-2xl text-center text-xs text-stone-400 border border-stone-200/40 dark:border-stone-800/40">
                  Henüz garajınıza özel bir araç eklemediniz. "Araba Ekle" butonuna basarak ilk arabanızı kaydedebilirsiniz.
                </div>
              )}
            </section>

            {/* Profile configuration list options */}
            <section className="bg-white/80 dark:bg-stone-900/80 backdrop-blur-xl border border-stone-200/80 dark:border-stone-800/80 p-6 rounded-3xl shadow-xl shadow-stone-950/5 dark:shadow-black/20 space-y-6">
              
              {/* Dark Mode Switcher option */}
              <div className="flex items-center justify-between border-b border-stone-100 dark:border-stone-800 pb-4">
                <div>
                  <h4 className="font-semibold text-stone-900 dark:text-stone-100 text-sm">Karanlık Tema</h4>
                  <p className="text-xs text-stone-400 dark:text-stone-500 mt-0.5">Uygulama renk şemasını gece sürüş moduna çevirin</p>
                </div>
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="w-12 h-6 rounded-full bg-stone-200 dark:bg-stone-700 relative p-1 transition-colors float-right cursor-pointer"
                >
                  <div className={`w-4 h-4 rounded-full bg-[#00D1FF] shadow-sm transform transition-transform duration-200 ${darkMode ? 'translate-x-[24px]' : 'translate-x-0'}`} />
                </button>
              </div>

              {/* Statistics counter block */}
              <div className="grid grid-cols-2 gap-3 border-b border-stone-100 dark:border-stone-800 pb-4">
                <div className="p-3.5 bg-stone-50/80 dark:bg-stone-950/80 rounded-2xl text-center border border-stone-200/40 dark:border-stone-800/40">
                  <span className="text-[10px] font-bold text-stone-400 tracking-wider">TARANAN ARABALAR</span>
                  <p className="text-xl font-bold text-[#00D1FF] mt-0.5">{historyList.length}</p>
                </div>
                <div className="p-3.5 bg-stone-50/80 dark:bg-stone-950/80 rounded-2xl text-center border border-stone-200/40 dark:border-stone-800/40">
                  <span className="text-[10px] font-bold text-stone-400 tracking-wider">GARAJDAN ARAÇLAR</span>
                  <p className="text-xl font-bold text-[#00D1FF] mt-0.5">{userAddedCars.length}</p>
                </div>
              </div>

              {/* Clear History Button option */}
              <div className="flex items-center justify-between pt-2">
                <div>
                  <h4 className="font-semibold text-stone-900 dark:text-stone-100 text-sm">Geçmişi Temizle</h4>
                  <p className="text-xs text-stone-400 dark:text-stone-500 mt-0.5">Tüm yerel arama ve tarama geçmişini silin</p>
                </div>
                <button 
                  onClick={clearHistory}
                  className="flex items-center gap-2 text-red-600 hover:text-red-700 bg-red-50 dark:bg-red-950/20 hover:scale-105 active:scale-95 transition-all duration-200 text-xs font-bold py-2.5 px-4 rounded-xl cursor-pointer"
                >
                  <Trash2 className="w-4 h-4" /> Temizle
                </button>
              </div>

            </section>
          </motion.main>
        )}

        {/* Global Footer Contact Section */}
        {currentPage !== "camera" && <ContactSection />}

      </div>

      {/* Persistent global responsive Bottom Navigation Bar */}
      {currentPage !== "camera" && (
        <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 py-3 pb-safe bg-white/80 dark:bg-[#0c1018]/85 backdrop-blur-2xl border-t border-stone-200/80 dark:border-stone-800/80 shadow-[0_-4px_24px_rgba(0,0,0,0.06)] transition-all duration-300">
          <button
            onClick={() => { setSelectedCar(null); setCurrentPage("home"); }}
            className={`flex flex-col items-center justify-center space-y-1 py-1 px-3.5 hover:scale-110 active:scale-90 transition-all duration-200 cursor-pointer ${currentPage === "home" ? 'text-[#00D1FF]' : 'text-stone-400 dark:text-stone-500 hover:text-stone-900 dark:hover:text-white'}`}
          >
            <Home className="w-5 h-5" />
            <span className="text-[10px] font-bold uppercase tracking-wider">Anasayfa</span>
          </button>

          <button
            onClick={() => setCurrentPage("camera")}
            className="flex flex-col items-center justify-center space-y-1 py-1 px-3.5 hover:scale-110 active:scale-90 transition-all duration-200 cursor-pointer text-stone-400 dark:text-stone-500 hover:text-[#00D1FF]"
          >
            <Camera className="w-5 h-5" />
            <span className="text-[10px] font-bold uppercase tracking-wider">Tara</span>
          </button>

          <button
            onClick={() => setCurrentPage("search")}
            className={`flex flex-col items-center justify-center space-y-1 py-1 px-3.5 hover:scale-110 active:scale-90 transition-all duration-200 cursor-pointer ${currentPage === "search" ? 'text-[#00D1FF]' : 'text-stone-400 dark:text-stone-500 hover:text-stone-900 dark:hover:text-white'}`}
          >
            <Search className="w-5 h-5" />
            <span className="text-[10px] font-bold uppercase tracking-wider">Ara</span>
          </button>

          <button
            onClick={() => setCurrentPage("profile")}
            className={`flex flex-col items-center justify-center space-y-1 py-1 px-3.5 hover:scale-110 active:scale-90 transition-all duration-200 cursor-pointer ${currentPage === "profile" ? 'text-[#00D1FF]' : 'text-stone-400 dark:text-stone-500 hover:text-stone-900 dark:hover:text-white'}`}
          >
            <User className="w-5 h-5" />
            <span className="text-[10px] font-bold uppercase tracking-wider">Profil</span>
          </button>
        </nav>
      )}

      {/* Notifications Drawer Popover overlay */}
      {showNotifications && (
        <div className="fixed inset-x-0 top-16 bg-white dark:bg-stone-900 border-b border-stone-100 dark:border-stone-850 shadow-lg p-5 z-[80] animate-slide-down max-w-md mx-auto rounded-b-2xl">
          <div className="flex justify-between items-center mb-3">
            <h4 className="font-bold text-sm">Bildirimler</h4>
            <button onClick={() => setShowNotifications(false)} className="text-xs text-[#00D1FF] hover:underline font-bold">Kapat</button>
          </div>
          <div className="space-y-3.5 mt-2">
            <div className="flex gap-3 text-xs leading-relaxed">
              <div className="w-2.5 h-2.5 rounded-full bg-[#00D1FF] shrink-0 mt-1" />
              <div>
                <p className="font-bold text-stone-900 dark:text-stone-100">Yeni Araç Keşfedilmeyi Bekliyor!</p>
                <p className="text-stone-400 mt-0.5">Bugatti Mistral V16 analiz kütüphanemize eklendi.</p>
              </div>
            </div>
            <div className="flex gap-3 text-xs leading-relaxed opacity-60">
              <div className="w-2.5 h-2.5 rounded-full bg-stone-300 shrink-0 mt-1" />
              <div>
                <p className="font-bold text-stone-900 dark:text-stone-100">Sistem Güncellemesi Tamamlandı</p>
                <p className="text-stone-400 mt-0.5">Yapay zeka tarayıcı kiti güncelleştirmeleri yüklendi.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Side Slide Menu Drawer popover overlay */}
      {showMenu && (
        <div className="fixed inset-0 z-[120] animate-fade-in flex">
          {/* Backdrop screen lock */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowMenu(false)} />
          
          <div className="relative w-72 h-full bg-white dark:bg-stone-900 flex flex-col justify-between p-6 shadow-2xl animate-slide-right text-stone-900 dark:text-white">
            <div className="space-y-8">
              <div>
                <h3 className="font-headline-md text-2xl font-black tracking-widest text-stone-950 dark:text-white font-serif">VELOCITA</h3>
                <span className="text-[9px] uppercase tracking-[0.2em] font-extrabold text-stone-400">AUTOMOTIVE SCAN LAB</span>
              </div>

              <div className="space-y-4">
                <button onClick={() => { setCurrentPage("home"); setShowMenu(false); }} className="w-full text-left font-bold text-sm tracking-wide py-1 hover:text-[#00D1FF] flex items-center gap-3">
                  <Home className="w-4 h-4" /> Anasayfa Keşfi
                </button>
                <button onClick={() => { setIsAddCarModalOpen(true); setShowMenu(false); }} className="w-full text-left font-bold text-sm tracking-wide py-1 text-[#00D1FF] hover:underline flex items-center gap-3 font-sans">
                  <Plus className="w-4 h-4" /> Garaja Yeni Araba Ekle
                </button>
                <button onClick={() => { setCurrentPage("camera"); setShowMenu(false); }} className="w-full text-left font-bold text-sm tracking-wide py-1 hover:text-[#00D1FF] flex items-center gap-3">
                  <Camera className="w-4 h-4" /> Hızlı Canlı Tarayıcı
                </button>
                <button onClick={() => { setCurrentPage("search"); setShowMenu(false); }} className="w-full text-left font-bold text-sm tracking-wide py-1 hover:text-[#00D1FF] flex items-center gap-3">
                  <Search className="w-4 h-4" /> Gelişmiş Filtre & Arama
                </button>
                <button onClick={() => { setCurrentPage("profile"); setShowMenu(false); }} className="w-full text-left font-bold text-sm tracking-wide py-1 hover:text-[#00D1FF] flex items-center gap-3">
                  <User className="w-4 h-4" /> Kullanıcı Detayları & Garajım
                </button>
              </div>
            </div>

            <div className="space-y-4 pt-6 border-t border-stone-100 dark:border-stone-850">
              <div className="flex items-center gap-3 text-stone-400 dark:text-stone-500 text-xs">
                <Settings className="w-4 h-4" /> 
                <span>Velocita V2.5.0 Sürümü</span>
              </div>
              <button 
                onClick={() => { setShowMenu(false); alert("Velocita uygulamasını keyifle keşfedin!"); }}
                className="w-full bg-[#00D1FF] text-stone-900 py-3.5 rounded-xl font-bold text-xs tracking-wider uppercase transition-colors hover:bg-[#00b2dc] flex items-center justify-center gap-2 cursor-pointer"
              >
                Görüş Bildir
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Custom Car Modal Form */}
      <AddCarModal 
        isOpen={isAddCarModalOpen}
        onClose={() => setIsAddCarModalOpen(false)}
        onAddCar={handleAddCustomCar}
      />

    </div>
  );
}
