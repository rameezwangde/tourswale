import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found | Tourswale" description="The page you are looking for may have moved, changed, or no longer exists." />
      
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-5xl md:text-6xl font-serif text-forest mb-6">
          Looks Like This Journey Took a Detour
        </h1>
        <p className="text-lg text-charcoal/80 mb-8 max-w-xl mx-auto">
          The page you are looking for may have moved, changed, or no longer exists. Let us guide you back to the right destination.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            to="/" 
            className="px-8 py-3 bg-gold text-white rounded-lg hover:bg-gold/90 transition-colors duration-300 font-medium"
          >
            Return Home
          </Link>
          <Link 
            to="/tours" 
            className="px-8 py-3 border-2 border-forest text-forest rounded-lg hover:bg-forest hover:text-cream transition-colors duration-300 font-medium"
          >
            Explore Tours
          </Link>
        </div>
      </div>
    </>
  );
}
