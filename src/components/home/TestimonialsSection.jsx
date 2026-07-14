import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { testimonials } from '../../data/homeData';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-20 lg:py-28 bg-cream/30">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <SectionHeading 
            eyebrow="Guest Experiences"
            title="Travel Stories from Our Guests"
            className="md:w-2/3"
          />
          <div className="flex items-center gap-4 pb-2">
            <button 
              onClick={handlePrevious}
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-charcoal hover:bg-forest hover:text-white hover:border-forest transition-colors"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={handleNext}
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-charcoal hover:bg-forest hover:text-white hover:border-forest transition-colors"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="relative bg-white rounded-3xl p-8 md:p-16 lg:p-20 shadow-[0_10px_40px_rgba(0,0,0,0.03)] overflow-hidden">
          <Quote className="absolute top-8 right-8 md:top-16 md:right-16 w-24 h-24 text-cream opacity-50" />
          
          <div className="relative z-10 min-h-[200px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="max-w-4xl"
              >
                <p className="text-xl md:text-2xl lg:text-3xl font-serif text-charcoal leading-relaxed mb-8 md:mb-12">
                  "{testimonials[currentIndex].quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-forest/10 flex items-center justify-center text-forest font-bold font-serif">
                    {testimonials[currentIndex].author.charAt(0)}
                  </div>
                  <div>
                    <h5 className="font-bold text-charcoal text-sm mb-0.5">{testimonials[currentIndex].author}</h5>
                    <p className="text-charcoal/60 text-xs font-semibold uppercase tracking-wider">{testimonials[currentIndex].destination}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
}
