import { CheckCircle2 } from 'lucide-react';
import Container from '../../common/Container';

export default function HolidayTypeIntro({ holidayType }) {
  // Split introduction into paragraphs safely
  const introParagraphs = holidayType.introduction.split('\n\n').filter(p => p.trim() !== '');

  return (
    <section className="py-16 lg:py-24 bg-white">
      <Container>
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          {/* Main Introduction */}
          <div className="lg:w-3/5">
            <h2 className="text-3xl font-serif font-bold text-forest mb-6">
              About {holidayType.name}
            </h2>
            <div className="prose prose-charcoal max-w-none">
              {introParagraphs.map((paragraph, index) => (
                <p key={index} className="text-charcoal/80 leading-relaxed text-base md:text-lg mb-6">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Who Is This For Block */}
          <div className="lg:w-2/5">
            <div className="bg-cream/50 rounded-3xl p-8 border border-gray-100 h-full">
              <h3 className="text-xl font-serif font-bold text-forest mb-8">
                Who Is This Holiday Best For?
              </h3>
              
              <ul className="space-y-6">
                {holidayType.idealFor.map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-forest/10 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-forest" />
                    </div>
                    <div>
                      <h4 className="font-bold text-charcoal text-sm mb-1">{item.profile}</h4>
                      <p className="text-sm text-charcoal/70 leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
