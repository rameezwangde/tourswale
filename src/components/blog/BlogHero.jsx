import { Link } from 'react-router-dom';
import Container from '../common/Container';

export default function BlogHero() {
  return (
    <div className="relative pt-32 pb-24 overflow-hidden bg-forest">
      {/* Abstract Pattern / Map Texture Suggestion */}
      <div className="absolute inset-0 z-0 opacity-[0.05]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <Container className="relative z-10">
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-white/70">
            <li><Link to="/" className="hover:text-gold transition-colors">Home</Link></li>
            <li><span>/</span></li>
            <li><span className="text-white" aria-current="page">Blog</span></li>
          </ol>
        </nav>

        <div className="max-w-4xl">
          <span className="bg-gold px-3 py-1.5 rounded-lg text-[10px] font-bold text-white uppercase tracking-wider inline-block mb-6">
            TRAVEL JOURNAL
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
            Travel Guides, Tips and Destination Inspiration
          </h1>
          
          <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-2xl mb-10">
            Discover practical travel advice, destination insights and holiday ideas created to help you plan with greater confidence.
          </p>
          
          <a 
            href="#latest-guides" 
            className="inline-flex items-center gap-2 bg-white text-forest hover:bg-cream px-6 py-3.5 rounded-xl text-sm font-bold transition-colors shadow-sm"
          >
            Explore Latest Guides
          </a>
        </div>
      </Container>
    </div>
  );
}
