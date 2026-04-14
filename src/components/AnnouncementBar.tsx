import { motion } from "motion/react";

export function AnnouncementBar() {
  const text = "UNITED VFX LIVE • 15 MIN REEL DELIVERY • Chennai • Kodur • Tirupati • Book Now • ";
  
  return (
    <div className="bg-brand-red text-white py-1.5 overflow-hidden whitespace-nowrap border-b border-brand-red/20">
      <motion.div 
        className="inline-block"
        animate={{ x: [0, -1000] }}
        transition={{ 
          repeat: Infinity, 
          duration: 20, 
          ease: "linear" 
        }}
      >
        <span className="text-xs md:text-sm font-bold tracking-widest uppercase">
          {text.repeat(10)}
        </span>
      </motion.div>
    </div>
  );
}
