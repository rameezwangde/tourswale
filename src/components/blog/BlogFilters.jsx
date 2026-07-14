export default function BlogFilters({ categories, activeCategory, onCategoryChange }) {
  return (
    <div className="flex flex-wrap gap-2 md:gap-3 mb-10" role="group" aria-label="Blog categories filter">
      <button
        onClick={() => onCategoryChange('all')}
        className={`px-4 py-2 md:px-5 md:py-2.5 rounded-full text-xs md:text-sm font-semibold tracking-wide transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 ${
          activeCategory === 'all' 
            ? 'bg-forest text-white shadow-md' 
            : 'bg-white text-charcoal/70 border border-gray-200 hover:border-gold hover:text-forest hover:shadow-sm'
        }`}
        aria-pressed={activeCategory === 'all'}
      >
        All Articles
      </button>
      
      {categories.map((category) => (
        <button
          key={category.slug}
          onClick={() => onCategoryChange(category.slug)}
          className={`px-4 py-2 md:px-5 md:py-2.5 rounded-full text-xs md:text-sm font-semibold tracking-wide transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 ${
            activeCategory === category.slug 
              ? 'bg-forest text-white shadow-md' 
              : 'bg-white text-charcoal/70 border border-gray-200 hover:border-gold hover:text-forest hover:shadow-sm'
          }`}
          aria-pressed={activeCategory === category.slug}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
}
