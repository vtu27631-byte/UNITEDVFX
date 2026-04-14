import { motion } from "motion/react";
import { MapPin, Camera, Zap } from "lucide-react";
import { BookingModal } from "./BookingModal";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden py-20">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-red/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-brand-red/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-8"
        >
          <Zap size={14} className="text-brand-red fill-brand-red" />
          <span className="text-xs font-bold tracking-widest uppercase text-zinc-400">
            15 Minutes Fast Delivery
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-display font-bold tracking-tighter mb-8 leading-[0.9]"
        >
          CINEMATIC <br />
          <span className="text-brand-red text-glow">REEL SHOOTS</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-12"
        >
          Elevate your presence with high-end VFX and professional cinematography. 
          The ultimate reel experience in Chennai, Kodur, and Tirupati.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4"
        >
          <BookingModal>
            <Button size="lg" className="bg-brand-red hover:bg-brand-red/90 text-white font-bold text-lg px-12 py-8 rounded-full red-glow transition-all hover:scale-105">
              <Camera className="mr-2" /> Book Your Shoot
            </Button>
          </BookingModal>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 flex flex-wrap justify-center gap-8 text-zinc-500"
        >
          {["Chennai", "Kodur", "Tirupati"].map((city) => (
            <div key={city} className="flex items-center gap-2">
              <MapPin size={16} className="text-brand-red" />
              <span className="font-display font-medium uppercase tracking-widest text-sm">{city}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
