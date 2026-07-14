export default function ArticleContent({ sections }) {
  if (!sections || sections.length === 0) return null;

  return (
    <div className="prose prose-charcoal prose-lg max-w-none">
      {sections.map((section) => (
        <section key={section.id} id={section.id} className="mb-12 scroll-mt-28">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-forest mb-6">
            {section.heading}
          </h2>
          
          {section.content.map((paragraph, index) => (
            <p key={index} className="text-charcoal/80 leading-relaxed mb-6">
              {paragraph}
            </p>
          ))}
          
          {section.image && (
            <figure className="my-8 rounded-2xl overflow-hidden shadow-sm">
              <img 
                src={section.image} 
                alt={section.imageAlt || section.heading} 
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </figure>
          )}
        </section>
      ))}
    </div>
  );
}
