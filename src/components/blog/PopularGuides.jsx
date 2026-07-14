import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import Container from '../common/Container';
import ImageWithFallback from '../common/ImageWithFallback';

export default function PopularGuides({ articles }) {
  if (!articles || articles.length === 0) return null;

  return (
    <section className="py-20 bg-white border-b border-gray-100">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl font-serif font-bold text-forest mb-4">Popular Travel Guides</h2>
            <p className="text-charcoal/70 text-base max-w-2xl">
              Our most read articles and essential planning resources.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.slice(0, 4).map((article, index) => (
            <Link 
              key={article.id} 
              to={`/blog/${article.slug}`}
              className="group flex flex-col bg-cream/50 rounded-2xl overflow-hidden hover:bg-forest transition-colors duration-500 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2"
            >
              <div className="p-6 md:p-8 flex flex-col h-full relative z-10">
                {/* Number / Ranking */}
                <div className="text-4xl font-serif font-bold text-gold/20 mb-6 group-hover:text-gold/40 transition-colors">
                  0{index + 1}
                </div>
                
                <h3 className="font-serif font-bold text-lg text-forest group-hover:text-white transition-colors mb-4 line-clamp-3">
                  {article.title}
                </h3>
                
                <div className="flex items-center justify-between mt-auto pt-6">
                  <span className="flex items-center gap-1.5 text-xs font-semibold text-charcoal/50 group-hover:text-white/60 transition-colors uppercase tracking-wider">
                    <Clock className="w-3.5 h-3.5" />
                    {article.readingTime}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white text-forest flex items-center justify-center group-hover:bg-gold group-hover:text-white transition-colors shadow-sm">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
