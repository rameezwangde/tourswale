import { Check, X } from 'lucide-react';

export default function TourInclusions({ inclusions, exclusions }) {
  if (!inclusions && !exclusions) return null;

  return (
    <section className="mb-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Inclusions */}
        {inclusions && inclusions.length > 0 && (
          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 shadow-sm h-full">
            <h2 className="text-xl font-serif font-bold text-forest mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-emerald/10 flex items-center justify-center shrink-0">
                <Check className="w-4 h-4 text-emerald" />
              </span>
              What Is Included
            </h2>
            <ul className="space-y-4">
              {inclusions.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-emerald shrink-0 mt-1" />
                  <span className="text-charcoal/80 text-sm md:text-base leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Exclusions */}
        {exclusions && exclusions.length > 0 && (
          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 shadow-sm h-full">
            <h2 className="text-xl font-serif font-bold text-forest mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-charcoal/5 flex items-center justify-center shrink-0">
                <X className="w-4 h-4 text-charcoal/40" />
              </span>
              What Is Not Included
            </h2>
            <ul className="space-y-4">
              {exclusions.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <X className="w-4 h-4 text-charcoal/40 shrink-0 mt-1" />
                  <span className="text-charcoal/80 text-sm md:text-base leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

      </div>
    </section>
  );
}
