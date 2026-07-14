import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Phone, Mail, MessageCircle, Clock, MapPin, ArrowRight } from 'lucide-react';

import Container from '../components/common/Container';
import SecondaryButton from '../components/common/SecondaryButton';
import GeneralEnquiryForm from '../components/forms/GeneralEnquiryForm';
import { siteConfig } from '../config/siteConfig';

export default function Contact() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Tourswale Travel Experts",
    "description": "Contact Tourswale for personalized domestic and international tour packages.",
    "url": `${siteConfig.siteUrl}/contact`,
    "mainEntity": {
      "@type": "TravelAgency",
      "name": siteConfig.siteName,
      "telephone": siteConfig.phone || undefined,
      "email": siteConfig.email || undefined
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": siteConfig.siteUrl },
      { "@type": "ListItem", "position": 2, "name": "Contact Us", "item": `${siteConfig.siteUrl}/contact` }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Contact Tourswale Travel Experts</title>
        <meta name="description" content="Contact Tourswale for personalized domestic and international tour packages, holiday planning, honeymoon trips, family vacations and travel enquiries." />
        <link rel="canonical" href={`${siteConfig.siteUrl}/contact`} />
        
        <meta property="og:title" content="Contact Tourswale Travel Experts" />
        <meta property="og:description" content="Contact Tourswale for personalized domestic and international tour packages, holiday planning, honeymoon trips, family vacations and travel enquiries." />
        <meta property="og:url" content={`${siteConfig.siteUrl}/contact`} />
        
        <script type="application/ld+json">{JSON.stringify(contactSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      {/* Hero Section */}
      <div className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-forest">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?q=80&w=1920&auto=format&fit=crop" 
            alt="Traveller planning a route on a map"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/80 to-transparent"></div>
        </div>

        <Container className="relative z-10">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-white/70">
              <li><Link to="/" className="hover:text-gold transition-colors">Home</Link></li>
              <li><span>/</span></li>
              <li><span className="text-white" aria-current="page">Contact Us</span></li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
              Contact Tourswale Travel Experts
            </h1>
            
            <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-10">
              Tell us where you would like to travel, when you plan to go and the type of holiday you have in mind. Our team will help you explore suitable options.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#enquiry-form" 
                className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-yellow-600 text-white px-8 py-4 rounded-xl text-sm font-bold transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-forest"
              >
                Start Your Enquiry
              </a>
              <Link 
                to="/tours" 
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-xl text-sm font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-forest"
              >
                Explore Tours
              </Link>
            </div>
          </div>
        </Container>
      </div>

      <section className="py-20 lg:py-24 bg-cream">
        <Container>
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Left Column: Contact Methods & FAQ */}
            <div className="lg:w-1/3 flex flex-col gap-8">
              
              <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                <h2 className="text-2xl font-serif font-bold text-forest mb-6">Get in Touch</h2>
                
                <div className="space-y-6">
                  {/* Phone */}
                  {siteConfig.phone && (
                    <a href={`tel:${siteConfig.phone}`} className="flex items-start gap-4 group">
                      <div className="w-12 h-12 bg-cream rounded-full flex items-center justify-center text-forest group-hover:bg-gold group-hover:text-white transition-colors shrink-0">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-charcoal mb-1">Phone</h3>
                        <p className="text-charcoal/70 text-sm">{siteConfig.phone}</p>
                      </div>
                    </a>
                  )}

                  {/* WhatsApp */}
                  {siteConfig.whatsapp && (
                    <a href={`https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                      <div className="w-12 h-12 bg-cream rounded-full flex items-center justify-center text-forest group-hover:bg-[#25D366] group-hover:text-white transition-colors shrink-0">
                        <MessageCircle className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-charcoal mb-1">WhatsApp</h3>
                        <p className="text-charcoal/70 text-sm">Message us directly</p>
                      </div>
                    </a>
                  )}

                  {/* Email */}
                  {siteConfig.email && (
                    <a href={`mailto:${siteConfig.email}`} className="flex items-start gap-4 group">
                      <div className="w-12 h-12 bg-cream rounded-full flex items-center justify-center text-forest group-hover:bg-forest group-hover:text-white transition-colors shrink-0">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-charcoal mb-1">Email</h3>
                        <p className="text-charcoal/70 text-sm">{siteConfig.email}</p>
                      </div>
                    </a>
                  )}

                  {/* Office Hours */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-cream rounded-full flex items-center justify-center text-forest shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-charcoal mb-1">Office Hours</h3>
                      <p className="text-charcoal/70 text-sm">{siteConfig.officeHours}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Preview Block */}
              <div className="bg-forest rounded-3xl p-8 text-white relative overflow-hidden shadow-lg">
                <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent pointer-events-none"></div>
                <div className="relative z-10">
                  <h3 className="text-xl font-serif font-bold mb-4">Quick Questions</h3>
                  
                  <div className="space-y-4 mb-8">
                    <div>
                      <h4 className="font-bold text-sm text-gold mb-1">How quickly will you respond?</h4>
                      <p className="text-white/70 text-sm">Response times depend on enquiry volume. We aim to contact you as soon as reasonably possible.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-gold mb-1">Can I request a custom itinerary?</h4>
                      <p className="text-white/70 text-sm">Yes. We can help adjust the trip duration, accommodation and activities based on availability.</p>
                    </div>
                  </div>
                  
                  <Link to="/faq" className="inline-flex items-center gap-2 text-sm font-bold hover:text-gold transition-colors">
                    View All FAQs <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

            </div>

            {/* Right Column: Enquiry Form */}
            <div className="lg:w-2/3" id="enquiry-form">
              <h2 className="text-3xl font-serif font-bold text-forest mb-8">Plan Your Journey</h2>
              <GeneralEnquiryForm />
            </div>

          </div>
        </Container>
      </section>

      {/* Google Map Placeholder */}
      <section className="py-20 bg-white border-t border-gray-100">
        <Container>
          <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
            <div className="md:w-1/3">
              <div className="w-16 h-16 bg-cream rounded-full flex items-center justify-center text-forest mb-6">
                <MapPin className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-serif font-bold text-forest mb-4">Our Office</h2>
              <p className="text-charcoal/70 mb-6">
                {siteConfig.address}
              </p>
            </div>
            
            <div className="md:w-2/3 w-full">
              {siteConfig.googleMapsEmbed ? (
                <div className="w-full h-80 rounded-3xl overflow-hidden shadow-sm" dangerouslySetInnerHTML={{ __html: siteConfig.googleMapsEmbed }} />
              ) : (
                <div className="w-full h-80 rounded-3xl bg-cream border-2 border-dashed border-gray-200 flex flex-col items-center justify-center text-center p-8">
                  <MapPin className="w-8 h-8 text-charcoal/20 mb-4" />
                  <p className="text-charcoal/50 font-semibold">Office location map will be updated before launch.</p>
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
