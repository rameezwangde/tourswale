import { Loader2 } from 'lucide-react';

export default function Loader({ fullScreen = true, text = "Curating your journey..." }) {
  return (
    <div className={`flex flex-col items-center justify-center bg-cream ${fullScreen ? 'min-h-screen' : 'h-64'}`}>
      <div className="relative flex items-center justify-center mb-4">
        {/* Outer spinning ring */}
        <div className="absolute inset-0 rounded-full border-t-2 border-forest w-12 h-12 animate-spin"></div>
        {/* Inner static icon */}
        <Loader2 className="w-6 h-6 text-gold animate-pulse" />
      </div>
      {text && (
        <p className="text-forest/70 font-serif italic text-sm tracking-wide">
          {text}
        </p>
      )}
    </div>
  );
}
