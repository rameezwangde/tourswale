import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { homeFaqs } from '../../data/homeData';

export default function HomeFAQ() {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-20 lg:py-28 bg-cream/30">
      <Container>
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          <div className="lg:w-1/3">
            <SectionHeading 
              eyebrow="Travel Questions"
              title="Frequently Asked Questions About Tourswale Packages"
            />
          </div>

          <div className="lg:w-2/3">
            <div className="space-y-4">
              {homeFaqs.map((faq, index) => (
                <div 
                  key={index} 
                  className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${openIndex === index ? 'bg-white border-gold/30 shadow-[0_10px_30px_rgba(0,0,0,0.03)]' : 'bg-transparent border-gray-200 hover:border-gold/50'}`}
                >
                  <button 
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between p-6 text-left"
                    aria-expanded={openIndex === index}
                  >
                    <h4 className="text-lg font-serif font-bold text-charcoal pr-4">{faq.question}</h4>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${openIndex === index ? 'bg-gold text-white' : 'bg-cream text-forest'}`}>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} />
                    </div>
                  </button>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 text-charcoal/70 text-sm leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
