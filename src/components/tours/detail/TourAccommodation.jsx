import { Bed, Car, Utensils } from 'lucide-react';

export default function TourAccommodation({ accommodation, transportation, meals }) {
  if (!accommodation && !transportation && !meals) return null;

  return (
    <section className="mb-16">
      <h2 className="text-2xl font-serif font-bold text-forest mb-6">Stay & Travel</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {accommodation && (
          <div className="bg-cream/50 rounded-2xl p-6 border border-gray-100">
            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-gold mb-5">
              <Bed className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-lg text-forest mb-3">Accommodation</h3>
            <p className="text-charcoal/80 text-sm leading-relaxed">
              {accommodation}
            </p>
          </div>
        )}

        {transportation && (
          <div className="bg-cream/50 rounded-2xl p-6 border border-gray-100">
            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-gold mb-5">
              <Car className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-lg text-forest mb-3">Transportation</h3>
            <p className="text-charcoal/80 text-sm leading-relaxed">
              {transportation}
            </p>
          </div>
        )}

        {meals && (
          <div className="bg-cream/50 rounded-2xl p-6 border border-gray-100">
            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-gold mb-5">
              <Utensils className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-lg text-forest mb-3">Meals</h3>
            <p className="text-charcoal/80 text-sm leading-relaxed">
              {meals}
            </p>
          </div>
        )}

      </div>
    </section>
  );
}
