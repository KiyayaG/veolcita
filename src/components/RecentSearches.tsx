/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { SearchItem, Car } from "../types";
import { History, ChevronRight, Sparkles } from "lucide-react";
import { motion } from "motion/react";

interface RecentSearchesProps {
  searches: SearchItem[];
  onSelectCar: (car: Car) => void;
}

export default function RecentSearches({ searches, onSelectCar }: RecentSearchesProps) {
  if (searches.length === 0) {
    return (
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="mb-10"
      >
        <h2 className="font-headline-md text-2xl font-bold text-stone-900 dark:text-stone-100 mb-5">
          Son Aramalar
        </h2>
        
        <div className="bg-white/80 dark:bg-stone-900/80 backdrop-blur-xl border border-stone-200/80 dark:border-stone-800/80 rounded-2xl p-6 text-center space-y-4 shadow-lg shadow-stone-950/5 dark:shadow-black/20">
          <div className="w-12 h-12 bg-stone-100 dark:bg-stone-950 rounded-xl flex items-center justify-center mx-auto text-stone-400 dark:text-stone-500">
            <History className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <p className="text-sm font-bold text-stone-900 dark:text-white flex items-center justify-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#00D1FF]" />
              Tarama Geçmişiniz Boş
            </p>
            <p className="text-xs text-stone-500 dark:text-stone-400 leading-relaxed max-w-sm mx-auto">
              Yeni oluşturduğunuz hesabınızda taranmış araç bulunmuyor. Yeni bir otomobilin fotoğrafını yükleyerek veya canlı kamera ile tarayarak ilk analizinizi başlatın!
            </p>
          </div>
        </div>
      </motion.section>
    );
  }

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="mb-10"
    >
      <h2 className="font-headline-md text-2xl font-bold text-stone-900 dark:text-stone-100 mb-5">
        Son Aramalar
      </h2>
      
      <div className="space-y-3">
        {searches.map((item, index) => (
          <motion.button
            key={item.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: index * 0.06 }}
            onClick={() => onSelectCar(item.carData)}
            className="w-full flex items-center justify-between p-4 bg-white/70 dark:bg-stone-900/70 backdrop-blur-xl rounded-2xl border border-stone-200/60 dark:border-stone-800/60 hover:border-[#00D1FF]/40 dark:hover:border-[#00D1FF]/40 hover:bg-white dark:hover:bg-stone-850 hover:shadow-xl hover:shadow-[#00D1FF]/10 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 ease-out cursor-pointer group text-left transform-gpu"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-stone-100 dark:bg-stone-800 flex items-center justify-center text-stone-400 dark:text-stone-500 group-hover:bg-[#00D1FF]/10 group-hover:text-[#00D1FF] group-hover:scale-105 transition-all duration-300">
                <History className="w-5 h-5" />
              </div>
              <div>
                <p className="font-semibold text-stone-900 dark:text-stone-100 text-sm group-hover:text-[#00D1FF] transition-colors">
                  {item.brand} {item.model}
                </p>
                <p className="text-xs text-stone-400 dark:text-stone-500 mt-0.5">
                  {item.timeAgo}
                </p>
              </div>
            </div>
            
            <ChevronRight className="w-5 h-5 text-stone-400 dark:text-stone-600 group-hover:text-[#00D1FF] group-hover:translate-x-1 transition-all duration-300" />
          </motion.button>
        ))}
      </div>
    </motion.section>
  );
}
