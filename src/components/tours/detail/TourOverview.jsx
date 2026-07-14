export default function TourOverview({ overview }) {
  if (!overview) return null;

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-serif font-bold text-forest mb-6">Tour Overview</h2>
      <div className="prose prose-charcoal max-w-none">
        <p className="text-charcoal/80 leading-relaxed text-base">
          {overview}
        </p>
      </div>
    </section>
  );
}
