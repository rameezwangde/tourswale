import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Container from '../components/common/Container';
import InnerHero from '../components/tours/InnerHero';
import DestinationCard from '../components/destinations/DestinationCard';
import { destinations } from '../data/destinations';

export default function Destinations() {
  const [filter, setFilter] = useState('All');
  
  // Get unique regions
  const regions = ['All', ...new Set(destinations.map(d => d.region))];
  
  const filteredDestinations = filter === 'All' 
    ? destinations 
    : destinations.filter(d => d.region === filter);

  return (
    <>
      <Helmet>
        <title>Explore Global Destinations | Tourswale</title>
        <meta name="description" content="Discover breathtaking domestic and international destinations with Tourswale. From the Swiss Alps to the beaches of Bali." />
        <link rel="canonical" href="https://tourswale.com/destinations" />
      </Helmet>

      <InnerHero 
        title="Destinations"
        description="Explore our handpicked selection of breathtaking domestic and international destinations. Find your next adventure today."
        backgroundImage="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1920&auto=format&fit=crop"
        breadcrumbs={[{ label: 'Destinations' }]}
      />

      <section className="py-16 md:py-24 bg-cream min-h-screen">
        <Container>
          {/* Filters */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {regions.map(region => (
              <button
                key={region}
                onClick={() => setFilter(region)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 border ${
                  filter === region
                    ? 'bg-forest text-white border-forest'
                    : 'bg-white text-forest border-gray-200 hover:border-forest'
                }`}
              >
                {region}
              </button>
            ))}
          </div>

          {/* Grid */}
          {filteredDestinations.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDestinations.map(destination => (
                <DestinationCard key={destination.id} destination={destination} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <h3 className="text-2xl font-serif text-forest mb-2">No Destinations Found</h3>
              <p className="text-charcoal/70">Check back later for more exciting locations.</p>
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
