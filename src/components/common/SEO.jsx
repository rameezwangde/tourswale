import { Helmet } from 'react-helmet-async';

export default function SEO({ 
  title = "Tourswale | Domestic and International Holiday Packages", 
  description = "Explore thoughtfully planned domestic and international tour packages, customized holidays, family vacations, honeymoon packages and premium travel experiences with Tourswale.", 
  canonical = "", 
  keywords = "tour packages, holiday packages, travel agency in India, domestic tour packages, international tour packages",
  ogImage = "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1200&auto=format&fit=crop"
}) {
  const siteUrl = "https://tourswale.com"; // Placeholder production domain
  const currentUrl = canonical ? `${siteUrl}${canonical}` : siteUrl;

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Tourswale",
    "description": description,
    "url": siteUrl,
    "logo": `${siteUrl}/logo.png`,
    "image": ogImage
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Canonical Link */}
      <link rel="canonical" href={currentUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={currentUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
}
