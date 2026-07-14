import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import Tours from '../pages/Tours';
import TourDetail from '../pages/TourDetail';
import HolidayTypes from '../pages/HolidayTypes';
import HolidayTypeDetail from '../pages/HolidayTypeDetail';
import BlogListing from '../pages/BlogListing';
import BlogDetail from '../pages/BlogDetail';
import About from '../pages/About';
import Contact from '../pages/Contact';
import FAQ from '../pages/FAQ';
import ThankYou from '../pages/ThankYou';
import PrivacyPolicy from '../pages/legal/PrivacyPolicy';
import TermsAndConditions from '../pages/legal/TermsAndConditions';
import CancellationPolicy from '../pages/legal/CancellationPolicy';
import CookiePolicy from '../pages/legal/CookiePolicy';
import NotFound from '../pages/NotFound';
import PlaceholderPage from '../pages/PlaceholderPage';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {/* Home Route */}
        <Route index element={<Home />} />

        {/* Tours Routes */}
        <Route path="tours" element={<Tours />} />
        <Route path="tours/:slug" element={<TourDetail />} />

        {/* Destinations Routes */}
        <Route path="destinations" element={
          <PlaceholderPage 
            title="Destinations" 
            description="Browse beautiful destinations around the world."
            seoTitle="Destinations | Tourswale"
            seoDescription="Explore stunning domestic and international destinations with Tourswale."
          />
        } />
        <Route path="destinations/:slug" element={
          <PlaceholderPage 
            title="Destination Details" 
            description="Learn more about this breathtaking destination."
            seoTitle="Destination Guide | Tourswale"
            seoDescription="Discover top attractions and tours in this beautiful destination."
          />
        } />

        {/* Holiday Types Routes */}
        <Route path="holiday-types" element={<HolidayTypes />} />
        <Route path="holiday-types/:slug" element={<HolidayTypeDetail />} />

        {/* Blog Routes */}
        <Route path="blog" element={<BlogListing />} />
        <Route path="blog/:slug" element={<BlogDetail />} />

        {/* Other Pages */}
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        
        {/* Legal & Misc */}
        <Route path="faq" element={<FAQ />} />
        <Route path="thank-you" element={<ThankYou />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="cancellation-policy" element={<CancellationPolicy />} />
        <Route path="cookie-policy" element={<CookiePolicy />} />
        
        {/* Unimplemented placeholders */}
        <Route path="booking" element={<PlaceholderPage title="Booking" description="Complete your booking process." seoTitle="Booking | Tourswale" seoDescription="Book your perfect trip." />} />
        <Route path="search" element={<PlaceholderPage title="Search Results" description="Find exactly what you are looking for." seoTitle="Search | Tourswale" seoDescription="Search for tour packages." />} />
        <Route path="sitemap" element={<PlaceholderPage title="Sitemap" description="Navigate through our website." seoTitle="Sitemap | Tourswale" seoDescription="Website sitemap for Tourswale." />} />

        {/* 404 Route */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
