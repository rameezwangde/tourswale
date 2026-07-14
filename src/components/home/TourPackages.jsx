import { motion } from 'framer-motion';
import { Clock, CheckCircle2, ArrowRight } from 'lucide-react';

export default function TourPackages() {
  const packages = [
    {
      badge: "SIGNATURE ROUTE",
      duration: "5N / 6D",
      title: "Kashmir",
      desc: "Private valleys, lake stays and alpine views shaped into a calm luxury escape.",
      highlights: ["Srinagar houseboat", "Gulmarg day excursion", "Pahalgam valley drive"],
      price: "₹25,999",
      image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=600&auto=format&fit=crop"
    },
    {
      badge: "BEST SELLER",
      duration: "5N / 6D",
      title: "Shimla-Manali",
      desc: "A scenic northern escape with curated stays, mountain drives and snow viewpoints.",
      highlights: ["Shimla promenade", "Solang Valley", "Atal Tunnel"],
      price: "₹18,500",
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=600&auto=format&fit=crop"
    },
    {
      badge: "GLOBAL GETAWAY",
      duration: "8N / 9D",
      title: "South Africa",
      desc: "Cape Town drama, Garden Route calm and safari lodges curated for comfort.",
      highlights: ["Cape Town", "Table Mountain", "Garden Route"],
      price: "On request",
      image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=600&auto=format&fit=crop"
    },
    {
      badge: "LUXURY EUROPE",
      duration: "9N / 10D",
      title: "Europe",
      desc: "Iconic cities, scenic rail moments and a balanced itinerary for first-time Europe travelers.",
      highlights: ["Paris", "Swiss Alps", "Venice"],
      price: "On request",
      image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=600&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-24 bg-[#0f2e23] relative z-20">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h3 className="text-[#cca958] text-[11px] font-bold tracking-[0.15em] uppercase mb-4">Curated Itineraries</h3>
          <h2 className="text-4xl md:text-[3.25rem] font-serif font-bold text-white leading-tight mb-6">
            Luxury Tour Packages
          </h2>
          <p className="text-white/70 text-[13px] leading-relaxed font-medium">
            Discover our meticulously planned journeys that combine breathtaking destinations with unparalleled comfort and exclusive experiences.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          {packages.map((pkg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative bg-white rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] transition-all duration-500 border border-gray-100 flex flex-col"
            >
              {/* Floating Badge (Top Center) */}
              <div className="absolute -top-[14px] left-1/2 -translate-x-1/2 z-20 w-max">
                <div className="bg-white border border-gray-100 shadow-[0_4px_10px_rgb(0,0,0,0.05)] rounded-full px-4 py-[6px] flex items-center gap-1.5">
                   <span className="text-[#cca958] font-bold text-[12px] leading-none">#</span>
                   <span className="text-[9px] font-bold tracking-[0.15em] text-[#0f2e23] uppercase mt-[2px]">{pkg.badge}</span>
                </div>
              </div>

              {/* Top Image */}
              <div className="relative h-[220px] rounded-t-[24px] overflow-hidden group">
                <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                {/* Dark Gradient Overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                
                {/* Duration pill bottom left inside image */}
                <div className="absolute bottom-4 left-4 bg-[#cca958] px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
                  <Clock className="w-3 h-3 text-[#0f2e23]" strokeWidth={2.5} />
                  <span className="text-[10px] font-bold text-[#0f2e23] mt-[1px]">{pkg.duration}</span>
                </div>
              </div>

              {/* Content Box */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-[26px] font-serif font-bold text-[#0f2e23] mb-3">{pkg.title}</h3>
                <p className="text-charcoal/70 text-[11.5px] leading-[1.7] mb-6 flex-1 font-medium pr-2">
                  {pkg.desc}
                </p>
                
                {/* Highlights Checklist */}
                <ul className="space-y-[10px] mb-8">
                  {pkg.highlights.map((hl, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-[15px] h-[15px] text-[#cca958] mt-[1px] flex-shrink-0" strokeWidth={2.5} />
                      <span className="text-[11.5px] text-[#333333] font-medium tracking-wide leading-tight">{hl}</span>
                    </li>
                  ))}
                </ul>

                {/* Price Footer */}
                <div className="bg-[#0f2e23] rounded-[16px] p-[16px] px-[20px] flex items-center justify-between mt-auto group/btn cursor-pointer overflow-hidden relative shadow-md">
                  {/* Hover effect background */}
                  <div className="absolute inset-0 bg-[#143a2c] transform translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-out"></div>
                  
                  <div className="relative z-10">
                    <span className="text-[#c1d1c8] text-[9px] block mb-1 uppercase tracking-widest font-bold">Starting from</span>
                    <span className="text-white font-bold text-[18px] tracking-tight">{pkg.price}</span>
                  </div>
                  <div className="w-[34px] h-[34px] rounded-full bg-[#cca958] flex items-center justify-center group-hover/btn:bg-white transition-colors relative z-10 shadow-sm">
                    <ArrowRight className="w-4 h-4 text-[#0f2e23] transition-colors" strokeWidth={2.5} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
