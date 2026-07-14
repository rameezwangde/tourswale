import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import ImageWithFallback from '../common/ImageWithFallback';
import { experienceThemes } from '../../data/homeData';

export default function ExperienceShowcase() {
  return (
    <section className="py-20 lg:py-28 bg-charcoal text-white overflow-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 mb-16">
          <div className="lg:w-1/2">
            <SectionHeading 
              light={true}
              eyebrow="Experiences Beyond Destinations"
              title="Travel for the Moments You Will Always Remember"
            />
          </div>
          <div className="lg:w-1/2 flex items-end">
            <p className="text-white/70 text-sm lg:text-base leading-relaxed">
              A meaningful journey is more than a list of places. Tourswale helps you experience local culture, scenic landscapes, memorable cuisine and activities that make every destination feel personal.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {experienceThemes.map((theme, index) => (
            <div 
              key={theme.id} 
              className={`group relative rounded-2xl overflow-hidden ${index % 2 === 0 ? 'h-[300px] lg:h-[400px]' : 'h-[300px] lg:h-[500px] lg:-mt-10'}`}
            >
              <ImageWithFallback 
                src={theme.image} 
                alt={theme.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 lg:p-8">
                <h4 className="text-xl lg:text-2xl font-serif font-bold text-white group-hover:text-gold transition-colors">{theme.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
