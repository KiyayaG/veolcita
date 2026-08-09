import { useState } from "react";
import { Car } from "../types";
import { Plus, X, Upload, Sparkles, Check, Image as ImageIcon } from "lucide-react";

interface AddCarModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddCar: (newCar: Car) => void;
}

export default function AddCarModal({ isOpen, onClose, onAddCar }: AddCarModalProps) {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState<number>(new Date().getFullYear());
  const [price, setPrice] = useState("₺2,500,000");
  const [category, setCategory] = useState("Spor Coupe");
  const [imageUrl, setImageUrl] = useState("");
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  
  // Specs
  const [power, setPower] = useState("450 HP");
  const [acceleration, setAcceleration] = useState("3.8 sn");
  const [topSpeed, setTopSpeed] = useState("290 km/s");
  const [engine, setEngine] = useState("3.0L Twin-Turbo Inline-6");
  const [description, setDescription] = useState("");

  const [isAiGenerating, setIsAiGenerating] = useState(false);
  const [isValidating, setIsValidating] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  if (!isOpen) return null;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setImagePreview(result);
        setImageUrl(result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAiAutoFill = async () => {
    if (!brand || !model) {
      alert("Lütfen önce Marka ve Model bilgilerini girin (ör: Porsche 911 GT3 RS)");
      return;
    }
    setIsAiGenerating(true);
    try {
      const res = await fetch("/api/global-search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: `${brand} ${model} teknik ozellikleri` })
      });
      const data = await res.json();
      if (data.success && data.data && data.data.length > 0) {
        const found = data.data[0];
        setBrand(found.brand || brand);
        setModel(found.model || model);
        setYear(found.year || year);
        setPrice(found.price || price);
        setCategory(found.category || category);
        if (found.specs) {
          setPower(found.specs.power || power);
          setAcceleration(found.specs.acceleration || acceleration);
          setTopSpeed(found.specs.topSpeed || topSpeed);
          setEngine(found.specs.engine || engine);
        }
        if (found.description) setDescription(found.description);
        if (found.image && !imagePreview) setImageUrl(found.image);
      }
    } catch {
      // Fallback silent
    } finally {
      setIsAiGenerating(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    if (!brand.trim() || !model.trim()) {
      alert("Lütfen araç markasını ve modelini doldurun.");
      return;
    }

    const defaultImages = [
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=800"
    ];

    const finalImage = imagePreview || imageUrl.trim() || defaultImages[Math.floor(Math.random() * defaultImages.length)];

    // Validate image safety and car content if user supplied custom image
    if (imagePreview || imageUrl.trim()) {
      setIsValidating(true);
      try {
        const vRes = await fetch("/api/validate-image", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ image: finalImage })
        });
        const vData = await vRes.json();
        if (!vRes.ok || !vData.success) {
          setErrorMsg(vData.error || "Yüklediğiniz görsel araç standartlarımıza uygun bulunmadı. Lütfen başka bir araç fotoğrafı yükleyin.");
          setImagePreview(null);
          setImageUrl("");
          setIsValidating(false);
          return;
        }
      } catch {
        // Network fallback
      } finally {
        setIsValidating(false);
      }
    }

    const newCar: Car = {
      id: `custom-car-${Date.now()}`,
      brand: brand.trim(),
      model: model.trim(),
      year: Number(year) || 2024,
      price: price.trim() || "₺1,000,000",
      category: category || "Özel Araç",
      image: finalImage,
      gallery: [finalImage],
      features: ["Özel Koleksiyon", "Velocita Onaylı", "Yapay Zeka Analizli"],
      deliveryTime: "Hemen Teslim (Garajınızda)",
      specs: {
        power: power.trim() || "300 HP",
        acceleration: acceleration.trim() || "5.0 sn",
        topSpeed: topSpeed.trim() || "250 km/s",
        engine: engine.trim() || "Standart Motor"
      },
      description: description.trim() || `${brand} ${model} özel garage koleksiyonunuza başarıyla eklendi.`
    };

    onAddCar(newCar);
    setSuccessMsg("Araç garajınıza başarıyla eklendi!");
    setTimeout(() => {
      setSuccessMsg("");
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md" onClick={onClose} />

      <div className="relative w-full max-w-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col text-stone-900 dark:text-white">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-100 dark:border-stone-800">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#00D1FF]/10 flex items-center justify-center text-[#00D1FF]">
              <Plus className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-base leading-tight">Garaja Yeni Araç Ekle</h3>
              <p className="text-xs text-stone-400">Kendi özel arabanızı sisteme kaydedin</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-full text-stone-400 hover:text-stone-900 dark:hover:text-white hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-6">

          {successMsg && (
            <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 p-3.5 rounded-2xl text-xs font-bold flex items-center gap-2">
              <Check className="w-4 h-4" />
              {successMsg}
            </div>
          )}

          {errorMsg && (
            <div className="bg-rose-500/10 border border-rose-500/30 text-rose-600 dark:text-rose-400 p-3.5 rounded-2xl text-xs font-bold flex items-center gap-2">
              <X className="w-4 h-4 shrink-0 text-rose-500" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* AI Auto Fill Assistant Bar */}
          <div className="bg-gradient-to-r from-cyan-500/10 via-indigo-500/10 to-purple-500/10 border border-cyan-500/20 p-4 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="text-xs">
              <p className="font-bold text-stone-900 dark:text-stone-100 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#00D1FF]" />
                Akıllı Yapay Zeka Otomatik Doldurma
              </p>
              <p className="text-stone-500 dark:text-stone-400 text-[11px] mt-0.5">
                Marka ve model girip bu butona basarak teknik özellikleri otomatik tamamlayabilirsiniz.
              </p>
            </div>
            <button
              type="button"
              onClick={handleAiAutoFill}
              disabled={isAiGenerating}
              className="bg-[#00D1FF] text-stone-950 px-4 py-2 rounded-xl text-xs font-bold hover:bg-[#00b2dc] active:scale-95 transition-all shrink-0 flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
            >
              {isAiGenerating ? "Bilgiler Getiriliyor..." : "Özellikleri Getir"}
            </button>
          </div>

          {/* Image Upload or URL section */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-stone-400 mb-2">
              Araç Fotoğrafı
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
              {/* Preview Box */}
              <div className="relative h-40 rounded-2xl border-2 border-dashed border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-950 flex flex-col items-center justify-center overflow-hidden">
                {imagePreview || imageUrl ? (
                  <img 
                    src={imagePreview || imageUrl} 
                    alt="Car preview" 
                    className="w-full h-full object-cover"
                    onError={() => {
                      setImagePreview(null);
                      alert("Görsel yüklenemedi, lütfen geçerli bir URL veya dosya seçin.");
                    }}
                  />
                ) : (
                  <div className="text-center p-4">
                    <ImageIcon className="w-8 h-8 text-stone-400 mx-auto mb-1 opacity-60" />
                    <p className="text-xs text-stone-400">Görsel Önizlemesi</p>
                  </div>
                )}
              </div>

              {/* Upload Controls */}
              <div className="space-y-3">
                <label className="flex items-center justify-center gap-2 bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-750 text-stone-900 dark:text-stone-100 text-xs font-bold py-3 px-4 rounded-xl cursor-pointer transition-colors border border-stone-200 dark:border-stone-700">
                  <Upload className="w-4 h-4 text-[#00D1FF]" />
                  <span>Cihazdan Fotoğraf Yükle</span>
                  <input type="file" accept="image/*" onChange={handleFileUpload} className="hidden" />
                </label>

                <div className="relative">
                  <input
                    type="url"
                    placeholder="veya Fotoğraf URL Yapıştır (https://...)"
                    value={imageUrl}
                    onChange={(e) => {
                      setImageUrl(e.target.value);
                      setImagePreview(null);
                    }}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 focus:border-[#00D1FF] outline-none"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Basic Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-stone-500 dark:text-stone-400 mb-1">Marka *</label>
              <input
                type="text"
                required
                placeholder="Örn: BMW, Mercedes, Tofaş"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 focus:border-[#00D1FF] outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-stone-500 dark:text-stone-400 mb-1">Model *</label>
              <input
                type="text"
                required
                placeholder="Örn: M3 Competition, Şahin S"
                value={model}
                onChange={(e) => setModel(e.target.value)}
                className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 focus:border-[#00D1FF] outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-stone-500 dark:text-stone-400 mb-1">Model Yılı</label>
              <input
                type="number"
                value={year}
                onChange={(e) => setYear(Number(e.target.value))}
                className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 focus:border-[#00D1FF] outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-stone-500 dark:text-stone-400 mb-1">Tahmini Fiyat</label>
              <input
                type="text"
                placeholder="Örn: ₺3,400,000"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 focus:border-[#00D1FF] outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-stone-500 dark:text-stone-400 mb-1">Kategori</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 focus:border-[#00D1FF] outline-none text-stone-900 dark:text-white"
              >
                <option value="Spor Coupe">Spor Coupe</option>
                <option value="Süper Spor">Süper Spor</option>
                <option value="Elektrikli">Elektrikli / Hybrid</option>
                <option value="Performans">Performans Sedan/Wagon</option>
                <option value="Klasik">Klasik & Nostalji</option>
                <option value="SUV & Arazi">SUV & Arazi</option>
                <option value="Özel Garaj">Özel Garaj</option>
              </select>
            </div>
          </div>

          {/* Technical Specs */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-stone-400 mb-2">
              Teknik Özellikler
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div>
                <label className="block text-[11px] text-stone-400 mb-1">Motor Gücü</label>
                <input
                  type="text"
                  placeholder="510 HP"
                  value={power}
                  onChange={(e) => setPower(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 focus:border-[#00D1FF] outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] text-stone-400 mb-1">0-100 km/s</label>
                <input
                  type="text"
                  placeholder="3.9 sn"
                  value={acceleration}
                  onChange={(e) => setAcceleration(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 focus:border-[#00D1FF] outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] text-stone-400 mb-1">Azami Hız</label>
                <input
                  type="text"
                  placeholder="290 km/s"
                  value={topSpeed}
                  onChange={(e) => setTopSpeed(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 focus:border-[#00D1FF] outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] text-stone-400 mb-1">Motor Tipi</label>
                <input
                  type="text"
                  placeholder="3.0L Bi-Turbo"
                  value={engine}
                  onChange={(e) => setEngine(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 focus:border-[#00D1FF] outline-none"
                />
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-xs font-bold text-stone-500 dark:text-stone-400 mb-1">Açıklama & Detaylar</label>
            <textarea
              rows={3}
              placeholder="Araç hakkında özel notlar, modifikasyonlar veya hikayesini yazın..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-3 text-xs rounded-xl bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 focus:border-[#00D1FF] outline-none resize-none"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl text-xs font-bold text-stone-500 hover:text-stone-900 dark:hover:text-white transition-colors"
            >
              İptal
            </button>
            <button
              type="submit"
              disabled={isValidating}
              className="bg-[#00D1FF] hover:bg-[#00b2dc] disabled:opacity-50 text-stone-950 px-6 py-2.5 rounded-xl text-xs font-bold tracking-wider uppercase active:scale-95 transition-all shadow-lg shadow-[#00D1FF]/20 cursor-pointer flex items-center gap-2"
            >
              {isValidating ? (
                <>
                  <Sparkles className="w-4 h-4 animate-spin text-stone-950" />
                  <span>Kontrol Ediliyor...</span>
                </>
              ) : (
                <span>Arabayı Kaydet</span>
              )}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
