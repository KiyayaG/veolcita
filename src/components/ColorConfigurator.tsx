/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Paintbrush, Check } from "lucide-react";

interface ColorConfiguratorProps {
  initialColorName?: string;
  onColorChange?: (colorHex: string, colorName: string) => void;
}

export interface PaintColor {
  name: string;
  hex: string;
  bgClass: string;
  glowClass: string;
  type: string;
}

export const paintColors: PaintColor[] = [
  { name: "Sıvı Metal Gümüş", hex: "#e2e8f0", bgClass: "bg-[#e2e8f0]", glowClass: "shadow-[#e2e8f0]/40", type: "Metalik" },
  { name: "Metalik Gece Mavi", hex: "#1e3a8a", bgClass: "bg-[#1e3a8a]", glowClass: "shadow-[#1e3a8a]/40", type: "Sedefli" },
  { name: "Yarış Kırmızısı", hex: "#dc2626", bgClass: "bg-[#dc2626]", glowClass: "shadow-[#dc2626]/40", type: "Saf" },
  { name: "Nardo Gri", hex: "#6b7280", bgClass: "bg-[#6b7280]", glowClass: "shadow-[#6b7280]/40", type: "Düz" },
  { name: "Asit Yeşili", hex: "#84cc16", bgClass: "bg-[#84cc16]", glowClass: "shadow-[#84cc16]/40", type: "Koleksiyon" },
  { name: "Volkan Sarısı", hex: "#eab308", bgClass: "bg-[#eab308]", glowClass: "shadow-[#eab308]/40", type: "Sedefli" },
  { name: "Piyano Siyahı", hex: "#0c0a09", bgClass: "bg-[#0c0a09] border border-stone-800", glowClass: "shadow-[#0c0a09]/40", type: "Metalik" }
];

export default function ColorConfigurator({ onColorChange }: ColorConfiguratorProps) {
  const [selected, setSelected] = useState<PaintColor>(paintColors[0]);

  const handleSelect = (color: PaintColor) => {
    setSelected(color);
    if (onColorChange) {
      onColorChange(color.hex, color.name);
    }
  };

  return (
    <div className="bg-white dark:bg-stone-900 border border-stone-100 dark:border-stone-800 rounded-2xl p-6 shadow-sm">
      <div className="flex items-center gap-3 mb-4">
        <Paintbrush className="w-5 h-5 text-stone-900 dark:text-stone-100" />
        <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-100 font-headline-md">
          Renk Konfigürasyonu
        </h3>
      </div>
      
      <p className="text-sm text-stone-500 mb-5">
        Aracınız için özel fırın boyalı el işçiliği renk paleti seçin:
      </p>

      {/* Selected Color Showcase */}
      <div className="flex items-center gap-4 p-4 rounded-xl bg-stone-50 dark:bg-stone-950 mb-6 border border-stone-100 dark:border-stone-800 transition-all duration-300">
        <div className={`w-12 h-12 rounded-full ${selected.bgClass} shadow-md transition-transform duration-300 scale-105`} />
        <div>
          <span className="text-xs uppercase font-semibold text-stone-400 tracking-wider">Seçilen Kaplama</span>
          <h4 className="text-base font-bold text-stone-900 dark:text-stone-100 mt-0.5">{selected.name}</h4>
          <span className="inline-block text-[10px] px-2 py-0.5 rounded-full bg-stone-200 dark:bg-stone-800 text-stone-600 dark:text-stone-400 font-medium mt-1">
            {selected.type}
          </span>
        </div>
      </div>

      {/* Color Grid */}
      <div className="flex flex-wrap gap-3.5 justify-start">
        {paintColors.map((color) => {
          const isSelected = selected.hex === color.hex;
          return (
            <button
              key={color.hex}
              onClick={() => handleSelect(color)}
              className={`relative w-10 h-10 rounded-full ${color.bgClass} shadow-sm group active:scale-90 transition-all cursor-pointer`}
              title={color.name}
            >
              <div className={`absolute -inset-1.5 rounded-full border-2 border-stone-900 dark:border-stone-100 transition-all duration-300 ${isSelected ? 'opacity-100 scale-100' : 'opacity-0 scale-50 group-hover:opacity-30 group-hover:scale-90'}`} />
              {isSelected && (
                <div className="absolute inset-0 flex items-center justify-center text-white mix-blend-difference">
                  <Check className="w-4 h-4 text-stone-900 drop-shadow-sm font-bold" />
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
