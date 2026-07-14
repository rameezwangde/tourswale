import { useState, useMemo, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

import Container from '../components/common/Container';
import SecondaryButton from '../components/common/SecondaryButton';

// Tour Components
import TourDetailHero from '../components/tours/detail/TourDetailHero';
import TourQuickFacts from '../components/tours/detail/TourQuickFacts';
import TourOverview from '../components/tours/detail/TourOverview';
import TourHighlights from '../components/tours/detail/TourHighlights';
import TourItinerary from '../components/tours/detail/TourItinerary';
import TourInclusions from '../components/tours/detail/TourInclusions';
import TourAccommodation from '../components/tours/detail/TourAccommodation';
import TourOptional from '../components/tours/detail/TourOptional';
import TourNotes from '../components/tours/detail/TourNotes';
import TourStickySidebar from '../components/tours/detail/TourStickySidebar';
import TourMobileCTA from '../components/tours/detail/TourMobileCTA';
import TourFAQ from '../components/tours/detail/TourFAQ';
import TourEnquiryModal from '../components/tours/TourEnquiryModal';
import TourCard from '../components/tours/TourCard';

// Data
import { tours } from '../data/tours';

export default function TourDetail() {
  const { slug } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Scroll to top when slug changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Find the tour
  const tour = useMemo(() => tours.find(t => t.slug === slug), [slug]);

  // Find related tours
  const relatedTours = useMemo(() => {
    if (!tour) return [];
    
    // Filter by same region or overlapping holiday types, exclude current tour
    let related = tours.filter(t => 
      t.id !== tour.id && 
      (t.region === tour.region || t.holidayTypes.some(ht => tour.holidayTypes.includes(ht)))
    );
    
    // Shuffle and pick top 3
    related = related.sort(() => 0.5 - Math.random());
    return related.slice(0, 3);
  }, [tour]);

  if (!tour) {
    return (
      <div className="pt-32 pb-24 min-h-[60vh] flex items-center justify-center bg-cream">
        <Container className="text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-forest mb-6">Tour Not Found</h1>
          <p className="text-charcoal/70 mb-8 max-w-lg mx-auto">
            We couldn't find the tour package you are looking for. It may have been removed or the URL is incorrect.
          </p>
          <div className="flex gap-4 justify-center">
            <SecondaryButton to="/tours">Browse All Tours</SecondaryButton>
            <SecondaryButton to="/contact" light={true}>Contact Us</SecondaryButton>
          </div>
        </Container>
      </div>
    );
  }

  // Schema.org
  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": tour.seoTitle || tour.title,
    "image": tour.heroImage,
    "description": tour.seoDescription || tour.shortDescription,
    "brand": {
      "@type": "Brand",
      "name": "Tourswale"
    },
    "offers": {
      "@type": "Offer",
      "url": `https://tourswale.com/tours/${tour.slug}`,
      "priceCurrency": tour.currency,
      "price": tour.startingPrice,
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Tourswale"
      }
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://tourswale.com" },
      { "@type": "ListItem", "position": 2, "name": "Tours", "item": "https://tourswale.com/tours" },
      { "@type": "ListItem", "position": 3, "name": tour.title, "item": `https://tourswale.com/tours/${tour.slug}` }
    ]
  };

  return (
    <>
      <Helmet>
        <title>{tour.seoTitle || `${tour.title} | Tourswale`}</title>
        <meta name="description" content={tour.seoDescription || tour.shortDescription} />
        <link rel="canonical" href={`https://tourswale.com/tours/${tour.slug}`} />
        
        {/* Open Graph */}
        <meta property="og:title" content={tour.seoTitle || tour.title} />
        <meta property="og:description" content={tour.seoDescription || tour.shortDescription} />
        <meta property="og:image" content={tour.heroImage} />
        <meta property="og:url" content={`https://tourswale.com/tours/${tour.slug}`} />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={tour.seoTitle || tour.title} />
        <meta name="twitter:description" content={tour.seoDescription || tour.shortDescription} />
        <meta name="twitter:image" content={tour.heroImage} />

        <script type="application/ld+json">{JSON.stringify(productSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <TourDetailHero tour={tour} onEnquire={() => setIsModalOpen(true)} />
      <TourQuickFacts tour={tour} />

      <section className="py-16 bg-cream">
        <Container>
          <div className="flex flex-col lg:flex-row gap-12 xl:gap-16">
            
            {/* Main Content Area */}
            <div className="flex-1">
              <TourOverview overview={tour.overview} />
              <TourHighlights highlights={tour.highlights} />
              <TourItinerary itinerary={tour.itinerary} />
              <TourInclusions inclusions={tour.inclusions} exclusions={tour.exclusions} />
              <TourAccommodation accommodation={tour.accommodation} transportation={tour.transportation} meals={tour.meals} />
              <TourOptional optionalExperiences={tour.optionalExperiences} />
              <TourNotes notes={tour.importantNotes} />
              <TourFAQ />
            </div>

            {/* Sticky Right Sidebar (Desktop) */}
            <TourStickySidebar tour={tour} onEnquire={() => setIsModalOpen(true)} />

          </div>
        </Container>
      </section>

      {/* Related Tours Section */}
      {relatedTours.length > 0 && (
        <section className="py-20 bg-white relative overflow-hidden border-t border-gray-100">
          <Container>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-forest mb-4">You May Also Like</h2>
                <p className="text-charcoal/70 text-base max-w-2xl">
                  Discover more hand-picked holiday packages matching your travel style.
                </p>
              </div>
              <SecondaryButton to="/tours" className="shrink-0">View All Tours</SecondaryButton>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedTours.map((t, index) => (
                <motion.div
                  key={t.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <TourCard tour={t} onEnquire={(tour) => {
                    // Navigate to tour instead of opening modal directly since we are on a detail page
                    // The link is already in the card's title/image
                  }} />
                </motion.div>
              ))}
            </div>
            
            {/* Contextual Links */}
            <div className="mt-16 bg-cream/50 rounded-2xl p-8 border border-gray-100 text-center">
              <h3 className="text-xl font-serif font-bold text-forest mb-4">Planning more time in {tour.region}?</h3>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to={`/tours?region=${tour.region}`} className="text-sm font-semibold text-charcoal hover:text-gold transition-colors underline underline-offset-4">
                  Explore more {tour.region} packages
                </Link>
                {tour.holidayTypes[0] && (
                  <Link to={`/tours?holidayType=${tour.holidayTypes[0]}`} className="text-sm font-semibold text-charcoal hover:text-gold transition-colors underline underline-offset-4">
                    View {tour.holidayTypes[0]} specials
                  </Link>
                )}
                <Link to="/contact" className="text-sm font-semibold text-charcoal hover:text-gold transition-colors underline underline-offset-4">
                  Request a custom itinerary
                </Link>
              </div>
            </div>

          </Container>
        </section>
      )}

      {/* Mobile Sticky CTA */}
      <TourMobileCTA tour={tour} onEnquire={() => setIsModalOpen(true)} />

      {/* Shared Enquiry Modal */}
      <TourEnquiryModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        selectedTour={tour} 
      />
    </>
  );
}
