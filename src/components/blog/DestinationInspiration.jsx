import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';
import Container from '../common/Container';
import ImageWithFallback from '../common/ImageWithFallback';
import { destinations } from '../../data/destinations';

export default function DestinationInspiration() {
  // Pre-select some popular destinations that have blog content
  const targetSlugs = ['dubai', 'bali', 'maldives', 'kashmir'];
  const inspirationDestinations = targetSlugs
    .map(slug => destinations.find(d => d.slug === slug))
    .filter(Boolean);

  if (inspirationDestinations.length === 0) return null;

  return (
    <section className="py-20 bg-charcoal text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent pointer-events-none"></div>
      
      <Container className="relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold mb-4">Explore Guides by Destination</h2>
          <p className="text-white/70 text-base max-w-2xl mx-auto">
            Find tailored advice, itineraries, and inspiration for your next specific location.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {inspirationDestinations.map(dest => (
            <Link 
              key={dest.id}
              to={`/blog?destination=${dest.slug}`}
              className="group block relative h-64 rounded-2xl overflow-hidden focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-charcoal"
            >
              <ImageWithFallback 
                src={dest.cardImage || dest.heroImage} 
                alt={dest.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent"></div>
              
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-2xl font-serif font-bold text-white mb-2 flex items-center gap-2 group-hover:text-gold transition-colors">
                  <MapPin className="w-5 h-5 text-gold" /> {dest.name}
                </h3>
                
                <div className="flex items-center gap-2 text-xs font-bold text-white/80 uppercase tracking-wider group-hover:text-white transition-colors transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 duration-300">
                  Explore Guides <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
