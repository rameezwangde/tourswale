import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Star } from 'lucide-react';
import ImageWithFallback from '../common/ImageWithFallback';

export default function TourCard({ tour, onEnquire }) {
  // Format price
  const formattedPrice = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: tour.currency,
    maximumFractionDigits: 0
  }).format(tour.startingPrice);

  return (
    <div className="bg-white rounded-[24px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-300 group flex flex-col h-full border border-gray-100">
      
      {/* Image Section */}
      <div className="relative h-56 overflow-hidden">
        <ImageWithFallback 
          src={tour.cardImage} 
          alt={tour.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          <div className="bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg text-[10px] font-bold text-forest uppercase tracking-wider flex items-center gap-1.5">
            <Clock className="w-3 h-3" /> {tour.durationDays} Days
          </div>
        </div>
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          {tour.featured && (
            <div className="bg-gold px-3 py-1.5 rounded-lg text-[10px] font-bold text-white uppercase tracking-wider">
              Featured
            </div>
          )}
          {tour.popular && !tour.featured && (
            <div className="bg-charcoal px-3 py-1.5 rounded-lg text-[10px] font-bold text-white uppercase tracking-wider">
              Popular
            </div>
          )}
        </div>
      </div>
      
      {/* Content Section */}
      <div className="p-6 md:p-8 flex flex-col flex-grow">
        
        <div className="flex justify-between items-start mb-2">
          <span className="text-gold text-[10px] font-bold uppercase tracking-wider">
            {tour.destination}
          </span>
          {/* Sample Rating (As requested, marking it clear if it's UI only) */}
          <div className="flex items-center gap-1 text-xs font-semibold text-charcoal/70">
            <Star className="w-3.5 h-3.5 text-gold fill-gold" /> {tour.rating} <span className="text-charcoal/40 font-normal">({tour.reviewCount})</span>
          </div>
        </div>
        
        <h3 className="text-xl font-serif font-bold text-charcoal mb-3 group-hover:text-forest transition-colors line-clamp-2">
          <Link to={`/tours/${tour.slug}`}>{tour.title}</Link>
        </h3>
        
        <p className="text-charcoal/70 text-sm leading-relaxed mb-6 line-clamp-2 flex-grow">
          {tour.shortDescription}
        </p>
        
        {/* Highlights (max 3) */}
        <ul className="space-y-2 mb-6">
          {tour.highlights.slice(0, 3).map((highlight, index) => (
            <li key={index} className="flex items-start gap-2 text-xs text-charcoal/80">
              <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-1.5"></span>
              <span className="line-clamp-1">{highlight}</span>
            </li>
          ))}
        </ul>
        
        <hr className="border-gray-100 mb-6" />
        
        {/* Footer: Price & CTAs */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-auto">
          <div className="w-full sm:w-auto text-left">
            <p className="text-[10px] uppercase font-bold text-charcoal/50 tracking-wider">Starting from</p>
            <p className="text-xl font-bold text-forest">{formattedPrice}</p>
          </div>
          
          <div className="flex w-full sm:w-auto gap-2">
            <button 
              onClick={() => onEnquire(tour)}
              className="flex-1 sm:flex-none border border-forest text-forest hover:bg-forest hover:text-white px-4 py-2.5 rounded-xl text-xs font-bold transition-colors text-center"
            >
              Enquire
            </button>
            <Link 
              to={`/tours/${tour.slug}`}
              className="flex-1 sm:flex-none bg-forest hover:bg-emerald text-white px-4 py-2.5 rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-1.5 group/btn"
            >
              Details <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
            </Link>
          </div>
        </div>
        
      </div>
    </div>
  );
}
