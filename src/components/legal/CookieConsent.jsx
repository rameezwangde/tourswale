import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if consent has already been given or rejected
    const consent = localStorage.getItem('tourswale_cookie_consent');
    if (!consent) {
      // Delay showing the banner slightly for better UX
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('tourswale_cookie_consent', 'accepted');
    setIsVisible(false);
    // Developer note: Here you would initialize non-essential scripts like Analytics
  };

  const handleReject = () => {
    localStorage.setItem('tourswale_cookie_consent', 'rejected');
    setIsVisible(false);
    // Only strictly necessary cookies remain active
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-charcoal text-white z-[100] p-4 md:p-6 shadow-2xl border-t border-white/10 animate-in slide-in-from-bottom-full duration-500">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="md:max-w-2xl text-center md:text-left">
          <h3 className="font-serif font-bold text-lg mb-2">We respect your privacy</h3>
          <p className="text-white/70 text-sm leading-relaxed">
            We use cookies to improve your browsing experience, analyze site traffic, and serve tailored content. 
            By clicking "Accept", you consent to our use of non-essential cookies.
            Read our <Link to="/cookie-policy" className="text-gold hover:underline">Cookie Policy</Link> and <Link to="/privacy-policy" className="text-gold hover:underline">Privacy Policy</Link> for details.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 shrink-0">
          <button
            onClick={handleReject}
            className="px-5 py-2.5 rounded-xl border border-white/20 text-white/80 hover:bg-white/10 text-sm font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-white"
          >
            Decline Non-Essential
          </button>
          <button
            onClick={handleAccept}
            className="px-6 py-2.5 rounded-xl bg-gold hover:bg-yellow-600 text-white text-sm font-bold transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-white"
          >
            Accept All Cookies
          </button>
        </div>

      </div>
    </div>
  );
}
