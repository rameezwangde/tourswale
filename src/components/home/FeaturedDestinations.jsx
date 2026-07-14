import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import ImageWithFallback from '../common/ImageWithFallback';
import { destinations } from '../../data/destinations';

export default function FeaturedDestinations() {
  // We need Switzerland, Maldives, Dubai, Bali
  const targetSlugs = ['switzerland', 'maldives', 'dubai', 'bali'];
  const featuredList = targetSlugs.map(slug => destinations.find(d => d.slug === slug)).filter(Boolean);

  if (featuredList.length < 4) return null;

  const [mainDest, sideDest1, sideDest2, sideDest3] = featuredList;

  const DestinationCard = ({ dest, isMain = false }) => (
    <Link 
      to={`/destinations/${dest.slug}`} 
      className={`group relative rounded-3xl overflow-hidden block ${isMain ? 'h-[500px] lg:h-[600px]' : 'h-[240px] lg:h-[285px]'}`}
    >
      <ImageWithFallback 
        src={isMain ? dest.heroImage : dest.cardImage} 
        alt={dest.name}
        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-6 lg:p-8">
        <div className="flex justify-between items-end">
          <div>
            <span className="text-gold text-[10px] font-bold uppercase tracking-wider mb-2 block">{dest.region}</span>
            <h3 className={`${isMain ? 'text-3xl lg:text-4xl' : 'text-xl lg:text-2xl'} font-serif font-bold text-white mb-2`}>{dest.name}</h3>
            {isMain && (
              <p className="text-white/80 text-sm mb-4 max-w-md hidden md:block">{dest.shortDescription}</p>
            )}
            <div className="flex items-center gap-4 text-xs font-semibold text-white/90">
              <span className="flex items-center gap-1">
                <Star className="w-3.5 h-3.5 text-gold fill-gold" /> {dest.rating}
              </span>
              <span>{dest.numberOfTours} Tours</span>
            </div>
          </div>
          <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-white group-hover:text-forest transition-colors shrink-0">
            <ArrowRight className="w-5 h-5 transition-transform group-hover:-rotate-45" />
          </div>
        </div>
      </div>
    </Link>
  );

  return (
    <section className="py-20 lg:py-28 bg-white">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-16">
          <SectionHeading 
            eyebrow="Featured Destinations"
            title="Handpicked Places, Unforgettable Journeys"
            description="Explore some of the world’s most loved destinations, selected for their natural beauty, culture, experiences and unforgettable travel opportunities."
            className="md:w-2/3"
          />
          <Link to="/destinations" className="inline-flex items-center text-forest font-bold text-sm hover:text-gold transition-colors pb-2">
            View All Destinations <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Card */}
          <div className="lg:col-span-7">
            <DestinationCard dest={mainDest} isMain={true} />
          </div>
          
          {/* Side Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <DestinationCard dest={sideDest1} />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-full">
              <DestinationCard dest={sideDest2} />
              <DestinationCard dest={sideDest3} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
