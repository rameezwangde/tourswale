import { Link } from 'react-router-dom';
import * as LucideIcons from 'lucide-react';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import ImageWithFallback from '../common/ImageWithFallback';
import { holidayTypesData } from '../../data/homeData';

export default function HolidayTypesSection() {
  const getIcon = (name) => {
    const Icon = LucideIcons[name] || LucideIcons.Compass;
    return <Icon className="w-5 h-5" />;
  };

  return (
    <section className="py-20 lg:py-28 bg-cream/30">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <SectionHeading 
            eyebrow="Travel Your Way"
            title="Find a Holiday Designed for You"
            description="Every traveller has a different idea of the perfect holiday. Explore experiences created for couples, families, groups, solo explorers, senior travellers and adventure seekers."
            className="md:w-2/3"
          />
        </div>

        {/* Creative Mosaic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {holidayTypesData.map((type, index) => {
            // Alternate between image cards and icon cards for a creative mosaic
            const isImageCard = index === 0 || index === 3 || index === 4 || index === 7;
            
            if (isImageCard) {
              return (
                <Link 
                  key={type.id} 
                  to={`/holiday-types/${type.id}`}
                  className="group relative h-[320px] rounded-3xl overflow-hidden block"
                >
                  <ImageWithFallback 
                    src={type.image} 
                    alt={type.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white mb-4">
                      {getIcon(type.icon)}
                    </div>
                    <h3 className="text-xl font-serif font-bold text-white mb-2">{type.title}</h3>
                    <p className="text-white/80 text-xs leading-relaxed line-clamp-2">{type.description}</p>
                  </div>
                </Link>
              );
            }

            return (
              <Link 
                key={type.id} 
                to={`/holiday-types/${type.id}`}
                className="group h-[320px] rounded-3xl bg-white border border-gray-100 p-8 flex flex-col justify-between hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-2xl bg-cream flex items-center justify-center text-forest group-hover:bg-forest group-hover:text-white transition-colors">
                  {getIcon(type.icon)}
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-charcoal mb-3 group-hover:text-forest transition-colors">{type.title}</h3>
                  <p className="text-charcoal/70 text-sm leading-relaxed">{type.description}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
