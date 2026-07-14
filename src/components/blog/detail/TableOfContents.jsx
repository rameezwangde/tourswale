import { useState, useEffect } from 'react';

export default function TableOfContents({ sections }) {
  const [activeId, setActiveId] = useState('');

  // Setup intersection observer to track which section is currently active in the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -80% 0px' } // Triggers when the section is near the top
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [sections]);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      // Offset for sticky navbar
      const y = element.getBoundingClientRect().top + window.pageYOffset - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  if (!sections || sections.length === 0) return null;

  return (
    <div className="bg-cream/50 p-6 rounded-2xl border border-gray-100">
      <h3 className="font-serif font-bold text-lg text-forest mb-4">Table of Contents</h3>
      <nav>
        <ul className="space-y-3 border-l-2 border-gray-200">
          {sections.map((section) => (
            <li key={section.id} className="relative">
              {/* Active marker indicator */}
              {activeId === section.id && (
                <div className="absolute -left-[2px] top-0 bottom-0 w-0.5 bg-gold rounded-full transition-all"></div>
              )}
              <a
                href={`#${section.id}`}
                onClick={(e) => scrollToSection(e, section.id)}
                className={`block pl-4 text-sm transition-colors duration-200 ${
                  activeId === section.id 
                    ? 'font-bold text-forest' 
                    : 'text-charcoal/70 hover:text-gold'
                }`}
              >
                {section.heading}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
