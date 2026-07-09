import { useState, useEffect } from 'react';
import { Menu, Phone, Plane, ChevronDown } from 'lucide-react';

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
          <span className="text-[26px] font-bold text-charcoal tracking-tight flex items-center relative">
            tourswale
            <Plane className="w-4 h-4 text-gold absolute -top-1 -right-3 rotate-45" fill="currentColor" strokeWidth={0} />
          </span>
        </div>

        {/* Links */}
        <div className="hidden lg:flex items-center gap-8 text-[11px] font-bold text-charcoal uppercase tracking-wider">
          <a href="#" className="hover:text-forest transition-colors">Home</a>
          <a href="#" className="hover:text-forest transition-colors flex items-center gap-1">Tours <ChevronDown className="w-3 h-3"/></a>
          <a href="#" className="hover:text-forest transition-colors">Destinations</a>
          <a href="#" className="hover:text-forest transition-colors">Holiday Types</a>
          <a href="#" className="hover:text-forest transition-colors">Blog</a>
          <a href="#" className="hover:text-forest transition-colors">About Us</a>
          <a href="#" className="hover:text-forest transition-colors">Contact Us</a>
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
