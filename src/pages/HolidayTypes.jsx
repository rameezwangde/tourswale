import { Helmet } from 'react-helmet-async';
import Container from '../components/common/Container';
import InnerHero from '../components/tours/InnerHero';
import EnquiryCTA from '../components/home/EnquiryCTA';

import HolidayTypeCard from '../components/holidayTypes/HolidayTypeCard';
import HolidayStyleComparison from '../components/holidayTypes/HolidayStyleComparison';
import FeaturedHolidayStyle from '../components/holidayTypes/FeaturedHolidayStyle';

import { holidayTypes } from '../data/holidayTypes';

export default function HolidayTypes() {
  const featured = holidayTypes.find(ht => ht.slug === 'customized-holidays');
  const regularTypes = holidayTypes.filter(ht => ht.slug !== 'customized-holidays');

  // Schema for the listing page
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": holidayTypes.map((type, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Thing",
        "name": type.name,
        "description": type.shortDescription,
        "url": `https://tourswale.com/holiday-types/${type.slug}`
      }
    }))
  };

  return (
    <>
      <Helmet>
        <title>Holiday Packages for Every Travel Style | Tourswale</title>
        <meta name="description" content="Explore honeymoon packages, family holidays, luxury tours, adventure trips, group tours, senior travel, weekend escapes and customized holidays with Tourswale." />
        <link rel="canonical" href="https://tourswale.com/holiday-types" />
        <meta property="og:title" content="Holiday Packages for Every Travel Style | Tourswale" />
        <meta property="og:description" content="Explore honeymoon packages, family holidays, luxury tours, adventure trips, group tours, senior travel, weekend escapes and customized holidays with Tourswale." />
        <meta property="og:url" content="https://tourswale.com/holiday-types" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(itemListSchema)}</script>
      </Helmet>

      <InnerHero 
        title="Holiday Packages for Every Travel Style"
        description="Every traveller has a different idea of the perfect holiday. Explore thoughtfully planned travel experiences designed for couples, families, groups, solo explorers, senior travellers and adventure seekers."
        backgroundImage="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1920&auto=format&fit=crop"
        breadcrumbs={[{ label: 'Holiday Types' }]}
      />

      <FeaturedHolidayStyle />

      <section className="py-20 bg-cream">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-forest mb-4">Explore Travel Styles</h2>
            <p className="text-charcoal/70 text-base max-w-2xl mx-auto">
              Find the perfect itinerary template, from romantic honeymoons to action-packed family adventures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularTypes.map((type) => (
              <HolidayTypeCard key={type.id} type={type} />
            ))}
          </div>
        </Container>
      </section>

      <HolidayStyleComparison />

      {/* Reusing EnquiryCTA with customized props */}
      <EnquiryCTA />
    </>
  );
}
