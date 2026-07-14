import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Loader from '../components/common/Loader';

// Lazy-loaded routes
const Home = lazy(() => import('../pages/Home'));
const Tours = lazy(() => import('../pages/Tours'));
const TourDetail = lazy(() => import('../pages/TourDetail'));
const Destinations = lazy(() => import('../pages/Destinations')); // HMR trigger
const DestinationDetail = lazy(() => import('../pages/DestinationDetail'));
const HolidayTypes = lazy(() => import('../pages/HolidayTypes'));
const HolidayTypeDetail = lazy(() => import('../pages/HolidayTypeDetail'));
const BlogListing = lazy(() => import('../pages/BlogListing'));
const BlogDetail = lazy(() => import('../pages/BlogDetail'));
const About = lazy(() => import('../pages/About'));
const Contact = lazy(() => import('../pages/Contact'));
const FAQ = lazy(() => import('../pages/FAQ'));
const ThankYou = lazy(() => import('../pages/ThankYou'));
const PrivacyPolicy = lazy(() => import('../pages/legal/PrivacyPolicy'));
const TermsAndConditions = lazy(() => import('../pages/legal/TermsAndConditions'));
const CancellationPolicy = lazy(() => import('../pages/legal/CancellationPolicy'));
const CookiePolicy = lazy(() => import('../pages/legal/CookiePolicy'));
const NotFound = lazy(() => import('../pages/NotFound'));
const PlaceholderPage = lazy(() => import('../pages/PlaceholderPage'));

export default function AppRoutes() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* Home Route */}
          <Route index element={<Home />} />

          {/* Tours Routes */}
          <Route path="tours" element={<Tours />} />
          <Route path="tours/:slug" element={<TourDetail />} />

          {/* Destinations Routes */}
          <Route path="destinations" element={<Destinations />} />
          <Route path="destinations/:slug" element={<DestinationDetail />} />

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
    </Suspense>
  );
}
