import { motion } from 'framer-motion';
import { MapPin, Star, Plane, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { destinations } from '../../data/destinations';

export default function Destinations() {
  // We only show the first 4 in the featured section
  const featuredDestinations = destinations.slice(0, 4);

  return (
    <section className="bg-[#FAF9F6] pt-28 pb-20 relative overflow-hidden z-10">
      
      {/* Decorative Topographic Background Left */}
      <div className="absolute top-0 left-0 bottom-0 w-1/3 opacity-[0.04] pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c13.866 0 25.362 11.262 25.362 25.15 0 13.887-11.496 25.149-25.362 25.149-13.865 0-25.362-11.262-25.362-25.15C-14.362 29.262-2.866 18 11 18zm0 1c13.3 0 24.362 10.82 24.362 24.15 0 13.33-11.063 24.149-24.362 24.149-13.299 0-24.362-10.82-24.362-24.15C-13.362 29.82-2.299 19 11 19zm0 1c12.736 0 23.362 10.378 23.362 23.15 0 12.772-10.626 23.149-23.362 23.149-12.735 0-23.362-10.377-23.362-23.15C-12.362 30.378-1.736 20 11 20zm0 1c12.17 0 22.362 9.936 22.362 22.15 0 12.213-10.192 22.149-22.362 22.149-12.169 0-22.362-9.936-22.362-22.15C-11.362 30.936-1.169 21 11 21zm0 1c11.605 0 21.362 9.493 21.362 21.15 0 11.656-9.757 21.149-21.362 21.149-11.604 0-21.362-9.493-21.362-21.15C-10.362 31.493-.604 22 11 22zm0 1c11.039 0 20.362 9.052 20.362 20.15 0 11.097-9.323 20.149-20.362 20.149-11.038 0-20.362-9.052-20.362-20.15C-9.362 32.052-.038 23 11 23z' fill='%230D3B2E' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`
      }}></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 relative">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-4 mb-5">
              <h3 className="text-[#cca958] text-[11px] font-bold tracking-[0.1em] uppercase">Featured Destinations</h3>
              <div className="h-[1px] bg-[#cca958] w-12"></div>
              <Plane className="w-[14px] h-[14px] text-[#cca958] transform rotate-90" strokeWidth={2.5} />
            </div>
            
            <h2 className="text-[2.75rem] md:text-[3.25rem] font-serif font-bold text-[#0f2e23] leading-[1.05] tracking-tight">
              Handpicked Places,<br/>
              <span className="text-[#cca958] font-normal italic">Unforgettable Journeys</span>
            </h2>
            
            <p className="mt-5 text-[#333333] text-[13px] max-w-[450px] leading-[1.7] font-medium tracking-wide">
              Explore our most loved destinations around the world.<br/>
              Carefully chosen for their beauty, culture and experiences.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="hidden md:flex relative mt-10 md:mt-0 items-center justify-end w-full md:w-auto"
          >
            <button className="text-[11px] font-bold text-[#0f2e23] uppercase tracking-[0.1em] hover:text-[#cca958] transition-colors flex items-center gap-3 group relative z-20">
              View All Destinations
              <span className="transform group-hover:translate-x-1 transition-transform text-lg leading-none font-light">→</span>
            </button>
            
            {/* Dashed trail top right */}
            <div className="absolute -top-[120px] -right-20 opacity-30 z-10 pointer-events-none">
              <svg width="250" height="250" viewBox="0 0 250 250" fill="none">
                 <path d="M220 20 C 180 20, 180 150, 40 230" stroke="#000" strokeWidth="1" strokeDasharray="5 5" fill="transparent"/>
              </svg>
              <Plane className="w-5 h-5 text-[#cca958] absolute top-1 right-[22px] transform rotate-[135deg]" fill="currentColor" strokeWidth={0}/>
            </div>
          </motion.div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {featuredDestinations.map((dest, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative h-[480px] rounded-[20px] overflow-hidden group shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-200"
            >
              {/* Background gradient block for bottom half */}
              <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-[#0b291d] z-0"></div>

              {/* Image filling top half and fading into bottom green block */}
              <div className="absolute top-0 left-0 right-0 h-[60%] z-0">
                <img 
                  src={dest.cardImage} 
                  alt={dest.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0b291d]"></div>
              </div>

              {/* Top Pills */}
              <div className="absolute top-4 left-4 right-4 flex justify-between items-start z-20">
                <div className="flex items-center gap-[6px] bg-black/40 backdrop-blur-md px-[10px] py-[4px] rounded-full text-white">
                  <Star className="w-[10px] h-[10px] text-[#cca958] fill-[#cca958]" />
                  <span className="text-[10px] font-bold mt-[1px]">{dest.rating}</span>
                </div>
                <div className="bg-black/40 backdrop-blur-md px-3 py-[4px] rounded-full text-white">
                  <span className="text-[9px] font-bold tracking-widest uppercase mt-[1px] block">{dest.numberOfTours} TOURS</span>
                </div>
              </div>

              {/* Bottom Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <div className="flex items-center gap-[6px] text-white/70 mb-2">
                  <MapPin className="w-[12px] h-[12px]" />
                  <span className="text-[9px] font-bold tracking-[0.15em] uppercase">{dest.region}</span>
                </div>
                
                <h3 className="text-white text-[28px] font-serif font-semibold mb-3 tracking-tight">{dest.name}</h3>
                
                <p className="text-[#c1d1c8] text-[11px] leading-[1.7] font-medium tracking-wide mb-6 min-h-[38px] pr-2 line-clamp-2">
                  {dest.shortDescription}
                </p>

                <div className="flex items-center gap-3 cursor-pointer group/btn w-max">
                  <div className="w-[28px] h-[28px] rounded-full border border-[#cca958] flex items-center justify-center transition-colors group-hover/btn:bg-[#cca958]">
                    <ArrowUpRight className="w-[14px] h-[14px] text-[#cca958] group-hover/btn:text-[#0b291d] transition-colors" strokeWidth={2.5}/>
                  </div>
                  <span className="text-[#cca958] text-[10px] font-bold tracking-[0.15em] uppercase transition-colors">
                    Explore Packages
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Carousel Pagination */}
        <div className="flex items-center justify-center gap-5 mt-14">
          <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-400 hover:text-charcoal hover:border-charcoal transition-colors bg-white">
            <ChevronLeft className="w-4 h-4" />
          </button>
          
          <div className="flex items-center gap-[6px]">
            <button className="w-[6px] h-[6px] rounded-full bg-[#cca958]"></button>
            <button className="w-[5px] h-[5px] rounded-full bg-gray-300 hover:bg-gray-400 transition-colors"></button>
            <button className="w-[5px] h-[5px] rounded-full bg-gray-300 hover:bg-gray-400 transition-colors"></button>
            <button className="w-[5px] h-[5px] rounded-full bg-gray-300 hover:bg-gray-400 transition-colors"></button>
            <button className="w-[5px] h-[5px] rounded-full bg-gray-300 hover:bg-gray-400 transition-colors"></button>
          </div>

          <button className="w-8 h-8 rounded-full bg-[#0d3429] flex items-center justify-center text-white hover:bg-emerald transition-colors shadow-md">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
