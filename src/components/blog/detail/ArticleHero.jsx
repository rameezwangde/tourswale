import { Link } from 'react-router-dom';
import { Clock, Calendar } from 'lucide-react';
import Container from '../../common/Container';

export default function ArticleHero({ article }) {
  const formattedDate = new Date(article.publishedDate).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <div className="pt-24 lg:pt-32 pb-12 bg-white">
      <Container className="max-w-4xl">
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-charcoal/60">
            <li><Link to="/" className="hover:text-gold transition-colors">Home</Link></li>
            <li><span>/</span></li>
            <li><Link to="/blog" className="hover:text-gold transition-colors">Blog</Link></li>
            <li><span>/</span></li>
            <li><span className="text-charcoal" aria-current="page">{article.categoryLabel}</span></li>
          </ol>
        </nav>

        <span className="bg-cream px-3 py-1.5 rounded-lg text-[10px] font-bold text-forest uppercase tracking-wider inline-block mb-6">
          {article.categoryLabel}
        </span>
        
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-forest mb-6 leading-tight">
          {article.title}
        </h1>
        
        <p className="text-charcoal/80 text-lg md:text-xl leading-relaxed mb-8">
          {article.excerpt}
        </p>

        <div className="flex flex-wrap items-center gap-6 border-b border-gray-100 pb-8 mb-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-forest text-white flex items-center justify-center font-serif font-bold text-lg">
              T
            </div>
            <div>
              <p className="text-sm font-bold text-charcoal">{article.author}</p>
              <p className="text-xs text-charcoal/60">Tourswale</p>
            </div>
          </div>
          
          <div className="hidden sm:block w-px h-8 bg-gray-200"></div>
          
          <div className="flex items-center gap-2 text-sm font-semibold text-charcoal/70">
            <Calendar className="w-4 h-4" />
            {formattedDate}
          </div>
          
          <div className="flex items-center gap-2 text-sm font-semibold text-charcoal/70">
            <Clock className="w-4 h-4" />
            {article.readingTime}
          </div>
        </div>
      </Container>
      
      {/* Hero Image */}
      <Container className="max-w-5xl">
        <div className="relative h-64 md:h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-sm">
          <img 
            src={article.heroImage} 
            alt={article.imageAlt || article.title}
            loading="eager"
            className="w-full h-full object-cover"
          />
        </div>
      </Container>
    </div>
  );
}
