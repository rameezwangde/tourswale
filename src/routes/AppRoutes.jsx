import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import Tours from '../pages/Tours';
import TourDetail from '../pages/TourDetail';
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
        <Route path="holiday-types" element={
          <PlaceholderPage 
            title="Holiday Types" 
            description="Find the perfect style of vacation for you, from honeymoons to adventure trips."
            seoTitle="Holiday Types | Tourswale"
            seoDescription="Explore various holiday types and themes for your next trip."
          />
        } />
        <Route path="holiday-types/:slug" element={
          <PlaceholderPage 
            title="Holiday Theme" 
            description="Tours and packages tailored for this specific holiday theme."
            seoTitle="Holiday Theme | Tourswale"
            seoDescription="Browse our curated packages for this holiday theme."
          />
        } />

        {/* Blog Routes */}
        <Route path="blog" element={
          <PlaceholderPage 
            title="Travel Blog" 
            description="Read the latest travel tips, guides, and inspiration from our experts."
            seoTitle="Travel Blog & Tips | Tourswale"
            seoDescription="Stay updated with our latest travel blogs, tips, and destination guides."
          />
        } />
        <Route path="blog/:slug" element={
          <PlaceholderPage 
            title="Blog Article" 
            description="In-depth travel article and insights."
            seoTitle="Blog Article | Tourswale"
            seoDescription="Read our latest insights and tips."
          />
        } />

        {/* Other Pages */}
        <Route path="about" element={
          <PlaceholderPage 
            title="About Us" 
            description="Learn more about Tourswale and our mission to create unforgettable travel experiences."
            seoTitle="About Us | Tourswale"
            seoDescription="Discover the story behind Tourswale, your trusted travel agency."
          />
        } />
        <Route path="contact" element={
          <PlaceholderPage 
            title="Contact Us" 
            description="Get in touch with our travel experts to plan your dream vacation."
            seoTitle="Contact Us | Tourswale"
            seoDescription="Reach out to Tourswale for bookings and inquiries."
          />
        } />
        
        {/* Legal & Misc */}
        <Route path="faq" element={<PlaceholderPage title="FAQs" description="Frequently asked questions." seoTitle="FAQs | Tourswale" seoDescription="Find answers to common travel queries." />} />
        <Route path="booking" element={<PlaceholderPage title="Booking" description="Complete your booking process." seoTitle="Booking | Tourswale" seoDescription="Book your perfect trip." />} />
        <Route path="search" element={<PlaceholderPage title="Search Results" description="Find exactly what you are looking for." seoTitle="Search | Tourswale" seoDescription="Search for tour packages." />} />
        <Route path="thank-you" element={<PlaceholderPage title="Thank You" description="Your request has been received." seoTitle="Thank You | Tourswale" seoDescription="Thank you for choosing Tourswale." />} />
        <Route path="privacy-policy" element={<PlaceholderPage title="Privacy Policy" description="Our privacy practices." seoTitle="Privacy Policy | Tourswale" seoDescription="Read our privacy policy." />} />
        <Route path="terms-and-conditions" element={<PlaceholderPage title="Terms & Conditions" description="Our terms of service." seoTitle="Terms & Conditions | Tourswale" seoDescription="Read our terms and conditions." />} />
        <Route path="cancellation-policy" element={<PlaceholderPage title="Cancellation Policy" description="Our cancellation and refund policies." seoTitle="Cancellation Policy | Tourswale" seoDescription="Read our cancellation policy." />} />
        <Route path="cookie-policy" element={<PlaceholderPage title="Cookie Policy" description="How we use cookies." seoTitle="Cookie Policy | Tourswale" seoDescription="Read our cookie policy." />} />
        <Route path="sitemap" element={<PlaceholderPage title="Sitemap" description="Navigate through our website." seoTitle="Sitemap | Tourswale" seoDescription="Website sitemap for Tourswale." />} />

        {/* 404 Route */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
