import { Logo } from "./Logo";
import { Instagram, Youtube, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        <div className="col-span-2">
          <Logo />
          <p className="mt-6 text-zinc-500 max-w-sm">
            Professional cinematic reel shoots with 15-minute delivery. 
            Founded by UNITED VELTECH. Elevating creative standards in South India.
          </p>
          <div className="mt-8 flex gap-4">
            <a 
              href="https://www.instagram.com/united__vfx?igsh=ZDY0OHNzNTUwaXV5&utm_source=qr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-zinc-400 hover:text-brand-red transition-all"
            >
              <Instagram size={18} />
            </a>
            <a 
              href="https://youtube.com/@unitedvfx-l8u?si=I0Ns1nON03V1_qg1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-zinc-400 hover:text-brand-red transition-all"
            >
              <Youtube size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display font-bold uppercase tracking-widest text-sm mb-6">Locations</h4>
          <ul className="space-y-4 text-zinc-500 text-sm">
            <li>Chennai, Tamil Nadu</li>
            <li>Kodur, Andhra Pradesh</li>
            <li>Tirupati, Andhra Pradesh</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold uppercase tracking-widest text-sm mb-6">Contact</h4>
          <ul className="space-y-4 text-zinc-500 text-sm">
            <li className="flex items-center gap-2">
              <Phone size={14} className="text-brand-red" />
              +91 72072 99349
            </li>
            <li className="flex items-center gap-2">
              <Mail size={14} className="text-brand-red" />
              contact@unitedvfx.com
            </li>
            <li className="mt-4 pt-4 border-t border-white/5">
              <span className="text-xs text-zinc-600">Founder:</span>
              <p className="font-bold text-zinc-400">UNITED VELTECH</p>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 text-center text-zinc-600 text-xs">
        © {new Date().getFullYear()} UNITED VFX. All rights reserved.
      </div>
    </footer>
  );
}
