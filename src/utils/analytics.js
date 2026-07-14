export const analyticsConfig = {
  gaMeasurementId: import.meta.env.VITE_GA_MEASUREMENT_ID || '',
  metaPixelId: import.meta.env.VITE_META_PIXEL_ID || '',
};

// Initialize Analytics (called once in App.jsx or MainLayout)
export const initAnalytics = () => {
  if (analyticsConfig.gaMeasurementId) {
    // Basic init logic for GA4
    console.log('[Analytics] GA4 Initialized');
  }
  if (analyticsConfig.metaPixelId) {
    // Basic init logic for Meta Pixel
    console.log('[Analytics] Meta Pixel Initialized');
  }
};

// Track Page View
export const trackPageView = (url) => {
  if (analyticsConfig.gaMeasurementId && typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', analyticsConfig.gaMeasurementId, { page_path: url });
  }
  if (analyticsConfig.metaPixelId && typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'PageView');
  }
};

// Track Custom Event
export const trackEvent = (eventName, eventData = {}) => {
  if (analyticsConfig.gaMeasurementId && typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventData);
  }
  if (analyticsConfig.metaPixelId && typeof window !== 'undefined' && window.fbq) {
    window.fbq('trackCustom', eventName, eventData);
  }
};

// Track Lead (e.g. Enquiry Submit)
export const trackLead = (leadData = {}) => {
  if (analyticsConfig.gaMeasurementId && typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'generate_lead', leadData);
  }
  if (analyticsConfig.metaPixelId && typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Lead', leadData);
  }
};
