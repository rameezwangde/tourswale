import { Check } from 'lucide-react';
import Container from '../common/Container';

export default function HolidayStyleComparison() {
  const comparisons = [
    {
      type: "Honeymoon",
      bestFor: "Couples",
      pace: "Relaxed",
      destinations: "Maldives, Bali, Switzerland",
      customization: "High",
      size: "2 Travellers"
    },
    {
      type: "Family",
      bestFor: "Families",
      pace: "Balanced",
      destinations: "Dubai, Singapore, Kerala",
      customization: "High",
      size: "3+ Travellers"
    },
    {
      type: "Adventure",
      bestFor: "Active Travellers",
      pace: "Energetic",
      destinations: "Ladakh, Himachal, Bali",
      customization: "Medium",
      size: "Solo / Groups"
    },
    {
      type: "Senior",
      bestFor: "Mature Travellers",
      pace: "Comfortable",
      destinations: "Kerala, Rajasthan, Dubai",
      customization: "High",
      size: "Small Groups"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-forest mb-4">Find the Right Holiday for You</h2>
          <p className="text-charcoal/70 text-base max-w-2xl mx-auto">
            Compare different travel styles to find the one that perfectly matches your preferences, group size, and ideal pace.
          </p>
        </div>

        {/* Desktop Table (Hidden on Mobile) */}
        <div className="hidden md:block overflow-hidden bg-white border border-gray-200 rounded-[24px] shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-cream">
                <th className="py-5 px-6 font-bold text-forest text-sm uppercase tracking-wider border-b border-gray-200">Travel Style</th>
                <th className="py-5 px-6 font-bold text-forest text-sm uppercase tracking-wider border-b border-gray-200">Best For</th>
                <th className="py-5 px-6 font-bold text-forest text-sm uppercase tracking-wider border-b border-gray-200">Typical Pace</th>
                <th className="py-5 px-6 font-bold text-forest text-sm uppercase tracking-wider border-b border-gray-200">Customization</th>
                <th className="py-5 px-6 font-bold text-forest text-sm uppercase tracking-wider border-b border-gray-200">Popular Regions</th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((row, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0">
                  <td className="py-5 px-6 font-serif font-bold text-lg text-charcoal">{row.type}</td>
                  <td className="py-5 px-6 text-sm text-charcoal/80">{row.bestFor}</td>
                  <td className="py-5 px-6 text-sm text-charcoal/80">{row.pace}</td>
                  <td className="py-5 px-6 text-sm text-charcoal/80">{row.customization}</td>
                  <td className="py-5 px-6 text-sm text-charcoal/80">{row.destinations}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Stacked Cards (Hidden on Desktop) */}
        <div className="grid grid-cols-1 gap-6 md:hidden">
          {comparisons.map((row, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-[20px] p-6 shadow-sm">
              <h3 className="font-serif font-bold text-xl text-forest mb-4 pb-4 border-b border-gray-100">
                {row.type}
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-xs uppercase font-bold text-charcoal/50 tracking-wider">Best For</span>
                  <span className="text-sm font-semibold text-charcoal text-right">{row.bestFor}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs uppercase font-bold text-charcoal/50 tracking-wider">Pace</span>
                  <span className="text-sm font-semibold text-charcoal text-right">{row.pace}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs uppercase font-bold text-charcoal/50 tracking-wider">Customization</span>
                  <span className="text-sm font-semibold text-charcoal text-right">{row.customization}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs uppercase font-bold text-charcoal/50 tracking-wider">Destinations</span>
                  <span className="text-sm font-semibold text-charcoal text-right w-1/2">{row.destinations}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
