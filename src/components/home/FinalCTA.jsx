import Container from '../common/Container';
import PrimaryButton from '../common/PrimaryButton';
import SecondaryButton from '../common/SecondaryButton';

export default function FinalCTA() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-[#Fdfbf7]">
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold to-transparent pointer-events-none"></div>
      
      <Container className="relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-charcoal mb-6 leading-tight">
          Ready to Plan Your Next Unforgettable Journey?
        </h2>
        <p className="text-charcoal/70 text-base md:text-lg leading-relaxed mb-10 max-w-2xl">
          Share your destination, travel dates and preferences with our team. Tourswale will help you create a holiday package designed around the way you want to travel.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <PrimaryButton to="/contact">
            Plan My Holiday
          </PrimaryButton>
          <SecondaryButton to="/tours">
            Explore Tour Packages
          </SecondaryButton>
        </div>
      </Container>
    </section>
  );
}
