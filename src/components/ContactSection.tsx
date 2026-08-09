import React, { useState } from 'react';
import { Check, Copy, ExternalLink, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export const ContactSection: React.FC = () => {
  const [copiedDiscord, setCopiedDiscord] = useState(false);

  const handleDiscordClick = () => {
    navigator.clipboard.writeText("@k1y7");
    setCopiedDiscord(true);
    setTimeout(() => {
      setCopiedDiscord(false);
    }, 2500);
  };

  return (
    <motion.footer 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="mt-12 mb-8 px-4 max-w-4xl mx-auto w-full"
    >
      <div className="bg-white/80 dark:bg-stone-900/80 backdrop-blur-xl border border-stone-200/80 dark:border-stone-800/80 rounded-3xl p-6 md:p-8 shadow-xl shadow-stone-950/5 dark:shadow-black/20 transition-all">
        {/* Title Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 pb-6 border-b border-stone-100 dark:border-stone-800/80">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00D1FF] animate-pulse"></span>
              <h3 className="text-xl md:text-2xl font-black text-stone-900 dark:text-white tracking-wide uppercase font-serif">
                Bize Ulaşın
              </h3>
            </div>
            <p className="text-xs md:text-sm text-stone-500 dark:text-stone-400 mt-1">
              Sorularınız, iş birlikleri ve önerileriniz için sosyal medya ve topluluk hesaplarımızdan bize erişebilirsiniz.
            </p>
          </div>
          <div className="px-3.5 py-1.5 rounded-full bg-stone-100/80 dark:bg-stone-800/80 text-[11px] font-bold text-stone-600 dark:text-stone-300 flex items-center gap-1.5 shrink-0 border border-stone-200/50 dark:border-stone-700/50">
            <MessageCircle className="w-3.5 h-3.5 text-[#00D1FF]" />
            <span>7/24 İletişim</span>
          </div>
        </div>

        {/* Social Accounts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/kiyayaxd"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-between p-4 rounded-2xl bg-stone-50/80 dark:bg-stone-950/60 border border-stone-200/60 dark:border-stone-800/60 hover:border-pink-500/50 dark:hover:border-pink-500/50 hover:bg-gradient-to-r hover:from-pink-500/10 hover:to-purple-500/10 hover:scale-[1.03] hover:shadow-xl hover:shadow-pink-500/10 active:scale-[0.98] transition-all duration-300 ease-out cursor-pointer transform-gpu"
          >
            <div className="flex items-center gap-3.5 min-w-0">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-300 shrink-0">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </div>
              <div className="truncate">
                <span className="block text-[11px] font-bold text-stone-400 uppercase tracking-wider">Instagram</span>
                <span className="block text-sm font-bold text-stone-900 dark:text-white truncate group-hover:text-pink-500 transition-colors">
                  @kiyayaxd
                </span>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-stone-400 group-hover:text-pink-500 transition-colors shrink-0 ml-2" />
          </a>

          {/* TikTok */}
          <a
            href="https://www.tiktok.com/@kiyayaxd"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-between p-4 rounded-2xl bg-stone-50/80 dark:bg-stone-950/60 border border-stone-200/60 dark:border-stone-800/60 hover:border-cyan-500/50 dark:hover:border-cyan-500/50 hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-stone-500/10 hover:scale-[1.03] hover:shadow-xl hover:shadow-cyan-500/10 active:scale-[0.98] transition-all duration-300 ease-out cursor-pointer transform-gpu"
          >
            <div className="flex items-center gap-3.5 min-w-0">
              <div className="w-11 h-11 rounded-xl bg-black dark:bg-stone-800 text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300 shrink-0 border border-stone-800">
                <svg className="w-6 h-6 fill-current text-[#00D1FF]" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3 15.68 6.34 6.34 0 0 0 9.34 22a6.34 6.34 0 0 0 6.34-6.34V9.37a8.16 8.16 0 0 0 4.76 1.52v-3.4a4.85 4.85 0 0 1-0.85-.8z" />
                </svg>
              </div>
              <div className="truncate">
                <span className="block text-[11px] font-bold text-stone-400 uppercase tracking-wider">TikTok</span>
                <span className="block text-sm font-bold text-stone-900 dark:text-white truncate group-hover:text-[#00D1FF] transition-colors">
                  @kiyayaxd
                </span>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-stone-400 group-hover:text-[#00D1FF] transition-colors shrink-0 ml-2" />
          </a>

          {/* Discord */}
          <button
            onClick={handleDiscordClick}
            type="button"
            className="group relative flex items-center justify-between p-4 rounded-2xl bg-stone-50/80 dark:bg-stone-950/60 border border-stone-200/60 dark:border-stone-800/60 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 hover:bg-indigo-500/10 hover:scale-[1.03] hover:shadow-xl hover:shadow-indigo-500/10 active:scale-[0.98] transition-all duration-300 ease-out cursor-pointer text-left w-full transform-gpu"
          >
            <div className="flex items-center gap-3.5 min-w-0">
              <div className="w-11 h-11 rounded-xl bg-[#5865F2] text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300 shrink-0">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
              </div>
              <div className="truncate">
                <span className="block text-[11px] font-bold text-stone-400 uppercase tracking-wider">Discord</span>
                <span className="block text-sm font-bold text-stone-900 dark:text-white truncate group-hover:text-[#5865F2] transition-colors">
                  @k1y7
                </span>
              </div>
            </div>
            <div className="shrink-0 ml-2">
              {copiedDiscord ? (
                <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded-md animate-fade-in">
                  <Check className="w-3 h-3" /> Kopyalandı
                </span>
              ) : (
                <Copy className="w-4 h-4 text-stone-400 group-hover:text-[#5865F2] transition-colors" />
              )}
            </div>
          </button>
        </div>

        {/* Footer Subtext */}
        <div className="mt-6 pt-4 border-t border-stone-100 dark:border-stone-800/60 flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-400 gap-2 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Velocita Automotive Lab. Tüm hakları saklıdır.</p>
          <p className="font-semibold text-stone-500 dark:text-stone-400">
            Tarafından Geliştirildi: <span className="text-[#00D1FF] font-bold">@kiyayaxd</span>
          </p>
        </div>
      </div>
    </motion.footer>
  );
};
