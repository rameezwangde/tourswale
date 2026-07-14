import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';

import Container from '../components/common/Container';
import SecondaryButton from '../components/common/SecondaryButton';
import EnquiryCTA from '../components/home/EnquiryCTA';
import NewsletterSection from '../components/common/NewsletterSection';

import BlogHero from '../components/blog/BlogHero';
import FeaturedArticle from '../components/blog/FeaturedArticle';
import BlogFilters from '../components/blog/BlogFilters';
import BlogSearch from '../components/blog/BlogSearch';
import BlogCard from '../components/blog/BlogCard';
import PopularGuides from '../components/blog/PopularGuides';
import DestinationInspiration from '../components/blog/DestinationInspiration';

import { blogs } from '../data/blogs';

const CATEGORIES = [
  { slug: 'destination-guides', label: 'Destination Guides' },
  { slug: 'travel-tips', label: 'Travel Tips' },
  { slug: 'visa-guides', label: 'Visa Guides' },
  { slug: 'honeymoon-travel', label: 'Honeymoon Travel' },
  { slug: 'family-travel', label: 'Family Travel' },
  { slug: 'luxury-holidays', label: 'Luxury Holidays' },
  { slug: 'budget-travel', label: 'Budget Travel' },
  { slug: 'seasonal-travel', label: 'Seasonal Travel' },
  { slug: 'adventure-travel', label: 'Adventure Travel' },
  { slug: 'packing-guides', label: 'Packing Guides' }
];

export default function BlogListing() {
  const [searchParams, setSearchParams] = useSearchParams();
  
  // Read params
  const categoryParam = searchParams.get('category') || 'all';
  const destinationParam = searchParams.get('destination') || '';
  const [searchQuery, setSearchQuery] = useState('');
  
  const [visibleCount, setVisibleCount] = useState(6);

  // Sync state if URL changes directly
  useEffect(() => {
    setVisibleCount(6); // Reset visible count on filter change
  }, [categoryParam, destinationParam, searchQuery]);

  // Handle URL updates
  const handleCategoryChange = (slug) => {
    if (slug === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', slug);
    }
    setSearchParams(searchParams);
  };

  const handleClearSearch = () => {
    setSearchQuery('');
  };
  
  const handleClearAllFilters = () => {
    setSearchQuery('');
    setSearchParams({});
  };

  // Find Featured & Popular
  const featuredArticle = useMemo(() => blogs.find(b => b.featured), []);
  const popularArticles = useMemo(() => blogs.filter(b => b.popular), []);

  // Filter Logic
  const filteredArticles = useMemo(() => {
    return blogs.filter(article => {
      // Don't duplicate the featured article in the main grid if no filters are active
      const isFeatured = featuredArticle && article.id === featuredArticle.id;
      const noFiltersActive = categoryParam === 'all' && !destinationParam && !searchQuery;
      if (isFeatured && noFiltersActive) return false;

      // Category match
      if (categoryParam !== 'all' && article.category !== categoryParam) return false;

      // Destination match
      if (destinationParam && !article.relatedDestinationSlugs.includes(destinationParam)) return false;

      // Search match
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = article.title.toLowerCase().includes(query);
        const matchesExcerpt = article.excerpt.toLowerCase().includes(query);
        const matchesTags = article.tags.some(tag => tag.toLowerCase().includes(query));
        
        if (!matchesTitle && !matchesExcerpt && !matchesTags) return false;
      }

      return true;
    });
  }, [categoryParam, destinationParam, searchQuery, featuredArticle]);

  // Pagination
  const visibleArticles = filteredArticles.slice(0, visibleCount);
  const hasMore = visibleCount < filteredArticles.length;

  // Schema
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Travel Guides, Tips and Destination Inspiration | Tourswale",
    "description": "Explore destination guides, holiday planning tips, and family travel advice.",
    "url": "https://tourswale.com/blog"
  };

  return (
    <>
      <Helmet>
        <title>Travel Guides, Tips and Destination Inspiration | Tourswale</title>
        <meta name="description" content="Explore destination guides, holiday planning tips, honeymoon ideas, family travel advice and practical international travel content from Tourswale." />
        <link rel="canonical" href="https://tourswale.com/blog" />
        <meta property="og:title" content="Travel Guides, Tips and Destination Inspiration | Tourswale" />
        <meta property="og:description" content="Explore destination guides, holiday planning tips, honeymoon ideas, family travel advice and practical international travel content from Tourswale." />
        <meta property="og:url" content="https://tourswale.com/blog" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(collectionSchema)}</script>
      </Helmet>

      <BlogHero />

      {/* Featured Article - only show if no search/filters are active to keep focus on results */}
      {featuredArticle && categoryParam === 'all' && !destinationParam && !searchQuery && (
        <FeaturedArticle article={featuredArticle} />
      )}

      <section id="latest-guides" className="py-16 lg:py-24 bg-cream scroll-mt-20">
        <Container>
          
          {/* Controls Area */}
          <div className="flex flex-col md:flex-row md:items-start justify-between mb-8 gap-6">
            <BlogFilters 
              categories={CATEGORIES} 
              activeCategory={categoryParam} 
              onCategoryChange={handleCategoryChange} 
            />
            <BlogSearch 
              searchQuery={searchQuery} 
              onSearchChange={setSearchQuery} 
              onClear={handleClearSearch} 
            />
          </div>

          {/* Active Destination Filter Badge */}
          {destinationParam && (
            <div className="mb-8 flex items-center gap-3">
              <span className="text-sm font-semibold text-charcoal/70">Showing results for:</span>
              <span className="inline-flex items-center gap-2 bg-gold text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                {destinationParam.replace('-', ' ')}
                <button onClick={() => {
                  searchParams.delete('destination');
                  setSearchParams(searchParams);
                }} className="hover:text-charcoal transition-colors">
                  &times;
                </button>
              </span>
            </div>
          )}

          {/* Article Grid */}
          {filteredArticles.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence>
                  {visibleArticles.map((article, index) => (
                    <motion.div
                      key={article.id}
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <BlogCard article={article} />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
              
              {hasMore && (
                <div className="mt-12 text-center">
                  <button 
                    onClick={() => setVisibleCount(prev => prev + 6)}
                    className="inline-flex items-center gap-2 px-8 py-3.5 bg-white border border-gray-200 text-forest font-bold text-sm rounded-xl hover:border-gold hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold"
                  >
                    Load More Articles
                  </button>
                </div>
              )}
            </>
          ) : (
            /* No Results State */
            <div className="bg-white rounded-3xl p-12 text-center border border-gray-100 shadow-sm max-w-2xl mx-auto my-12">
              <div className="w-16 h-16 bg-cream rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-forest mb-4">No Travel Guides Match Your Search</h3>
              <p className="text-charcoal/70 text-base mb-8">
                Try a different destination, category or travel topic to discover more Tourswale articles.
              </p>
              <div className="flex gap-4 justify-center">
                <button 
                  onClick={handleClearAllFilters}
                  className="bg-gold text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-yellow-600 transition-colors"
                >
                  Clear Search
                </button>
              </div>
            </div>
          )}
        </Container>
      </section>

      {/* Popular Guides (only show on main view) */}
      {categoryParam === 'all' && !searchQuery && (
        <PopularGuides articles={popularArticles} />
      )}

      {/* Destination Inspiration */}
      <DestinationInspiration />

      <NewsletterSection />
      
      <EnquiryCTA />
    </>
  );
}
