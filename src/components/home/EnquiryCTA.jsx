import { Link } from 'react-router-dom';
import Container from '../common/Container';

export default function EnquiryCTA() {
  return (
    <section className="py-20 bg-forest relative overflow-hidden text-center">
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent pointer-events-none"></div>
      <Container className="relative z-10 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
          Ready to Start Your Journey?
        </h2>
        <p className="text-white/80 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
          Whether you know exactly where you want to go or need some inspiration, our travel experts are here to help you plan the perfect holiday.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/contact" 
            className="bg-gold hover:bg-yellow-600 text-white px-8 py-4 rounded-xl text-sm font-bold transition-colors shadow-sm text-center"
          >
            Speak to an Expert
          </Link>
          <Link 
            to="/tours" 
            className="border border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-xl text-sm font-bold transition-colors text-center"
          >
            Browse All Tours
          </Link>
        </div>
      </Container>
    </section>
  );
}
