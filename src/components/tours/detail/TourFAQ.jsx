import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function TourFAQ({ customFaqs }) {
  const [openIndex, setOpenIndex] = useState(0);

  const defaultFaqs = [
    {
      question: "Can this tour be customized?",
      answer: "Yes. Travel dates, accommodation, activities and package duration may be adjusted depending on availability."
    },
    {
      question: "Are flights included?",
      answer: "Flights are included only when clearly mentioned in the package details or final quotation."
    },
    {
      question: "Can I change the hotel category?",
      answer: "Yes. Alternative accommodation categories may be available based on your preferences and budget."
    },
    {
      question: "Is visa assistance available?",
      answer: "Visa guidance may be available for selected international destinations, but approval remains subject to the relevant authority."
    }
  ];

  const faqsToRender = customFaqs || defaultFaqs;

  return (
    <section className="mb-16">
      <h2 className="text-2xl font-serif font-bold text-forest mb-6">Frequently Asked Questions</h2>
      
      <div className="space-y-4">
        {faqsToRender.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={index} className="bg-white border border-gray-200 rounded-2xl overflow-hidden transition-colors hover:border-gold">
              <button
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus-visible:bg-cream"
                aria-expanded={isOpen}
              >
                <span className={`font-serif font-bold text-lg pr-8 transition-colors ${isOpen ? 'text-forest' : 'text-charcoal'}`}>
                  {faq.question}
                </span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'bg-cream rotate-180' : 'bg-gray-50'}`}>
                  <ChevronDown className={`w-5 h-5 ${isOpen ? 'text-forest' : 'text-charcoal/50'}`} />
                </div>
              </button>
              
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 pt-2 text-charcoal/80 leading-relaxed text-sm md:text-base">
                      {faq.answer}
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
