import { Clock, MapPin, Map, Sun, Users, Plane } from 'lucide-react';
import Container from '../../common/Container';

export default function TourQuickFacts({ tour }) {
  const facts = [
    { icon: Clock, label: "Duration", value: `${tour.durationDays} Days / ${tour.durationNights} Nights` },
    { icon: MapPin, label: "Destination", value: tour.destination },
    { icon: Map, label: "Tour Type", value: tour.type === 'domestic' ? 'Domestic (India)' : 'International' },
    { icon: Sun, label: "Ideal Season", value: tour.idealSeason },
    { icon: Users, label: "Best For", value: tour.bestFor.join(', ') },
    { icon: Plane, label: "Departure Cities", value: tour.departureCities.join(', ') },
  ];

  return (
    <div className="relative -mt-10 z-20">
      <Container>
        <div className="bg-white rounded-[24px] shadow-xl border border-gray-100 p-6 md:p-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
            {facts.map((fact, index) => {
              const Icon = fact.icon;
              return (
                <div key={index} className="flex flex-col gap-3">
                  <div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center text-gold">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-charcoal/50 tracking-wider mb-1">{fact.label}</p>
                    <p className="text-sm font-semibold text-charcoal leading-snug">{fact.value}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
}
