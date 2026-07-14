import { Link } from 'react-router-dom';
import Container from '../../common/Container';
import SecondaryButton from '../../common/SecondaryButton';

export default function HolidayTypeSampleJourney({ holidayType }) {
  // Generic 5 day sample itinerary based on the type
  const getSampleItinerary = () => {
    const isRelaxed = ['honeymoon-packages', 'senior-citizen-tours', 'weekend-getaways'].includes(holidayType.slug);
    
    return [
      { day: "Day 1", title: isRelaxed ? "Arrival and relaxed hotel check-in" : "Arrival and easy orientation" },
      { day: "Day 2", title: isRelaxed ? "Scenic sightseeing and private experience" : "Major attraction and active exploration" },
      { day: "Day 3", title: isRelaxed ? "Leisure, spa or beach time" : "City sightseeing and leisure" },
      { day: "Day 4", title: isRelaxed ? "Cultural exploration or local experience" : "Interactive or outdoor activity" },
      { day: "Day 5", title: isRelaxed ? "Leisurely morning and departure" : "Shopping and departure" },
    ];
  };

  const itinerary = getSampleItinerary();

  return (
    <section className="py-16 bg-cream">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-forest mb-4">
              A Sample {holidayType.name} Journey
            </h2>
            <p className="text-charcoal/70 text-base max-w-2xl mx-auto">
              This sample plan is for inspiration and can be customized according to your specific destination, travel dates and availability.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-4 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-gold/50 before:via-gold/20 before:to-transparent">
              
              {itinerary.map((item, index) => (
                <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                  {/* Icon Marker */}
                  <div className="flex items-center justify-center w-8 h-8 rounded-full border-4 border-white bg-gold text-white font-bold text-[10px] shadow-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    {index + 1}
                  </div>
                  
                  {/* Content Card */}
                  <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2rem)] bg-charcoal/5 p-4 rounded-xl border border-gray-100 group-hover:bg-forest transition-colors duration-300">
                    <p className="font-bold text-charcoal text-sm mb-1 group-hover:text-gold transition-colors">{item.day}</p>
                    <p className="text-charcoal/70 text-sm group-hover:text-white transition-colors">{item.title}</p>
                  </div>
                </div>
              ))}

            </div>

            <div className="mt-12 text-center border-t border-gray-100 pt-8">
              <SecondaryButton to={`/contact?type=${holidayType.slug}`}>
                Customize This Journey
              </SecondaryButton>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
