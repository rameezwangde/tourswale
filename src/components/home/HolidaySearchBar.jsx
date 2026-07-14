import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Calendar, Clock, Users, Compass, Search } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HolidaySearchBar() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    destination: '',
    duration: '',
    travellers: '',
    type: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (formData.destination) params.append('dest', formData.destination);
    if (formData.duration) params.append('duration', formData.duration);
    if (formData.travellers) params.append('pax', formData.travellers);
    if (formData.type) params.append('type', formData.type);
    
    navigate(`/search?${params.toString()}`);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="bg-white rounded-[24px] shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-gray-100 p-4 md:p-6 w-full max-w-6xl mx-auto relative z-20"
    >
      <form onSubmit={handleSearch} className="flex flex-col lg:flex-row gap-4 lg:gap-0 lg:divide-x divide-gray-100">
        
        {/* Destination */}
        <div className="flex-1 px-4 py-2 flex flex-col gap-1">
          <label className="text-[10px] font-bold text-charcoal/60 uppercase tracking-wider flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-gold" /> Destination
          </label>
          <select 
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            className="w-full bg-transparent text-sm font-semibold text-charcoal focus:outline-none appearance-none cursor-pointer"
          >
            <option value="">Where are you going?</option>
            <option value="dubai">Dubai</option>
            <option value="bali">Bali</option>
            <option value="maldives">Maldives</option>
            <option value="switzerland">Switzerland</option>
            <option value="kashmir">Kashmir</option>
            <option value="kerala">Kerala</option>
            <option value="goa">Goa</option>
            <option value="thailand">Thailand</option>
          </select>
        </div>

        {/* Duration */}
        <div className="flex-1 px-4 py-2 flex flex-col gap-1">
          <label className="text-[10px] font-bold text-charcoal/60 uppercase tracking-wider flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-gold" /> Duration
          </label>
          <select 
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            className="w-full bg-transparent text-sm font-semibold text-charcoal focus:outline-none appearance-none cursor-pointer"
          >
            <option value="">Any Duration</option>
            <option value="3-5">3–5 Days</option>
            <option value="6-8">6–8 Days</option>
            <option value="9-12">9–12 Days</option>
            <option value="13+">13+ Days</option>
          </select>
        </div>

        {/* Travellers */}
        <div className="flex-1 px-4 py-2 flex flex-col gap-1">
          <label className="text-[10px] font-bold text-charcoal/60 uppercase tracking-wider flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5 text-gold" /> Travellers
          </label>
          <select 
            name="travellers"
            value={formData.travellers}
            onChange={handleChange}
            className="w-full bg-transparent text-sm font-semibold text-charcoal focus:outline-none appearance-none cursor-pointer"
          >
            <option value="">How many?</option>
            <option value="1">1 Traveller</option>
            <option value="2">2 Travellers</option>
            <option value="3-4">3–4 Travellers</option>
            <option value="5+">5+ Travellers</option>
          </select>
        </div>

        {/* Holiday Type */}
        <div className="flex-1 px-4 py-2 flex flex-col gap-1">
          <label className="text-[10px] font-bold text-charcoal/60 uppercase tracking-wider flex items-center gap-1.5">
            <Compass className="w-3.5 h-3.5 text-gold" /> Holiday Type
          </label>
          <select 
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full bg-transparent text-sm font-semibold text-charcoal focus:outline-none appearance-none cursor-pointer"
          >
            <option value="">Any Type</option>
            <option value="family">Family</option>
            <option value="honeymoon">Honeymoon</option>
            <option value="group">Group</option>
            <option value="luxury">Luxury</option>
            <option value="adventure">Adventure</option>
            <option value="customized">Customized</option>
          </select>
        </div>

        {/* Search Button */}
        <div className="px-4 lg:pl-6 flex items-center mt-2 lg:mt-0">
          <button 
            type="submit" 
            className="w-full lg:w-auto bg-forest hover:bg-emerald text-white px-8 py-4 rounded-xl text-sm font-bold transition-colors shadow-sm hover:shadow-md flex items-center justify-center gap-2"
          >
            <Search className="w-4 h-4" /> Search Holidays
          </button>
        </div>

      </form>
    </motion.div>
  );
}
