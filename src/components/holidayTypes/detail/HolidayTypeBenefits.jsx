import { ShieldCheck } from 'lucide-react';
import Container from '../../common/Container';

export default function HolidayTypeBenefits({ holidayType }) {
  return (
    <section className="py-16 bg-cream">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-forest mb-4">
            Why Choose This Holiday Style?
          </h2>
          <p className="text-charcoal/70 text-base max-w-2xl mx-auto">
            Discover the unique advantages and tailored services included in our {holidayType.name.toLowerCase()}.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {holidayType.keyBenefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex gap-4 items-start hover:border-gold/50 transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-gold" />
              </div>
              <p className="text-charcoal/80 text-sm md:text-base leading-relaxed pt-1.5 font-medium">
                {benefit}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
