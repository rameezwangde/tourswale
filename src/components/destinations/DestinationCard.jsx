import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';
import ImageWithFallback from '../common/ImageWithFallback';

export default function DestinationCard({ destination, className = "" }) {
  if (!destination) return null;
  
  return (
    <Link 
      to={`/destinations/${destination.slug}`}
      className={`group flex flex-col bg-white rounded-[24px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-300 border border-gray-100 ${className}`}
    >
      {/* Image Section */}
      <div className="relative h-48 md:h-56 overflow-hidden shrink-0">
        <ImageWithFallback 
          src={destination.cardImage || destination.heroImage} 
          alt={destination.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent"></div>
        
        {/* Title over image */}
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
          <h3 className="text-xl md:text-2xl font-serif font-bold text-white group-hover:text-gold transition-colors flex items-center gap-2">
            <MapPin className="w-5 h-5 text-gold" /> {destination.name}
          </h3>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 md:p-8 flex flex-col flex-grow">
        <p className="text-charcoal/70 text-sm leading-relaxed mb-6 line-clamp-3">
          {destination.shortDescription}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
          <span className="text-xs font-semibold text-charcoal/60 uppercase tracking-wider">
            Explore Destination
          </span>
          <div className="w-8 h-8 rounded-full bg-forest text-white flex items-center justify-center group-hover:bg-gold transition-colors">
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </Link>
  );
}
