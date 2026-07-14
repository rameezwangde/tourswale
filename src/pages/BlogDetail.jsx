import { useMemo, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

import Container from '../components/common/Container';
import SecondaryButton from '../components/common/SecondaryButton';
import EnquiryCTA from '../components/home/EnquiryCTA';
import NewsletterSection from '../components/common/NewsletterSection';

import ArticleHero from '../components/blog/detail/ArticleHero';
import TableOfContents from '../components/blog/detail/TableOfContents';
import ArticleContent from '../components/blog/detail/ArticleContent';
import AuthorBox from '../components/blog/detail/AuthorBox';
import SocialShare from '../components/blog/detail/SocialShare';
import RelatedArticles from '../components/blog/detail/RelatedArticles';
import HolidayTypeFAQ from '../components/holidayTypes/detail/HolidayTypeFAQ'; // Reuse FAQ accordion
import DestinationCard from '../components/destinations/DestinationCard';
import TourCard from '../components/tours/TourCard';
import HolidayTypeCard from '../components/holidayTypes/HolidayTypeCard';

import { blogs } from '../data/blogs';
import { destinations } from '../data/destinations';
import { tours } from '../data/tours';
import { holidayTypes } from '../data/holidayTypes';

export default function BlogDetail() {
  const { slug } = useParams();

  // Scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const article = useMemo(() => blogs.find(b => b.slug === slug), [slug]);

  // Derived related data
  const relatedDestinations = useMemo(() => {
    if (!article) return [];
    return article.relatedDestinationSlugs
      .map(dSlug => destinations.find(d => d.slug === dSlug))
      .filter(Boolean).slice(0, 3);
  }, [article]);

  const relatedTours = useMemo(() => {
    if (!article) return [];
    return article.relatedTourSlugs
      .map(tSlug => tours.find(t => t.slug === tSlug))
      .filter(Boolean).slice(0, 3);
  }, [article]);

  const relatedHT = useMemo(() => {
    if (!article) return [];
    return article.relatedHolidayTypeSlugs
      .map(hSlug => holidayTypes.find(h => h.slug === hSlug))
      .filter(Boolean).slice(0, 3);
  }, [article]);

  const relatedArticles = useMemo(() => {
    if (!article) return [];
    return blogs
      .filter(b => b.id !== article.id)
      .filter(b => b.category === article.category || b.tags.some(t => article.tags.includes(t)))
      .slice(0, 3);
  }, [article]);

  if (!article) {
    return (
      <div className="pt-32 pb-24 min-h-[60vh] flex items-center justify-center bg-cream">
        <Container className="text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-forest mb-6">Article Not Found</h1>
          <p className="text-charcoal/70 mb-8 max-w-lg mx-auto">
            The travel guide you are looking for may have been moved or removed.
          </p>
          <div className="flex gap-4 justify-center">
            <SecondaryButton to="/blog">Return to Blog</SecondaryButton>
            <SecondaryButton to="/contact" light={true}>Contact Us</SecondaryButton>
          </div>
        </Container>
      </div>
    );
  }

  // Schemas
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://tourswale.com" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://tourswale.com/blog" },
      { "@type": "ListItem", "position": 3, "name": article.title, "item": `https://tourswale.com/blog/${article.slug}` }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.excerpt,
    "image": article.heroImage,
    "datePublished": article.publishedDate,
    "dateModified": article.updatedDate || article.publishedDate,
    "author": {
      "@type": "Organization",
      "name": article.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Tourswale",
      "logo": {
        "@type": "ImageObject",
        "url": "https://tourswale.com/logo.png" // placeholder
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://tourswale.com/blog/${article.slug}`
    }
  };

  const faqSchema = article.faq && article.faq.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": article.faq.map(f => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.answer
      }
    }))
  } : null;

  return (
    <>
      <Helmet>
        <title>{article.seoTitle || `${article.title} | Tourswale`}</title>
        <meta name="description" content={article.seoDescription || article.excerpt} />
        {article.keywords && <meta name="keywords" content={article.keywords} />}
        <link rel="canonical" href={`https://tourswale.com/blog/${article.slug}`} />
        
        {/* Open Graph */}
        <meta property="og:title" content={article.seoTitle || article.title} />
        <meta property="og:description" content={article.seoDescription || article.excerpt} />
        <meta property="og:image" content={article.heroImage} />
        <meta property="og:url" content={`https://tourswale.com/blog/${article.slug}`} />
        <meta property="og:type" content="article" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        {faqSchema && <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>}
      </Helmet>

      <ArticleHero article={article} />

      <section className="py-12 bg-white">
        <Container>
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            
            {/* Desktop TOC (Sticky) */}
            <div className="hidden lg:block lg:w-1/4">
              <div className="sticky top-28">
                <TableOfContents sections={article.sections} />
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:w-3/4 max-w-3xl">
              {/* Mobile TOC (Collapsible can be built into TOC component if needed, currently showing inline) */}
              <div className="lg:hidden mb-8">
                <TableOfContents sections={article.sections} />
              </div>

              {/* Introduction */}
              <p className="text-xl md:text-2xl text-forest font-serif font-bold leading-relaxed mb-12">
                {article.introduction}
              </p>

              {/* Body */}
              <ArticleContent sections={article.sections} />
              
              {/* In-Article Conversion CTA */}
              <div className="bg-forest rounded-[32px] overflow-hidden shadow-xl text-center p-10 md:p-12 my-16 relative">
                <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent pointer-events-none"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-serif font-bold text-white mb-4">Ready to Turn Inspiration into a Real Holiday?</h3>
                  <p className="text-white/80 text-base leading-relaxed mb-8">
                    Share your destination, preferred dates and travel style with Tourswale. Our team will help create a holiday plan based on your preferences.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/contact" className="bg-gold hover:bg-yellow-600 text-white px-6 py-3 rounded-xl text-sm font-bold transition-colors">
                      Plan My Holiday
                    </Link>
                    <Link to="/tours" className="border border-white/30 hover:bg-white/10 text-white px-6 py-3 rounded-xl text-sm font-bold transition-colors">
                      Explore Tour Packages
                    </Link>
                  </div>
                </div>
              </div>

              {/* Author & Share */}
              <AuthorBox />
              <SocialShare title={article.title} />

              {/* FAQs */}
              {article.faq && article.faq.length > 0 && (
                <div className="mb-12">
                  <HolidayTypeFAQ faqs={article.faq} />
                </div>
              )}
            </div>

          </div>
        </Container>
      </section>

      {/* Relational Content Sections */}

      {/* Related Destinations */}
      {relatedDestinations.length > 0 && (
        <section className="py-16 bg-cream">
          <Container>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-forest mb-8 text-center md:text-left">
              Explore Related Destinations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedDestinations.map(dest => (
                <DestinationCard key={dest.id} destination={dest} />
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Related Tours */}
      {relatedTours.length > 0 && (
        <section className="py-16 bg-white">
          <Container>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-forest mb-8 text-center md:text-left">
              Recommended Tour Packages
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedTours.map(tour => (
                <TourCard key={tour.id} tour={tour} />
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Related Holiday Types */}
      {relatedHT.length > 0 && (
        <section className="py-16 bg-cream border-t border-gray-100">
          <Container>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-forest mb-8 text-center md:text-left">
              Matching Travel Styles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedHT.map(ht => (
                <HolidayTypeCard key={ht.id} type={ht} />
              ))}
            </div>
          </Container>
        </section>
      )}

      <RelatedArticles articles={relatedArticles} />
      
      <NewsletterSection />
    </>
  );
}
