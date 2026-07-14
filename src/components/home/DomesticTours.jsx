import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import PrimaryButton from '../common/PrimaryButton';
import ImageWithFallback from '../common/ImageWithFallback';
import { domesticTours } from '../../data/homeData';

export default function DomesticTours() {
  return (
    <section className="py-20 lg:py-28 bg-cream/30">
      <Container>
        <div className="text-center flex flex-col items-center mb-16">
          <SectionHeading 
            eyebrow="Discover India"
            title="Explore the Best Domestic Tour Packages in India"
            description="From the snow-covered valleys of Kashmir to the peaceful backwaters of Kerala, Tourswale brings you thoughtfully curated domestic holiday packages across India. Discover cultural landmarks, beaches, mountains, wildlife, heritage cities and spiritual destinations through itineraries designed for comfort and convenience."
            className="items-center text-center"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {domesticTours.map((tour) => (
            <div key={tour.id} className="bg-white rounded-3xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-shadow duration-300 group flex flex-col">
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
                <div className="flex flex-wrap gap-2 mb-4">
                  {tour.tags.map(tag => (
                    <span key={tag} className="bg-cream text-charcoal/70 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-2xl font-serif font-bold text-charcoal mb-3 group-hover:text-forest transition-colors">
                  {tour.name}
                </h3>
                
                <p className="text-charcoal/70 text-sm leading-relaxed mb-8 flex-grow">
                  {tour.description}
                </p>
                
                <Link 
                  to={`/destinations/${tour.id}`}
                  className="inline-flex items-center text-forest font-bold text-sm hover:text-gold transition-colors mt-auto"
                >
                  Explore Tours <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <PrimaryButton to="/tours?type=domestic">
            View All India Tours
          </PrimaryButton>
        </div>
      </Container>
    </section>
  );
}
