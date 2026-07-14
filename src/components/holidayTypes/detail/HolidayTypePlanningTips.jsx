import { CheckSquare } from 'lucide-react';
import Container from '../../common/Container';

export default function HolidayTypePlanningTips({ holidayType }) {
  if (!holidayType.planningTips || holidayType.planningTips.length === 0) return null;

  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="flex flex-col lg:flex-row gap-12 lg:items-center">
          
          <div className="lg:w-1/3">
            <h2 className="text-3xl font-serif font-bold text-forest mb-6">
              Planning Tips for {holidayType.name}
            </h2>
            <p className="text-charcoal/70 text-base leading-relaxed">
              Ensure your trip goes smoothly by keeping these practical tips in mind during the planning phase. Our travel specialists will guide you through all necessary preparations.
            </p>
          </div>

          <div className="lg:w-2/3">
            <div className="bg-cream/50 rounded-[24px] p-8 border border-gray-100">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">
                {holidayType.planningTips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckSquare className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <span className="text-charcoal/80 text-sm md:text-base leading-relaxed">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
