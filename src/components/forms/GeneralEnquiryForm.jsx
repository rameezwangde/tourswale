import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Loader2, AlertCircle } from 'lucide-react';
import { submitGeneralEnquiry } from '../../services/enquiryService';

export default function GeneralEnquiryForm() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  // Initial State merging query params
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: searchParams.get('destination') || '',
    type: searchParams.get('type') || '',
    region: '', // domestic or international
    travelDate: '',
    duration: '',
    adults: 2,
    children: 0,
    departureCity: '',
    budget: '',
    message: '',
    consent: false,
    honeypot: '' // anti-spam
  });

  const [status, setStatus] = useState('idle'); // idle, submitting, error
  const [errorMessage, setErrorMessage] = useState('');
  const [validationErrors, setValidationErrors] = useState({});

  // Reset error when user types
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    if (validationErrors[name]) {
      setValidationErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    const errors = {};
    if (!formData.name || formData.name.length < 2) errors.name = "Please enter a valid full name.";
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errors.email = "Please enter a valid email address.";
    if (!formData.phone || formData.phone.length < 8) errors.phone = "Please enter a valid phone number.";
    if (formData.adults < 1) errors.adults = "At least 1 adult is required.";
    if (formData.children < 0) errors.children = "Cannot be negative.";
    if (!formData.consent) errors.consent = "You must agree to the terms to proceed.";
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Anti-spam check
    if (formData.honeypot) {
      console.warn("Spam detected");
      return; // silently fail
    }

    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      
      // Focus first error field
      const firstErrorName = Object.keys(errors)[0];
      const errorElement = document.getElementsByName(firstErrorName)[0];
      if (errorElement) errorElement.focus();
      
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      await submitGeneralEnquiry(formData);
      // NOTE: Real implementations would clear form or handle state, 
      // but we navigate away so it unmounts.
      // Pass safe state to thank-you page
      navigate('/thank-you', { 
        state: { 
          destination: formData.destination,
          type: formData.type 
        } 
      });
    } catch (err) {
      setStatus('error');
      setErrorMessage("Your details have not been lost. Please try again, or contact Tourswale directly using the available phone or email options.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-[32px] p-6 md:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100">
      
      {/* Hidden Anti-Spam Field */}
      <input type="text" name="honeypot" value={formData.honeypot} onChange={handleChange} className="hidden" tabIndex="-1" autoComplete="off" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Personal Details */}
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-charcoal mb-2">Full Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full p-4 rounded-xl border ${validationErrors.name ? 'border-red-400 focus:ring-red-400' : 'border-gray-200 focus:border-gold focus:ring-gold'} focus:outline-none focus:ring-1 transition-colors`}
            aria-invalid={validationErrors.name ? "true" : "false"}
            aria-describedby={validationErrors.name ? "name-error" : undefined}
          />
          {validationErrors.name && <p id="name-error" className="text-red-500 text-xs mt-1.5 font-semibold">{validationErrors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-charcoal mb-2">Email Address *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full p-4 rounded-xl border ${validationErrors.email ? 'border-red-400 focus:ring-red-400' : 'border-gray-200 focus:border-gold focus:ring-gold'} focus:outline-none focus:ring-1 transition-colors`}
            aria-invalid={validationErrors.email ? "true" : "false"}
            aria-describedby={validationErrors.email ? "email-error" : undefined}
          />
          {validationErrors.email && <p id="email-error" className="text-red-500 text-xs mt-1.5 font-semibold">{validationErrors.email}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-charcoal mb-2">Phone Number *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91"
            className={`w-full p-4 rounded-xl border ${validationErrors.phone ? 'border-red-400 focus:ring-red-400' : 'border-gray-200 focus:border-gold focus:ring-gold'} focus:outline-none focus:ring-1 transition-colors`}
            aria-invalid={validationErrors.phone ? "true" : "false"}
            aria-describedby={validationErrors.phone ? "phone-error" : undefined}
          />
          {validationErrors.phone && <p id="phone-error" className="text-red-500 text-xs mt-1.5 font-semibold">{validationErrors.phone}</p>}
        </div>

        <div>
          <label htmlFor="departureCity" className="block text-sm font-semibold text-charcoal mb-2">Departure City</label>
          <input
            type="text"
            id="departureCity"
            name="departureCity"
            value={formData.departureCity}
            onChange={handleChange}
            className="w-full p-4 rounded-xl border border-gray-200 focus:border-gold focus:ring-gold focus:outline-none focus:ring-1 transition-colors"
          />
        </div>
      </div>

      <hr className="border-gray-100 my-8" />

      {/* Travel Preferences */}
      <h3 className="font-serif font-bold text-xl text-forest mb-6">Travel Preferences</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="region" className="block text-sm font-semibold text-charcoal mb-2">Region</label>
          <select
            id="region"
            name="region"
            value={formData.region}
            onChange={handleChange}
            className="w-full p-4 rounded-xl border border-gray-200 focus:border-gold focus:ring-gold focus:outline-none focus:ring-1 transition-colors bg-white appearance-none"
          >
            <option value="">Select Region</option>
            <option value="domestic">Domestic (India)</option>
            <option value="international">International</option>
          </select>
        </div>

        <div>
          <label htmlFor="destination" className="block text-sm font-semibold text-charcoal mb-2">Preferred Destination</label>
          <input
            type="text"
            id="destination"
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            placeholder="e.g. Dubai, Bali, Kerala"
            className="w-full p-4 rounded-xl border border-gray-200 focus:border-gold focus:ring-gold focus:outline-none focus:ring-1 transition-colors"
          />
        </div>

        <div>
          <label htmlFor="travelDate" className="block text-sm font-semibold text-charcoal mb-2">Preferred Travel Date</label>
          <input
            type="month"
            id="travelDate"
            name="travelDate"
            value={formData.travelDate}
            onChange={handleChange}
            min={new Date().toISOString().slice(0, 7)}
            className="w-full p-4 rounded-xl border border-gray-200 focus:border-gold focus:ring-gold focus:outline-none focus:ring-1 transition-colors"
          />
        </div>

        <div>
          <label htmlFor="duration" className="block text-sm font-semibold text-charcoal mb-2">Trip Duration</label>
          <select
            id="duration"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            className="w-full p-4 rounded-xl border border-gray-200 focus:border-gold focus:ring-gold focus:outline-none focus:ring-1 transition-colors bg-white appearance-none"
          >
            <option value="">Select Duration</option>
            <option value="1-3">1 to 3 Days</option>
            <option value="4-6">4 to 6 Days</option>
            <option value="7-10">7 to 10 Days</option>
            <option value="11+">11+ Days</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
        <div className="col-span-1 md:col-span-2">
          <label htmlFor="type" className="block text-sm font-semibold text-charcoal mb-2">Holiday Type</label>
          <select
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full p-4 rounded-xl border border-gray-200 focus:border-gold focus:ring-gold focus:outline-none focus:ring-1 transition-colors bg-white appearance-none"
          >
            <option value="">Select Type</option>
            <option value="honeymoon-packages">Honeymoon</option>
            <option value="family-holidays">Family</option>
            <option value="luxury-holidays">Luxury</option>
            <option value="customized-holidays">Customized</option>
            <option value="group-tours">Group</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="col-span-1">
          <label htmlFor="adults" className="block text-sm font-semibold text-charcoal mb-2">Adults *</label>
          <input
            type="number"
            id="adults"
            name="adults"
            min="1"
            value={formData.adults}
            onChange={handleChange}
            className={`w-full p-4 rounded-xl border ${validationErrors.adults ? 'border-red-400 focus:ring-red-400' : 'border-gray-200 focus:border-gold focus:ring-gold'} focus:outline-none focus:ring-1 transition-colors`}
          />
          {validationErrors.adults && <p className="text-red-500 text-xs mt-1.5 font-semibold">{validationErrors.adults}</p>}
        </div>

        <div className="col-span-1">
          <label htmlFor="children" className="block text-sm font-semibold text-charcoal mb-2">Children</label>
          <input
            type="number"
            id="children"
            name="children"
            min="0"
            value={formData.children}
            onChange={handleChange}
            className={`w-full p-4 rounded-xl border ${validationErrors.children ? 'border-red-400 focus:ring-red-400' : 'border-gray-200 focus:border-gold focus:ring-gold'} focus:outline-none focus:ring-1 transition-colors`}
          />
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-semibold text-charcoal mb-2">Additional Requests or Message</label>
        <textarea
          id="message"
          name="message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          placeholder="Any specific hotels, activities, or dietary requirements?"
          className="w-full p-4 rounded-xl border border-gray-200 focus:border-gold focus:ring-gold focus:outline-none focus:ring-1 transition-colors resize-none"
        ></textarea>
      </div>

      {/* Consent & Submit */}
      <div className="mb-8">
        <label className="flex items-start gap-3 cursor-pointer group">
          <div className="relative flex items-center justify-center mt-0.5">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              className="peer sr-only"
              aria-invalid={validationErrors.consent ? "true" : "false"}
            />
            <div className={`w-5 h-5 rounded border ${validationErrors.consent ? 'border-red-400' : 'border-gray-300 group-hover:border-gold'} peer-checked:bg-forest peer-checked:border-forest transition-colors flex items-center justify-center`}>
              <svg className={`w-3.5 h-3.5 text-white ${formData.consent ? 'opacity-100' : 'opacity-0'} transition-opacity`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          <span className="text-sm text-charcoal/70 leading-relaxed">
            I consent to Tourswale collecting my details to provide a holiday quotation and travel assistance. I understand this does not constitute a confirmed booking. *
          </span>
        </label>
        {validationErrors.consent && <p className="text-red-500 text-xs mt-2 ml-8 font-semibold">{validationErrors.consent}</p>}
      </div>

      {status === 'error' && (
        <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-100 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
          <p className="text-sm text-red-700 font-semibold leading-relaxed">
            {errorMessage}
          </p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full bg-forest hover:bg-forest-light text-white font-bold py-4 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 disabled:opacity-50 flex items-center justify-center gap-2"
      >
        {status === 'submitting' ? (
          <><Loader2 className="w-5 h-5 animate-spin" /> Submitting Enquiry...</>
        ) : (
          "Request Quotation"
        )}
      </button>

      <p className="text-center text-xs text-charcoal/40 mt-4 font-semibold">
        * Developer Note: Server-side validation and real backend integration required before production launch.
      </p>
    </form>
  );
}
