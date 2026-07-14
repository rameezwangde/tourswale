import { AlertCircle } from 'lucide-react';

export default function TourNotes({ notes }) {
  if (!notes || notes.length === 0) return null;

  return (
    <section className="mb-16">
      <div className="bg-charcoal/5 rounded-2xl p-6 md:p-8 border border-charcoal/10">
        <h2 className="text-xl font-serif font-bold text-forest mb-6 flex items-center gap-3">
          <AlertCircle className="w-5 h-5 text-gold" />
          Important Notes
        </h2>
        
        <ul className="space-y-3">
          {notes.map((note, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-charcoal/30 shrink-0 mt-2"></span>
              <span className="text-charcoal/70 text-sm leading-relaxed">{note}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
