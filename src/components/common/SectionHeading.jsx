export default function SectionHeading({ eyebrow, title, description, className = "", light = false }) {
  const eyebrowColor = light ? "text-gold" : "text-forest";
  const titleColor = light ? "text-white" : "text-charcoal";
  const descColor = light ? "text-white/80" : "text-charcoal/70";

  return (
    <div className={`flex flex-col ${className}`}>
      {eyebrow && (
        <span className={`text-xs font-bold uppercase tracking-[0.2em] mb-4 ${eyebrowColor}`}>
          {eyebrow}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6 leading-tight ${titleColor}`}>
        {title}
      </h2>
      {description && (
        <p className={`text-sm md:text-base max-w-2xl leading-relaxed ${descColor}`}>
          {description}
        </p>
      )}
    </div>
  );
}
