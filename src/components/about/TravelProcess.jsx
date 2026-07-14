import Container from '../common/Container';

export default function TravelProcess() {
  const steps = [
    {
      num: "01",
      title: "Share Your Travel Plans",
      desc: "Tell us your preferred destination, dates, number of travellers and approximate budget."
    },
    {
      num: "02",
      title: "Receive a Personalized Proposal",
      desc: "Our team prepares a suitable itinerary, accommodation options and package details."
    },
    {
      num: "03",
      title: "Review and Customize",
      desc: "Adjust the travel plan based on your preferences and availability."
    },
    {
      num: "04",
      title: "Confirm Your Holiday",
      desc: "Review the final inclusions and complete the booking process."
    },
    {
      num: "05",
      title: "Travel with Confidence",
      desc: "Receive the essential details and support required for your journey."
    }
  ];

  return (
    <section className="py-24 bg-cream relative">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-gold text-xs font-bold uppercase tracking-wider mb-4 inline-block">
            HOW WE WORK
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-forest">
            A Simple and Thoughtful Planning Process
          </h2>
        </div>

        {/* Desktop Horizontal Process */}
        <div className="hidden lg:grid grid-cols-5 gap-6 relative">
          {/* Connector Line */}
          <div className="absolute top-8 left-[10%] right-[10%] h-px bg-gold/30"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="relative text-center group">
              <div className="w-16 h-16 mx-auto bg-white border-2 border-gold rounded-full flex items-center justify-center font-serif font-bold text-xl text-forest mb-6 relative z-10 shadow-sm group-hover:bg-gold group-hover:text-white transition-colors duration-300">
                {step.num}
              </div>
              <h3 className="font-serif font-bold text-lg text-forest mb-3">
                {step.title}
              </h3>
              <p className="text-charcoal/70 text-sm leading-relaxed px-2">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile / Tablet Vertical Process */}
        <div className="lg:hidden relative max-w-md mx-auto">
          {/* Vertical Connector Line */}
          <div className="absolute top-0 bottom-0 left-[31px] w-px bg-gold/30"></div>
          
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="relative flex gap-6 group">
                <div className="w-16 h-16 shrink-0 bg-white border-2 border-gold rounded-full flex items-center justify-center font-serif font-bold text-xl text-forest relative z-10 shadow-sm group-hover:bg-gold group-hover:text-white transition-colors duration-300">
                  {step.num}
                </div>
                <div className="pt-3">
                  <h3 className="font-serif font-bold text-lg text-forest mb-2">
                    {step.title}
                  </h3>
                  <p className="text-charcoal/70 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
