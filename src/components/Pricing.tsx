import { motion } from "motion/react";
import { Check, Star } from "lucide-react";
import { BookingModal } from "./BookingModal";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Basic",
    price: "1000",
    features: ["1 Professional Reel", "15 Min Delivery", "Basic Color Grading", "HD Quality"],
    popular: false,
  },
  {
    name: "Standard",
    price: "1500",
    features: ["2 Professional Reels", "15 Min Delivery", "Advanced VFX", "4K Quality", "Popular Choice"],
    popular: true,
  },
  {
    name: "Premium",
    price: "5000",
    features: ["5 Professional Reels", "Pro VFX & Editing", "BTS Footage Included", "4K Quality", "Priority Delivery"],
    popular: false,
  },
];

export function Pricing() {
  return (
    <section className="py-24 px-6 bg-zinc-950/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">PREMIUM PACKAGES</h2>
          <p className="text-zinc-400">Choose the perfect plan for your cinematic journey</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative p-8 rounded-3xl border ${
                plan.popular 
                  ? "bg-zinc-900 border-brand-red red-glow" 
                  : "bg-zinc-900/50 border-white/5"
              } flex flex-col`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-red text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full flex items-center gap-1">
                  <Star size={10} fill="white" /> Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-zinc-400 font-display font-bold uppercase tracking-widest text-sm mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">₹{plan.price}</span>
                  <span className="text-zinc-500 text-sm">/shoot</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-zinc-300">
                    <div className="w-5 h-5 rounded-full bg-brand-red/10 flex items-center justify-center flex-shrink-0">
                      <Check size={12} className="text-brand-red" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <BookingModal>
                <Button 
                  className={`w-full py-6 rounded-2xl font-bold transition-all ${
                    plan.popular 
                      ? "bg-brand-red hover:bg-brand-red/90 text-white" 
                      : "bg-white/5 hover:bg-white/10 text-white border border-white/10"
                  }`}
                >
                  Select {plan.name}
                </Button>
              </BookingModal>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
