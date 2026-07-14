import { useState } from 'react';
import { Share2, Check, Link as LinkIcon, MessageSquare, Globe, AtSign, Briefcase } from 'lucide-react';

export default function SocialShare({ title }) {
  const [copied, setCopied] = useState(false);
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  const encodedUrl = encodeURIComponent(currentUrl);
  const encodedTitle = encodeURIComponent(title);

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          url: currentUrl
        });
      } catch (err) {
        console.log('Error sharing natively', err);
      }
    } else {
      copyToClipboard();
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center gap-4 py-8 border-t border-b border-gray-100 my-12">
      <span className="text-sm font-bold text-charcoal/70 uppercase tracking-wider flex items-center gap-2">
        <Share2 className="w-4 h-4" /> Share
      </span>
      
      <div className="flex gap-2">
        {/* Native Share / Copy */}
        <button 
          onClick={handleNativeShare}
          className="w-10 h-10 rounded-full bg-cream flex items-center justify-center text-forest hover:bg-forest hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-gold"
          aria-label="Copy link"
        >
          {copied ? <Check className="w-4 h-4" /> : <LinkIcon className="w-4 h-4" />}
        </button>

        {/* WhatsApp */}
        <a 
          href={`https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-cream flex items-center justify-center text-forest hover:bg-[#25D366] hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-gold"
          aria-label="Share on WhatsApp"
        >
          <MessageSquare className="w-4 h-4" />
        </a>

        {/* Facebook */}
        <a 
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-cream flex items-center justify-center text-forest hover:bg-[#1877F2] hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-gold"
          aria-label="Share on Facebook"
        >
          <Globe className="w-4 h-4" />
        </a>

        {/* Twitter / X */}
        <a 
          href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-cream flex items-center justify-center text-forest hover:bg-black hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-gold"
          aria-label="Share on X"
        >
          <AtSign className="w-4 h-4" />
        </a>

        {/* LinkedIn */}
        <a 
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-cream flex items-center justify-center text-forest hover:bg-[#0A66C2] hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-gold"
          aria-label="Share on LinkedIn"
        >
          <Briefcase className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
