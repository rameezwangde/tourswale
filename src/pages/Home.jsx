import React from 'react';
import SEO from '../components/common/SEO';
import HeroSection from '../components/home/HeroSection';
import TrustHighlights from '../components/home/TrustHighlights';
import WhyChooseTourswale from '../components/home/WhyChooseTourswale';
import FeaturedDestinations from '../components/home/FeaturedDestinations';
import DomesticTours from '../components/home/DomesticTours';
import InternationalTours from '../components/home/InternationalTours';
import HolidayTypesSection from '../components/home/HolidayTypesSection';
import CustomHolidayBanner from '../components/home/CustomHolidayBanner';
import TravelProcess from '../components/home/TravelProcess';
import ExperienceShowcase from '../components/home/ExperienceShowcase';
import TestimonialsSection from '../components/home/TestimonialsSection';
import BlogPreview from '../components/home/BlogPreview';
import HomeFAQ from '../components/home/HomeFAQ';
import NewsletterSection from '../components/home/NewsletterSection';
import FinalCTA from '../components/home/FinalCTA';
import { homeFaqs } from '../data/homeData';

export default function Home() {
  const schemaData = [
    {
      "@context": "https://schema.org",
      "@type": "TravelAgency",
      "name": "Tourswale",
      "image": "https://tourswale.com/logo.png",
      "@id": "https://tourswale.com",
      "url": "https://tourswale.com",
      "telephone": "+911234567890",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Sample Address",
        "addressLocality": "Mumbai",
        "postalCode": "400001",
        "addressCountry": "IN"
      },
      "description": "Explore domestic and international holiday packages, customized tours, honeymoon trips, family vacations and premium travel experiences with Tourswale."
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": homeFaqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <SEO 
        title="Tourswale | Domestic and International Holiday Packages"
        description="Explore domestic and international holiday packages, customized tours, honeymoon trips, family vacations and premium travel experiences with Tourswale."
        keywords="tour packages, holiday packages, domestic tour packages, international tour packages, customized holiday packages, travel agency in India, family holiday packages, honeymoon packages, luxury holidays, group tours, Dubai tour packages, Bali holiday packages, Maldives packages, Kashmir tour packages, Kerala holiday packages"
        canonicalUrl="https://tourswale.com"
        ogType="website"
        schemaData={schemaData}
      />
      
      <main>
        <HeroSection />
        <TrustHighlights />
        <WhyChooseTourswale />
        <FeaturedDestinations />
        <DomesticTours />
        <InternationalTours />
        <HolidayTypesSection />
        <CustomHolidayBanner />
        <TravelProcess />
        <ExperienceShowcase />
        <TestimonialsSection />
        <BlogPreview />
        <HomeFAQ />
        <NewsletterSection />
        <FinalCTA />
      </main>
    </div>
  );
}
