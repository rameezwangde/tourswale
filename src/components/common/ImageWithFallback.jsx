import { useState } from 'react';

export default function ImageWithFallback({ 
  src, 
  alt, 
  className = '', 
  loading = 'lazy',
  fallbackSrc = 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=800&auto=format&fit=crop',
  ...props 
}) {
  const [imgSrc, setImgSrc] = useState(src || fallbackSrc);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setImgSrc(fallbackSrc);
      setHasError(true);
    }
  };

  return (
    <img
      src={imgSrc}
      alt={alt}
      loading={loading}
      className={`object-cover ${className}`}
      onError={handleError}
      {...props}
    />
  );
}
