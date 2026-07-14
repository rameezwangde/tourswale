import { Settings, Home, MapPin, Briefcase } from 'lucide-react';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import PrimaryButton from '../common/PrimaryButton';
import { whyChooseFeatures } from '../../data/homeData';

export default function WhyChooseTourswale() {
  const getIcon = (name, className) => {
    switch (name) {
      case 'Settings': return <Settings className={className} />;
      case 'Home': return <Home className={className} />;
      case 'MapPin': return <MapPin className={className} />;
      case 'Briefcase': return <Briefcase className={className} />;
      default: return <Settings className={className} />;
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-forest relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent pointer-events-none"></div>

      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          <div className="w-full lg:w-5/12">
            <SectionHeading 
              light={true}
              eyebrow="Why Choose Tourswale?"
              title="Your Journey, Our Promise"
              description="Tourswale creates memorable travel experiences through thoughtfully planned itineraries, trusted travel partners, comfortable stays and personalized support. From your first enquiry to your return home, our team helps make every stage of your journey smoother and more enjoyable."
            />
            <div className="mt-10">
              <PrimaryButton to="/about" light={true}>
                Learn More About Tourswale
              </PrimaryButton>
            </div>
          </div>

          <div className="w-full lg:w-7/12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {whyChooseFeatures.map((feature, index) => (
                <div 
                  key={index} 
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:-translate-y-1 transition-all duration-300 hover:bg-white/10 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-[0_8px_24px_rgba(0,0,0,0.15)] flex items-center justify-center mb-6 group-hover:bg-gold transition-colors duration-500 transform group-hover:-translate-y-1">
                    {getIcon(feature.icon, "w-6 h-6 text-forest group-hover:text-white transition-colors duration-500")}
                  </div>
                  <h4 className="text-white font-serif font-semibold text-xl mb-3">{feature.title}</h4>
                  <p className="text-white/70 text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
