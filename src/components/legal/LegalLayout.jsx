import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Container from '../common/Container';
import { siteConfig } from '../../config/siteConfig';

export default function LegalLayout({ 
  title, 
  lastUpdated, 
  sections = [], 
  children,
  seoTitle,
  seoDescription 
}) {
  const [activeSection, setActiveSection] = useState('');

  // Intersection Observer for active TOC highlighting
  useEffect(() => {
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -80% 0px' }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((section) => {
        const el = document.getElementById(section.id);
        if (el) observer.unobserve(el);
      });
    };
  }, [sections]);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 100; // sticky offset
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      <Helmet>
        <title>{seoTitle || `${title} | Tourswale`}</title>
        <meta name="description" content={seoDescription || `Read the ${title.toLowerCase()} for Tourswale.`} />
        <meta name="robots" content="noindex, follow" /> {/* General safe default for legal drafts */}
      </Helmet>

      {/* Compact Hero */}
      <div className="pt-32 pb-16 bg-forest relative">
        <Container className="relative z-10 text-center">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-white/70 justify-center">
              <li><Link to="/" className="hover:text-gold transition-colors">Home</Link></li>
              <li><span>/</span></li>
              <li><span className="text-white" aria-current="page">{title}</span></li>
            </ol>
          </nav>
          
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            {title}
          </h1>
          {lastUpdated && (
            <p className="text-white/60 text-sm font-semibold">
              Last Updated: {lastUpdated}
            </p>
          )}
        </Container>
      </div>

      <section className="py-16 bg-white">
        <Container>
          {/* Developer Note Warning */}
          <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 p-4 rounded-xl text-sm font-semibold mb-12 max-w-4xl mx-auto flex items-center justify-center text-center">
            Developer Note: This is a general website draft. The final policy must be reviewed by a business or legal adviser before launch.
          </div>

          <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
            
            {/* Desktop TOC (Sticky) */}
            {sections.length > 0 && (
              <div className="hidden lg:block lg:w-1/4 shrink-0">
                <div className="sticky top-28 bg-cream/50 rounded-2xl p-6 border border-gray-100">
                  <h3 className="font-serif font-bold text-forest mb-4">Table of Contents</h3>
                  <ul className="space-y-3 border-l-2 border-gray-200">
                    {sections.map(section => (
                      <li key={section.id} className="relative">
                        {activeSection === section.id && (
                          <div className="absolute -left-[2px] top-0 bottom-0 w-0.5 bg-gold rounded-full"></div>
                        )}
                        <a 
                          href={`#${section.id}`}
                          onClick={(e) => scrollToSection(e, section.id)}
                          className={`block pl-4 text-sm transition-colors ${
                            activeSection === section.id ? 'font-bold text-forest' : 'text-charcoal/70 hover:text-gold'
                          }`}
                        >
                          {section.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Content Area */}
            <div className={`lg:w-3/4 max-w-3xl prose prose-charcoal prose-lg ${!sections.length ? 'mx-auto' : ''}`}>
              {/* Mobile TOC (simplified inline) */}
              {sections.length > 0 && (
                <div className="lg:hidden mb-10 bg-cream/50 rounded-2xl p-6 border border-gray-100">
                  <h3 className="font-serif font-bold text-forest mb-3 text-lg">In this document</h3>
                  <ul className="space-y-2">
                    {sections.map(section => (
                      <li key={section.id}>
                        <a 
                          href={`#${section.id}`}
                          onClick={(e) => scrollToSection(e, section.id)}
                          className="text-sm text-gold hover:underline font-semibold"
                        >
                          {section.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {children}
            </div>

          </div>
        </Container>
      </section>

      {/* Footer Contact Prompt */}
      <section className="py-16 bg-cream border-t border-gray-100">
        <Container className="text-center">
          <h2 className="text-2xl font-serif font-bold text-forest mb-4">Have Questions?</h2>
          <p className="text-charcoal/70 mb-8 max-w-md mx-auto">
            If you require clarification regarding these terms, please contact our support team.
          </p>
          <Link to="/contact" className="inline-flex bg-gold hover:bg-yellow-600 text-white px-6 py-3 rounded-xl text-sm font-bold transition-colors">
            Contact Us
          </Link>
        </Container>
      </section>
    </>
  );
}
