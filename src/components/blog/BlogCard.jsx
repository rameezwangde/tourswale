import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import ImageWithFallback from '../common/ImageWithFallback';

export default function BlogCard({ article, className = "" }) {
  if (!article) return null;

  // Format date to readable string (e.g., Nov 10, 2023)
  const formattedDate = new Date(article.publishedDate).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <Link 
      to={`/blog/${article.slug}`}
      className={`group flex flex-col bg-white rounded-[22px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)] transition-all duration-300 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 ${className}`}
    >
      {/* Image Container */}
      <div className="relative h-48 md:h-56 overflow-hidden shrink-0">
        <ImageWithFallback 
          src={article.cardImage || article.heroImage} 
          alt={article.imageAlt || article.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="inline-block bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg text-[10px] font-bold text-forest uppercase tracking-wider shadow-sm">
            {article.categoryLabel}
          </span>
        </div>
      </div>

      {/* Content Container */}
      <div className="p-6 md:p-8 flex flex-col flex-grow">
        {/* Meta Info */}
        <div className="flex items-center gap-4 text-xs font-semibold text-charcoal/50 mb-4 uppercase tracking-wider">
          <span>{formattedDate}</span>
          <span className="w-1 h-1 rounded-full bg-charcoal/20"></span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            {article.readingTime}
          </span>
        </div>

        {/* Title & Excerpt */}
        <h3 className="text-xl md:text-2xl font-serif font-bold text-forest group-hover:text-gold transition-colors mb-4 line-clamp-2">
          {article.title}
        </h3>
        
        <p className="text-charcoal/70 text-sm leading-relaxed mb-6 line-clamp-3">
          {article.excerpt}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
          <span className="text-xs font-bold text-charcoal/80 uppercase tracking-wider group-hover:text-gold transition-colors">
            Read Article
          </span>
          <div className="w-8 h-8 rounded-full bg-forest text-white flex items-center justify-center group-hover:bg-gold transition-colors transform group-hover:translate-x-1 duration-300">
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </Link>
  );
}
