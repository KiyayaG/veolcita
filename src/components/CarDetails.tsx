/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Car, resolveCarImage } from "../types";
import { ArrowLeft, Heart, CheckCircle, Flame, Timer, Gauge, Compass, Camera, Upload, X, RotateCcw, GitCompare, Search } from "lucide-react";
import { featuredVehicles } from "../carData";

interface CarDetailsProps {
  car: Car;
  onBack: () => void;
  onUpdateCarImage?: (carId: string, newImage: string, optionalGallery?: string[]) => void;
  allCars?: Car[];
}

export default function CarDetails({ car, onBack, onUpdateCarImage, allCars }: CarDetailsProps) {
  const [favorite, setFavorite] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string>(resolveCarImage(car.image));
  
  // Image editor modal states
  const [showImageModal, setShowImageModal] = useState<boolean>(false);
  const [customUrl, setCustomUrl] = useState<string>("");
  const [uploadError, setUploadError] = useState<string>("");

  // Comparison module states
  const [showCompareModal, setShowCompareModal] = useState<boolean>(false);
  const [selectedCompareCar, setSelectedCompareCar] = useState<Car | null>(null);
  const [compareSearchQuery, setCompareSearchQuery] = useState<string>("");

  // Compare helpers & pool filtering
  const carPool = allCars || featuredVehicles;
  const otherCars = carPool.filter(c => c.id !== car.id);
  const filteredComparePool = otherCars.filter(c => 
    c.brand.toLowerCase().includes(compareSearchQuery.toLowerCase()) ||
    c.model.toLowerCase().includes(compareSearchQuery.toLowerCase())
  );

  // Helper to parse power number
  const parsePower = (powerStr: string) => {
    const val = parseInt(powerStr.match(/\d+/)?.[0] || "0", 10);
    return val;
  };

  // Helper to parse acceleration seconds
  const parseAcceleration = (accelStr: string) => {
    const val = parseFloat(accelStr.replace(",", ".").match(/[\d.]+/)?.[0] || "99");
    return val;
  };

  // Helper to parse top speed number
  const parseTopSpeed = (speedStr: string) => {
    const val = parseInt(speedStr.match(/\d+/)?.[0] || "0", 10);
    return val;
  };

  // Sync if car prop changes
  React.useEffect(() => {
    setSelectedImage(resolveCarImage(car.image));
  }, [car.image, car.id]);

  // Handle local file uploads with FileReader conversion to base64
  const handleImageFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUploadError("");
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 8 * 1024 * 1024) { // 8MB Max
      setUploadError("Görsel boyutu çok büyük (En fazla 8MB yükleyebilirsiniz).");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result as string;
      if (base64String) {
        setSelectedImage(base64String);
        if (onUpdateCarImage) {
          onUpdateCarImage(car.id, base64String);
        }
        setShowImageModal(false);
      }
    };
    reader.onerror = () => {
      setUploadError("Dosya yüklenirken bir hata oluştu.");
    };
    reader.readAsDataURL(file);
  };

  const handleUrlSubmit = () => {
    setUploadError("");
    if (!customUrl || !customUrl.trim().startsWith("http")) {
      setUploadError("Lütfen geçerli bir resim adresi (URL) girin (http:// veya https:// ile başlamalıdır).");
      return;
    }
    const url = customUrl.trim();
    setSelectedImage(url);
    if (onUpdateCarImage) {
      onUpdateCarImage(car.id, url);
    }
    setCustomUrl("");
    setShowImageModal(false);
  };

  const handleResetToDefault = () => {
    setUploadError("");
    if (onUpdateCarImage) {
      onUpdateCarImage(car.id, ""); // Reset to fallback
    }
    setShowImageModal(false);
  };

  return (
    <div className="min-h-screen bg-[#f7f9fb] dark:bg-stone-950 pb-12 text-stone-900 dark:text-stone-100 relative">
      
      {/* Back button & top status bar layout */}
      <div className="sticky top-0 bg-[#f7f9fb]/90 dark:bg-stone-950/80 backdrop-blur-md z-40 border-b border-stone-100 dark:border-stone-900 shadow-sm">
        <div className="flex justify-between items-center px-6 h-16 max-w-4xl mx-auto">
          <button 
            onClick={onBack}
            className="flex items-center justify-center p-2.5 rounded-full hover:bg-stone-100 dark:hover:bg-stone-900 text-stone-700 dark:text-stone-300 active:scale-95 transition-all cursor-pointer"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          
          <span className="font-headline-md tracking-wider font-extrabold text-stone-900 dark:text-white uppercase">
            {car.brand} {car.model}
          </span>

          <button 
            onClick={() => setFavorite(!favorite)}
            className="flex items-center justify-center p-2.5 rounded-full hover:bg-stone-100 dark:hover:bg-stone-900 text-stone-700 dark:text-stone-300 active:scale-95 transition-all cursor-pointer"
          >
            <Heart className={`w-5 h-5 transition-colors duration-300 ${favorite ? 'fill-red-500 text-red-500' : ''}`} />
          </button>
        </div>
      </div>

      {/* Hero Image slider showcase section */}
      <section className="relative w-full h-[320px] md:h-[440px] bg-stone-950 overflow-hidden flex items-center justify-center">
        <img
          src={resolveCarImage(selectedImage)}
          alt={car.model}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover select-none"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-[#f7f9fb] dark:from-stone-950 via-transparent to-transparent pointer-events-none z-10" />
      </section>

      {/* Content wrapper */}
      <main className="max-w-4xl mx-auto px-6 -mt-10 relative z-10 space-y-10">
        
        {/* Title specs overview */}
        <div className="bg-white dark:bg-stone-900 rounded-3xl p-6 border border-stone-100 dark:border-stone-800 shadow-sm flex flex-col md:flex-row justify-between gap-6 md:items-center">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#00D1FF] block mb-1">
              {car.category}
            </span>
            <h1 className="font-headline-lg-mobile text-3xl font-extrabold font-headline-md text-stone-900 dark:text-white">
              {car.brand} {car.model}
            </h1>
            <p className="text-sm text-stone-500 dark:text-stone-400 mt-1 font-medium">
              Model Serisi Tahmini Üretim Yılı: {car.year}
            </p>
          </div>
          
          <div className="flex flex-col md:items-end gap-3.5 border-t md:border-t-0 md:border-l border-stone-100 dark:border-stone-800 pt-4 md:pt-0 md:pl-6">
            <div className="md:text-right leading-none">
              <span className="text-3xl font-black font-headline-md text-stone-950 dark:text-white block">
                {car.price}
              </span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400 block mt-2">
                Başlangıç Fiyatı (Hülasa)
              </span>
            </div>
            
            <button
              onClick={() => {
                setCompareSearchQuery("");
                setSelectedCompareCar(null);
                setShowCompareModal(true);
              }}
              className="flex items-center gap-1.5 px-4 py-2.5 bg-stone-900 dark:bg-white text-white dark:text-stone-950 hover:bg-stone-850 dark:hover:bg-stone-100 text-xs font-black rounded-xl tracking-wider uppercase transition-all duration-200 cursor-pointer w-full md:w-auto text-center justify-center active:scale-97"
            >
              <GitCompare className="w-3.5 h-3.5 text-[#00D1FF]" />
              <span>Karşılaştır (Compare)</span>
            </button>
          </div>
        </div>

        {/* Bento Grid layout for specs */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          
          {/* Motor / Power card */}
          <div className="bg-white dark:bg-stone-900 p-5 rounded-2xl border border-stone-150/40 dark:border-stone-850 shadow-sm flex flex-col justify-between h-32 group hover:scale-[1.02] transition-transform cursor-default">
            <Flame className="w-5 h-5 text-red-500" />
            <div>
              <p className="text-[10px] text-stone-400 dark:text-stone-500 uppercase font-bold tracking-wider">MOTOR GÜCÜ</p>
              <p className="text-xl font-bold text-stone-900 dark:text-stone-100 mt-0.5">{car.specs.power}</p>
            </div>
          </div>

          {/* 0-100 acceleration card */}
          <div className="bg-white dark:bg-stone-900 p-5 rounded-2xl border border-stone-150/40 dark:border-stone-850 shadow-sm flex flex-col justify-between h-32 group hover:scale-[1.02] transition-transform cursor-default">
            <Timer className="w-5 h-5 text-indigo-500" />
            <div>
              <p className="text-[10px] text-stone-400 dark:text-stone-500 uppercase font-bold tracking-wider">0-100 KM/S</p>
              <p className="text-xl font-bold text-stone-900 dark:text-stone-100 mt-0.5">{car.specs.acceleration}</p>
            </div>
          </div>

          {/* Max Speed card */}
          <div className="bg-white dark:bg-stone-900 p-5 rounded-2xl border border-stone-150/40 dark:border-stone-850 shadow-sm flex flex-col justify-between h-32 group hover:scale-[1.02] transition-transform cursor-default">
            <Gauge className="w-5 h-5 text-[#00D1FF]" />
            <div>
              <p className="text-[10px] text-stone-400 dark:text-stone-500 uppercase font-bold tracking-wider">MAKS HIZ</p>
              <p className="text-xl font-bold text-stone-900 dark:text-stone-100 mt-0.5">{car.specs.topSpeed}</p>
            </div>
          </div>

          {/* Engine spec layout card */}
          <div className="bg-white dark:bg-stone-900 p-5 rounded-2xl border border-stone-150/40 dark:border-stone-850 shadow-sm flex flex-col justify-between h-32 group hover:scale-[1.02] transition-transform cursor-default">
            <Compass className="w-5 h-5 text-amber-500" />
            <div>
              <p className="text-[10px] text-stone-400 dark:text-stone-500 uppercase font-bold tracking-wider">SİLİNDİR / MOTOR</p>
              <p className="text-xl font-bold text-stone-900 dark:text-stone-100 mt-0.5">{car.specs.engine}</p>
            </div>
          </div>

        </section>

        {/* Detailed custom Description about car */}
        <section className="bg-white dark:bg-stone-900 rounded-3xl p-6 border border-stone-100 dark:border-stone-800 shadow-sm">
          <h3 className="font-headline-md text-xl font-bold text-stone-900 dark:text-white mb-4">
            Araç Hakkında
          </h3>
          <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed whitespace-pre-line text-justify">
            {car.description}
          </p>
          
          {/* Subfeatures list */}
          <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-stone-100 dark:border-stone-800">
            {car.features.map((feat, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-[#00D1FF]" />
                <span className="text-xs font-semibold text-stone-700 dark:text-stone-300">
                  {feat}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Image Gallery Thumbnails list */}
        {car.gallery && car.gallery.length > 0 && (
          <section className="bg-white dark:bg-stone-900 rounded-3xl p-6 border border-stone-100 dark:border-stone-800 shadow-sm">
            <h3 className="font-headline-md text-xl font-bold text-stone-900 dark:text-white mb-4">
              Galeri
            </h3>
            
            <div className="grid grid-cols-3 gap-3">
              {/* Main thumbnail options */}
              <button 
                onClick={() => setSelectedImage(resolveCarImage(car.image))}
                className={`w-full h-24 rounded-xl overflow-hidden cursor-pointer border-2 transition-all ${resolveCarImage(selectedImage) === resolveCarImage(car.image) ? 'border-[#00D1FF] scale-[0.98]' : 'border-transparent'}`}
              >
                <img src={resolveCarImage(car.image)} referrerPolicy="no-referrer" alt="Overview" className="w-full h-full object-cover" />
              </button>

              {car.gallery.map((imgUrl, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(resolveCarImage(imgUrl))}
                  className={`w-full h-24 rounded-xl overflow-hidden cursor-pointer border-2 transition-all ${resolveCarImage(selectedImage) === resolveCarImage(imgUrl) ? 'border-[#00D1FF] scale-[0.98]' : 'border-transparent'}`}
                >
                  <img src={resolveCarImage(imgUrl)} referrerPolicy="no-referrer" alt={`Gallery-${i}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </section>
        )}

      </main>

      {/* Custom Image Editor Modal Dialog */}
      {showImageModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-[120] flex items-center justify-center p-6 animate-fade-in text-left">
          <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-3xl p-6 max-w-md w-full shadow-2xl relative space-y-6">
            
            {/* Close button */}
            <button 
              onClick={() => {
                setShowImageModal(false);
                setUploadError("");
              }}
              className="absolute top-4 right-4 text-stone-400 hover:text-stone-600 dark:hover:text-stone-200 transition-colors cursor-pointer p-1"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <h3 className="font-headline-md text-xl font-extrabold text-stone-900 dark:text-white flex items-center gap-2">
                <Camera className="w-5 h-5 text-[#00D1FF]" />
                Fotoğrafı Özelleştir
              </h3>
              <p className="text-xs text-stone-500 mt-1 font-medium">
                {car.brand} {car.model} modeli için kendi elinizle yüksek kaliteli bir fotoğraf ekleyin.
              </p>
            </div>

            {/* ERROR DISPLAY */}
            {uploadError && (
              <div className="bg-red-500/10 border border-red-500/25 text-red-500 text-xs p-3.5 rounded-xl font-bold">
                ⚠️ {uploadError}
              </div>
            )}

            {/* OPTION 1: FILE UPLOADER */}
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-wider text-stone-400 dark:text-stone-500 block">A) Cihazınızdan Fotoğraf Seçin</label>
              
              <div 
                onClick={() => document.getElementById("car-image-file-input")?.click()}
                className="border-2 border-dashed border-stone-200 dark:border-stone-800 hover:border-[#00D1FF] dark:hover:border-[#00D1FF] rounded-2xl p-6 text-center cursor-pointer hover:bg-stone-50 dark:hover:bg-stone-950/40 transition-all flex flex-col items-center justify-center gap-2 group"
              >
                <div className="w-10 h-10 rounded-xl bg-stone-100 dark:bg-stone-800 flex items-center justify-center text-stone-500 dark:text-stone-400 group-hover:scale-110 transition-transform">
                  <Upload className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-extrabold text-stone-800 dark:text-stone-200 block">Görsel Dosyası Yükle</span>
                  <span className="text-[10px] text-stone-400 mt-0.5 block">PNG, JPG, WEBP (En fazla 8MB)</span>
                </div>
              </div>
              
              <input 
                type="file" 
                id="car-image-file-input" 
                accept="image/*" 
                className="hidden" 
                onChange={handleImageFileChange} 
              />
            </div>

            {/* DIVIDER */}
            <div className="flex items-center gap-3">
              <div className="h-px bg-stone-200 dark:bg-stone-800 flex-1" />
              <span className="text-[9px] text-stone-400 font-black uppercase">Veya</span>
              <div className="h-px bg-stone-200 dark:bg-stone-800 flex-1" />
            </div>

            {/* OPTION 2: WEBLINK / URL INPUT */}
            <div className="space-y-2">
              <label htmlFor="custom-image-url" className="text-[10px] font-black uppercase tracking-wider text-stone-400 dark:text-stone-500 block">B) İnternetten Fotoğraf Adresi (URL) Yapıştırın</label>
              <div className="flex gap-2">
                <input 
                  type="text" 
                  id="custom-image-url"
                  placeholder="https://images.unsplash.com/photo-..."
                  value={customUrl}
                  onChange={(e) => setCustomUrl(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      handleUrlSubmit();
                    }
                  }}
                  className="flex-1 bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 focus:border-[#00D1FF] dark:focus:border-[#00D1FF] focus:ring-1 focus:ring-[#00D1FF] outline-none text-xs rounded-xl px-3.5 py-3 text-stone-900 dark:text-stone-100 placeholder:text-stone-400 dark:placeholder:text-stone-600"
                />
                <button
                  onClick={handleUrlSubmit}
                  className="bg-stone-950 dark:bg-white text-white dark:text-stone-950 hover:opacity-90 px-4 rounded-xl font-bold text-xs transition-opacity cursor-pointer whitespace-nowrap"
                >
                  Uygula
                </button>
              </div>
            </div>

            {/* DEFAULTS REVERSION / RESTORE BUTTON */}
            <div className="pt-3 flex justify-between items-center bg-stone-50 dark:bg-stone-950/40 -mx-6 -mb-6 p-4 rounded-b-3xl border-t border-stone-150 dark:border-stone-800">
              <button
                onClick={handleResetToDefault}
                className="text-[11px] font-bold text-stone-500 dark:text-stone-400 hover:text-red-500 dark:hover:text-red-400 flex items-center gap-1.5 cursor-pointer transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
                Varsayılana Sıfırla
              </button>

              <button
                onClick={() => {
                  setShowImageModal(false);
                  setUploadError("");
                }}
                className="text-xs font-extrabold text-[#00D1FF] hover:underline cursor-pointer"
              >
                Kapat
              </button>
            </div>

          </div>
        </div>
      )}

      {/* Compare Modal popover dialog */}
      {showCompareModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-[130] flex items-center justify-center p-4 md:p-6 animate-fade-in overflow-y-auto">
          <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-3xl p-6 max-w-2xl w-full shadow-2xl relative my-auto max-h-[90vh] overflow-y-auto custom-scrollbar flex flex-col">
            
            {/* Close button */}
            <button 
              onClick={() => {
                setShowCompareModal(false);
                setSelectedCompareCar(null);
              }}
              className="absolute top-4 right-4 text-stone-400 hover:text-stone-600 dark:hover:text-stone-200 transition-colors cursor-pointer p-1.5 bg-stone-100 dark:bg-stone-800 rounded-full"
            >
              <X className="w-4 h-4" />
            </button>

            {!selectedCompareCar ? (
              /* PHASE 1: CHOOSE VEHICLE TO COMPARE WITH */
              <div className="space-y-5">
                <div>
                  <h3 className="font-headline-md text-xl font-extrabold text-stone-900 dark:text-white flex items-center gap-2">
                    <GitCompare className="w-5 h-5 text-[#00D1FF]" />
                    Karşılaştırılacak Aracı Seçin
                  </h3>
                  <p className="text-xs text-stone-500 mt-1">
                    <strong className="text-stone-700 dark:text-stone-300">{car.brand} {car.model}</strong> ile karşılaştırmak istediğiniz aracı aşağıdaki listeden aratıp seçin.
                  </p>
                </div>

                {/* Search Bar */}
                <div className="relative">
                  <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-stone-400 animate-pulse" />
                  <input
                    type="text"
                    placeholder="Marka veya model ismi yazın..."
                    value={compareSearchQuery}
                    onChange={(e) => setCompareSearchQuery(e.target.value)}
                    className="w-full bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 focus:border-[#00D1FF] dark:focus:border-[#00D1FF] focus:ring-1 focus:ring-[#00D1FF] outline-none text-xs rounded-xl pl-10 pr-4 py-3.5 text-stone-900 dark:text-stone-100 placeholder:text-stone-400 dark:placeholder:text-stone-600 font-medium shadow-inner"
                  />
                </div>

                {/* Vehicle Choice List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[350px] overflow-y-auto pr-1">
                  {filteredComparePool.length > 0 ? (
                    filteredComparePool.map((otherCar) => (
                      <button
                        key={otherCar.id}
                        onClick={() => setSelectedCompareCar(otherCar)}
                        className="flex items-center gap-3 p-2.5 rounded-2xl bg-stone-50 hover:bg-stone-100 dark:bg-stone-950/40 dark:hover:bg-stone-950 text-left border border-stone-150/50 dark:border-stone-850 hover:border-[#00D1FF]/40 dark:hover:border-[#00D1FF]/45 transition-all cursor-pointer group"
                      >
                        <div className="w-16 h-12 rounded-xl overflow-hidden bg-stone-200 dark:bg-stone-800 flex-shrink-0">
                          <img 
                            src={resolveCarImage(otherCar.image)} 
                            alt={otherCar.model}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform" 
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <span className="block text-[9px] uppercase font-bold tracking-widest text-stone-400">
                            {otherCar.brand}
                          </span>
                          <span className="block text-sm font-bold text-stone-900 dark:text-white truncate">
                            {otherCar.model}
                          </span>
                          <span className="block text-[10px] text-stone-500 font-medium">
                            {otherCar.year} • {otherCar.price}
                          </span>
                        </div>
                      </button>
                    ))
                  ) : (
                    <div className="col-span-2 py-8 text-center text-xs text-stone-400 font-medium">
                      Eşleşen araç bulunamadı. Lütfen başka bir arama yapın.
                    </div>
                  )}
                </div>
              </div>
            ) : (
              /* PHASE 2: COMPARISON TABLE */
              <div className="space-y-6">
                <div>
                  <h3 className="font-headline-md text-xl font-extrabold text-stone-900 dark:text-white flex items-center gap-2">
                    <GitCompare className="w-5 h-5 text-[#00D1FF]" />
                    Teknik Özellik Karşılaştırması
                  </h3>
                  <p className="text-xs text-stone-500 mt-1">
                    Seçilen iki aracın teknik verileri yan yana kıyaslanmaktadır.
                  </p>
                </div>

                {/* Cars side-by-side header cards */}
                <div className="grid grid-cols-2 gap-4">
                  {/* Current Car */}
                  <div className="bg-stone-50 dark:bg-stone-950 rounded-2xl p-3 border border-stone-100 dark:border-stone-800 text-center relative group overflow-hidden">
                    <div className="absolute top-2 left-2 bg-stone-900/80 backdrop-blur-sm text-[8px] font-bold text-white px-1.5 py-0.5 rounded uppercase tracking-wider z-10">
                      Mevcut Araç
                    </div>
                    <div className="h-28 rounded-xl overflow-hidden bg-stone-200 dark:bg-stone-900 mb-2">
                      <img 
                        src={resolveCarImage(selectedImage)} 
                        alt={car.model}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    <span className="block text-[9px] uppercase font-bold text-stone-400">{car.brand}</span>
                    <span className="block text-sm font-black text-stone-900 dark:text-white line-clamp-1">{car.model}</span>
                    <span className="block text-xs font-bold text-[#00D1FF] mt-0.5">{car.price}</span>
                  </div>

                  {/* Compared Car */}
                  <div className="bg-stone-50 dark:bg-stone-950 rounded-2xl p-3 border border-stone-100 dark:border-stone-800 text-center relative group overflow-hidden">
                    <button
                      onClick={() => setSelectedCompareCar(null)}
                      className="absolute top-2 right-2 bg-stone-900/80 hover:bg-stone-950 backdrop-blur-sm text-[8px] font-bold text-white px-2 py-0.5 rounded cursor-pointer z-10 transition-colors border border-white/5"
                    >
                      Değiştir
                    </button>
                    <div className="h-28 rounded-xl overflow-hidden bg-stone-200 dark:bg-stone-900 mb-2">
                      <img 
                        src={resolveCarImage(selectedCompareCar.image)} 
                        alt={selectedCompareCar.model}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    <span className="block text-[9px] uppercase font-bold text-stone-400">{selectedCompareCar.brand}</span>
                    <span className="block text-sm font-black text-stone-900 dark:text-white line-clamp-1">{selectedCompareCar.model}</span>
                    <span className="block text-xs font-bold text-[#00D1FF] mt-0.5">{selectedCompareCar.price}</span>
                  </div>
                </div>

                {/* Specs comparison rows */}
                <div className="border border-stone-150 dark:border-stone-800 rounded-2xl overflow-hidden divide-y divide-stone-150 dark:divide-stone-850 text-xs">
                  
                  {/* Category */}
                  <div className="grid grid-cols-3 p-3 bg-stone-50/50 dark:bg-stone-950/25 text-center items-center">
                    <div className="font-bold text-stone-800 dark:text-stone-200 text-left pl-1">{car.category}</div>
                    <div className="font-bold uppercase tracking-wider text-[9px] text-stone-400">Kategori</div>
                    <div className="font-bold text-stone-800 dark:text-stone-200 text-right pr-1">{selectedCompareCar.category}</div>
                  </div>

                  {/* Year */}
                  <div className="grid grid-cols-3 p-3 text-center items-center">
                    <div className={`font-black ${car.year >= selectedCompareCar.year ? 'text-[#00D1FF]' : 'text-stone-700 dark:text-stone-300'} text-left pl-1`}>{car.year}</div>
                    <div className="font-bold uppercase tracking-wider text-[9px] text-stone-400">Yıl</div>
                    <div className={`font-black ${selectedCompareCar.year >= car.year ? 'text-[#00D1FF]' : 'text-stone-700 dark:text-stone-300'} text-right pr-1`}>{selectedCompareCar.year}</div>
                  </div>

                  {/* Power */}
                  <div className="grid grid-cols-3 p-3 bg-stone-50/50 dark:bg-stone-950/25 text-center items-center">
                    <div className="text-left pl-1">
                      <span className={`font-black ${parsePower(car.specs.power) >= parsePower(selectedCompareCar.specs.power) ? 'text-[#00D1FF]' : 'text-stone-700 dark:text-stone-300'}`}>
                        {car.specs.power}
                      </span>
                      {parsePower(car.specs.power) > parsePower(selectedCompareCar.specs.power) && <span className="ml-1 text-[9px] text-emerald-500 font-bold">🏆</span>}
                    </div>
                    <div className="font-bold uppercase tracking-wider text-[9px] text-stone-400">Motor Gücü</div>
                    <div className="text-right pr-1">
                      {parsePower(selectedCompareCar.specs.power) > parsePower(car.specs.power) && <span className="mr-1 text-[9px] text-emerald-500 font-bold">🏆</span>}
                      <span className={`font-black ${parsePower(selectedCompareCar.specs.power) >= parsePower(car.specs.power) ? 'text-[#00D1FF]' : 'text-stone-700 dark:text-stone-300'}`}>
                        {selectedCompareCar.specs.power}
                      </span>
                    </div>
                  </div>

                  {/* 0-100 Accel */}
                  <div className="grid grid-cols-3 p-3 text-center items-center">
                    <div className="text-left pl-1">
                      <span className={`font-black ${parseAcceleration(car.specs.acceleration) <= parseAcceleration(selectedCompareCar.specs.acceleration) ? 'text-[#00D1FF]' : 'text-stone-700 dark:text-stone-300'}`}>
                        {car.specs.acceleration}
                      </span>
                      {parseAcceleration(car.specs.acceleration) < parseAcceleration(selectedCompareCar.specs.acceleration) && <span className="ml-1 text-[9px] text-emerald-500 font-bold">🏆</span>}
                    </div>
                    <div className="font-bold uppercase tracking-wider text-[9px] text-stone-400">0-100 km/s</div>
                    <div className="text-right pr-1">
                      {parseAcceleration(selectedCompareCar.specs.acceleration) < parseAcceleration(car.specs.acceleration) && <span className="mr-1 text-[9px] text-emerald-500 font-bold">🏆</span>}
                      <span className={`font-black ${parseAcceleration(selectedCompareCar.specs.acceleration) <= parseAcceleration(car.specs.acceleration) ? 'text-[#00D1FF]' : 'text-stone-700 dark:text-stone-300'}`}>
                        {selectedCompareCar.specs.acceleration}
                      </span>
                    </div>
                  </div>

                  {/* Top Speed */}
                  <div className="grid grid-cols-3 p-3 bg-stone-50/50 dark:bg-stone-950/25 text-center items-center">
                    <div className="text-left pl-1">
                      <span className={`font-black ${parseTopSpeed(car.specs.topSpeed) >= parseTopSpeed(selectedCompareCar.specs.topSpeed) ? 'text-[#00D1FF]' : 'text-stone-700 dark:text-stone-300'}`}>
                        {car.specs.topSpeed}
                      </span>
                      {parseTopSpeed(car.specs.topSpeed) > parseTopSpeed(selectedCompareCar.specs.topSpeed) && <span className="ml-1 text-[9px] text-emerald-500 font-bold">🏆</span>}
                    </div>
                    <div className="font-bold uppercase tracking-wider text-[9px] text-stone-400">Maksimum Hız</div>
                    <div className="text-right pr-1">
                      {parseTopSpeed(selectedCompareCar.specs.topSpeed) > parseTopSpeed(car.specs.topSpeed) && <span className="mr-1 text-[9px] text-emerald-500 font-bold">🏆</span>}
                      <span className={`font-black ${parseTopSpeed(selectedCompareCar.specs.topSpeed) >= parseTopSpeed(car.specs.topSpeed) ? 'text-[#00D1FF]' : 'text-stone-700 dark:text-stone-300'}`}>
                        {selectedCompareCar.specs.topSpeed}
                      </span>
                    </div>
                  </div>

                  {/* Engine config */}
                  <div className="grid grid-cols-3 p-3 text-center items-center">
                    <div className="font-medium text-stone-700 dark:text-stone-300 text-left pl-1">{car.specs.engine}</div>
                    <div className="font-bold uppercase tracking-wider text-[9px] text-stone-400">Motor Tipi</div>
                    <div className="font-medium text-stone-700 dark:text-stone-300 text-right pr-1">{selectedCompareCar.specs.engine}</div>
                  </div>

                  {/* Delivery time */}
                  <div className="grid grid-cols-3 p-3 bg-stone-50/50 dark:bg-stone-950/25 text-center items-center">
                    <div className="font-medium text-stone-700 dark:text-stone-300 text-left pl-1">{car.deliveryTime}</div>
                    <div className="font-bold uppercase tracking-wider text-[9px] text-stone-400">Teslimat Süresi</div>
                    <div className="font-medium text-stone-700 dark:text-stone-300 text-right pr-1">{selectedCompareCar.deliveryTime}</div>
                  </div>

                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    onClick={() => setSelectedCompareCar(null)}
                    className="flex-1 py-3 bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 text-stone-800 dark:text-stone-200 text-xs font-black rounded-full transition-colors cursor-pointer text-center uppercase tracking-wider"
                  >
                    Başka Bir Araç Seç
                  </button>
                  <button
                    onClick={() => {
                      setShowCompareModal(false);
                      setSelectedCompareCar(null);
                    }}
                    className="flex-1 py-3 bg-[#00D1FF] hover:bg-[#00b2dc] text-white text-xs font-black rounded-full transition-colors cursor-pointer text-center uppercase tracking-wider shadow-md hover:shadow-[#00D1FF]/25"
                  >
                    Kıyaslamayı Kapat
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
