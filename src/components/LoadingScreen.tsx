import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState<number>(0);
  const [statusText, setStatusText] = useState<string>("Initializing...");

  useEffect(() => {
    // Total animation duration target: ~2.5 seconds (2500ms)
    const startTime = performance.now();
    const duration = 2500;

    const interval = setInterval(() => {
      const elapsed = performance.now() - startTime;
      const rawProgress = Math.min(100, Math.floor((elapsed / duration) * 100));

      setProgress(rawProgress);

      // Dynamic subtext updates based on progress percentage
      if (rawProgress < 20) {
        setStatusText("Initializing...");
      } else if (rawProgress < 45) {
        setStatusText("Preparing your experience...");
      } else if (rawProgress < 70) {
        setStatusText("Loading AI engine...");
      } else if (rawProgress < 92) {
        setStatusText("Almost ready...");
      } else {
        setStatusText("Welcome to Velocita.");
      }

      if (rawProgress >= 100) {
        clearInterval(interval);
        // Small graceful pause at 100% before triggering exit animation
        setTimeout(() => {
          onComplete();
        }, 300);
      }
    }, 25);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      key="initial-loading-screen"
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0, 
        scale: 1.03,
        filter: "blur(10px)"
      }}
      transition={{ 
        duration: 0.65, 
        ease: [0.22, 1, 0.36, 1] 
      }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center px-6 bg-[#080b11]/92 backdrop-blur-2xl text-white select-none overflow-hidden"
    >
      {/* Radial Cyan Ambient Glow Effect in Center */}
      <div className="absolute w-96 h-96 bg-[#00D1FF]/15 rounded-full blur-[120px] pointer-events-none animate-pulse" />

      {/* Main Center Content Box */}
      <div className="relative z-10 flex flex-col items-center max-w-sm w-full text-center space-y-8">
        
        {/* Velocita Logo Header */}
        <motion.div
          initial={{ opacity: 0, y: 15, scale: 0.95 }}
          animate={{ 
            opacity: [0.85, 1, 0.85], 
            y: 0,
            scale: [0.99, 1.01, 0.99]
          }}
          transition={{ 
            opacity: { repeat: Infinity, duration: 2.2, ease: "easeInOut" },
            scale: { repeat: Infinity, duration: 2.2, ease: "easeInOut" },
            y: { duration: 0.6, ease: "easeOut" }
          }}
          className="flex flex-col items-center space-y-2"
        >
          {/* Subtle Top Badge Icon */}
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#00D1FF]/10 border border-[#00D1FF]/30 text-[#00D1FF] text-[10px] font-bold uppercase tracking-[0.25em] shadow-[0_0_15px_rgba(0,209,255,0.2)]">
            <Sparkles className="w-3 h-3 text-[#00D1FF] animate-spin" style={{ animationDuration: '6s' }} />
            <span>Automotive Scan Lab</span>
          </div>

          {/* Main Logo Text with Neon Glow */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-serif tracking-[0.22em] text-transparent bg-clip-text bg-gradient-to-r from-white via-stone-100 to-[#00D1FF] drop-shadow-[0_0_25px_rgba(0,209,255,0.4)]">
            VELOCITA
          </h1>
        </motion.div>

        {/* Progress Section */}
        <div className="w-full space-y-3 px-2">
          {/* Progress Header Info */}
          <div className="flex items-center justify-between text-xs font-mono font-semibold tracking-wider text-stone-400">
            <span className="text-[10px] uppercase text-[#00D1FF]/90 font-sans tracking-widest font-bold">
              SYSTEM SYSTEM CHECK
            </span>
            <span className="text-[#00D1FF] font-bold text-sm">
              {progress}%
            </span>
          </div>

          {/* Neon Thin Progress Bar */}
          <div className="w-full h-1.5 rounded-full bg-stone-900/80 border border-stone-800/80 p-[1px] overflow-hidden shadow-inner backdrop-blur-md">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-[#00D1FF]/80 via-[#00D1FF] to-[#38bdf8] shadow-[0_0_12px_#00D1FF]"
              style={{ width: `${progress}%` }}
              transition={{ ease: "easeOut" }}
            />
          </div>

          {/* Dynamic Status Subtext */}
          <div className="h-6 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.p
                key={statusText}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.25 }}
                className="text-xs font-medium text-stone-400 tracking-wide"
              >
                {statusText}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>

      </div>

      {/* Bottom Minimal Copyright tag */}
      <div className="absolute bottom-8 text-[10px] font-semibold tracking-widest text-stone-600 uppercase">
        VELOCITA AI LABS • @kiyayaxd
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
