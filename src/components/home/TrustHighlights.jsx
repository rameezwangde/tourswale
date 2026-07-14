import { Shield, Calendar, Compass, Lock } from 'lucide-react';
import Container from '../common/Container';
import ImageWithFallback from '../common/ImageWithFallback';
import { trustHighlights } from '../../data/homeData';

export default function TrustHighlights() {
  const getIcon = (name, className) => {
    switch (name) {
      case 'Shield': return <Shield className={className} strokeWidth={1.5} />;
      case 'Calendar': return <Calendar className={className} strokeWidth={1.5} />;
      case 'Compass': return <Compass className={className} strokeWidth={1.5} />;
      case 'Lock': return <Lock className={className} strokeWidth={1.5} />;
      default: return <Shield className={className} strokeWidth={1.5} />;
    }
  };

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden bg-cream">
      {/* Decorative background blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] right-[5%] w-[400px] h-[400px] rounded-full bg-gold/10 blur-[80px]" />
        <div className="absolute bottom-[10%] left-[5%] w-[500px] h-[500px] rounded-full bg-forest/5 blur-[100px]" />
      </div>

      <Container className="relative z-10">
        <div className="text-center flex flex-col items-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm mb-4">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-forest">
              Travel With Confidence
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal">
            The Tourswale <span className="text-gold italic">Advantage</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {trustHighlights.map((item, index) => (
            <div 
              key={index} 
              className="group relative h-[420px] rounded-3xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-500"
            >
              {/* Background Image */}
              <ImageWithFallback 
                src={item.image} 
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/40 to-transparent opacity-90 group-hover:opacity-100 group-hover:from-forest group-hover:via-forest/70 transition-all duration-500" />

              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold/0 via-gold to-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-6 group-hover:bg-gold group-hover:border-gold transition-colors duration-500">
                  {getIcon(item.icon, "w-7 h-7 text-white transition-colors duration-500")}
                </div>
                
                <h4 className="text-white font-serif font-semibold text-xl mb-3 transform translate-y-0 group-hover:-translate-y-1 transition-transform duration-500">
                  {item.title}
                </h4>
                
                <p className="text-white/70 text-sm leading-relaxed transform translate-y-0 group-hover:-translate-y-1 transition-transform duration-500">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
