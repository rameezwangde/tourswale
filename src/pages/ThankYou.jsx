import { Helmet } from 'react-helmet-async';
import { Link, useLocation } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import Container from '../components/common/Container';

export default function ThankYou() {
  const location = useLocation();
  const state = location.state || {};
  
  // Format summary strictly based on safe passed state
  const hasSummary = state.destination || state.type;

  return (
    <>
      <Helmet>
        <title>Thank You for Contacting Tourswale</title>
        {/* DO NOT index thank you pages */}
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div className="min-h-screen pt-32 pb-24 bg-cream flex items-center">
        <Container className="max-w-3xl text-center">
          
          <div className="w-24 h-24 bg-forest rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>

          <h1 className="text-4xl md:text-5xl font-serif font-bold text-forest mb-6">
            Thank You for Contacting Tourswale
          </h1>
          
          <p className="text-lg md:text-xl text-charcoal/80 mb-10 leading-relaxed max-w-2xl mx-auto">
            Your enquiry has been submitted successfully. Our team will review the details and contact you using the information provided.
          </p>

          {hasSummary && (
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 max-w-md mx-auto mb-10 text-left">
              <h3 className="font-bold text-charcoal mb-4 border-b border-gray-100 pb-2">Enquiry Summary</h3>
              <ul className="space-y-3">
                {state.destination && (
                  <li className="flex justify-between text-sm">
                    <span className="text-charcoal/60">Preferred Destination:</span>
                    <span className="font-semibold text-charcoal capitalize">{state.destination}</span>
                  </li>
                )}
                {state.type && (
                  <li className="flex justify-between text-sm">
                    <span className="text-charcoal/60">Holiday Type:</span>
                    <span className="font-semibold text-charcoal capitalize">{state.type.replace('-', ' ')}</span>
                  </li>
                )}
              </ul>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/tours" 
              className="bg-forest hover:bg-forest-light text-white px-8 py-4 rounded-xl text-sm font-bold transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2"
            >
              Explore Tour Packages
            </Link>
            <Link 
              to="/destinations" 
              className="bg-white border border-gray-200 text-forest hover:border-gold hover:text-gold px-8 py-4 rounded-xl text-sm font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2"
            >
              Browse Destinations
            </Link>
            <Link 
              to="/" 
              className="text-charcoal/60 hover:text-forest px-8 py-4 rounded-xl text-sm font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-gold"
            >
              Return Home
            </Link>
          </div>

        </Container>
      </div>
    </>
  );
}
