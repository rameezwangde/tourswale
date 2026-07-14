import { Link } from 'react-router-dom';
import Container from '../../common/Container';

export default function HolidayTypeHero({ holidayType }) {
  return (
    <div className="relative pt-24 lg:pt-32 pb-20 lg:pb-32 overflow-hidden bg-forest">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={holidayType.heroImage} 
          alt={holidayType.imageAlt || holidayType.name}
          loading="eager"
          className="w-full h-full object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/80 to-forest/30"></div>
      </div>

      <Container className="relative z-10">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-white/70">
            <li><Link to="/" className="hover:text-gold transition-colors">Home</Link></li>
            <li><span>/</span></li>
            <li><Link to="/holiday-types" className="hover:text-gold transition-colors">Holiday Types</Link></li>
            <li><span>/</span></li>
            <li><span className="text-white" aria-current="page">{holidayType.name}</span></li>
          </ol>
        </nav>

        <div className="flex flex-col lg:flex-row gap-12 lg:items-end justify-between">
          <div className="max-w-3xl">
            <span className="bg-gold px-3 py-1.5 rounded-lg text-[10px] font-bold text-white uppercase tracking-wider inline-block mb-6">
              {holidayType.eyebrow}
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
              {holidayType.name}
            </h1>
            
            <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-2xl">
              {holidayType.shortDescription}
            </p>
          </div>

          <div className="hidden lg:flex flex-col items-end shrink-0 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl max-w-sm w-full text-right">
            <p className="text-sm font-bold text-white mb-4">Start Planning Your Journey</p>
            <div className="flex flex-col gap-3 w-full">
              <Link 
                to={`/contact?type=${holidayType.slug}`}
                className="w-full bg-gold hover:bg-yellow-600 text-white px-6 py-3.5 rounded-xl text-sm font-bold transition-colors shadow-sm text-center"
              >
                Plan My Holiday
              </Link>
              <Link 
                to={`/tours?holidayType=${holidayType.slug}`}
                className="w-full border border-white/30 hover:bg-white/10 text-white px-6 py-3.5 rounded-xl text-sm font-bold transition-colors text-center"
              >
                Explore Packages
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
