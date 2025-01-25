import React from 'react'
import Navbar from './components/Navbar.jsx'
import HeroSection from './components/HeroSection.jsx';
import FeatureSection from './components/FeatureSection.jsx';
import Workflow from './components/Workflow.jsx';
import Pricing from './components/Pricing.jsx';
import Testimonials from './components/Testimonials.jsx';
import Footer from './components/Footer.jsx';

const App = () => {
  return (
    <>
      <Navbar/>
      <div className="px-6 pt-20 mx-auto antialiased max-w-7xl">
        <HeroSection/>
        <FeatureSection/>
        <Workflow/>
        <Pricing/>
        <Testimonials/>
        <Footer/>
      </div>

    </>
  );
};

export default App;