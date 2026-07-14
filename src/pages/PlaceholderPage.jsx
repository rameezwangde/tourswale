import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';

export default function PlaceholderPage({ title, description, seoTitle, seoDescription }) {
  return (
    <>
      <SEO title={seoTitle} description={seoDescription} />
      
      <div className="py-20 px-4 md:px-8 max-w-7xl mx-auto min-h-[60vh] flex flex-col justify-center">
        {/* Breadcrumb Placeholder */}
        <div className="text-sm text-charcoal/60 mb-6">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-forest font-medium">{title}</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-serif text-forest mb-6">
          {title}
        </h1>
        
        <p className="text-lg text-charcoal/80 mb-8 max-w-3xl">
          {description}
        </p>
        
        <div>
          <Link 
            to="/" 
            className="inline-block px-6 py-3 bg-forest text-cream rounded-lg hover:bg-emerald transition-colors duration-300"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </>
  );
}
