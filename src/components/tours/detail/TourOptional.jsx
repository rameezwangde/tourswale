import { PlusCircle } from 'lucide-react';

export default function TourOptional({ optionalExperiences }) {
  if (!optionalExperiences || optionalExperiences.length === 0) return null;

  return (
    <section className="mb-16">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-serif font-bold text-forest">Enhance Your Journey</h2>
      </div>
      
      <p className="text-charcoal/70 text-sm mb-6">
        Optional experiences can be added to your itinerary for an additional charge. Ask our travel specialists to include them in your quote.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {optionalExperiences.map((exp, index) => (
          <div key={index} className="flex gap-4 p-5 rounded-2xl border border-gray-200 hover:border-gold/50 hover:shadow-md transition-all group bg-white">
            <div className="w-10 h-10 rounded-full bg-cream group-hover:bg-gold/10 flex items-center justify-center shrink-0 transition-colors">
              <PlusCircle className="w-5 h-5 text-gold" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg text-forest mb-2">{exp.title}</h3>
              <p className="text-charcoal/70 text-sm leading-relaxed">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
