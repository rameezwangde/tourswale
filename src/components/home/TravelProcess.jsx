import { MapPin, Settings, Plane } from 'lucide-react';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { processSteps } from '../../data/homeData';

export default function TravelProcess() {
  const getIcon = (name) => {
    switch (name) {
      case 'MapPin': return <MapPin className="w-8 h-8 text-gold" strokeWidth={1.5} />;
      case 'Settings': return <Settings className="w-8 h-8 text-gold" strokeWidth={1.5} />;
      case 'Plane': return <Plane className="w-8 h-8 text-gold" strokeWidth={1.5} />;
      default: return <MapPin className="w-8 h-8 text-gold" strokeWidth={1.5} />;
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-white">
      <Container>
        <div className="text-center flex flex-col items-center mb-16 lg:mb-24">
          <SectionHeading 
            eyebrow="How It Works"
            title="Plan Your Holiday in Three Simple Steps"
            className="items-center"
          />
        </div>

        <div className="relative">
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-12 left-[15%] right-[15%] h-[2px] bg-gray-100">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 relative z-10">
            {processSteps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                {/* Icon Container */}
                <div className="w-24 h-24 rounded-full bg-white border-8 border-cream/50 flex items-center justify-center mb-8 relative group-hover:border-cream transition-colors duration-300">
                  {getIcon(step.icon)}
                  {/* Step Number Badge */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-forest text-white text-[10px] font-bold flex items-center justify-center shadow-md">
                    {step.number}
                  </div>
                </div>
                
                <h4 className="text-forest font-serif font-semibold text-xl mb-4 group-hover:text-gold transition-colors">{step.title}</h4>
                <p className="text-charcoal/70 text-sm leading-relaxed max-w-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
