/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState } from "react";
import { Car } from "../types";
import { Camera, Upload, X, Cpu, RefreshCw } from "lucide-react";

interface CameraViewProps {
  onBack: () => void;
  onAnalysisComplete: (car: Car) => void;
}

export default function CameraView({ onBack, onAnalysisComplete }: CameraViewProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [loadingText, setLoadingText] = useState<string>("Sistem Hazırlanıyor...");
  const [dragOver, setDragOver] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [flashActive, setFlashActive] = useState<boolean>(false);
  
  // Custom states added to prevent automatic screen/camera recording on load
  const [isCameraActive, setIsCameraActive] = useState<boolean>(false);

  // Double-safe stream assignment effect - runs whenever stream, permission, or video element changes
  useEffect(() => {
    if (isCameraActive && hasPermission && videoRef.current && streamRef.current) {
      if (videoRef.current.srcObject !== streamRef.current) {
        videoRef.current.srcObject = streamRef.current;
      }
    }
  }, [isCameraActive, hasPermission]);

  // Initialize camera stream ONLY when explicitly activated to prevent automatic recording indicators on mobile load
  useEffect(() => {
    let activeStream: MediaStream | null = null;
    
    async function startCamera() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: "environment" },
          audio: false
        });
        streamRef.current = stream;
        activeStream = stream;
        
        // Instant assign if ref is already bound (usually is because isCameraActive is already true)
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
        
        setHasPermission(true);
      } catch (err) {
        console.warn("Camera permission denied or camera unavailable. Falling back to simulation.", err);
        setHasPermission(false);
      }
    }

    if (isCameraActive) {
      startCamera();
    } else {
      setHasPermission(null);
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
        streamRef.current = null;
      }
    }

    return () => {
      if (activeStream) {
        activeStream.getTracks().forEach(track => track.stop());
      }
    };
  }, [isCameraActive]);

  // Capture frame & analyze
  const captureFrame = async () => {
    setIsLoading(true);
    setLoadingText("Araba analiz ediliyor...");

    try {
      let base64Image = "";

      if (isCameraActive && hasPermission && videoRef.current && videoRef.current.readyState >= 2) {
        const width = videoRef.current.videoWidth;
        const height = videoRef.current.videoHeight;
        
        if (width > 0 && height > 0) {
          // Draw frame to canvas
          const canvas = document.createElement("canvas");
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext("2d");
          if (ctx) {
            ctx.drawImage(videoRef.current, 0, 0, width, height);
            base64Image = canvas.toDataURL("image/jpeg", 0.85);
          }
        }
      }

      // If no image captured or fallback simulated, generate a visual from background
      if (!base64Image) {
        base64Image = await convertUrlToBase64("https://lh3.googleusercontent.com/aida-public/AB6AXuCExhtZzO1V5yqoOkKvT5KzddkI6IzQypDIcrdc44ZB4OTYyDzCcD86cdIes9LyilUmeiVmUBGUYzn3QfmXBssO-tXWc3HEBfRsv7Sj44MMTIKL3YaQV6MH6vGJ4Mwwzp6teniCQI6kgEnwcwX4CfY2iN_PrQP4XU5omC3bKqppWcE2TDcnGFqo4SF4hZeCRj_M4tNVV1McIWESvK4Hgoum7qI5_uwuhl4GKF1Ll5MvWRFr4NVSMZD3REdas5gkox_8je3y5GALXFQ");
      }

      sendToAPI(base64Image);
    } catch (error) {
      console.error("Capture failure:", error);
      setIsLoading(false);
    }
  };

  // Convert a public template image URL to base64 payload when doing simulation snapshot
  const convertUrlToBase64 = async (url: string): Promise<string> => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result as string);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
      });
    } catch {
      return "";
    }
  };

  // Submit base64 to server endpoint
  const sendToAPI = async (base64Str: string, fileName?: string) => {
    try {
      setLoadingText("Görsel Çözümleniyor...");
      const response = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          image: base64Str,
          fileName: fileName
        })
      });

      const result = await response.json();
      if (result.success && result.data) {
        // Trigger haptic flash
        setFlashActive(true);
        setTimeout(() => setFlashActive(false), 200);
        
        onAnalysisComplete(result.data);
      } else {
        alert(result.error || "Görüntü analiz edilemedi. Lütfen tekrar deneyin.");
      }
    } catch (err) {
      console.error("API error during scanning:", err);
      alert("Hata: Sunucuyla bağlantı kurulamadı. Lütfen tekrar deneyin.");
    } finally {
      setIsLoading(false);
    }
  };

  // Handling Manual File Upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    processFile(file);
  };

  const processFile = (file: File) => {
    setIsLoading(true);
    setLoadingText("Dosya yükleniyor...");
    
    const reader = new FileReader();
    reader.onload = (event) => {
      const base64 = event.target?.result as string;
      sendToAPI(base64, file.name);
    };
    reader.onerror = () => {
      alert("Dosya okunamadı.");
      setIsLoading(false);
    };
    reader.readAsDataURL(file);
  };

  // Drag over controls
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = () => {
    setDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  return (
    <div 
      className={`fixed inset-0 bg-stone-950 text-white z-50 flex flex-col justify-between overflow-hidden cursor-default transition-all ${dragOver ? 'ring-4 ring-[#00D1FF] ring-inset' : ''}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      {/* Background Live Feed Video or Simulated Feed */}
      <div 
        onClick={isCameraActive ? captureFrame : undefined}
        className={`absolute inset-0 z-0 bg-stone-950 ${isCameraActive ? "cursor-pointer" : ""}`}
      >
        {isCameraActive && (
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            className={`w-full h-full object-cover opacity-85 ${hasPermission ? "block" : "hidden"}`}
          />
        )}
        {(!isCameraActive || !hasPermission) && (
          <div className="relative w-full h-full">
            <img 
               alt="Simulated showroom tunnel feed" 
              src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=1200"
              className="w-full h-full object-cover opacity-20 blur-sm brightness-50"
              referrerPolicy="no-referrer"
            />
          </div>
        )}
        {/* Radial Dark Overlay vignette effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.95)_100%)] pointer-events-none" />
      </div>

      {/* Top Header Controls bar */}
      <header className="relative z-10 w-full pt-12 px-6 flex justify-between items-center pointer-events-auto">
        <button 
          onClick={onBack}
          className="p-3 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white hover:bg-black/60 active:scale-90 transition-all cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>
        
        {/* Recording / Simulating status badge */}
        <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
          <div className={`w-2.5 h-2.5 rounded-full ${isCameraActive ? 'bg-red-600 animate-pulse' : 'bg-[#00D1FF] animate-pulse'}`} />
          <span className="text-[10px] uppercase font-bold tracking-[0.2em] font-sans">
            {isCameraActive ? "CANLI KAMERA" : "SİMÜLATÖR LAB"}
          </span>
        </div>

        {/* Right side spacer to keep the layout centered */}
        <div className="w-11 h-11" />
      </header>

      {/* Main interactive area */}
      <div className="relative z-10 flex-1 w-full max-w-4xl mx-auto flex flex-col items-center justify-center pointer-events-auto px-6 py-4 overflow-y-auto">
        
        {!isCameraActive ? (
          /* PRECISE SOLUTION: If camera is inactive, show beautifully integrated simulator cockpit without triggering any browser indicator */
          <div className="w-full max-w-xl bg-stone-900/60 backdrop-blur-xl border border-white/10 p-6 md:p-8 rounded-[32px] text-center shadow-2xl space-y-6">
            
            <div className="space-y-2">
              <div className="w-12 h-12 bg-[#00D1FF]/10 text-[#00D1FF] rounded-2.5xl flex items-center justify-center mx-auto border border-[#00D1FF]/20">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-xl md:text-2xl font-black font-sans tracking-tight text-white">
                Velocita Akıllı Tarayıcı
              </h3>
              <p className="text-stone-400 text-xs max-w-sm mx-auto leading-relaxed">
                Yapay zeka akıllı plaka, model ve dizayn algılayıcı. Ekran kaydı uyarısı almamak için demo araçları kullanabilir veya fotoğraf yükleyebilirsiniz.
              </p>
            </div>

            {/* Simulated Live Camera trigger button with recording disclosure note */}
            <div className="bg-stone-950/40 p-4 rounded-2xl border border-white/5 space-y-3">
              <button 
                onClick={() => setIsCameraActive(true)}
                className="w-full py-3 px-6 bg-[#00D1FF] text-stone-950 font-extrabold text-xs uppercase tracking-wider rounded-xl hover:bg-[#00D1FF]/90 transition-all active:scale-98 cursor-pointer flex items-center justify-center gap-2 shadow-[0_8px_20px_rgba(0,209,255,0.25)]"
              >
                <Camera className="w-4 h-4" />
                <span>Canlı Telefon Kamerasını Aç</span>
              </button>
              <p className="text-[10px] text-stone-500 leading-normal">
                *Kameranızı açarak çevreyi canlı tarayabilirsiniz. Tarayıcıda sistemin kamera kullandığını belirten küçük bir yeşil nokta/simge görünebilir.
              </p>
            </div>

            {/* Drag and Drop Zone or Manual File Select */}
            <div 
              onClick={() => fileInputRef.current?.click()}
              className="border border-dashed border-white/20 hover:border-[#00D1FF]/40 bg-white/5 hover:bg-white/10 p-6 rounded-2xl cursor-pointer transition-all flex flex-col items-center justify-center gap-2 group"
            >
              <Upload className="w-6 h-6 text-stone-400 group-hover:text-[#00D1FF] transition-colors" />
              <p className="font-bold text-xs">Araba Fotoğrafı Seç veya Buraya Sürükle</p>
              <p className="text-[10px] text-stone-500">PNG, JPG, JPEG desteklenir (Maks: 10MB)</p>
            </div>

          </div>
        ) : (
          /* Active Camera Mode Viewfinder boundary overlay */
          <div 
            onClick={captureFrame}
            className="w-full h-full flex flex-col items-center justify-center pointer-events-auto cursor-pointer"
          >
            <div className="mb-10 text-center px-6">
              <h2 className="text-xl font-bold tracking-tight font-headline-md text-white drop-shadow">
                Aracı Çerçeveye Hizalayın
              </h2>
              <p className="text-xs text-white/80 mt-1 font-bold">
                Fotoğraf çekmek ve analiz etmek için ekrana tıklayın.
              </p>
            </div>

            {/* Scanning Box Outline */}
            <div className="relative w-72 h-72 md:w-[480px] md:h-[320px] transition-all">
              {/* Top Left Corner */}
              <div className="absolute top-0 left-0 w-10 h-10 border-t-4 border-l-4 border-white rounded-tl-2xl" />
              {/* Top Right Corner */}
              <div className="absolute top-0 right-0 w-10 h-10 border-t-4 border-r-4 border-white rounded-tr-2xl" />
              {/* Bottom Left Corner */}
              <div className="absolute bottom-0 left-0 w-10 h-10 border-b-4 border-l-4 border-white rounded-bl-2xl" />
              {/* Bottom Right Corner */}
              <div className="absolute bottom-0 right-0 w-10 h-10 border-b-4 border-r-4 border-white rounded-br-2xl" />

              {/* Shimmer laser scanner animation */}
              <div className="absolute inset-4 overflow-hidden rounded-lg">
                <div className="absolute w-full h-1.5 bg-gradient-to-r from-transparent via-[#00D1FF] to-transparent shadow-[0_0_12px_#00D1FF] animate-bounce top-1/4" 
                  style={{ animationDuration: "4s" }}
                />
              </div>
            </div>

            {/* Premium Photo Shutter Button */}
            <div className="mt-8 mb-2 flex flex-col items-center gap-2 pointer-events-auto">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  captureFrame();
                }}
                className="relative group flex items-center justify-center p-1 cursor-pointer active:scale-95 transition-transform"
                style={{ WebkitTapHighlightColor: "transparent" }}
              >
                {/* Expanding outer ring */}
                <div className="absolute w-20 h-20 rounded-full border-4 border-[#00D1FF]/40 group-hover:border-[#00D1FF]/80 group-hover:scale-105 transition-all duration-300 animate-pulse" />
                {/* Core white button disk */}
                <div className="w-14 h-14 rounded-full bg-white group-hover:bg-[#00D1FF] shadow-2xl flex items-center justify-center transition-all">
                  <Camera className="w-5 h-5 text-stone-900 group-hover:text-stone-950 group-hover:scale-110 transition-transform" />
                </div>
              </button>
              <span className="text-[10px] text-white/60 font-black tracking-widest uppercase">Fotoğraf Çek</span>
            </div>

            <div className="mt-4 pointer-events-auto">
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setIsCameraActive(false);
                }}
                className="py-2 px-5 bg-black/60 hover:bg-black/80 text-white rounded-full border border-white/10 hover:border-white/20 text-xs font-semibold cursor-pointer tracking-wider"
              >
                Kamerayı Kapat / Simülatöre Dön
              </button>
            </div>
          </div>
        )}

      </div>

      {/* Invisible HTML File input */}
      <input 
        type="file" 
        ref={fileInputRef} 
        onChange={handleFileUpload}
        accept="image/*" 
        className="hidden" 
      />

      {/* Empty elements spacer for structure */}
      <div className="pb-8" />

      {/* Drag & Drop Visual banner */}
      {dragOver && (
        <div className="absolute inset-0 bg-black/85 backdrop-blur-sm z-40 flex flex-col items-center justify-center pointer-events-none transition-all">
          <div className="border-4 border-dashed border-[#00D1FF] rounded-3xl p-10 flex flex-col items-center max-w-xs text-center">
            <Upload className="w-16 h-16 text-[#00D1FF] animate-bounce mb-4" />
            <h4 className="text-xl font-bold font-headline-md mb-2">Dosyayı Bırakın</h4>
            <p className="text-stone-400 text-xs leading-relaxed">
              Araba görselini analiz edilmek üzere doğrudan buraya bırakabilirsiniz.
            </p>
          </div>
        </div>
      )}

      {/* Screen Shutter Flash feedback */}
      {flashActive && (
        <div className="fixed inset-0 bg-white z-50 transition-opacity pointer-events-none duration-150 opacity-100" />
      )}

      {/* Floating Analysis Screen Overlay */}
      {isLoading && (
        <div className="fixed inset-0 bg-stone-950/95 backdrop-blur-xl z-[100] flex flex-col items-center justify-center select-none pointer-events-auto">
          <div className="relative w-28 h-28 mb-8 flex items-center justify-center">
            {/* Spinning Hologram rings */}
            <div className="absolute inset-0 border-4 border-t-[#00D1FF] border-stone-800 rounded-full animate-spin" />
            <div className="absolute inset-1.5 border-2 border-b-[#00D1FF] border-stone-900 rounded-full animate-spin" style={{ animationDirection: "reverse" }} />
            <div className="absolute inset-4 border border-white/5 rounded-full flex items-center justify-center">
              <RefreshCw className="w-6 h-6 text-white animate-spin" style={{ animationDuration: "4s" }} />
            </div>
          </div>
          
          <h3 className="font-headline-md text-2xl font-bold tracking-tight text-white text-center mb-2 px-6">
            Görsel Analiz Ediliyor
          </h3>
          <p className="text-sm text-stone-400 max-w-xs text-center leading-relaxed px-6 font-medium">
            {loadingText}
          </p>
        </div>
      )}
    </div>
  );
}
