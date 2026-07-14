import { ShieldCheck, CalendarCheck, Map, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  const features = [
    { icon: ShieldCheck, title: "Best Prices", subtitle: "Guaranteed" },
    { icon: CalendarCheck, title: "Flexible", subtitle: "Bookings" },
    { icon: Map, title: "Expert Travel", subtitle: "Guidance" },
    { icon: Lock, title: "Safe & Secure", subtitle: "Travel" }
  ];

  return (
    <section className="relative w-full h-[95vh] min-h-[700px] flex items-center pt-24">
      {/* Full-width Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero-bg.png" 
          alt="Travel experiences" 
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient overlay to match the reference - white haze on the left */}
        <div className="absolute inset-0 bg-gradient-to-r from-cream/90 via-cream/60 to-transparent w-[80%] md:w-[60%]"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 w-full">
        <div className="max-w-2xl">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-[var(--font-condensed)] font-normal text-forest leading-[0.9] tracking-normal"
          >
            <span className="text-[4rem] md:text-[5rem] lg:text-[6rem]">COLLECT MOMENTS,</span><br />
            <span className="text-[5.5rem] md:text-[7rem] lg:text-[9rem] block mt-1 opacity-90 relative" style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.1)" }}>
              {/* Fake texture effect using SVG filter could go here, for now it's solid dark green */}
              <span className="bg-clip-text text-transparent bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-forest">
                NOT THINGS
              </span>
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-lg md:text-xl text-charcoal font-medium leading-snug max-w-sm"
          >
            Curated travel experiences for <br/> memories that stay with you forever.
          </motion.p>
          
          {/* Subtle separator line */}
          <motion.div 
             initial={{ opacity: 0, width: 0 }}
             animate={{ opacity: 1, width: 48 }}
             transition={{ duration: 0.8, delay: 0.4 }}
             className="h-[2px] bg-forest/20 mt-8 mb-8"
          ></motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap items-center gap-6 md:gap-10 mt-8"
          >
            {features.map((feat, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div className="text-forest p-1">
                  <feat.icon className="w-5 h-5 stroke-[1.5]" />
                </div>
                <div className="text-[10px] font-bold text-charcoal leading-tight uppercase tracking-widest">
                  {feat.title} <br/> <span className="font-semibold text-charcoal/60">{feat.subtitle}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
