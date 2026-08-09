/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from "react";
import { Car, resolveCarImage } from "../types";
import { featuredVehicles } from "../carData";
import { Zap, Gauge, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface FeaturedCarsProps {
  onSelectCar: (car: Car) => void;
}

export default function FeaturedCars({ onSelectCar }: FeaturedCarsProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [direction, setDirection] = useState<number>(0); // -1 for left, 1 for right
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoPlay = () => {
    stopAutoPlay();
    timerRef.current = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredVehicles.length);
    }, 5000);
  };

  const stopAutoPlay = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, []);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    stopAutoPlay();
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + featuredVehicles.length) % featuredVehicles.length);
    startAutoPlay();
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    stopAutoPlay();
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredVehicles.length);
    startAutoPlay();
  };

  const handleDotClick = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    stopAutoPlay();
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    startAutoPlay();
  };

  const activeCar = featuredVehicles[currentIndex];

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 150 : -150,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring" as const, stiffness: 350, damping: 30 },
        opacity: { duration: 0.2 }
      }
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 150 : -150,
      opacity: 0,
      transition: {
        x: { type: "spring" as const, stiffness: 350, damping: 30 },
        opacity: { duration: 0.2 }
      }
    })
  };

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="mb-10 w-full max-w-xl mx-auto"
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-5">
        <h2 className="font-headline-md text-2xl font-bold text-stone-900 dark:text-stone-100">
          Öne Çıkan Araçlar
        </h2>
      </div>

      {/* Slide Container Viewport */}
      <div 
        className="relative w-full overflow-hidden p-1"
        onMouseEnter={stopAutoPlay}
        onMouseLeave={startAutoPlay}
      >
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            onClick={() => onSelectCar(activeCar)}
            className="w-full text-left bg-white/80 dark:bg-stone-900/80 backdrop-blur-xl rounded-3xl overflow-hidden shadow-xl shadow-stone-950/5 dark:shadow-black/30 border border-stone-200/80 dark:border-stone-800/80 hover:border-[#00D1FF]/40 dark:hover:border-[#00D1FF]/40 hover:shadow-2xl hover:shadow-[#00D1FF]/15 hover:scale-[1.03] transition-all duration-300 ease-out group cursor-pointer block relative focus:outline-none transform-gpu"
          >
            {/* Image Wrap */}
            <div className="h-56 overflow-hidden relative">
              <img
                src={resolveCarImage(activeCar.image)}
                alt={`${activeCar.brand} ${activeCar.model}`}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              {/* Year badge */}
              <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-xl px-3.5 py-1 rounded-full text-xs font-bold text-white border border-white/10 shadow-sm">
                {activeCar.year}
              </div>

              {/* Navigation Left and Right buttons inside visual overlay */}
              <div className="absolute inset-y-0 left-3 flex items-center">
                <button
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-full bg-black/40 hover:bg-black/80 hover:scale-110 active:scale-95 backdrop-blur-md border border-white/15 flex items-center justify-center text-white transition-all duration-200 cursor-pointer shadow-lg hover:shadow-[#00D1FF]/30"
                  aria-label="Önceki araç"
                >
                  <ChevronLeft className="w-5 h-5 pointer-events-none" />
                </button>
              </div>

              <div className="absolute inset-y-0 right-3 flex items-center">
                <button
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full bg-black/40 hover:bg-black/80 hover:scale-110 active:scale-95 backdrop-blur-md border border-white/15 flex items-center justify-center text-white transition-all duration-200 cursor-pointer shadow-lg hover:shadow-[#00D1FF]/30"
                  aria-label="Sonraki araç"
                >
                  <ChevronRight className="w-5 h-5 pointer-events-none" />
                </button>
              </div>
            </div>

            {/* Spec Info area */}
            <div className="p-6">
              <div className="flex justify-between items-start gap-2 mb-2">
                <div>
                  <span className="text-[10px] tracking-widest font-bold uppercase text-stone-400 dark:text-stone-500">
                    {activeCar.brand}
                  </span>
                  <h4 className="font-headline-md font-primary font-bold text-xl text-stone-900 dark:text-stone-100 leading-tight group-hover:text-[#00D1FF] transition-colors">
                    {activeCar.model}
                  </h4>
                </div>
                <span className="bg-stone-100/80 dark:bg-stone-800/80 text-stone-700 dark:text-stone-300 px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap border border-stone-200/50 dark:border-stone-700/50">
                  {activeCar.category}
                </span>
              </div>

              {/* Stats metric bar */}
              <div className="flex gap-4 mt-4 border-t border-stone-100 dark:border-stone-800/80 pt-4">
                <div className="flex items-center gap-1.5 text-stone-600 dark:text-stone-400">
                  <Zap className="w-4.5 h-4.5 text-[#00D1FF]" />
                  <span className="text-sm font-semibold">{activeCar.specs.power}</span>
                </div>
                <div className="flex items-center gap-1.5 text-stone-600 dark:text-stone-400">
                  <Gauge className="w-4.5 h-4.5 text-[#00D1FF]" />
                  <span className="text-sm font-semibold">{activeCar.specs.topSpeed}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Indicators pagination dots beneath */}
      <div className="flex justify-center items-center gap-2 mt-4">
        {featuredVehicles.map((_, idx) => (
          <button
            key={idx}
            onClick={(e) => handleDotClick(idx, e)}
            className={`h-2 rounded-full cursor-pointer transition-all duration-300 ${
              idx === currentIndex 
                ? "w-7 bg-[#00D1FF] shadow-sm shadow-[#00D1FF]/50" 
                : "w-2 bg-stone-300 dark:bg-stone-700 hover:bg-stone-400 dark:hover:bg-stone-600 hover:scale-110"
            }`}
            aria-label={`Slide ${idx + 1}`}
          />
        ))}
      </div>
    </motion.section>
  );
}
