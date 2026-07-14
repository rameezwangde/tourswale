import { useState } from 'react';
import { ChevronDown, Utensils, Bed, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function TourItinerary({ itinerary }) {
  // Always keep the first day open by default
  const [openDay, setOpenDay] = useState(0);

  if (!itinerary || itinerary.length === 0) return null;

  return (
    <section className="mb-16">
      <h2 className="text-2xl font-serif font-bold text-forest mb-6">Day-by-Day Itinerary</h2>
      
      <div className="space-y-4">
        {itinerary.map((day, index) => {
          const isOpen = openDay === index;

          return (
            <div 
              key={index} 
              className={`bg-white border rounded-2xl overflow-hidden transition-colors duration-300 ${isOpen ? 'border-gold shadow-sm' : 'border-gray-200 hover:border-gray-300'}`}
            >
              {/* Accordion Header */}
              <button 
                onClick={() => setOpenDay(isOpen ? -1 : index)}
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none focus-visible:bg-cream"
                aria-expanded={isOpen}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shrink-0 transition-colors ${isOpen ? 'bg-forest text-white' : 'bg-cream text-forest'}`}>
                    {day.day}
                  </div>
                  <h3 className={`font-serif font-bold text-lg md:text-xl transition-colors ${isOpen ? 'text-forest' : 'text-charcoal'}`}>
                    {day.title}
                  </h3>
                </div>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen ? 'bg-cream rotate-180' : 'bg-gray-50'}`}>
                  <ChevronDown className={`w-5 h-5 ${isOpen ? 'text-forest' : 'text-charcoal/50'}`} />
                </div>
              </button>

              {/* Accordion Body */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 pt-2">
                      <div className="pl-14">
                        <p className="text-charcoal/80 leading-relaxed mb-6">
                          {day.description}
                        </p>

                        {/* Badges */}
                        <div className="flex flex-wrap gap-3">
                          {day.meals && (
                            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-50 text-xs font-semibold text-charcoal/70 border border-gray-100">
                              <Utensils className="w-3.5 h-3.5 text-forest" />
                              Meals: {day.meals}
                            </div>
                          )}
                          {day.accommodation && (
                            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-50 text-xs font-semibold text-charcoal/70 border border-gray-100">
                              <Bed className="w-3.5 h-3.5 text-forest" />
                              {day.accommodation}
                            </div>
                          )}
                          {day.activity && (
                            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gold/10 text-xs font-semibold text-forest border border-gold/20">
                              <MapPin className="w-3.5 h-3.5 text-gold" />
                              {day.activity}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
