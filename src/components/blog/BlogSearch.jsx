import { Search, X } from 'lucide-react';

export default function BlogSearch({ searchQuery, onSearchChange, onClear }) {
  return (
    <div className="relative w-full max-w-lg mb-8 md:mb-0">
      <div className="relative flex items-center">
        <div className="absolute left-4 text-charcoal/40 pointer-events-none">
          <Search className="w-5 h-5" />
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search travel guides, destinations or holiday tips"
          className="w-full bg-white border border-gray-200 text-charcoal rounded-full py-3.5 pl-12 pr-12 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors shadow-sm placeholder:text-charcoal/40 text-sm md:text-base"
          aria-label="Search blog articles"
        />
        {searchQuery && (
          <button
            onClick={onClear}
            className="absolute right-4 text-charcoal/40 hover:text-charcoal transition-colors p-1 rounded-full focus:outline-none focus:bg-gray-100"
            aria-label="Clear search"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}
