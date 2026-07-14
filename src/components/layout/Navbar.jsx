import { useState, useEffect } from 'react';
import { Menu, Phone, Plane, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-1 cursor-pointer">
          <Link to="/" className="text-[26px] font-bold text-charcoal tracking-tight flex items-center relative">
            tourswale
            <Plane className="w-4 h-4 text-gold absolute -top-1 -right-3 rotate-45" fill="currentColor" strokeWidth={0} />
          </Link>
        </div>

        {/* Links */}
        <div className="hidden lg:flex items-center gap-8 text-[11px] font-bold text-charcoal uppercase tracking-wider">
          <Link to="/" className="hover:text-forest transition-colors">Home</Link>
          <Link to="/tours" className="hover:text-forest transition-colors flex items-center gap-1">Tours <ChevronDown className="w-3 h-3"/></Link>
          <Link to="/destinations" className="hover:text-forest transition-colors">Destinations</Link>
          <Link to="/holiday-types" className="hover:text-forest transition-colors">Holiday Types</Link>
          <Link to="/blog" className="hover:text-forest transition-colors">Blog</Link>
          <Link to="/about" className="hover:text-forest transition-colors">About Us</Link>
          <Link to="/contact" className="hover:text-forest transition-colors">Contact Us</Link>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-6">
          <div className="hidden xl:flex items-center gap-2">
            <Phone className="w-4 h-4 text-charcoal fill-charcoal" />
            <div className="flex flex-col">
              <span className="font-bold text-charcoal text-[13px] leading-tight">+91 12345 67890</span>
              <span className="text-[9px] font-semibold text-charcoal/70 leading-tight tracking-wide uppercase mt-0.5">Mon - Sat: 8AM - 7PM</span>
            </div>
          </div>
          <button className="hidden md:block bg-[#143e33] hover:bg-emerald text-white px-6 py-2.5 rounded-lg text-xs font-semibold transition-colors shadow-sm">
            Enquire Now
          </button>
          <button className="p-1 text-charcoal">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  );
}
