import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Compass, Bed, Map, HeadphonesIcon, Plane, User } from 'lucide-react';
import Container from '../common/Container';
import ImageWithFallback from '../common/ImageWithFallback';
import { domesticTours } from '../../data/homeData';

export default function DomesticTours() {
  const topThree = domesticTours.slice(0, 3);

  return (
    <section className="py-20 lg:py-28 bg-[#Fdfbf7] relative overflow-hidden">
      {/* Background Topo Map SVG (Simplified) */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold to-transparent pointer-events-none"></div>

      <Container className="relative z-10">
        {/* Header and Filters */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-12 gap-8">
          <div className="w-full lg:w-3/5">
            <span className="text-forest font-bold uppercase tracking-[0.15em] text-[11px] mb-4 block">
              DISCOVER INDIA
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-[3.25rem] font-serif font-bold text-charcoal mb-4 leading-[1.15]">
              Explore the Best Domestic <br className="hidden lg:block"/>Tour Packages in India
            </h2>
            <p className="text-charcoal/70 text-[15px] leading-relaxed max-w-2xl">
              From the snow-covered valleys of Kashmir to the peaceful backwaters of Kerala, Tourswale brings you thoughtfully curated holiday experiences across India.
            </p>
          </div>
          
          <div className="w-full lg:w-2/5 flex flex-col items-end gap-5">
            <div className="flex flex-wrap gap-2.5 justify-end">
              <button className="px-5 py-2 rounded-full bg-forest text-white text-xs font-semibold shadow-md">All India</button>
              <button className="px-5 py-2 rounded-full bg-transparent border border-gold/40 text-charcoal text-xs font-semibold hover:bg-white transition-colors">North</button>
              <button className="px-5 py-2 rounded-full bg-transparent border border-gold/40 text-charcoal text-xs font-semibold hover:bg-white transition-colors">South</button>
              <button className="px-5 py-2 rounded-full bg-transparent border border-gold/40 text-charcoal text-xs font-semibold hover:bg-white transition-colors">Heritage</button>
              <button className="px-5 py-2 rounded-full bg-transparent border border-gold/40 text-charcoal text-xs font-semibold hover:bg-white transition-colors">Nature</button>
            </div>
            
            <Link 
              to="/tours?type=domestic"
              className="inline-flex items-center gap-2 text-forest font-bold hover:text-gold transition-colors text-[13px] mr-1 mt-2"
            >
              View All Packages
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>

        {/* Flight Path Graphic */}
        <div className="relative w-full h-16 mb-4 hidden lg:block">
           <svg className="w-full h-full text-gold" preserveAspectRatio="none" viewBox="0 0 1000 80" fill="none">
             <path d="M50,40 Q300,0 500,40 T950,40" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 6" fill="none" />
           </svg>
           {/* Pins */}
           <div className="absolute left-[15%] top-1/2 -translate-y-[45%] flex flex-col items-center">
             <div className="w-7 h-7 rounded-full bg-gold flex items-center justify-center shadow-lg text-white font-bold font-serif text-[13px]">01</div>
             <MapPin className="w-5 h-5 text-gold -mt-1.5" strokeWidth={3} />
           </div>
           <div className="absolute left-[50%] top-1/2 -translate-y-1/2 flex flex-col items-center -translate-x-1/2 mt-1">
             <div className="w-7 h-7 rounded-full bg-gold flex items-center justify-center shadow-lg text-white font-bold font-serif text-[13px]">02</div>
             <MapPin className="w-5 h-5 text-gold -mt-1.5" strokeWidth={3} />
           </div>
           <div className="absolute right-[25%] top-1/2 -translate-y-[45%] flex flex-col items-center">
             <div className="w-7 h-7 rounded-full bg-gold flex items-center justify-center shadow-lg text-white font-bold font-serif text-[13px]">03</div>
             <MapPin className="w-5 h-5 text-gold -mt-1.5" strokeWidth={3} />
           </div>
           
           <div className="absolute right-[33%] top-1/2 -translate-y-[80%] text-gold transform rotate-12">
              <Plane className="w-6 h-6 fill-current" />
           </div>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {topThree.map((tour, index) => (
            <div 
              key={tour.id} 
              className={`bg-white rounded-[1.5rem] flex flex-col relative group transition-all duration-300 ${
                index === 0 
                  ? 'border-2 border-gold shadow-[0_20px_40px_rgba(0,0,0,0.08)] -translate-y-2 z-10' 
                  : 'border border-gold/20 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:border-gold/50 hover:shadow-[0_15px_35px_rgba(0,0,0,0.06)] hover:-translate-y-1'
              }`}
            >
              {/* Image Section */}
              <div className="relative h-[220px] lg:h-[240px] p-2.5 pb-0">
                <ImageWithFallback 
                  src={tour.image} 
                  alt={tour.name}
                  className="w-full h-full object-cover rounded-t-[1.2rem] rounded-b-[0.5rem]"
                />
                
                {/* Stamp Badge */}
                <div className="absolute top-6 right-6 bg-[#fdfbf7] p-1.5 rounded-sm shadow-md rotate-3 transform group-hover:rotate-0 transition-transform border-2 border-dashed border-[#d06b52]/30">
                  <div className="border-[1.5px] border-[#d06b52] px-2 py-1 flex flex-col items-center justify-center min-w-[64px]">
                    <span className="text-[#d06b52] text-[9px] font-bold tracking-widest uppercase mb-0.5">{tour.name}</span>
                    <svg className="w-6 h-5 text-[#d06b52] opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M2 20h20 M5 20l4-14 3 6 4-8 5 16"/>
                    </svg>
                  </div>
                </div>

                {/* Overlapping Action Button for 1st card */}
                {index === 0 && (
                  <div className="absolute -bottom-5 right-8 w-11 h-11 bg-forest rounded-full border-4 border-white shadow-lg flex items-center justify-center z-20 hover:scale-110 transition-transform">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                )}
              </div>

              {/* Content Section */}
              <div className="p-6 lg:p-7 flex flex-col grow relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-[26px] font-serif font-bold text-forest">{tour.name}</h3>
                  <div className="flex flex-col items-end pt-1">
                    <span className="text-[12px] font-bold text-charcoal tracking-wider">{tour.duration.toUpperCase()}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap items-center gap-1.5 mb-5 text-[9px] font-bold text-charcoal/60 uppercase tracking-widest">
                  <User className="w-3.5 h-3.5 text-gold" strokeWidth={2.5} />
                  {tour.tags.map((tag, i) => (
                    <span key={i} className="flex items-center gap-1.5">
                      <span>{tag}</span>
                      {i < tour.tags.length - 1 && <span className="w-1 h-1 rounded-full bg-gold/50" />}
                    </span>
                  ))}
                </div>

                <p className="text-charcoal/70 text-[13px] leading-relaxed mb-6 flex-grow">
                  {tour.description}
                </p>

                <Link 
                  to={`/tours/${tour.id}`}
                  className="inline-flex items-center gap-2 text-forest font-bold text-[13px] hover:text-gold transition-colors w-max"
                >
                  Explore Tours
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Feature Bar */}
        <div className="mt-16 bg-white/80 backdrop-blur-md border border-gold/30 rounded-full px-8 py-5 flex flex-col md:flex-row justify-between items-center max-w-5xl mx-auto shadow-[0_10px_30px_rgba(0,0,0,0.04)] gap-4 md:gap-0">
          <div className="flex items-center gap-3">
            <Compass className="w-[18px] h-[18px] text-forest" strokeWidth={2} />
            <span className="text-[13px] font-medium text-charcoal">Custom itineraries</span>
          </div>
          <div className="hidden md:block w-px h-6 bg-gold/30"></div>
          
          <div className="flex items-center gap-3">
            <Bed className="w-[18px] h-[18px] text-forest" strokeWidth={2} />
            <span className="text-[13px] font-medium text-charcoal">Handpicked stays</span>
          </div>
          <div className="hidden md:block w-px h-6 bg-gold/30"></div>
          
          <div className="flex items-center gap-3">
            <Map className="w-[18px] h-[18px] text-forest" strokeWidth={2} />
            <span className="text-[13px] font-medium text-charcoal">Local experiences</span>
          </div>
          <div className="hidden md:block w-px h-6 bg-gold/30"></div>
          
          <div className="flex items-center gap-3">
            <HeadphonesIcon className="w-[18px] h-[18px] text-forest" strokeWidth={2} />
            <span className="text-[13px] font-medium text-charcoal">Personal support</span>
          </div>
        </div>

      </Container>
    </section>
  );
}
