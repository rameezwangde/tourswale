import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import PrimaryButton from '../common/PrimaryButton';
import SecondaryButton from '../common/SecondaryButton';
import ImageWithFallback from '../common/ImageWithFallback';

export default function CustomHolidayBanner() {
  return (
    <section className="py-20 lg:py-24 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?q=80&w=1920&auto=format&fit=crop" 
          alt="Traveller planning a custom holiday"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-forest/90"></div>
      </div>

      <Container className="relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center">
        <SectionHeading 
          light={true}
          title="Your Holiday, Planned Your Way"
          description="Tell us where you want to go, how long you would like to travel and the experiences you want to include. Our travel specialists will help create a personalized itinerary based on your travel dates, preferences and budget."
          className="items-center"
        />
        
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <PrimaryButton to="/contact?type=custom-holiday" className="bg-white text-forest hover:bg-cream hover:text-forest">
            Create My Custom Tour
          </PrimaryButton>
          <SecondaryButton to="/contact" light={true}>
            Speak to a Travel Expert
          </SecondaryButton>
        </div>
      </Container>
    </section>
  );
}
