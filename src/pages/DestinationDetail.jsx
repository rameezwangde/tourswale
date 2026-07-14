import { useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Container from '../components/common/Container';
import InnerHero from '../components/tours/InnerHero';
import TourCard from '../components/tours/TourCard';
import { destinations } from '../data/destinations';
import { tours } from '../data/tours';

export default function DestinationDetail() {
  const { slug } = useParams();
  
  // Find destination
  const destination = destinations.find(d => d.slug === slug);
  
  if (!destination) {
    return <Navigate to="/destinations" replace />;
  }

  // Find related tours (assuming tours have a location or destination property. 
  // Let's filter by checking if tour title or location includes the destination name)
  const relatedTours = tours.filter(tour => 
    tour.location.toLowerCase().includes(destination.name.toLowerCase()) ||
    tour.title.toLowerCase().includes(destination.name.toLowerCase())
  );

  return (
    <>
      <Helmet>
        <title>{destination.seoTitle || `${destination.name} Tours | Tourswale`}</title>
        <meta name="description" content={destination.seoDescription || destination.shortDescription} />
        <link rel="canonical" href={`https://tourswale.com/destinations/${destination.slug}`} />
      </Helmet>

      <InnerHero 
        title={destination.name}
        description={destination.shortDescription}
        backgroundImage={destination.heroImage}
        breadcrumbs={[
          { label: 'Destinations', path: '/destinations' },
          { label: destination.name }
        ]}
      />

      <section className="py-16 md:py-24 bg-cream">
        <Container>
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-forest mb-6">
              About {destination.name}
            </h2>
            <p className="text-charcoal/80 text-lg leading-relaxed">
              {destination.longDescription}
            </p>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-serif font-bold text-forest mb-8 text-center border-b border-gray-200 pb-4">
              Top Tours in {destination.name}
            </h3>
            
            {relatedTours.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedTours.map(tour => (
                  <TourCard key={tour.id} tour={tour} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-2xl border border-gray-100 shadow-sm">
                <p className="text-charcoal/60 mb-4">We are currently curating the best experiences for {destination.name}.</p>
                <a href="/contact" className="text-gold font-semibold hover:text-forest transition-colors">
                  Contact us to plan a custom trip
                </a>
              </div>
            )}
          </div>
        </Container>
      </section>
    </>
  );
}
