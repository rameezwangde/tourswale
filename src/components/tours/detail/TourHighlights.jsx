import { Check } from 'lucide-react';

export default function TourHighlights({ highlights }) {
  if (!highlights || highlights.length === 0) return null;

  return (
    <section className="mb-16">
      <h2 className="text-2xl font-serif font-bold text-forest mb-6">Tour Highlights</h2>
      <div className="bg-cream/50 rounded-2xl p-6 md:p-8 border border-gray-100">
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
          {highlights.map((highlight, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-forest/10 flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5 text-forest" />
              </div>
              <span className="text-charcoal/80 leading-relaxed text-sm md:text-base">{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
