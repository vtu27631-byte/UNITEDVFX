import { Instagram, Youtube } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
import { BookingModal } from "./BookingModal";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 glass border-b border-white/5 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Logo />
        
        <div className="hidden md:flex items-center gap-6">
          <a 
            href="https://www.instagram.com/united__vfx?igsh=ZDY0OHNzNTUwaXV5&utm_source=qr" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white transition-colors"
          >
            <Instagram size={20} />
          </a>
          <a 
            href="https://youtube.com/@unitedvfx-l8u?si=I0Ns1nON03V1_qg1" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white transition-colors"
          >
            <Youtube size={20} />
          </a>
          <BookingModal>
            <Button className="bg-brand-red hover:bg-brand-red/90 text-white font-bold rounded-full px-8">
              Book Reel
            </Button>
          </BookingModal>
        </div>

        <div className="md:hidden">
          <BookingModal>
            <Button size="sm" className="bg-brand-red hover:bg-brand-red/90 text-white font-bold rounded-full">
              Book
            </Button>
          </BookingModal>
        </div>
      </div>
    </nav>
  );
}
