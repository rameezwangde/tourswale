import { Link } from 'react-router-dom';
import Container from '../common/Container';
import PrimaryButton from '../common/PrimaryButton';

export default function FeaturedHolidayStyle() {
  return (
    <section className="py-20 bg-cream">
      <Container>
        <div className="relative rounded-[32px] overflow-hidden bg-forest flex flex-col lg:flex-row group shadow-xl">
          
          {/* Content */}
          <div className="p-8 md:p-12 lg:p-16 flex-1 flex flex-col justify-center relative z-10 order-2 lg:order-1">
            <span className="text-gold text-[10px] font-bold uppercase tracking-wider mb-4">
              FEATURED TRAVEL STYLE
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-6 leading-tight">
              A Holiday Designed Around You
            </h2>
            <p className="text-white/80 text-base md:text-lg leading-relaxed mb-8 max-w-lg">
              Choose your preferred destination, travel dates, accommodation style, activities and pace. Tourswale will help shape a personalized itinerary that reflects how you truly want to travel.
            </p>
            <div>
              <PrimaryButton to="/holiday-types/customized-holidays">
                Create My Custom Holiday
              </PrimaryButton>
            </div>
          </div>

          {/* Image */}
          <div className="h-64 sm:h-80 lg:h-auto lg:w-1/2 relative overflow-hidden order-1 lg:order-2 shrink-0">
            <img 
              src="https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?q=80&w=1200&auto=format&fit=crop" 
              alt="Traveller planning a custom route on a map"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            {/* Subtle Gradient Overlay for mobile readability if image is bright */}
            <div className="absolute inset-0 bg-gradient-to-t from-forest/80 to-transparent lg:bg-gradient-to-r lg:from-forest lg:to-transparent"></div>
          </div>
          
        </div>
      </Container>
    </section>
  );
}
