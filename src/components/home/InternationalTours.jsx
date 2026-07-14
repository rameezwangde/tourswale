import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import PrimaryButton from '../common/PrimaryButton';
import ImageWithFallback from '../common/ImageWithFallback';
import { internationalTours } from '../../data/homeData';

export default function InternationalTours() {
  return (
    <section className="py-20 lg:py-28 bg-forest relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent pointer-events-none"></div>

      <Container className="relative z-10">
        <div className="text-center flex flex-col items-center mb-16">
          <SectionHeading 
            eyebrow="Explore The World"
            title="Discover Popular International Holiday Packages"
            description="Travel beyond borders with international tour packages covering iconic cities, tropical islands, scenic landscapes and cultural destinations. Whether you are planning a family holiday, honeymoon, group tour or luxury escape, Tourswale helps create a journey that matches your travel style."
            className="items-center text-center"
            light={true}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {internationalTours.map((tour) => (
            <div key={tour.id} className="bg-white rounded-3xl overflow-hidden hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] shadow-xl transition-all duration-300 group flex flex-col">
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback 
                  src={tour.image} 
                  alt={tour.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg text-[10px] font-bold text-forest uppercase tracking-wider flex items-center gap-1.5 shadow-sm">
                  <Clock className="w-3 h-3" /> {tour.duration}
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <span className="text-[10px] uppercase tracking-widest font-bold text-gold mb-2 block">
                  {tour.region}
                </span>
                
                <h3 className="text-2xl font-serif font-bold text-charcoal mb-4 group-hover:text-forest transition-colors">
                  {tour.name}
                </h3>
                
                <p className="text-charcoal/70 text-[13px] leading-relaxed mb-8 flex-grow">
                  {tour.description}
                </p>
                
                <Link 
                  to={`/tours?destination=${tour.id}`} 
                  className="inline-flex items-center text-forest font-bold text-[13px] hover:text-gold transition-colors mt-auto group/link"
                >
                  Explore Packages 
                  <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <PrimaryButton to="/tours?type=international" light={true}>
            View All International Packages
          </PrimaryButton>
        </div>
      </Container>
    </section>
  );
}
