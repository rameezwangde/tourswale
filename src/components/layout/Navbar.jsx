import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, Phone, Plane, ChevronDown, X, ArrowRight, 
  Heart, Users, Gem, Compass, CalendarDays, Briefcase, 
  UserPlus, Settings, Map
} from 'lucide-react';
import ImageWithFallback from '../common/ImageWithFallback';

// --- DATA CONSTANTS ---

const domesticTours = ['Kashmir', 'Kerala', 'Goa', 'Rajasthan', 'Ladakh', 'Himachal', 'Andaman', 'North East'];
const internationalTours = ['Dubai', 'Bali', 'Thailand', 'Singapore', 'Maldives', 'Japan', 'Vietnam', 'Turkey', 'Europe'];
const holidayStyles = ['Family Tours', 'Luxury Holidays', 'Honeymoon', 'Adventure', 'Weekend Trips', 'Senior Tours', 'Group Tours', 'Customized Holidays'];

const destIndia = ['Goa', 'Kerala', 'Kashmir', 'Ladakh', 'Rajasthan'];
const destAsia = ['Dubai', 'Thailand', 'Singapore', 'Bali', 'Japan', 'Vietnam'];
const destEurope = ['Switzerland', 'France', 'Italy', 'Austria', 'Germany'];

const holidayTypesMenu = [
  { name: 'Honeymoon', icon: Heart, desc: 'Romantic escapes for couples' },
  { name: 'Family Holidays', icon: Users, desc: 'Fun for all ages' },
  { name: 'Luxury Tours', icon: Gem, desc: 'Premium curated experiences' },
  { name: 'Adventure Trips', icon: Compass, desc: 'Thrilling active holidays' },
  { name: 'Weekend Getaways', icon: CalendarDays, desc: 'Short breaks to recharge' },
  { name: 'Group Tours', icon: Map, desc: 'Guided group departures' },
  { name: 'Corporate Tours', icon: Briefcase, desc: 'MICE and team building' },
  { name: 'Senior Tours', icon: UserPlus, desc: 'Relaxed paced holidays' },
  { name: 'Customized Holidays', icon: Settings, desc: 'Tailor-made to your needs' }
];

// --- MEGA MENU COMPONENTS ---

const ToursMegaMenu = () => (
  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 w-[1200px] max-w-[90vw] cursor-default" onClick={(e) => e.stopPropagation()}>
    <motion.div 
      initial={{ opacity: 0, y: 10, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.98 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="bg-white rounded-[22px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] p-8 border border-gray-100 flex gap-8"
    >
      <div className="w-3/4 grid grid-cols-3 gap-8">
        <div>
          <h4 className="text-forest font-serif text-lg font-semibold mb-4 border-b border-gray-100 pb-2">Domestic Tours</h4>
          <ul className="space-y-3">
            {domesticTours.map(item => (
              <li key={item}>
                <Link to={`/destinations/${item.toLowerCase().replace(/ /g, '-')}`} className="text-charcoal/70 hover:text-gold text-[13px] font-medium transition-colors block">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-forest font-serif text-lg font-semibold mb-4 border-b border-gray-100 pb-2">International</h4>
          <ul className="space-y-3">
            {internationalTours.map(item => (
              <li key={item}>
                <Link to={`/destinations/${item.toLowerCase().replace(/ /g, '-')}`} className="text-charcoal/70 hover:text-gold text-[13px] font-medium transition-colors block">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-forest font-serif text-lg font-semibold mb-4 border-b border-gray-100 pb-2">Holiday Styles</h4>
          <ul className="space-y-3">
            {holidayStyles.map(item => (
              <li key={item}>
                <Link to={`/holiday-types/${item.toLowerCase().replace(/ /g, '-')}`} className="text-charcoal/70 hover:text-gold text-[13px] font-medium transition-colors block">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="w-1/4 relative rounded-[16px] overflow-hidden group">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop" 
          alt="Dubai Skyline"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b291d]/90 via-[#0b291d]/40 to-transparent flex flex-col justify-end p-6">
          <h5 className="text-white font-serif text-xl font-semibold mb-2">Plan Your Dream Holiday</h5>
          <p className="text-white/80 text-[11px] leading-relaxed mb-4">
            Tell us where you want to travel and our experts will design your perfect itinerary.
          </p>
          <Link to="/contact" className="inline-flex items-center text-gold text-xs font-bold uppercase tracking-wider hover:text-white transition-colors">
            Start Planning <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  </div>
);

const DestinationsMegaMenu = () => (
  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 w-[1000px] max-w-[90vw] cursor-default" onClick={(e) => e.stopPropagation()}>
    <motion.div 
      initial={{ opacity: 0, y: 10, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.98 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="bg-white rounded-[22px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] p-8 border border-gray-100 flex gap-8"
    >
      <div className="w-2/3 grid grid-cols-3 gap-8">
        <div>
          <h4 className="text-forest font-serif text-lg font-semibold mb-4 border-b border-gray-100 pb-2">India</h4>
          <ul className="space-y-3">
            {destIndia.map(item => (
              <li key={item}>
                <Link to={`/destinations/${item.toLowerCase().replace(/ /g, '-')}`} className="text-charcoal/70 hover:text-gold text-[13px] font-medium transition-colors block">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-forest font-serif text-lg font-semibold mb-4 border-b border-gray-100 pb-2">Asia</h4>
          <ul className="space-y-3">
            {destAsia.map(item => (
              <li key={item}>
                <Link to={`/destinations/${item.toLowerCase().replace(/ /g, '-')}`} className="text-charcoal/70 hover:text-gold text-[13px] font-medium transition-colors block">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-forest font-serif text-lg font-semibold mb-4 border-b border-gray-100 pb-2">Europe</h4>
          <ul className="space-y-3">
            {destEurope.map(item => (
              <li key={item}>
                <Link to={`/destinations/${item.toLowerCase().replace(/ /g, '-')}`} className="text-charcoal/70 hover:text-gold text-[13px] font-medium transition-colors block">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="w-1/3 relative rounded-[16px] overflow-hidden group">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=800&auto=format&fit=crop" 
          alt="Swiss Alps"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b291d]/90 via-[#0b291d]/40 to-transparent flex flex-col justify-end p-6">
          <h5 className="text-white font-serif text-xl font-semibold mb-2">Explore Beautiful Places</h5>
          <p className="text-white/80 text-[11px] leading-relaxed mb-4">
            Discover unforgettable destinations around the world.
          </p>
          <Link to="/destinations" className="inline-flex items-center bg-white/20 hover:bg-white text-white hover:text-forest backdrop-blur-sm px-4 py-2 rounded-lg text-xs font-bold transition-colors w-max">
            View Destinations
          </Link>
        </div>
      </div>
    </motion.div>
  </div>
);

const HolidayTypesMegaMenu = () => (
  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 w-[900px] max-w-[90vw] cursor-default" onClick={(e) => e.stopPropagation()}>
    <motion.div 
      initial={{ opacity: 0, y: 10, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.98 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="bg-white rounded-[22px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] p-8 border border-gray-100"
    >
      <div className="grid grid-cols-3 gap-4">
        {holidayTypesMenu.map((item, idx) => (
          <Link 
            key={idx} 
            to={`/holiday-types/${item.name.toLowerCase().replace(/ /g, '-')}`}
            className="flex items-start gap-4 p-4 rounded-[16px] hover:bg-cream transition-colors group"
          >
            <div className="w-10 h-10 rounded-full bg-forest/5 flex items-center justify-center text-forest group-hover:bg-forest group-hover:text-white transition-colors shrink-0">
              <item.icon className="w-5 h-5" />
            </div>
            <div>
              <h5 className="text-forest font-semibold text-sm mb-1 group-hover:text-gold transition-colors">{item.name}</h5>
              <p className="text-charcoal/60 text-xs">{item.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </motion.div>
  </div>
);

// --- MAIN NAVBAR ---

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState(null); // 'tours', 'destinations', 'holidayTypes'
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu on route change
    setMobileMenuOpen(false);
    setActiveMegaMenu(null);
  }, [location.pathname]);

  // Handle ESC to close menus
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        setActiveMegaMenu(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    scrolled 
      ? 'bg-white/95 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.05)]' 
      : (isHomePage ? 'bg-transparent' : 'bg-white')
  }`;

  const navHeightClasses = `flex justify-between items-center transition-all duration-300 ${
    scrolled ? 'h-[70px] md:h-[80px] lg:h-[90px]' : 'h-[80px] md:h-[90px] lg:h-[100px]'
  }`;

  const textClasses = (scrolled || !isHomePage) ? 'text-charcoal' : 'text-white';
  const logoClasses = (scrolled || !isHomePage) ? 'text-charcoal' : 'text-white';
  const iconClasses = (scrolled || !isHomePage) ? 'text-charcoal fill-charcoal' : 'text-white fill-white';
  const hoverTextClass = 'hover:text-gold';

  const isActive = (path) => location.pathname === path || location.pathname.startsWith(`${path}/`);

  const toggleMobileAccordion = (section) => {
    setMobileExpanded(mobileExpanded === section ? null : section);
  };

  return (
    <>
      <nav className={navClasses}>
        <div className="container mx-auto px-6 lg:px-12">
          <div className={navHeightClasses}>
            
            {/* Logo */}
            <div className="flex items-center gap-1 cursor-pointer z-50">
              <Link to="/" className={`text-[26px] font-bold ${logoClasses} tracking-tight flex items-center relative transition-colors`}>
                tourswale
                <Plane className="w-4 h-4 text-gold absolute -top-1 -right-3 rotate-45" fill="currentColor" strokeWidth={0} />
              </Link>
            </div>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-8 text-[11px] font-bold uppercase tracking-wider h-full">
              
              <Link to="/" className={`h-full flex items-center transition-colors ${textClasses} ${hoverTextClass} ${isActive('/') && location.pathname === '/' ? 'text-forest' : ''}`}>
                <span className="relative py-1">
                  Home
                  {location.pathname === '/' && (
                    <motion.div layoutId="nav-indicator" className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold rounded-full" />
                  )}
                </span>
              </Link>

              <div 
                className="h-full flex items-center group cursor-pointer"
                onMouseEnter={() => setActiveMegaMenu('tours')}
                onMouseLeave={() => setActiveMegaMenu(null)}
              >
                <Link to="/tours" className={`flex items-center transition-colors ${textClasses} ${hoverTextClass} ${isActive('/tours') ? 'text-forest' : ''}`}>
                  <span className="relative py-1 flex items-center gap-1">
                    Tours <ChevronDown className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180"/>
                    {isActive('/tours') && (
                      <motion.div layoutId="nav-indicator" className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold rounded-full" />
                    )}
                  </span>
                </Link>
                
                <AnimatePresence>
                  {activeMegaMenu === 'tours' && <ToursMegaMenu />}
                </AnimatePresence>
              </div>

              <div 
                className="h-full flex items-center group cursor-pointer"
                onMouseEnter={() => setActiveMegaMenu('destinations')}
                onMouseLeave={() => setActiveMegaMenu(null)}
              >
                <Link to="/destinations" className={`flex items-center transition-colors ${textClasses} ${hoverTextClass} ${isActive('/destinations') ? 'text-forest' : ''}`}>
                  <span className="relative py-1 flex items-center gap-1">
                    Destinations <ChevronDown className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180"/>
                    {isActive('/destinations') && (
                      <motion.div layoutId="nav-indicator" className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold rounded-full" />
                    )}
                  </span>
                </Link>

                <AnimatePresence>
                  {activeMegaMenu === 'destinations' && <DestinationsMegaMenu />}
                </AnimatePresence>
              </div>

              <div 
                className="h-full flex items-center group cursor-pointer"
                onMouseEnter={() => setActiveMegaMenu('holidayTypes')}
                onMouseLeave={() => setActiveMegaMenu(null)}
              >
                <Link to="/holiday-types" className={`flex items-center transition-colors ${textClasses} ${hoverTextClass} ${isActive('/holiday-types') ? 'text-forest' : ''}`}>
                  <span className="relative py-1 flex items-center gap-1">
                    Holiday Types <ChevronDown className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180"/>
                    {isActive('/holiday-types') && (
                      <motion.div layoutId="nav-indicator" className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold rounded-full" />
                    )}
                  </span>
                </Link>

                <AnimatePresence>
                  {activeMegaMenu === 'holidayTypes' && <HolidayTypesMegaMenu />}
                </AnimatePresence>
              </div>

              <Link to="/blog" className={`h-full flex items-center transition-colors ${textClasses} ${hoverTextClass} ${isActive('/blog') ? 'text-forest' : ''}`}>
                <span className="relative py-1">
                  Blog
                  {isActive('/blog') && (
                    <motion.div layoutId="nav-indicator" className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold rounded-full" />
                  )}
                </span>
              </Link>
              
              <Link to="/about" className={`h-full flex items-center transition-colors ${textClasses} ${hoverTextClass} ${isActive('/about') ? 'text-forest' : ''}`}>
                <span className="relative py-1">
                  About Us
                  {isActive('/about') && (
                    <motion.div layoutId="nav-indicator" className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold rounded-full" />
                  )}
                </span>
              </Link>
              
              <Link to="/contact" className={`h-full flex items-center transition-colors ${textClasses} ${hoverTextClass} ${isActive('/contact') ? 'text-forest' : ''}`}>
                <span className="relative py-1">
                  Contact Us
                  {isActive('/contact') && (
                    <motion.div layoutId="nav-indicator" className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold rounded-full" />
                  )}
                </span>
              </Link>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-6 z-50">
              <div className="hidden xl:flex items-center gap-2">
                <Phone className={`w-4 h-4 ${iconClasses} transition-colors`} />
                <div className="flex flex-col">
                  <span className={`font-bold ${textClasses} text-[13px] leading-tight transition-colors`}>+91 12345 67890</span>
                  <span className={`text-[9px] font-semibold ${scrolled || !isHomePage ? 'text-charcoal/70' : 'text-white/80'} leading-tight tracking-wide uppercase mt-0.5 transition-colors`}>Mon - Sat: 8AM - 7PM</span>
                </div>
              </div>
              
              <Link to="/contact" className="hidden md:block bg-forest hover:bg-emerald text-white px-6 py-2.5 rounded-lg text-xs font-semibold transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 group relative overflow-hidden">
                <span className="relative z-10 group-hover:text-gold transition-colors duration-300">Enquire Now</span>
                {/* Ripple overlay for hover */}
                <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></span>
              </Link>

              <button 
                onClick={() => setMobileMenuOpen(true)}
                className={`lg:hidden p-1 ${textClasses} hover:text-gold transition-colors`}
                aria-label="Open Menu"
                aria-expanded={mobileMenuOpen}
              >
                <Menu className="w-7 h-7" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-[85%] max-w-[400px] bg-white z-[70] shadow-2xl flex flex-col lg:hidden"
          >
            <div className="flex justify-between items-center p-6 border-b border-gray-100">
              <Link to="/" onClick={() => setMobileMenuOpen(false)} className="text-[22px] font-bold text-charcoal tracking-tight flex items-center relative">
                tourswale
                <Plane className="w-3.5 h-3.5 text-gold absolute -top-1 -right-2.5 rotate-45" fill="currentColor" strokeWidth={0} />
              </Link>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-charcoal hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Close Menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto py-6 px-6 no-scrollbar">
              <nav className="flex flex-col gap-2">
                <Link to="/" className="text-lg font-serif font-semibold text-charcoal py-3 border-b border-gray-50 hover:text-forest transition-colors">
                  Home
                </Link>

                {/* Mobile Tours Accordion */}
                <div className="border-b border-gray-50">
                  <button 
                    onClick={() => toggleMobileAccordion('tours')}
                    className="w-full flex justify-between items-center text-lg font-serif font-semibold text-charcoal py-3 hover:text-forest transition-colors"
                    aria-expanded={mobileExpanded === 'tours'}
                  >
                    Tours
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${mobileExpanded === 'tours' ? 'rotate-180 text-gold' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {mobileExpanded === 'tours' && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pb-4 pl-4 space-y-3">
                          <Link to="/tours" className="block text-sm font-semibold text-forest">All Tours &rarr;</Link>
                          {domesticTours.slice(0,4).map(item => (
                            <Link key={item} to={`/destinations/${item.toLowerCase()}`} className="block text-sm text-charcoal/70 hover:text-gold">{item}</Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Mobile Destinations Accordion */}
                <div className="border-b border-gray-50">
                  <button 
                    onClick={() => toggleMobileAccordion('destinations')}
                    className="w-full flex justify-between items-center text-lg font-serif font-semibold text-charcoal py-3 hover:text-forest transition-colors"
                    aria-expanded={mobileExpanded === 'destinations'}
                  >
                    Destinations
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${mobileExpanded === 'destinations' ? 'rotate-180 text-gold' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {mobileExpanded === 'destinations' && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pb-4 pl-4 space-y-3">
                          <Link to="/destinations" className="block text-sm font-semibold text-forest">All Destinations &rarr;</Link>
                          {destIndia.slice(0,3).map(item => (
                            <Link key={item} to={`/destinations/${item.toLowerCase()}`} className="block text-sm text-charcoal/70 hover:text-gold">{item}</Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Mobile Holiday Types Accordion */}
                <div className="border-b border-gray-50">
                  <button 
                    onClick={() => toggleMobileAccordion('holidayTypes')}
                    className="w-full flex justify-between items-center text-lg font-serif font-semibold text-charcoal py-3 hover:text-forest transition-colors"
                    aria-expanded={mobileExpanded === 'holidayTypes'}
                  >
                    Holiday Types
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${mobileExpanded === 'holidayTypes' ? 'rotate-180 text-gold' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {mobileExpanded === 'holidayTypes' && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pb-4 pl-4 space-y-3">
                          <Link to="/holiday-types" className="block text-sm font-semibold text-forest">All Styles &rarr;</Link>
                          {holidayStyles.slice(0,4).map(item => (
                            <Link key={item} to={`/holiday-types/${item.toLowerCase().replace(/ /g, '-')}`} className="block text-sm text-charcoal/70 hover:text-gold">{item}</Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link to="/blog" className="text-lg font-serif font-semibold text-charcoal py-3 border-b border-gray-50 hover:text-forest transition-colors">
                  Blog
                </Link>
                <Link to="/about" className="text-lg font-serif font-semibold text-charcoal py-3 border-b border-gray-50 hover:text-forest transition-colors">
                  About Us
                </Link>
                <Link to="/contact" className="text-lg font-serif font-semibold text-charcoal py-3 border-b border-gray-50 hover:text-forest transition-colors">
                  Contact Us
                </Link>
              </nav>
            </div>

            <div className="p-6 bg-cream/50 mt-auto">
              <Link 
                to="/contact" 
                onClick={() => setMobileMenuOpen(false)}
                className="w-full bg-forest text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-emerald transition-colors"
              >
                Plan My Holiday <ArrowRight className="w-5 h-5" />
              </Link>
              <div className="mt-6 flex items-center gap-3 justify-center text-charcoal">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                  <Phone className="w-4 h-4 fill-charcoal" />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-sm">+91 12345 67890</span>
                  <span className="text-[10px] text-charcoal/60 uppercase font-semibold">Mon - Sat: 8AM - 7PM</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
