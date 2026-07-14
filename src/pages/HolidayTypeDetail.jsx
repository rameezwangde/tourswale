import { useMemo, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

import Container from '../components/common/Container';
import SecondaryButton from '../components/common/SecondaryButton';
import EnquiryCTA from '../components/home/EnquiryCTA';

// Holiday Type Sections
import HolidayTypeHero from '../components/holidayTypes/detail/HolidayTypeHero';
import HolidayTypeIntro from '../components/holidayTypes/detail/HolidayTypeIntro';
import HolidayTypeBenefits from '../components/holidayTypes/detail/HolidayTypeBenefits';
import HolidayTypeExperiences from '../components/holidayTypes/detail/HolidayTypeExperiences';
import HolidayTypePlanningTips from '../components/holidayTypes/detail/HolidayTypePlanningTips';
import HolidayTypeSampleJourney from '../components/holidayTypes/detail/HolidayTypeSampleJourney';
import HolidayTypeFAQ from '../components/holidayTypes/detail/HolidayTypeFAQ';

// Reusable Cards
import HolidayTypeCard from '../components/holidayTypes/HolidayTypeCard';
import TourCard from '../components/tours/TourCard';
import DestinationCard from '../components/destinations/DestinationCard';

// Data
import { holidayTypes } from '../data/holidayTypes';
import { tours } from '../data/tours';
import { destinations } from '../data/destinations';

export default function HolidayTypeDetail() {
  const { slug } = useParams();

  // Scroll to top when slug changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Find current holiday type
  const type = useMemo(() => holidayTypes.find(ht => ht.slug === slug), [slug]);

  // Resolve related destinations
  const relatedDestinations = useMemo(() => {
    if (!type || !type.recommendedDestinations) return [];
    return type.recommendedDestinations
      .map(dSlug => destinations.find(d => d.slug === dSlug))
      .filter(Boolean); // Remove unfound destinations
  }, [type]);

  // Resolve related tours
  const relatedTours = useMemo(() => {
    if (!type || !type.relatedTourSlugs) return [];
    return type.relatedTourSlugs
      .map(tSlug => tours.find(t => t.slug === tSlug))
      .filter(Boolean);
  }, [type]);

  // Resolve related holiday types
  const relatedHolidayTypes = useMemo(() => {
    if (!type || !type.relatedHolidayTypeSlugs) return [];
    return type.relatedHolidayTypeSlugs
      .map(htSlug => holidayTypes.find(ht => ht.slug === htSlug))
      .filter(Boolean);
  }, [type]);

  if (!type) {
    return (
      <div className="pt-32 pb-24 min-h-[60vh] flex items-center justify-center bg-cream">
        <Container className="text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-forest mb-6">Travel Style Not Found</h1>
          <p className="text-charcoal/70 mb-8 max-w-lg mx-auto">
            We couldn't find the holiday type you are looking for. It may have been removed or the URL is incorrect.
          </p>
          <div className="flex gap-4 justify-center">
            <SecondaryButton to="/holiday-types">Browse Travel Styles</SecondaryButton>
            <SecondaryButton to="/contact" light={true}>Contact Us</SecondaryButton>
          </div>
        </Container>
      </div>
    );
  }

  // Schema.org
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://tourswale.com" },
      { "@type": "ListItem", "position": 2, "name": "Holiday Types", "item": "https://tourswale.com/holiday-types" },
      { "@type": "ListItem", "position": 3, "name": type.name, "item": `https://tourswale.com/holiday-types/${type.slug}` }
    ]
  };

  const faqSchema = type.faq && type.faq.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": type.faq.map(f => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.answer
      }
    }))
  } : null;

  return (
    <>
      <Helmet>
        <title>{type.seoTitle || `${type.name} | Tourswale`}</title>
        <meta name="description" content={type.seoDescription || type.shortDescription} />
        {type.keywords && <meta name="keywords" content={type.keywords} />}
        <link rel="canonical" href={`https://tourswale.com/holiday-types/${type.slug}`} />
        
        {/* Open Graph */}
        <meta property="og:title" content={type.seoTitle || type.name} />
        <meta property="og:description" content={type.seoDescription || type.shortDescription} />
        <meta property="og:image" content={type.heroImage} />
        <meta property="og:url" content={`https://tourswale.com/holiday-types/${type.slug}`} />
        <meta property="og:type" content="article" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        {faqSchema && <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>}
      </Helmet>

      <HolidayTypeHero holidayType={type} />
      <HolidayTypeIntro holidayType={type} />
      <HolidayTypeBenefits holidayType={type} />
      <HolidayTypeExperiences holidayType={type} />

      {/* Recommended Destinations */}
      {relatedDestinations.length > 0 && (
        <section className="py-16 bg-cream">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-forest mb-4">
                Best Destinations for {type.name}
              </h2>
              <p className="text-charcoal/70 text-base max-w-2xl mx-auto">
                Explore hand-picked regions and countries that perfectly complement this style of travel.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedDestinations.map(dest => (
                <DestinationCard key={dest.id} destination={dest} />
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Recommended Tour Packages */}
      {relatedTours.length > 0 && (
        <section className="py-16 bg-white">
          <Container>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <h2 className="text-3xl font-serif font-bold text-forest mb-4">Recommended {type.name} Packages</h2>
                <p className="text-charcoal/70 text-base max-w-2xl">
                  Browse our selection of pre-planned itineraries that showcase the best of this travel style.
                </p>
              </div>
              <SecondaryButton to={`/tours?holidayType=${type.slug}`} className="shrink-0">
                View All Matching Tours
              </SecondaryButton>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {relatedTours.map((t, index) => (
                <motion.div
                  key={t.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <TourCard tour={t} onEnquire={(tour) => {
                    // Handled inside TourCard link directly for detail views
                  }} />
                </motion.div>
              ))}
            </div>
          </Container>
        </section>
      )}

      <HolidayTypeSampleJourney holidayType={type} />
      <HolidayTypePlanningTips holidayType={type} />
      
      {/* Enquiry CTA directly integrated into flow */}
      <section className="py-16 bg-white">
        <Container>
          <div className="bg-forest rounded-[32px] overflow-hidden shadow-xl text-center p-12 md:p-16 relative">
            <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent pointer-events-none"></div>
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">Ready to Plan Your {type.name}?</h2>
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                Share your preferred destination, travel dates, traveller details and budget with Tourswale. Our team will help shape an itinerary that suits your travel style.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to={`/contact?type=${type.slug}`} className="bg-gold hover:bg-yellow-600 text-white px-8 py-4 rounded-xl text-sm font-bold transition-colors shadow-sm text-center">
                  Plan My Holiday
                </Link>
                <Link to={`/tours?holidayType=${type.slug}`} className="border border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-xl text-sm font-bold transition-colors text-center">
                  Explore Matching Tours
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <HolidayTypeFAQ faqs={type.faq} />

      {/* Related Holiday Types */}
      {relatedHolidayTypes.length > 0 && (
        <section className="py-20 bg-cream">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-forest mb-4">You May Also Like</h2>
              <p className="text-charcoal/70 text-base max-w-2xl mx-auto">
                Explore other travel styles that align closely with your interests.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedHolidayTypes.map(ht => (
                <HolidayTypeCard key={ht.id} type={ht} />
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
