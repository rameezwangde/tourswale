import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import PrimaryButton from '../common/PrimaryButton';
import ImageWithFallback from '../common/ImageWithFallback';
import { internationalTours } from '../../data/homeData';

export default function InternationalTours() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <Container>
        <div className="text-center flex flex-col items-center mb-16">
          <SectionHeading 
            eyebrow="Explore The World"
            title="Discover Popular International Holiday Packages"
            description="Travel beyond borders with international tour packages covering iconic cities, tropical islands, scenic landscapes and cultural destinations. Whether you are planning a family holiday, honeymoon, group tour or luxury escape, Tourswale helps create a journey that matches your travel style."
            className="items-center text-center"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {internationalTours.map((tour) => (
            <div key={tour.id} className="bg-white border border-gray-100 rounded-3xl overflow-hidden hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all duration-300 group flex flex-col">
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback 
                  src={tour.image} 
                  alt={tour.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg text-[10px] font-bold text-forest uppercase tracking-wider flex items-center gap-1.5">
                  <Clock className="w-3 h-3" /> {tour.duration}
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <span className="text-gold text-[10px] font-bold uppercase tracking-wider mb-2 block">{tour.region}</span>
                
                <h3 className="text-2xl font-serif font-bold text-charcoal mb-3 group-hover:text-forest transition-colors">
                  {tour.name}
                </h3>
                
                <p className="text-charcoal/70 text-sm leading-relaxed mb-8 flex-grow">
                  {tour.description}
                </p>
                
                <Link 
                  to={`/destinations/${tour.id}`}
                  className="inline-flex items-center bg-cream/50 group-hover:bg-forest group-hover:text-white text-forest px-5 py-2.5 rounded-xl text-xs font-bold transition-colors mt-auto w-max"
                >
                  Explore Packages <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <PrimaryButton to="/tours?type=international">
            Explore International Tours
          </PrimaryButton>
        </div>
      </Container>
    </section>
  );
}
