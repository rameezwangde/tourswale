import { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Search, ChevronDown, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import Container from '../components/common/Container';
import { siteConfig } from '../config/siteConfig';
import { generalFaq } from '../data/generalFaq';

const CATEGORIES = [
  'All',
  'Tour Packages',
  'Booking and Enquiries',
  'Payments',
  'Flights and Visas',
  'Accommodation',
  'Customization',
  'Changes and Cancellations',
  'During Your Trip'
];

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [openIds, setOpenIds] = useState(new Set([generalFaq[0].id])); // Open first by default

  const toggleAccordion = (id) => {
    const newOpenIds = new Set(openIds);
    if (newOpenIds.has(id)) {
      newOpenIds.delete(id);
    } else {
      newOpenIds.add(id);
    }
    setOpenIds(newOpenIds);
  };

  const filteredFaqs = useMemo(() => {
    return generalFaq.filter(faq => {
      const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
      const query = searchQuery.toLowerCase();
      const matchesSearch = faq.question.toLowerCase().includes(query) || 
                            faq.answer.toLowerCase().includes(query) ||
                            faq.category.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": filteredFaqs.map(f => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.answer
      }
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": siteConfig.siteUrl },
      { "@type": "ListItem", "position": 2, "name": "FAQ", "item": `${siteConfig.siteUrl}/faq` }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Frequently Asked Questions | Tourswale</title>
        <meta name="description" content="Find answers about Tourswale tour packages, customization, payments, flights, visas, accommodation, cancellations and travel enquiries." />
        <link rel="canonical" href={`${siteConfig.siteUrl}/faq`} />
        
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      {/* Hero Section */}
      <div className="pt-32 pb-20 bg-forest relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent pointer-events-none"></div>
        <Container className="relative z-10">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-white/70 justify-center">
              <li><Link to="/" className="hover:text-gold transition-colors">Home</Link></li>
              <li><span>/</span></li>
              <li><span className="text-white" aria-current="page">FAQ</span></li>
            </ol>
          </nav>

          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-10">
              Find helpful information about holiday packages, customization, booking enquiries, travel documents, payments and support.
            </p>
          </div>
        </Container>
      </div>

      <section className="py-16 bg-cream min-h-[50vh]">
        <Container>
          
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Sidebar Controls */}
            <div className="lg:w-1/3">
              <div className="bg-white rounded-3xl p-6 md:p-8 border border-gray-100 shadow-sm sticky top-28">
                
                {/* Search */}
                <div className="mb-8">
                  <label htmlFor="faq-search" className="sr-only">Search frequently asked questions</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                      <Search className="h-4 w-4 text-charcoal/40" />
                    </div>
                    <input
                      id="faq-search"
                      type="text"
                      placeholder="Search FAQ..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-gray-50 border border-gray-200 text-charcoal rounded-xl py-3 pl-10 pr-4 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors text-sm"
                    />
                  </div>
                </div>

                {/* Categories */}
                <h3 className="font-serif font-bold text-lg text-forest mb-4">Categories</h3>
                <div className="flex flex-col gap-2">
                  {CATEGORIES.map(category => (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={`text-left px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-gold ${
                        activeCategory === category 
                          ? 'bg-forest text-white' 
                          : 'text-charcoal/70 hover:bg-gray-50 hover:text-forest'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>

              </div>
            </div>

            {/* Main Content Area */}
            <div className="lg:w-2/3">
              {filteredFaqs.length > 0 ? (
                <div className="space-y-4">
                  {filteredFaqs.map(faq => {
                    const isOpen = openIds.has(faq.id);
                    return (
                      <div 
                        key={faq.id} 
                        className={`bg-white rounded-2xl overflow-hidden border transition-colors ${isOpen ? 'border-gold/30 shadow-sm' : 'border-gray-100 hover:border-gray-200'}`}
                      >
                        <button
                          onClick={() => toggleAccordion(faq.id)}
                          className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus:ring-2 focus:ring-gold inset-0 focus:z-10 relative"
                          aria-expanded={isOpen}
                        >
                          <div className="pr-4">
                            <span className="text-[10px] font-bold text-charcoal/40 uppercase tracking-wider block mb-1">
                              {faq.category}
                            </span>
                            <span className="font-serif font-bold text-lg text-forest">
                              {faq.question}
                            </span>
                          </div>
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${isOpen ? 'bg-forest text-white' : 'bg-cream text-forest'}`}>
                            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                          </div>
                        </button>
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                            >
                              <div className="px-6 pb-6 text-charcoal/70 text-base leading-relaxed">
                                {faq.answer}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="bg-white rounded-3xl p-12 text-center border border-gray-100 shadow-sm">
                  <div className="w-16 h-16 bg-cream rounded-full flex items-center justify-center mx-auto mb-6 text-forest/40">
                    <Search className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-forest mb-4">No Questions Found</h3>
                  <p className="text-charcoal/70 text-base">
                    We couldn't find any FAQs matching your search criteria. Try using different keywords or clear your filters.
                  </p>
                  <button 
                    onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
                    className="mt-6 text-gold font-bold hover:text-yellow-600 transition-colors"
                  >
                    Clear Search
                  </button>
                </div>
              )}

              {/* Contact Prompt */}
              <div className="mt-12 bg-forest rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-xl font-serif font-bold text-white mb-2">Still have questions?</h3>
                  <p className="text-white/80 text-sm max-w-md">Our travel experts are ready to assist you with any specific queries you might have.</p>
                </div>
                <Link 
                  to="/contact" 
                  className="bg-gold hover:bg-yellow-600 text-white px-6 py-3 rounded-xl text-sm font-bold transition-colors shrink-0 flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" /> Contact Us
                </Link>
              </div>

            </div>
          </div>

        </Container>
      </section>
    </>
  );
}
