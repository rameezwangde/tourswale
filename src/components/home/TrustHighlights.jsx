import { Shield, Calendar, Compass, Lock } from 'lucide-react';
import Container from '../common/Container';
import { trustHighlights } from '../../data/homeData';

export default function TrustHighlights() {
  const getIcon = (name) => {
    switch (name) {
      case 'Shield': return <Shield className="w-8 h-8 text-gold" strokeWidth={1.5} />;
      case 'Calendar': return <Calendar className="w-8 h-8 text-gold" strokeWidth={1.5} />;
      case 'Compass': return <Compass className="w-8 h-8 text-gold" strokeWidth={1.5} />;
      case 'Lock': return <Lock className="w-8 h-8 text-gold" strokeWidth={1.5} />;
      default: return <Shield className="w-8 h-8 text-gold" strokeWidth={1.5} />;
    }
  };

  return (
    <section className="py-16 bg-cream/30">
      <Container>
        <div className="text-center mb-10">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-charcoal/60">
            Travel With Confidence
          </span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {trustHighlights.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-5 group-hover:-translate-y-1 transition-transform duration-300">
                {getIcon(item.icon)}
              </div>
              <h4 className="text-forest font-serif font-semibold text-lg mb-2">{item.title}</h4>
              <p className="text-charcoal/70 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
