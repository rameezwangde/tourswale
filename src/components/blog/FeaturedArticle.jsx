import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import Container from '../common/Container';
import ImageWithFallback from '../common/ImageWithFallback';

export default function FeaturedArticle({ article }) {
  if (!article) return null;

  const formattedDate = new Date(article.publishedDate).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <section className="py-12 bg-cream">
      <Container>
        <Link 
          to={`/blog/${article.slug}`}
          className="group block relative rounded-[32px] overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-cream"
        >
          <div className="flex flex-col lg:flex-row min-h-[400px]">
            {/* Image (Right side on desktop) */}
            <div className="lg:w-1/2 relative h-64 lg:h-auto order-1 lg:order-2 overflow-hidden">
              <ImageWithFallback 
                src={article.heroImage} 
                alt={article.imageAlt || article.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
            
            {/* Content (Left side on desktop) */}
            <div className="lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center order-2 lg:order-1 relative z-10 bg-white">
              <span className="text-gold text-[10px] font-bold uppercase tracking-wider mb-6 inline-block">
                FEATURED TRAVEL GUIDE
              </span>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-forest mb-6 leading-tight group-hover:text-gold transition-colors duration-300">
                {article.title}
              </h2>
              
              <p className="text-charcoal/70 text-base md:text-lg leading-relaxed mb-8">
                {article.excerpt}
              </p>
              
              <div className="flex flex-wrap items-center gap-6 mt-auto">
                <div className="flex items-center gap-4 text-xs font-semibold text-charcoal/50 uppercase tracking-wider">
                  <span>{formattedDate}</span>
                  <span className="w-1 h-1 rounded-full bg-charcoal/20"></span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {article.readingTime}
                  </span>
                </div>
                
                <div className="flex items-center gap-2 text-sm font-bold text-forest uppercase tracking-wider group-hover:text-gold transition-colors ml-auto">
                  Read Full Guide
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </Link>
      </Container>
    </section>
  );
}
