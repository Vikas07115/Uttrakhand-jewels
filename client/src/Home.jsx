import React, { useRef } from 'react';
import HeroSection from './HeroSection';
import ProductShowcase from './ProductShowcase'; 
import './App.css';
import Offer from './Offer';
import About from './About';
import CustomerReviews from './CustomerReviews';
import ContactUs from './ContactUs';
import Footer from './Footer';

function Home({ aboutSectionRef }) {
  const productSectionRef = useRef(null); 

  const scrollToFeatured = () => {
    productSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <HeroSection scrollToFeatured={scrollToFeatured} />
      <div ref={productSectionRef}>
        <ProductShowcase />
      </div>
      <Offer productSectionRef={productSectionRef} /> 
      <div ref={aboutSectionRef}>
        <About />
        <CustomerReviews />
        <ContactUs />
        <Footer /> 
      </div>
    </>
  );
}

export default Home;
