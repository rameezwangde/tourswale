export default function AuthorBox() {
  return (
    <div className="bg-cream/50 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center md:items-start gap-6 border border-gray-100 my-12">
      <div className="w-20 h-20 rounded-full bg-forest text-white flex items-center justify-center font-serif font-bold text-3xl shrink-0 shadow-sm">
        T
      </div>
      <div className="text-center md:text-left">
        <h3 className="font-serif font-bold text-xl text-forest mb-2">
          Tourswale Travel Team
        </h3>
        <p className="text-charcoal/80 text-sm leading-relaxed">
          The Tourswale Travel Team creates destination guides, holiday planning advice and practical travel content to help travellers plan with greater confidence.
        </p>
      </div>
    </div>
  );
}
