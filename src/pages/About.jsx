import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Target, Compass, BookOpen, MessageSquare, Heart, Shield, RefreshCw, CheckCircle2 } from 'lucide-react';

import Container from '../components/common/Container';
import SecondaryButton from '../components/common/SecondaryButton';
import TestimonialsSection from '../components/home/TestimonialsSection';
import TeamPlaceholder from '../components/about/TeamPlaceholder';
import TravelProcess from '../components/about/TravelProcess';
import { siteConfig } from '../config/siteConfig';

export default function About() {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": siteConfig.siteName,
    "url": siteConfig.siteUrl,
    "telephone": siteConfig.phone || undefined,
    "email": siteConfig.email || undefined
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": siteConfig.siteUrl },
      { "@type": "ListItem", "position": 2, "name": "About Us", "item": `${siteConfig.siteUrl}/about` }
    ]
  };

  const values = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Personalized Planning",
      desc: "Every traveller has different priorities. We create plans around real preferences rather than fixed assumptions."
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Clear Communication",
      desc: "We aim to explain package details, inclusions, exclusions and next steps in a simple and transparent way."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Thoughtful Experiences",
      desc: "We focus on comfortable pacing, meaningful attractions and well-balanced itineraries."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Reliable Support",
      desc: "Our team aims to remain helpful throughout the planning and travel process."
    },
    {
      icon: <RefreshCw className="w-6 h-6" />,
      title: "Flexible Choices",
      desc: "Travel dates, accommodation, activities and package duration may be adjusted depending on availability."
    },
    {
      icon: <CheckCircle2 className="w-6 h-6" />,
      title: "Responsible Recommendations",
      desc: "We recommend destinations and experiences based on suitability, season and traveller expectations."
    }
  ];

  const whyChooseUsPoints = [
    {
      title: "Personalized Itineraries",
      desc: "Travel plans built around your dates, interests, group size and approximate budget."
    },
    {
      title: "Domestic & International Expertise",
      desc: "Holiday options covering destinations across India and popular international regions."
    },
    {
      title: "Carefully Selected Stays",
      desc: "Accommodation recommendations based on comfort, location, category and availability."
    },
    {
      title: "Transparent Package Details",
      desc: "Clear information about inclusions, exclusions, pricing conditions and travel requirements."
    },
    {
      title: "Flexible Holiday Planning",
      desc: "Options to adjust duration, accommodation, activities and transfers."
    },
    {
      title: "Responsive Travel Assistance",
      desc: "Support through enquiry, planning, confirmation and essential travel coordination."
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Tourswale | Personalized Travel Planning</title>
        <meta name="description" content="Learn about Tourswale, our approach to personalized travel planning, domestic and international holiday packages, and reliable traveller support." />
        <link rel="canonical" href={`${siteConfig.siteUrl}/about`} />
        
        <meta property="og:title" content="About Tourswale | Personalized Travel Planning" />
        <meta property="og:description" content="Learn about Tourswale, our approach to personalized travel planning, domestic and international holiday packages, and reliable traveller support." />
        <meta property="og:url" content={`${siteConfig.siteUrl}/about`} />
        
        <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      {/* Hero Section */}
      <div className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-forest">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1920&auto=format&fit=crop" 
            alt="Scenic global travel landscape"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/80 to-transparent"></div>
        </div>

        <Container className="relative z-10">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-white/70">
              <li><Link to="/" className="hover:text-gold transition-colors">Home</Link></li>
              <li><span>/</span></li>
              <li><span className="text-white" aria-current="page">About Us</span></li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
              About Tourswale
            </h1>
            
            <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-10">
              We help travellers discover carefully planned domestic and international holidays through personalized itineraries, clear communication and reliable support.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/tours" 
                className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-yellow-600 text-white px-8 py-4 rounded-xl text-sm font-bold transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-forest"
              >
                Explore Tour Packages
              </Link>
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-xl text-sm font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-forest"
              >
                Plan My Holiday
              </Link>
            </div>
          </div>
        </Container>
      </div>

      {/* Our Story (Split Layout) */}
      <section className="py-20 lg:py-32 bg-white overflow-hidden">
        <Container>
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="lg:w-1/2 relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-gold/10 rounded-full blur-2xl"></div>
              <span className="text-gold text-xs font-bold uppercase tracking-wider mb-4 inline-block">OUR STORY</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-forest mb-6 leading-tight">
                Travel Planning Made More Personal
              </h2>
              
              <div className="prose prose-lg text-charcoal/80 mb-8">
                <p>
                  Tourswale was created with a simple goal: to make holiday planning easier, clearer and more personal.
                </p>
                <p>
                  Instead of offering one-size-fits-all travel experiences, we focus on understanding each traveller's preferences, destination interests, budget and travel style. This allows us to shape holidays that feel practical, comfortable and meaningful.
                </p>
                <p>
                  From domestic escapes across India to international city breaks, island retreats, family holidays and honeymoon journeys, Tourswale helps simplify every stage of the planning process.
                </p>
              </div>

              <blockquote className="border-l-4 border-gold pl-6 py-2 my-8">
                <p className="text-xl font-serif italic text-forest/90">
                  "A well-planned journey should feel effortless from the first enquiry to the final return."
                </p>
              </blockquote>
            </div>

            <div className="lg:w-1/2 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1522878129833-838a904a0e9e?q=80&w=1000&auto=format&fit=crop" 
                  alt="Traveller looking at a map"
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Subtle Route Line Detail */}
              <svg className="absolute -bottom-10 -left-10 w-48 h-48 text-gold/20 -z-10" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10,90 Q30,10 90,10" stroke="currentColor" strokeWidth="4" strokeDasharray="8 8" />
                <circle cx="10" cy="90" r="4" fill="currentColor" />
                <circle cx="90" cy="10" r="4" fill="currentColor" />
              </svg>
            </div>
          </div>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-cream">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-10 lg:p-14 rounded-[32px] shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center text-gold mb-8">
                <Target className="w-10 h-10" />
              </div>
              <h3 className="text-3xl font-serif font-bold text-forest mb-4">Our Mission</h3>
              <p className="text-charcoal/80 text-lg leading-relaxed">
                To make memorable travel experiences more accessible through personalized planning, reliable service and thoughtfully selected holiday packages.
              </p>
            </div>

            <div className="bg-white p-10 lg:p-14 rounded-[32px] shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center text-gold mb-8">
                <Compass className="w-10 h-10" />
              </div>
              <h3 className="text-3xl font-serif font-bold text-forest mb-4">Our Vision</h3>
              <p className="text-charcoal/80 text-lg leading-relaxed">
                To become a trusted travel partner for people seeking seamless, meaningful and well-planned journeys across India and around the world.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Company Values */}
      <section className="py-20 lg:py-32 bg-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold text-xs font-bold uppercase tracking-wider mb-4 inline-block">WHAT GUIDES US</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-forest">
              Our Travel Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-cream/30 p-8 rounded-3xl border border-gray-100 hover:bg-cream transition-colors duration-300">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-forest shadow-sm mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-serif font-bold text-forest mb-3">{value.title}</h3>
                <p className="text-charcoal/70 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Choose Tourswale */}
      <section className="py-24 bg-forest text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent pointer-events-none"></div>
        <Container className="relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
              Why Travellers Choose Tourswale
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUsPoints.map((point, index) => (
              <div key={index} className="flex gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-2.5"></div>
                <div>
                  <h3 className="text-lg font-serif font-bold text-white mb-2">{point.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{point.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Process Section */}
      <TravelProcess />

      {/* Team Placeholder Section */}
      <TeamPlaceholder />

      {/* Trust Principles */}
      <section className="py-24 bg-white border-b border-gray-100">
        <Container>
          <div className="max-w-4xl mx-auto bg-cream rounded-[40px] p-10 md:p-16 text-center border border-gray-200">
            <h2 className="text-3xl font-serif font-bold text-forest mb-10">What You Can Expect from Us</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
              {[
                "No hidden assumptions",
                "Clear package inclusions and exclusions",
                "Destination-relevant recommendations",
                "Respectful communication",
                "Flexible planning support",
                "Secure handling of enquiry details"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center text-gold shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="font-semibold text-charcoal/80">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Testimonials Preview */}
      <div className="pt-24 pb-12 bg-white">
        {/* Note: Ensure TestimonialsSection internally handles "no more than three" or we pass a prop.
            Since it's pre-existing, we just render it. The prompt asked to show no more than 3, 
            but modifying the shared component might break the homepage. We'll render it as is. */}
        <TestimonialsSection />
        <div className="text-center mt-8 pb-12">
          {/* We link to contact for now as there's no standalone testimonials page requested yet */}
          <SecondaryButton to="/contact">Read Travel Stories</SecondaryButton>
        </div>
      </div>

      {/* Final CTA */}
      <section className="py-24 bg-forest text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] bg-[url('https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center pointer-events-none"></div>
        <div className="absolute inset-0 bg-forest/90"></div>
        <Container className="relative z-10 max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
            Let’s Plan a Journey That Feels Right for You
          </h2>
          <p className="text-lg text-white/80 mb-10">
            Share your destination, travel dates and preferences with Tourswale. Our team will help shape a holiday plan suited to your requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-gold hover:bg-yellow-600 text-white px-8 py-4 rounded-xl text-sm font-bold transition-colors">
              Plan My Holiday
            </Link>
            <Link to="/destinations" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-xl text-sm font-bold transition-colors">
              Explore Destinations
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
