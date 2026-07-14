import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Users, Gem, Mountain, User, Sun, Briefcase, Map } from 'lucide-react';
import ImageWithFallback from '../common/ImageWithFallback';

const iconMap = {
  Heart: Heart,
  Users: Users,
  Gem: Gem,
  Mountain: Mountain,
  User: User,
  Sun: Sun,
  Briefcase: Briefcase,
  Map: Map
};

export default function HolidayTypeCard({ type, className = "" }) {
  const Icon = iconMap[type.icon] || Map;

  return (
    <Link 
      to={`/holiday-types/${type.slug}`}
      className={`group flex flex-col bg-white rounded-[24px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-300 border border-gray-100 ${className}`}
    >
      {/* Image Container */}
      <div className="relative h-48 md:h-56 overflow-hidden shrink-0">
        <ImageWithFallback 
          src={type.cardImage} 
          alt={type.imageAlt || type.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent"></div>
        
        {/* Category Icon Badge */}
        <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-forest shadow-sm group-hover:text-gold transition-colors">
          <Icon className="w-5 h-5" />
        </div>
        
        {/* Title over image */}
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl md:text-2xl font-serif font-bold text-white group-hover:text-gold transition-colors">
            {type.name}
          </h3>
        </div>
      </div>

      {/* Content Container */}
      <div className="p-6 md:p-8 flex flex-col flex-grow">
        <p className="text-charcoal/70 text-sm leading-relaxed mb-6 line-clamp-3">
          {type.shortDescription}
        </p>

        {/* Experience Tags */}
        <div className="flex flex-wrap gap-2 mb-8 mt-auto">
          {type.experienceHighlights.slice(0, 3).map((exp, index) => (
            <span key={index} className="inline-block px-3 py-1 bg-cream rounded-lg text-[10px] font-bold text-forest uppercase tracking-wider">
              {exp.title}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
          <span className="text-xs font-semibold text-charcoal/60">
            Best for: {type.idealFor[0].profile}
          </span>
          <div className="w-8 h-8 rounded-full bg-forest text-white flex items-center justify-center group-hover:bg-gold transition-colors">
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </Link>
  );
}
