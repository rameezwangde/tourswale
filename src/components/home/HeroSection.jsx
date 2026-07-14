import { motion } from 'framer-motion';
import Container from '../common/Container';
import PrimaryButton from '../common/PrimaryButton';
import SecondaryButton from '../common/SecondaryButton';
import ImageWithFallback from '../common/ImageWithFallback';
import HolidaySearchBar from './HolidaySearchBar';

export default function HeroSection() {
  return (
    <div className="relative min-h-[90vh] flex flex-col justify-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2560&auto=format&fit=crop" 
          alt="Traveller overlooking alpine mountains"
          className="w-full h-full object-cover object-top"
          eager={true}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-white/10"></div>
      </div>

      <Container className="relative z-10 flex-grow flex flex-col justify-center mb-16 lg:mb-24 mt-10">
        <div className="max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-white leading-[1.1] tracking-tight mb-6"
          >
            Discover Unforgettable <br className="hidden md:block" />
            Holiday Packages <br className="hidden md:block" />
            with Tourswale
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-base md:text-lg text-white/90 leading-relaxed mb-10 max-w-2xl font-medium"
          >
            Explore thoughtfully planned domestic and international tour packages created for families, couples, groups and independent travellers. From peaceful beach escapes to exciting city adventures, Tourswale makes every journey simple, comfortable and memorable.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 mb-8"
          >
            <PrimaryButton to="/tours">
              Explore Tour Packages
            </PrimaryButton>
            <SecondaryButton to="/contact" light={true}>
              Plan My Holiday
            </SecondaryButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-white/70 text-xs font-semibold tracking-wide"
          >
            Personalized itineraries &bull; Reliable assistance &bull; Transparent package details
          </motion.div>
        </div>
      </Container>

      {/* Floating Search Bar */}
      <div className="relative z-20 w-full px-4 lg:px-12 -mt-12 lg:-mt-16 mb-8 lg:mb-0">
        <HolidaySearchBar />
      </div>
    </div>
  );
}
