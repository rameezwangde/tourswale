import { useState, useEffect } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import PrimaryButton from '../common/PrimaryButton';

export default function TourEnquiryForm({ selectedTour = null, onSuccess }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    tourPackage: '',
    destination: '',
    travelDate: '',
    adults: '2',
    children: '0',
    departureCity: '',
    budget: '',
    message: '',
    consent: false
  });

  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errors, setErrors] = useState({});

  // Auto-populate form if a tour is pre-selected
  useEffect(() => {
    if (selectedTour) {
      setFormData(prev => ({
        ...prev,
        tourPackage: selectedTour.title || '',
        destination: selectedTour.destination || ''
      }));
    }
  }, [selectedTour]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Valid email is required';
    if (!formData.phone.trim() || formData.phone.length < 10) newErrors.phone = 'Valid phone number is required';
    if (!formData.travelDate) newErrors.travelDate = 'Travel date is required';
    
    // Check if travel date is in the past
    if (formData.travelDate) {
      const selected = new Date(formData.travelDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selected < today) newErrors.travelDate = 'Travel date must be in the future';
    }
    
    if (parseInt(formData.adults) + parseInt(formData.children) < 1) {
      newErrors.travellers = 'At least 1 traveller is required';
    }
    if (!formData.consent) newErrors.consent = 'You must agree to the terms to proceed';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validate()) {
      setStatus('error');
      return;
    }

    setStatus('loading');

    // Simulate API submission
    // NOTE: In production, connect this to your backend API route here
    setTimeout(() => {
      setStatus('success');
      if (onSuccess) {
        onSuccess(formData);
      }
    }, 1500);
  };

  if (status === 'success') {
    return (
      <div className="bg-emerald/10 border border-emerald/20 p-8 rounded-2xl text-center flex flex-col items-center">
        <div className="w-16 h-16 bg-emerald rounded-full flex items-center justify-center text-white mb-6">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-serif font-bold text-forest mb-2">Enquiry Sent Successfully!</h3>
        <p className="text-charcoal/70 text-sm leading-relaxed max-w-sm mb-6">
          Thank you for reaching out, {formData.fullName}. Our travel specialist will contact you shortly to plan your journey to {formData.destination || 'your destination'}.
        </p>
        <PrimaryButton onClick={() => window.location.reload()}>
          Done
        </PrimaryButton>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {/* Hidden Development Notice */}
      <div className="bg-amber-50 border border-amber-200 text-amber-800 text-[10px] uppercase font-bold tracking-wider p-2 rounded text-center hidden">
        Frontend Demo Mode - No Backend Connected
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Personal Details */}
        <div className="space-y-2">
          <label htmlFor="fullName" className="text-xs font-bold uppercase tracking-wider text-charcoal/70">Full Name *</label>
          <input 
            type="text" 
            id="fullName" 
            name="fullName" 
            value={formData.fullName} 
            onChange={handleChange}
            className={`w-full border ${errors.fullName ? 'border-red-400 bg-red-50' : 'border-gray-200'} rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors`}
            placeholder="John Doe"
          />
          {errors.fullName && <span className="text-red-500 text-xs flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.fullName}</span>}
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-charcoal/70">Email Address *</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange}
            className={`w-full border ${errors.email ? 'border-red-400 bg-red-50' : 'border-gray-200'} rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors`}
            placeholder="john@example.com"
          />
          {errors.email && <span className="text-red-500 text-xs flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.email}</span>}
        </div>

        <div className="space-y-2">
          <label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-charcoal/70">Phone Number *</label>
          <input 
            type="tel" 
            id="phone" 
            name="phone" 
            value={formData.phone} 
            onChange={handleChange}
            className={`w-full border ${errors.phone ? 'border-red-400 bg-red-50' : 'border-gray-200'} rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors`}
            placeholder="+91 98765 43210"
          />
          {errors.phone && <span className="text-red-500 text-xs flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.phone}</span>}
        </div>

        {/* Travel Details */}
        <div className="space-y-2">
          <label htmlFor="destination" className="text-xs font-bold uppercase tracking-wider text-charcoal/70">Destination</label>
          <input 
            type="text" 
            id="destination" 
            name="destination" 
            value={formData.destination} 
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
            placeholder="e.g. Dubai, Bali, Kerala"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-2">
          <label htmlFor="travelDate" className="text-xs font-bold uppercase tracking-wider text-charcoal/70">Travel Date *</label>
          <input 
            type="date" 
            id="travelDate" 
            name="travelDate" 
            value={formData.travelDate} 
            onChange={handleChange}
            min={new Date().toISOString().split('T')[0]}
            className={`w-full border ${errors.travelDate ? 'border-red-400 bg-red-50' : 'border-gray-200'} rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors text-charcoal`}
          />
          {errors.travelDate && <span className="text-red-500 text-xs flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.travelDate}</span>}
        </div>

        <div className="space-y-2">
          <label htmlFor="adults" className="text-xs font-bold uppercase tracking-wider text-charcoal/70">Adults</label>
          <select 
            id="adults" 
            name="adults" 
            value={formData.adults} 
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors text-charcoal bg-white cursor-pointer"
          >
            {[1,2,3,4,5,6,7,8,9,10].map(n => <option key={n} value={n}>{n}</option>)}
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="children" className="text-xs font-bold uppercase tracking-wider text-charcoal/70">Children</label>
          <select 
            id="children" 
            name="children" 
            value={formData.children} 
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors text-charcoal bg-white cursor-pointer"
          >
            {[0,1,2,3,4,5,6].map(n => <option key={n} value={n}>{n}</option>)}
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-charcoal/70">Any specific requirements?</label>
        <textarea 
          id="message" 
          name="message" 
          value={formData.message} 
          onChange={handleChange}
          rows="4"
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors resize-none"
          placeholder="Tell us about your accommodation preferences, special occasions, or places you must visit..."
        ></textarea>
      </div>

      <div className="space-y-2">
        <label className="flex items-start gap-3 cursor-pointer group">
          <div className="relative flex items-center justify-center mt-0.5">
            <input 
              type="checkbox" 
              name="consent" 
              checked={formData.consent} 
              onChange={handleChange}
              className="peer sr-only"
            />
            <div className={`w-5 h-5 rounded border ${errors.consent ? 'border-red-400' : 'border-gray-300'} peer-checked:bg-forest peer-checked:border-forest transition-colors flex items-center justify-center`}>
              <CheckCircle2 className="w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 transition-opacity" />
            </div>
          </div>
          <span className="text-xs text-charcoal/70 leading-relaxed pt-0.5">
            I agree to Tourswale's Privacy Policy and consent to being contacted by a travel specialist regarding my enquiry.
          </span>
        </label>
        {errors.consent && <span className="text-red-500 text-xs flex items-center gap-1 pl-8"><AlertCircle className="w-3 h-3" /> {errors.consent}</span>}
      </div>

      <button 
        type="submit" 
        disabled={status === 'loading'}
        className="w-full bg-forest hover:bg-emerald text-white px-8 py-4 rounded-xl text-sm font-bold transition-colors shadow-sm flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'Submitting Enquiry...' : 'Request Quotation'} 
        {status !== 'loading' && <Send className="w-4 h-4" />}
      </button>
      
      {status === 'error' && (
        <div className="text-red-500 text-xs text-center p-3 bg-red-50 rounded-lg">
          Please fix the errors above before submitting the form.
        </div>
      )}
    </form>
  );
}
