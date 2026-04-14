import { AnnouncementBar } from "./components/AnnouncementBar";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Pricing } from "./components/Pricing";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-zinc-100 selection:bg-brand-red selection:text-white">
      <AnnouncementBar />
      <Navbar />
      <main>
        <Hero />
        <Pricing />
        
        {/* Additional Cinematic Section */}
        <section className="py-24 px-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(225,29,46,0.05)_0%,transparent_70%)]" />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-8 leading-tight">
              WHY CHOOSE <span className="text-brand-red italic">UNITED VFX?</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-12 mt-16">
              <div>
                <div className="text-brand-red font-display text-5xl font-bold mb-4">15</div>
                <div className="text-sm font-bold uppercase tracking-widest text-zinc-400">Minute Delivery</div>
              </div>
              <div>
                <div className="text-brand-red font-display text-5xl font-bold mb-4">4K</div>
                <div className="text-sm font-bold uppercase tracking-widest text-zinc-400">Ultra HD Quality</div>
              </div>
              <div>
                <div className="text-brand-red font-display text-5xl font-bold mb-4">PRO</div>
                <div className="text-sm font-bold uppercase tracking-widest text-zinc-400">VFX & Grading</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
