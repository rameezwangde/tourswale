import SEO from '../components/common/SEO';
import Hero from '../components/home/Hero';
import Destinations from '../components/home/Destinations';
import TourPackages from '../components/home/TourPackages';
import WhyChooseUs from '../components/home/WhyChooseUs';

export default function Home() {
  return (
    <>
      <SEO />
      <Hero />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Destinations />
        <TourPackages />
        <WhyChooseUs />
      </div>
    </>
  );
}
