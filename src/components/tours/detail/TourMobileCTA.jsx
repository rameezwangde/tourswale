export default function TourMobileCTA({ tour, onEnquire }) {
  const formattedPrice = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: tour.currency,
    maximumFractionDigits: 0
  }).format(tour.startingPrice);

  return (
    <div className="lg:hidden fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 p-4 pb-safe-bottom z-40 shadow-[0_-10px_20px_rgba(0,0,0,0.05)] flex items-center justify-between gap-4">
      <div className="flex-1">
        <p className="text-[10px] uppercase font-bold text-charcoal/50 tracking-wider">Starting from</p>
        <p className="text-xl font-bold text-forest">{formattedPrice}</p>
      </div>
      <button 
        onClick={onEnquire}
        className="flex-1 bg-forest hover:bg-emerald text-white px-4 py-3 rounded-xl text-sm font-bold transition-colors text-center"
      >
        Enquire Now
      </button>
    </div>
  );
}
