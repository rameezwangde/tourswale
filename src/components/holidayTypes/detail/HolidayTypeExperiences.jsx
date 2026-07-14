import { Utensils, Ship, Sparkles, Bed, Camera, Ticket, Map, Sun, Bus, Train, Users, Briefcase, Clock, Mountain, Gem } from 'lucide-react';
import Container from '../../common/Container';

const iconMap = {
  Utensils, Ship, Sparkles, Bed, Camera, Ticket, Map, Sun, Bus, Train, Users, Briefcase, Clock, Mountain, Gem
};

export default function HolidayTypeExperiences({ holidayType }) {
  if (!holidayType.experienceHighlights || holidayType.experienceHighlights.length === 0) return null;

  return (
    <section className="py-16 lg:py-24 bg-white">
      <Container>
        <div className="mb-12">
          <h2 className="text-3xl font-serif font-bold text-forest mb-4">
            Experiences You Can Include
          </h2>
          <p className="text-charcoal/70 text-base max-w-2xl">
            A glimpse into the memorable activities and exclusive moments that define this style of travel.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {holidayType.experienceHighlights.map((exp, index) => {
            const Icon = iconMap[exp.icon] || Sparkles;
            return (
              <div 
                key={index} 
                className="group flex items-start gap-4 p-6 rounded-2xl bg-charcoal/5 hover:bg-forest transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0 group-hover:bg-white/10 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg text-forest group-hover:text-white transition-colors mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-charcoal/70 text-sm leading-relaxed group-hover:text-white/80 transition-colors">
                    {exp.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
