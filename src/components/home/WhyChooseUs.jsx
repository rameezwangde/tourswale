import { motion } from 'framer-motion';
import { Package, Hotel, MapPin, ShieldCheck, Plane } from 'lucide-react';

export default function WhyChooseUs() {
  const cards = [
    { 
      icon: Package, 
      title: "Custom\nPackages", 
      desc: "Tailor-made tours\nfor your needs",
      image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=400&auto=format&fit=crop" 
    },
    { 
      icon: Hotel, 
      title: "Handpicked\nHotels", 
      desc: "Stay in the best\nplaces to relax",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=400&auto=format&fit=crop" 
    },
    { 
      icon: MapPin, 
      title: "Local\nExperiences", 
      desc: "Discover authentic\ncultures & people",
      image: "https://images.unsplash.com/photo-1640103730337-b68df45672a9?q=80&w=400&auto=format&fit=crop" 
    },
    { 
      icon: ShieldCheck, 
      title: "Hassle-free\nTravel", 
      desc: "We take care of\nthe details",
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=400&auto=format&fit=crop" 
    }
  ];

  return (
    <section className="bg-[#0b291d] pt-28 pb-28 relative overflow-hidden z-10">
      
      {/* Decorative topographic lines */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c13.866 0 25.362 11.262 25.362 25.15 0 13.887-11.496 25.149-25.362 25.149-13.865 0-25.362-11.262-25.362-25.15C-14.362 29.262-2.866 18 11 18zm0 1c13.3 0 24.362 10.82 24.362 24.15 0 13.33-11.063 24.149-24.362 24.149-13.299 0-24.362-10.82-24.362-24.15C-13.362 29.82-2.299 19 11 19zm0 1c12.736 0 23.362 10.378 23.362 23.15 0 12.772-10.626 23.149-23.362 23.149-12.735 0-23.362-10.377-23.362-23.15C-12.362 30.378-1.736 20 11 20zm0 1c12.17 0 22.362 9.936 22.362 22.15 0 12.213-10.192 22.149-22.362 22.149-12.169 0-22.362-9.936-22.362-22.15C-11.362 30.936-1.169 21 11 21zm0 1c11.605 0 21.362 9.493 21.362 21.15 0 11.656-9.757 21.149-21.362 21.149-11.604 0-21.362-9.493-21.362-21.15C-10.362 31.493-.604 22 11 22zm0 1c11.039 0 20.362 9.052 20.362 20.15 0 11.097-9.323 20.149-20.362 20.149-11.038 0-20.362-9.052-20.362-20.15C-9.362 32.052-.038 23 11 23z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`
      }}></div>

      {/* Dashed trail and plane bottom left */}
      <div className="absolute bottom-16 left-0 opacity-20 hidden lg:block">
        <svg width="400" height="200" viewBox="0 0 400 200" fill="none">
           <path d="M-50 180 C 150 200, 100 50, 400 0" stroke="#D4AF37" strokeWidth="1.5" strokeDasharray="6 6" fill="transparent"/>
        </svg>
        <Plane className="w-8 h-8 text-[#D4AF37] absolute top-10 right-20 transform rotate-45" fill="currentColor"/>
      </div>
      
      {/* Dashed trail top right */}
      <div className="absolute top-0 right-0 opacity-20 hidden lg:block">
        <svg width="300" height="200" viewBox="0 0 300 200" fill="none">
           <path d="M350 200 C 250 200, 200 50, 0 0" stroke="#D4AF37" strokeWidth="1.5" strokeDasharray="6 6" fill="transparent"/>
        </svg>
      </div>

      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center relative z-10">
        
        {/* Left Content */}
        <div className="lg:col-span-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-[11px] font-bold tracking-[0.15em] uppercase mb-6" style={{ color: '#cca958' }}>Why Choose Tourswale?</h3>
            <h2 className="text-white text-[3.25rem] md:text-[3.75rem] font-serif font-bold mb-6 leading-[1.05] tracking-tight">
              Your Journey,<br/>
              <span style={{ color: '#e0b961' }}>Our Promise</span>
            </h2>
            
            {/* Divider with Plane (Dashed) */}
            <div className="flex items-center gap-4 mb-8 w-1/2">
              <div className="h-[1px] bg-gradient-to-r from-transparent to-white/40 flex-1 border-t border-dashed border-white/40"></div>
              <Plane className="w-5 h-5 transform rotate-45" style={{ color: '#cca958' }} strokeWidth={1.5} />
              <div className="h-[1px] bg-gradient-to-l from-transparent to-white/40 flex-1 border-t border-dashed border-white/40"></div>
            </div>

            <p className="text-white/80 text-[13px] leading-[1.9] mb-10 font-medium tracking-wide max-w-[320px]">
              We create unforgettable travel experiences through carefully crafted itineraries, trusted partnerships, premium accommodations, and personalized travel planning that makes every journey extraordinary.
            </p>
            <a href="#" className="inline-flex items-center font-bold text-[13px] hover:text-white transition-colors group tracking-wide" style={{ color: '#cca958' }}>
              Learn More About Us 
              <span className="ml-3 transform group-hover:translate-x-2 transition-transform">→</span>
            </a>
          </motion.div>
        </div>

        {/* Right Cards */}
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10 mt-12 lg:mt-0">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative h-[420px] md:h-[480px] rounded-[18px] overflow-hidden group border border-[#2b5945]"
            >
              {/* Solid dark green background */}
              <div className="absolute inset-0 bg-[#133627] z-0"></div>
              
              {/* Image at bottom fading seamlessly into the solid green above */}
              <div className="absolute bottom-0 left-0 right-0 h-[60%] z-0">
                <img src={card.image} alt={card.title.replace('\n', ' ')} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90" />
                {/* Gradient mask to feather the top edge of the image */}
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, #133627 0%, rgba(19,54,39,0) 45%, rgba(19,54,39,0) 100%)' }}></div>
              </div>

              {/* Content Box */}
              <div className="relative z-10 p-6 flex flex-col h-full pt-8">
                <div className="mb-6">
                  <div className="w-[46px] h-[46px] rounded-full border flex items-center justify-center bg-transparent backdrop-blur-sm" style={{ borderColor: '#cca958' }}>
                    <card.icon className="w-[20px] h-[20px] stroke-[1.2]" style={{ color: '#cca958' }} />
                  </div>
                </div>
                
                <h4 className="text-white font-serif text-[24px] font-semibold mb-3 leading-[1.2] whitespace-pre-line tracking-tight">{card.title}</h4>
                
                {/* Horizontal line separator */}
                <div className="w-8 h-[2px] mb-4" style={{ backgroundColor: '#cca958' }}></div>

                <p className="text-white/70 text-[11.5px] leading-[1.8] whitespace-pre-line font-medium tracking-wide">{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
