import { ShieldCheck, Calendar, Compass, Lock, ArrowRight, Sparkles } from 'lucide-react';
import Container from '../common/Container';
import ImageWithFallback from '../common/ImageWithFallback';
import { trustHighlights } from '../../data/homeData';
import { Link } from 'react-router-dom';

export default function TrustHighlights() {
  const getIcon = (name, className) => {
    switch (name) {
      case 'Shield': return <ShieldCheck className={className} strokeWidth={1.5} />;
      case 'Calendar': return <Calendar className={className} strokeWidth={1.5} />;
      case 'Compass': return <Compass className={className} strokeWidth={1.5} />;
      case 'Lock': return <Lock className={className} strokeWidth={1.5} />;
      default: return <ShieldCheck className={className} strokeWidth={1.5} />;
    }
  };

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden bg-forest text-white">
      {/* Background Mountain Line Art (SVG) */}
      <svg className="absolute bottom-0 left-0 w-full lg:w-1/3 h-[50%] pointer-events-none opacity-30 text-gold" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMax slice">
        <path d="M 0 500 L 100 350 L 150 420 L 250 250 L 320 380 L 450 280 L 500 350 L 500 500 Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M 80 400 L 120 300 L 180 380 L 280 180 L 350 320 L 480 200" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
        <path d="M 120 500 L 160 420 L 210 460 L 310 320" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
      </svg>
      
      {/* Background Top Lines */}
      <svg className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.15] text-gold" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M-100 200 C 300 -100, 800 300, 1500 -50" stroke="currentColor" strokeWidth="1" />
        <path d="M-100 220 C 300 -80, 800 320, 1500 -30" stroke="currentColor" strokeWidth="1" />
        <path d="M-100 240 C 300 -60, 800 340, 1500 -10" stroke="currentColor" strokeWidth="1" />
      </svg>

      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-center justify-between">
          
          {/* Left Column: Text & CTA */}
          <div className="w-full lg:w-[30%] flex flex-col items-start z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2.5 h-2.5 rotate-45 bg-gold" />
              <span className="text-gold font-bold uppercase tracking-[0.2em] text-[10px]">
                Travel With Confidence
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-[3.25rem] font-serif font-bold text-white mb-2 leading-[1.1]">
              The Tourswale
            </h2>
            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-serif italic text-gold mb-10 leading-[1.1]">
              Advantage
            </h2>

            <div className="w-full h-px bg-white/20 relative mb-10">
               <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rotate-45 bg-gold" />
            </div>
            
            <p className="text-white/80 text-[15px] leading-relaxed mb-10 max-w-sm">
              Thoughtful planning, trusted guidance and complete confidence at every stage of your journey.
            </p>

            <Link 
              to="/contact"
              className="inline-flex items-center gap-2 bg-gold hover:bg-[#e6be65] text-forest px-8 py-3.5 rounded-full text-sm font-bold transition-all duration-300 w-max shadow-xl shadow-black/20"
            >
              Plan Your Holiday
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          {/* Middle Column: Arched Image */}
          <div className="w-full lg:w-[30%] relative z-10 flex justify-center mt-12 lg:mt-0">
             <div className="relative w-full max-w-[340px] aspect-[1/1.65] rounded-t-[10rem] rounded-b-xl border border-gold/30 p-2.5">
                {/* Decorative Diamonds on sides of the border container */}
                <div className="absolute top-1/2 -left-1.5 -translate-y-1/2 w-3 h-3 rotate-45 bg-gold z-20" />
                <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 rotate-45 bg-gold z-20" />
                
                <div className="w-full h-full rounded-t-[10rem] rounded-b-xl overflow-hidden relative shadow-2xl">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=800&auto=format&fit=crop" 
                    alt="Tourswale Advantage"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Floating Pill inside image */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-forest/80 backdrop-blur-md border border-gold/30 rounded-full px-5 py-2.5 flex items-center gap-2 whitespace-nowrap shadow-xl">
                    <Sparkles className="w-4 h-4 text-gold" />
                    <span className="text-white text-[11px] font-serif tracking-wide">Travel, thoughtfully planned.</span>
                  </div>
                </div>
             </div>
          </div>

          {/* Right Column: 2x2 Grid of Cream Cards */}
          <div className="w-full lg:w-[40%] mt-12 lg:mt-0 z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
              {trustHighlights.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-[#Fdfbf7] rounded-xl p-6 lg:p-7 relative border border-gold/30 hover:-translate-y-1 transition-transform duration-300 shadow-xl shadow-black/20"
                >
                  <span className="absolute top-5 right-6 text-gold/60 font-serif text-[15px] font-bold">
                    0{index + 1}
                  </span>
                  
                  <div className="mb-6">
                    {getIcon(item.icon, "w-9 h-9 text-gold")}
                  </div>
                  
                  <h4 className="text-forest font-serif font-bold text-[17px] mb-2.5 pr-6 leading-tight">
                    {item.title}
                  </h4>
                  
                  <p className="text-charcoal/70 text-[11px] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
