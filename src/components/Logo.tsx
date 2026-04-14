import { motion } from "motion/react";

export function Logo() {
  return (
    <div className="flex flex-col items-center justify-center group cursor-pointer transition-all">
      <div className="flex items-center text-2xl md:text-3xl font-sans tracking-tight">
        <span className="italic font-black text-white slanted-forward">United</span>
        <span className="mx-1 text-[#e11d2e] font-bold text-3xl drop-shadow-[0_0_8px_rgba(225,29,46,0.5)]">/</span>
        <span className="font-black text-white uppercase tracking-tighter">vfx</span>
      </div>
      
      {/* Dynamic Red Swoosh Underline - Tapered Shape */}
      <div className="relative w-full h-3 mt-0.5 overflow-hidden">
        <svg 
          viewBox="0 0 200 20" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0 10 Q 50 5, 200 15 L 200 18 Q 50 12, 0 10 Z"
            fill="url(#swoosh-gradient)"
            initial={{ scaleX: 0, opacity: 0, originX: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
          <defs>
            <linearGradient id="swoosh-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#e11d2e" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#e11d2e" stopOpacity="1" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .slanted-forward {
          transform: skewX(-8deg);
          display: inline-block;
        }
      `}} />
    </div>
  );
}
