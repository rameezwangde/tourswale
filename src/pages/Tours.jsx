import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Filter, X, SlidersHorizontal } from 'lucide-react';
import { motion } from 'framer-motion';

import Container from '../components/common/Container';
import InnerHero from '../components/tours/InnerHero';
import TourFilters from '../components/tours/TourFilters';
import TourCard from '../components/tours/TourCard';
import TourEnquiryModal from '../components/tours/TourEnquiryModal';
import SecondaryButton from '../components/common/SecondaryButton';

// Mock Data
import { tours } from '../data/tours';

export default function Tours() {
  const [searchParams, setSearchParams] = useSearchParams();
  
  // State
  const [filters, setFilters] = useState({});
  const [sortBy, setSortBy] = useState('recommended');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(6);
  const [selectedTour, setSelectedTour] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Initialize filters from URL on first mount
  useEffect(() => {
    const initialFilters = {};
    for (const [key, value] of searchParams.entries()) {
      if (key === 'search') {
        initialFilters[key] = value;
      } else {
        initialFilters[key] = value.split(',');
      }
    }
    setFilters(initialFilters);
    
    const sortParam = searchParams.get('sort');
    if (sortParam) setSortBy(sortParam);
  }, []); // Run once on mount

  // Sync state changes back to URL
  useEffect(() => {
    const newParams = new URLSearchParams();
    
    Object.keys(filters).forEach(key => {
      if (filters[key]) {
        if (key === 'search' && filters[key].trim() !== '') {
          newParams.set(key, filters[key]);
        } else if (Array.isArray(filters[key]) && filters[key].length > 0) {
          newParams.set(key, filters[key].join(','));
        }
      }
    });

    if (sortBy !== 'recommended') {
      newParams.set('sort', sortBy);
    }

    setSearchParams(newParams, { replace: true });
    // Reset pagination when filters change
    setVisibleCount(6);
  }, [filters, sortBy, setSearchParams]);

  // Handle filter changes
  const handleFilterChange = (category, value) => {
    setFilters(prev => {
      const newFilters = { ...prev };
      
      if (category === 'search') {
        newFilters.search = value;
      } else {
        const currentList = newFilters[category] || [];
        if (currentList.includes(value)) {
          newFilters[category] = currentList.filter(item => item !== value);
        } else {
          newFilters[category] = [...currentList, value];
        }
      }
      return newFilters;
    });
  };

  const handleClearFilters = () => {
    setFilters({});
    setSortBy('recommended');
  };

  const handleRemoveFilter = (category, value) => {
    setFilters(prev => {
      const newFilters = { ...prev };
      if (category === 'search') {
        newFilters.search = '';
      } else {
        newFilters[category] = prev[category].filter(item => item !== value);
      }
      return newFilters;
    });
  };

  const openEnquiryModal = (tour) => {
    setSelectedTour(tour);
    setIsModalOpen(true);
  };

  // Filter & Sort Logic
  const filteredAndSortedTours = useMemo(() => {
    let result = [...tours];

    // Search Filter
    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      result = result.filter(tour => 
        tour.title.toLowerCase().includes(searchTerm) || 
        tour.destination.toLowerCase().includes(searchTerm)
      );
    }

    // Type Filter (Domestic / International)
    if (filters.type?.length > 0) {
      result = result.filter(tour => filters.type.includes(tour.type));
    }

    // Holiday Type Filter
    if (filters.holidayType?.length > 0) {
      result = result.filter(tour => 
        filters.holidayType.some(type => tour.holidayTypes.includes(type))
      );
    }

    // Duration Filter
    if (filters.duration?.length > 0) {
      result = result.filter(tour => {
        const d = tour.durationDays;
        if (filters.duration.includes('1-3') && d >= 1 && d <= 3) return true;
        if (filters.duration.includes('4-6') && d >= 4 && d <= 6) return true;
        if (filters.duration.includes('7-9') && d >= 7 && d <= 9) return true;
        if (filters.duration.includes('10+') && d >= 10) return true;
        return false;
      });
    }

    // Price Filter
    if (filters.price?.length > 0) {
      result = result.filter(tour => {
        const p = tour.startingPrice;
        if (filters.price.includes('under-25k') && p < 25000) return true;
        if (filters.price.includes('25k-50k') && p >= 25000 && p <= 50000) return true;
        if (filters.price.includes('50k-100k') && p > 50000 && p <= 100000) return true;
        if (filters.price.includes('above-100k') && p > 100000) return true;
        return false;
      });
    }

    // Sorting
    switch (sortBy) {
      case 'price-low-high':
        result.sort((a, b) => a.startingPrice - b.startingPrice);
        break;
      case 'price-high-low':
        result.sort((a, b) => b.startingPrice - a.startingPrice);
        break;
      case 'duration-short-long':
        result.sort((a, b) => a.durationDays - b.durationDays);
        break;
      case 'duration-long-short':
        result.sort((a, b) => b.durationDays - a.durationDays);
        break;
      case 'popular':
        result.sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0));
        break;
      case 'recommended':
      default:
        // Featured first, then popular
        result.sort((a, b) => {
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return 0;
        });
        break;
    }

    return result;
  }, [filters, sortBy]);

  // Schema.org ItemList for Tours
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": filteredAndSortedTours.slice(0, visibleCount).map((tour, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "TouristTrip",
        "name": tour.title,
        "description": tour.shortDescription,
        "url": `https://tourswale.com/tours/${tour.slug}`
      }
    }))
  };

  // Extract active filters for chips
  const activeFiltersCount = Object.values(filters).reduce((acc, val) => {
    if (typeof val === 'string') return acc + (val ? 1 : 0);
    return acc + (val?.length || 0);
  }, 0);

  return (
    <>
      <Helmet>
        <title>Domestic and International Tour Packages | Tourswale</title>
        <meta name="description" content="Explore domestic and international tour packages, honeymoon holidays, family vacations, luxury escapes and customized travel experiences with Tourswale." />
        <link rel="canonical" href="https://tourswale.com/tours" />
        <script type="application/ld+json">
          {JSON.stringify(itemListSchema)}
        </script>
      </Helmet>

      <InnerHero 
        title="Domestic and International Tour Packages"
        description="Explore thoughtfully planned holiday packages across India and leading international destinations. Compare destinations, durations, travel styles and package highlights to find a journey that suits your preferences."
        backgroundImage="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1920&auto=format&fit=crop"
        breadcrumbs={[{ label: 'Tours' }]}
      />

      <section className="py-12 bg-cream min-h-screen">
        <Container>
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Left Sidebar Filters */}
            <TourFilters 
              filters={filters} 
              onFilterChange={handleFilterChange} 
              onClearFilters={handleClearFilters}
              isOpen={isFilterOpen}
              onClose={() => setIsFilterOpen(false)}
              totalResults={filteredAndSortedTours.length}
            />

            {/* Right Content Area */}
            <div className="flex-1">
              
              {/* Toolbar */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <div>
                  <h2 className="text-xl font-bold text-forest">
                    {filteredAndSortedTours.length} {filteredAndSortedTours.length === 1 ? 'Package' : 'Packages'} Found
                  </h2>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button 
                    onClick={() => setIsFilterOpen(true)}
                    className="lg:hidden flex items-center justify-center gap-2 flex-1 border border-gray-300 bg-white px-4 py-2.5 rounded-xl text-sm font-semibold text-charcoal"
                  >
                    <Filter className="w-4 h-4" /> Filters {activeFiltersCount > 0 && `(${activeFiltersCount})`}
                  </button>

                  <div className="relative flex-1 sm:flex-none">
                    <select 
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="w-full sm:w-auto appearance-none border border-gray-300 bg-white px-4 py-2.5 pr-10 rounded-xl text-sm font-semibold text-charcoal focus:outline-none focus:border-gold cursor-pointer"
                    >
                      <option value="recommended">Recommended</option>
                      <option value="popular">Most Popular</option>
                      <option value="price-low-high">Price: Low to High</option>
                      <option value="price-high-low">Price: High to Low</option>
                      <option value="duration-short-long">Duration: Short to Long</option>
                      <option value="duration-long-short">Duration: Long to Short</option>
                    </select>
                    <SlidersHorizontal className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal/50 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Active Filter Chips */}
              {activeFiltersCount > 0 && (
                <div className="flex flex-wrap items-center gap-2 mb-8">
                  <span className="text-sm text-charcoal/70 mr-2">Active Filters:</span>
                  
                  {filters.search && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-semibold text-forest">
                      "{filters.search}"
                      <button onClick={() => handleRemoveFilter('search', filters.search)} className="text-charcoal/50 hover:text-red-500 ml-1"><X className="w-3 h-3" /></button>
                    </span>
                  )}
                  
                  {Object.keys(filters).map(key => {
                    if (key === 'search' || !Array.isArray(filters[key])) return null;
                    return filters[key].map(value => (
                      <span key={`${key}-${value}`} className="inline-flex items-center gap-1 px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-semibold text-forest">
                        <span className="capitalize">{value.replace('-', ' ')}</span>
                        <button onClick={() => handleRemoveFilter(key, value)} className="text-charcoal/50 hover:text-red-500 ml-1"><X className="w-3 h-3" /></button>
                      </span>
                    ));
                  })}
                  
                  <button onClick={handleClearFilters} className="text-xs text-forest hover:text-gold font-bold ml-2 underline underline-offset-2">
                    Clear All
                  </button>
                </div>
              )}

              {/* Grid */}
              {filteredAndSortedTours.length > 0 ? (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {filteredAndSortedTours.slice(0, visibleCount).map((tour) => (
                      <motion.div
                        key={tour.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                      >
                        <TourCard tour={tour} onEnquire={openEnquiryModal} />
                      </motion.div>
                    ))}
                  </div>

                  {/* Load More */}
                  {visibleCount < filteredAndSortedTours.length && (
                    <div className="mt-12 text-center">
                      <SecondaryButton onClick={() => setVisibleCount(prev => prev + 6)}>
                        Load More Packages
                      </SecondaryButton>
                    </div>
                  )}
                </>
              ) : (
                /* Empty State */
                <div className="bg-white rounded-2xl p-12 text-center border border-gray-100 shadow-sm flex flex-col items-center">
                  <div className="w-16 h-16 bg-cream rounded-full flex items-center justify-center mb-6">
                    <Filter className="w-8 h-8 text-forest" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-forest mb-4">No Tours Match Your Current Filters</h3>
                  <p className="text-charcoal/70 mb-8 max-w-md mx-auto">
                    Try adjusting your destination, duration, holiday type or price range to discover more Tourswale packages.
                  </p>
                  <div className="flex gap-4">
                    <button onClick={handleClearFilters} className="border border-forest text-forest hover:bg-forest hover:text-white px-6 py-3 rounded-xl text-sm font-bold transition-colors">
                      Clear Filters
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* Enquiry Modal */}
      <TourEnquiryModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        selectedTour={selectedTour} 
      />
    </>
  );
}
