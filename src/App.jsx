import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import TourPackages from './components/TourPackages';
import Footer from './components/Footer';

function App() {
  return (
    <main className="w-full min-h-screen font-sans bg-cream overflow-x-hidden">
      <Navbar />
      <Hero />
      <Destinations />
      <TourPackages />
      <Footer />
    </main>
  );
}

export default App;
