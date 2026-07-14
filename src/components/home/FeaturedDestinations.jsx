import { Link } from 'react-router-dom';
import { ArrowRight, Star, Plane, MountainSnow } from 'lucide-react';
import Container from '../common/Container';
import ImageWithFallback from '../common/ImageWithFallback';
import { destinations } from '../../data/destinations';

export default function FeaturedDestinations() {
  const targetSlugs = ['switzerland', 'maldives', 'dubai', 'bali'];
  const featuredList = targetSlugs.map(slug => destinations.find(d => d.slug === slug)).filter(Boolean);

  if (featuredList.length < 4) return null;

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden bg-[#Fdfbf7]">
      {/* Subtle background element */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold to-transparent pointer-events-none"></div>

      <Container className="relative z-10">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-12 gap-8">
          <div className="max-w-2xl">
            <span className="text-forest font-bold uppercase tracking-[0.15em] text-[11px] mb-4 block">
              FEATURED DESTINATIONS
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-[3.25rem] font-serif font-bold text-charcoal mb-5 leading-[1.15]">
              Handpicked Places,<br/>Unforgettable Journeys
            </h2>
            <p className="text-charcoal/70 text-[15px] leading-relaxed max-w-xl">
              Explore some of the world's most loved destinations, selected for their natural beauty, culture, experiences and unforgettable travel opportunities.
            </p>
          </div>
          
          <div className="flex flex-col items-end gap-3">
            <Link 
              to="/destinations"
              className="inline-flex items-center gap-2 border border-forest hover:bg-forest text-forest hover:text-white px-7 py-3 rounded-full text-sm font-semibold transition-all duration-300"
            >
              View All Destinations
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
            <span className="text-[11px] text-charcoal/60 mr-2">Explore the world with Tourswale</span>
          </div>
        </div>

        {/* Dashed line and airplane */}
        <div className="relative w-full h-12 mb-6 hidden lg:block">
          <svg className="w-full h-full text-gold" preserveAspectRatio="none" viewBox="0 0 1000 50" fill="none">
            <path d="M0,25 Q250,5 500,25 T1000,5" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 6" fill="none" />
            <circle cx="150" cy="12" r="3.5" fill="currentColor" />
            <circle cx="430" cy="24" r="3.5" fill="currentColor" />
            <circle cx="600" cy="24" r="3.5" fill="currentColor" />
          </svg>
          <div className="absolute right-0 top-0 text-gold transform rotate-45 -translate-y-2">
            <Plane className="w-6 h-6 fill-current" />
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {featuredList.map((dest, index) => (
            <Link 
              key={dest.slug}
              to={`/destinations/${dest.slug}`} 
              className={`group relative h-[480px] rounded-3xl overflow-hidden block border-2 transition-colors duration-500 ${index === 0 ? 'border-gold shadow-lg shadow-gold/20' : 'border-transparent hover:border-gold/50'}`}
            >
              <ImageWithFallback 
                src={dest.heroImage} 
                alt={dest.name}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/10 to-black/90"></div>
              
              {/* Top Details */}
              <div className="absolute top-6 left-6 right-6 flex justify-between items-start">
                <div className="flex flex-col gap-2">
                  <span className="text-gold text-[10px] font-bold uppercase tracking-widest">{dest.region}</span>
                  {index === 0 && (
                    <div className="bg-[#Fdfbf7] px-2 py-1 rounded flex items-center gap-1.5 shadow-md w-max">
                      <MountainSnow className="w-3 h-3 text-gold" />
                      <span className="text-[9px] font-bold text-forest uppercase tracking-wider">Alpine Escape</span>
                    </div>
                  )}
                </div>
                <span className="text-white/40 font-serif text-[42px] font-bold tracking-tighter leading-none -mt-1">
                  0{index + 1}
                </span>
              </div>

              {/* Bottom Details */}
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                <div>
                  <h3 className="text-white font-serif font-bold text-[28px] mb-1">{dest.name}</h3>
                  <div className="flex items-center gap-3 text-[11px] text-white/90 font-medium">
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-gold fill-gold" />
                      <span>{index === 0 ? '4.9' : index === 1 ? '5.0' : index === 2 ? '4.8' : '4.9'}</span>
                    </div>
                    <span className="w-px h-2.5 bg-white/40"></span>
                    <span>{dest.toursCount || (index === 0 ? '10' : index === 1 ? '8' : index === 2 ? '12' : '15')} Tours</span>
                  </div>
                </div>
                
                <div className="w-10 h-10 rounded-full bg-[#Fdfbf7] flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110 shadow-lg shadow-black/20 shrink-0">
                  <ArrowRight className="w-4 h-4 text-forest" strokeWidth={2.5} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom Features */}
        <div className="mt-12 flex items-center justify-center gap-4 text-charcoal/60 text-[13px] font-medium">
          <span className="text-gold/80 hidden sm:block">🌿</span>
          <span className="flex items-center gap-3">
            <span>Curated journeys</span>
            <span className="w-1.5 h-1.5 rounded-full bg-gold/50"></span>
            <span>Trusted stays</span>
            <span className="w-1.5 h-1.5 rounded-full bg-gold/50"></span>
            <span>Personal support</span>
          </span>
          <span className="text-gold/80 hidden sm:block rotate-180">🌿</span>
        </div>

      </Container>
    </section>
  );
}
