import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function TourFilters({ 
  filters, 
  onFilterChange, 
  onClearFilters,
  isOpen, 
  onClose,
  totalResults
}) {
  const handleCheckboxChange = (category, value) => {
    onFilterChange(category, value);
  };

  const FilterSection = ({ title, options, category }) => (
    <div className="mb-6">
      <h3 className="text-sm font-bold text-forest uppercase tracking-wider mb-4">{title}</h3>
      <div className="space-y-3">
        {options.map((opt) => (
          <label key={opt.value} className="flex items-center gap-3 cursor-pointer group">
            <div className="relative flex items-center justify-center">
              <input 
                type="checkbox" 
                checked={filters[category]?.includes(opt.value) || false}
                onChange={() => handleCheckboxChange(category, opt.value)}
                className="peer sr-only"
              />
              <div className="w-5 h-5 rounded border border-gray-300 peer-checked:bg-gold peer-checked:border-gold transition-colors flex items-center justify-center">
                <svg className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
            </div>
            <span className="text-sm text-charcoal/80 group-hover:text-forest transition-colors">{opt.label}</span>
          </label>
        ))}
      </div>
    </div>
  );

  const filterContent = (
    <>
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100">
        <h2 className="text-xl font-serif font-bold text-forest">Filter Tours</h2>
        {/* Only show Close button on mobile/tablet */}
        <button onClick={onClose} className="lg:hidden p-2 text-charcoal hover:bg-cream rounded-full">
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="mb-6">
        <label className="text-sm font-bold text-forest uppercase tracking-wider mb-4 block">Search</label>
        <input 
          type="text" 
          placeholder="Destination or tour name..."
          value={filters.search || ''}
          onChange={(e) => onFilterChange('search', e.target.value)}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
        />
      </div>

      <FilterSection 
        title="Tour Type" 
        category="type"
        options={[
          { label: "Domestic (India)", value: "domestic" },
          { label: "International", value: "international" }
        ]} 
      />

      <FilterSection 
        title="Holiday Type" 
        category="holidayType"
        options={[
          { label: "Family Holidays", value: "family" },
          { label: "Honeymoon Specials", value: "honeymoon" },
          { label: "Luxury Escapes", value: "luxury" },
          { label: "Adventure", value: "adventure" },
          { label: "Relaxation", value: "relaxation" },
          { label: "Group Tours", value: "group" },
          { label: "Weekend Getaways", value: "weekend" }
        ]} 
      />

      <FilterSection 
        title="Duration" 
        category="duration"
        options={[
          { label: "1–3 Days", value: "1-3" },
          { label: "4–6 Days", value: "4-6" },
          { label: "7–9 Days", value: "7-9" },
          { label: "10+ Days", value: "10+" }
        ]} 
      />

      <FilterSection 
        title="Price Range" 
        category="price"
        options={[
          { label: "Under ₹25,000", value: "under-25k" },
          { label: "₹25,000 – ₹50,000", value: "25k-50k" },
          { label: "₹50,000 – ₹1,00,000", value: "50k-100k" },
          { label: "Above ₹1,00,000", value: "above-100k" }
        ]} 
      />

      <div className="pt-4 mt-6 border-t border-gray-100">
        <button 
          onClick={onClearFilters}
          className="w-full border border-forest text-forest hover:bg-forest hover:text-white px-4 py-3 rounded-xl text-sm font-bold transition-colors"
        >
          Clear All Filters
        </button>
      </div>
    </>
  );

  return (
    <>
      {/* Desktop Sidebar (Hidden on mobile/tablet) */}
      <div className="hidden lg:block w-72 shrink-0">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 sticky top-28">
          {filterContent}
        </div>
      </div>

      {/* Mobile/Tablet Drawer (Hidden on desktop) */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="fixed inset-0 z-40 bg-charcoal/60 backdrop-blur-sm lg:hidden"
            />
            <motion.div 
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 left-0 z-50 w-full max-w-xs bg-white shadow-2xl h-full overflow-y-auto lg:hidden"
            >
              <div className="p-6 pb-24">
                {filterContent}
              </div>
              
              {/* Sticky bottom CTA for drawer */}
              <div className="fixed bottom-0 left-0 w-full max-w-xs bg-white border-t border-gray-100 p-4 shrink-0">
                 <button 
                  onClick={onClose}
                  className="w-full bg-forest text-white px-4 py-3 rounded-xl text-sm font-bold shadow-md"
                >
                  Show {totalResults} Results
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
