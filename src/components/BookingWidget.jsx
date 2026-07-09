import { Calendar, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

export default function BookingWidget() {
  return (
    <motion.div 
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative z-30 max-w-[1100px] mx-auto -mt-16 px-4 md:px-6"
    >
      <div className="bg-white rounded-[20px] shadow-[0_15px_40px_-10px_rgba(0,0,0,0.15)] p-2 md:p-3 flex flex-col md:flex-row items-center justify-between">
        
        {/* Destination */}
        <div className="flex-1 w-full border-b md:border-b-0 md:border-r border-gray-200 p-3 md:px-6">
          <label className="block text-[9px] font-bold text-charcoal tracking-widest uppercase mb-1.5">Destination</label>
          <input 
            type="text" 
            placeholder="Where are you going?" 
            className="w-full text-[13px] text-charcoal placeholder:text-gray-400 focus:outline-none bg-transparent font-medium"
          />
        </div>

        {/* Check In */}
        <div className="flex-[0.8] w-full border-b md:border-b-0 md:border-r border-gray-200 p-3 md:px-6">
          <label className="block text-[9px] font-bold text-charcoal tracking-widest uppercase mb-1.5">Check In</label>
          <div className="flex items-center justify-between cursor-pointer group">
            <span className="text-[13px] text-gray-400 group-hover:text-charcoal transition-colors font-medium">Select Date</span>
            <Calendar className="w-[15px] h-[15px] text-gray-400 group-hover:text-forest transition-colors" />
          </div>
        </div>

        {/* Check Out */}
        <div className="flex-[0.8] w-full border-b md:border-b-0 md:border-r border-gray-200 p-3 md:px-6">
          <label className="block text-[9px] font-bold text-charcoal tracking-widest uppercase mb-1.5">Check Out</label>
          <div className="flex items-center justify-between cursor-pointer group">
            <span className="text-[13px] text-gray-400 group-hover:text-charcoal transition-colors font-medium">Select Date</span>
            <Calendar className="w-[15px] h-[15px] text-gray-400 group-hover:text-forest transition-colors" />
          </div>
        </div>

        {/* Travellers */}
        <div className="flex-[1.2] w-full p-3 md:px-6">
          <label className="block text-[9px] font-bold text-charcoal tracking-widest uppercase mb-1.5">Travellers</label>
          <div className="flex items-center justify-between cursor-pointer group">
            <span className="text-[13px] text-charcoal font-medium">2 Adults, 0 Children</span>
            <ChevronDown className="w-4 h-4 text-charcoal" />
          </div>
        </div>

        {/* Search Button */}
        <div className="w-full md:w-auto p-2 md:pl-4">
          <button className="w-full md:w-auto bg-[#143e33] hover:bg-emerald text-white px-8 py-3.5 rounded-full font-semibold transition-colors text-[13px] shadow-sm">
            Search Tours
          </button>
        </div>

      </div>
    </motion.div>
  );
}
