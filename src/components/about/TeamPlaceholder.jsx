import Container from '../common/Container';
import { Plane, Map, HeadphonesIcon } from 'lucide-react';

export default function TeamPlaceholder() {
  return (
    <section className="py-20 bg-charcoal text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent pointer-events-none"></div>
      
      <Container className="relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Meet the People Behind Tourswale</h2>
          <p className="text-white/70 text-base md:text-lg">
            Tourswale is supported by a team focused on travel planning, destination research and customer assistance.
          </p>
        </div>

        {/* 
          Developer Note: 
          Do not invent names, job titles or staff photographs here.
          Real team details can be added in a future update when provided by the client.
        */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          
          <div className="bg-white/5 border border-white/10 p-8 rounded-3xl text-center backdrop-blur-sm hover:bg-white/10 transition-colors">
            <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-6 text-gold">
              <Plane className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif font-bold mb-3">Travel Planning Team</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Crafting personalized itineraries based on your preferences, group size, and travel style.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 p-8 rounded-3xl text-center backdrop-blur-sm hover:bg-white/10 transition-colors">
            <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-6 text-gold">
              <Map className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif font-bold mb-3">Destination Research</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Continuously evaluating accommodations, local transport, and seasonal conditions.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 p-8 rounded-3xl text-center backdrop-blur-sm hover:bg-white/10 transition-colors">
            <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-6 text-gold">
              <HeadphonesIcon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif font-bold mb-3">Customer Support</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Providing clear communication and assistance throughout the booking and travel process.
            </p>
          </div>

        </div>
      </Container>
    </section>
  );
}
