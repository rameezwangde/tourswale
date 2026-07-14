import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';

export default function EnquiryCTA({ className = "", light = false }) {
  const bgClass = light ? "bg-white/5" : "bg-cream/50";
  const textClass = light ? "text-white" : "text-charcoal";
  const subtextClass = light ? "text-white/70" : "text-charcoal/60";

  return (
    <div className={`p-6 rounded-2xl ${bgClass} ${className}`}>
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h4 className={`text-lg font-serif font-bold mb-1 ${textClass}`}>Need help planning your holiday?</h4>
          <p className={`text-sm ${subtextClass}`}>Speak to our travel experts for a customized itinerary.</p>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
          <div className="flex items-center gap-2">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${light ? 'bg-white/10' : 'bg-white shadow-sm'}`}>
              <Phone className={`w-4 h-4 ${light ? 'text-white fill-white' : 'text-charcoal fill-charcoal'}`} />
            </div>
            <div className="flex flex-col">
              <span className={`font-bold text-sm ${textClass}`}>+91 12345 67890</span>
            </div>
          </div>
          <Link 
            to="/contact" 
            className="w-full sm:w-auto bg-forest hover:bg-emerald text-white px-6 py-3 rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-2"
          >
            Enquire Now <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
