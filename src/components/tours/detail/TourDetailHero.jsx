import { Link } from 'react-router-dom';
import { Share2, MapPin, Clock } from 'lucide-react';
import Container from '../../common/Container';

export default function TourDetailHero({ tour, onEnquire }) {
  const formattedPrice = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: tour.currency,
    maximumFractionDigits: 0
  }).format(tour.startingPrice);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: tour.seoTitle || tour.title,
          text: tour.shortDescription,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback: Copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="relative pt-24 lg:pt-32 pb-20 lg:pb-32 overflow-hidden bg-forest">
      <div className="absolute inset-0 z-0">
        {/* We use eager loading here because it's LCP */}
        <img 
          src={tour.heroImage} 
          alt={tour.title}
          loading="eager"
          className="w-full h-full object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/80 to-forest/30"></div>
      </div>

      <Container className="relative z-10">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-white/70">
            <li><Link to="/" className="hover:text-gold transition-colors">Home</Link></li>
            <li><span>/</span></li>
            <li><Link to="/tours" className="hover:text-gold transition-colors">Tours</Link></li>
            <li><span>/</span></li>
            <li><span className="text-white" aria-current="page">{tour.destination}</span></li>
          </ol>
        </nav>

        <div className="flex flex-col lg:flex-row gap-12 lg:items-end justify-between">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="bg-gold px-3 py-1.5 rounded-lg text-[10px] font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                <MapPin className="w-3 h-3" /> {tour.destination}
              </span>
              <span className="bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-1.5 rounded-lg text-[10px] font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                <Clock className="w-3 h-3" /> {tour.durationDays} Days / {tour.durationNights} Nights
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
              {tour.title}
            </h1>
            
            <p className="text-white/80 text-lg leading-relaxed max-w-2xl">
              {tour.shortDescription}
            </p>
          </div>

          {/* Desktop Call to action block (Hidden on mobile/tablet) */}
          <div className="hidden lg:flex flex-col items-end shrink-0 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
            <p className="text-xs uppercase font-bold text-white/70 tracking-wider mb-1">Starting from</p>
            <p className="text-3xl font-bold text-white mb-2">{formattedPrice}</p>
            <p className="text-xs text-white/60 mb-6">Per person, subject to availability</p>
            
            <div className="flex gap-3 w-full">
              <button 
                onClick={onEnquire}
                className="flex-1 bg-gold hover:bg-yellow-600 text-white px-6 py-3.5 rounded-xl text-sm font-bold transition-colors shadow-sm text-center"
              >
                Enquire Now
              </button>
              <button 
                onClick={handleShare}
                className="w-12 h-12 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors border border-white/20 shrink-0"
                aria-label="Share tour"
              >
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
