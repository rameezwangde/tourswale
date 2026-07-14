import { Settings, Home, MapPin, Briefcase, ArrowRight, CheckCircle2, Award } from 'lucide-react';
import Container from '../common/Container';
import ImageWithFallback from '../common/ImageWithFallback';
import { whyChooseFeatures } from '../../data/homeData';
import { Link } from 'react-router-dom';

export default function WhyChooseTourswale() {
  const getIcon = (name, className) => {
    switch (name) {
      case 'Settings': return <Settings className={className} strokeWidth={1.5} />;
      case 'Home': return <Home className={className} strokeWidth={1.5} />;
      case 'MapPin': return <MapPin className={className} strokeWidth={1.5} />;
      case 'Briefcase': return <Briefcase className={className} strokeWidth={1.5} />;
      default: return <Settings className={className} strokeWidth={1.5} />;
    }
  };

  return (
    <section className="py-20 lg:py-32 bg-[#Fdfbf7] relative overflow-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Image Composition */}
          <div className="w-full lg:w-1/2 relative mt-8 lg:mt-0">
            {/* SVG Dashed Line */}
            <svg className="absolute -left-16 -top-8 w-[130%] h-[110%] pointer-events-none text-gold/60" viewBox="0 0 500 600" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M 50 50 Q 250 -50 350 150 T 450 450 T 300 500" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 6" strokeLinecap="round"/>
              <circle cx="50" cy="50" r="4" fill="currentColor" />
              <circle cx="300" cy="500" r="4" fill="currentColor" />
            </svg>

            {/* Main Image */}
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-xl mr-12 lg:mr-20 h-[550px] lg:h-[600px] border-4 border-[#Fdfbf7]">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?q=80&w=1000&auto=format&fit=crop" 
                alt="Beautiful Indian Palace on Lake"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Overlapping Circle Image */}
            <div className="absolute top-12 -right-4 lg:-right-12 z-20 w-40 h-40 lg:w-48 lg:h-48 rounded-full border-[6px] border-[#Fdfbf7] shadow-xl overflow-hidden bg-white">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1540962283088-3d1de1787c91?q=80&w=600&auto=format&fit=crop" 
                alt="Airplane Window View"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute bottom-12 -right-4 lg:-right-8 z-30 bg-forest text-white p-5 rounded-2xl shadow-xl flex flex-col items-center justify-center border border-white/5 w-[140px] transform hover:-translate-y-2 transition-transform duration-300">
              <div className="w-12 h-12 rounded-full border border-gold/40 flex items-center justify-center mb-2 text-gold">
                <Award className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <span className="text-sm font-serif font-medium text-center leading-tight">
                Trusted <br/>Travel Experts
              </span>
            </div>
          </div>

          {/* Right Column: Text & Grid */}
          <div className="w-full lg:w-1/2 lg:pl-8">
            <span className="text-gold font-bold uppercase tracking-[0.2em] text-[10px] mb-4 block">
              Why Choose Tourswale?
            </span>
            
            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-serif font-bold text-forest mb-6 leading-[1.1]">
              Your Journey,<br/>Our Promise
            </h2>
            
            <p className="text-charcoal/70 text-[15px] leading-relaxed mb-12 max-w-lg">
              Tourswale creates memorable travel experiences through thoughtfully planned itineraries, trusted travel partners, comfortable stays and personalized support. From your first enquiry to your return home, our team helps make every stage of your journey smoother and more enjoyable.
            </p>

            {/* 2x2 Feature Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 relative mb-10">
              {/* Vertical border line (hidden on mobile) */}
              <div className="hidden md:block absolute top-4 bottom-4 left-1/2 w-px bg-gold/30 -translate-x-1/2"></div>
              {/* Horizontal border line */}
              <div className="absolute left-4 right-4 top-1/2 h-px bg-gold/30 -translate-y-1/2"></div>
              
              {whyChooseFeatures.map((feature, index) => (
                <div 
                  key={index} 
                  className={`flex gap-4 py-8 ${index === 0 ? 'md:pr-8 md:pb-8 md:pt-0' : index === 1 ? 'md:pl-8 md:pb-8 md:pt-0' : index === 2 ? 'md:pr-8 md:pt-8 md:pb-0' : 'md:pl-8 md:pt-8 md:pb-0'}`}
                >
                  <div className="shrink-0">
                    {getIcon(feature.icon, "w-8 h-8 text-gold")}
                  </div>
                  <div>
                    <h4 className="text-forest font-serif font-semibold text-base mb-1.5 leading-tight">
                      {feature.title}
                    </h4>
                    <p className="text-charcoal/60 text-[11px] leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Area */}
            <div>
              <Link 
                to="/about"
                className="inline-flex items-center gap-2 bg-forest hover:bg-charcoal text-white px-8 py-3.5 rounded-full text-sm font-semibold transition-all duration-300 w-max shadow-md hover:-translate-y-0.5"
              >
                Learn More About Tourswale
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
              
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mt-5 text-[11px] text-charcoal/60 font-medium">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-gold" strokeWidth={2} />
                  <span>Personal planning</span>
                </div>
                <div className="w-1 h-1 rounded-full bg-gold/50"></div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-gold" strokeWidth={2} />
                  <span>Trusted stays</span>
                </div>
                <div className="w-1 h-1 rounded-full bg-gold/50"></div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-gold" strokeWidth={2} />
                  <span>Support throughout</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}
