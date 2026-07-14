import { MessageCircle } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { useLocation } from 'react-router-dom';

export default function FloatingWhatsApp() {
  const location = useLocation();

  if (!siteConfig.whatsapp) return null;

  // Clean number for WA link
  const cleanNumber = siteConfig.whatsapp.replace(/[^0-9]/g, '');

  // Contextual message based on route
  let message = "Hello Tourswale, I would like help planning a holiday.";
  
  // Basic contextual reading based on path
  if (location.pathname.includes('/destinations/')) {
    const dest = location.pathname.split('/').pop().replace('-', ' ');
    message = `Hello Tourswale, I would like help planning a holiday to ${dest}.`;
  } else if (location.pathname.includes('/tours/')) {
    const tour = location.pathname.split('/').pop().replace('-', ' ');
    message = `Hello Tourswale, I would like to enquire about the ${tour} package.`;
  }

  const encodedMessage = encodeURIComponent(message);
  const waLink = `https://wa.me/${cleanNumber}?text=${encodedMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end group">
      {/* Tooltip */}
      <div className="mb-2 mr-2 px-3 py-1.5 bg-charcoal text-white text-xs font-semibold rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none transform translate-y-2 group-hover:translate-y-0">
        Need help? Chat with us
      </div>
      
      {/* Button */}
      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25D366] hover:bg-[#1ebd5a] text-white rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_8px_30px_rgba(37,211,102,0.6)] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#25D366]/50 transform hover:scale-110"
        aria-label="Chat with Tourswale on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
    </div>
  );
}
