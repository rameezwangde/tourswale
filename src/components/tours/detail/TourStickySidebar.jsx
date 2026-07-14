import { Calendar, Users } from 'lucide-react';
import PrimaryButton from '../../common/PrimaryButton';

export default function TourStickySidebar({ tour, onEnquire }) {
  const formattedPrice = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: tour.currency,
    maximumFractionDigits: 0
  }).format(tour.startingPrice);

  return (
    <div className="hidden lg:block w-80 shrink-0">
      <div className="bg-white rounded-[24px] shadow-xl border border-gray-100 p-6 sticky top-28">
        
        <div className="mb-6 pb-6 border-b border-gray-100">
          <p className="text-xs uppercase font-bold text-charcoal/50 tracking-wider mb-2">Starting from</p>
          <div className="flex items-end gap-2">
            <p className="text-3xl font-bold text-forest">{formattedPrice}</p>
            <span className="text-xs text-charcoal/50 pb-1">/ person</span>
          </div>
        </div>

        <div className="space-y-4 mb-8">
          <div className="flex items-center gap-3 text-sm text-charcoal/80">
            <div className="w-8 h-8 rounded-full bg-cream flex items-center justify-center shrink-0">
              <Calendar className="w-4 h-4 text-gold" />
            </div>
            <span>Flexible travel dates</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-charcoal/80">
            <div className="w-8 h-8 rounded-full bg-cream flex items-center justify-center shrink-0">
              <Users className="w-4 h-4 text-gold" />
            </div>
            <span>Customizable group size</span>
          </div>
        </div>

        <button 
          onClick={onEnquire}
          className="w-full bg-forest hover:bg-emerald text-white px-6 py-4 rounded-xl text-sm font-bold transition-colors shadow-sm text-center mb-4"
        >
          Enquire Now
        </button>

        <p className="text-[10px] text-center text-charcoal/50 uppercase tracking-wider">
          No hidden charges. Quick response.
        </p>

      </div>
    </div>
  );
}
