import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router, Routes, and Route
import Header from './Header';
import HeroSection from './HeroSection';
import FeaturedPosts from './FeaturedPosts';
import CategoriesSection from './CategoriesSection';
import AboutSection from './AboutSection';
import NewsletterSignup from './NewsletterSignup';
import TestimonialsSection from './TestimonialsSection';
import Footer from './Footer';
import PostDetail from './PostDetail'; // Import the PostDetail component

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Main Landing Page */}
        <Route path="/" element={
          <>
            <HeroSection />
            <FeaturedPosts />
            <CategoriesSection />
            <AboutSection />
            <NewsletterSignup />
            <TestimonialsSection />
            <Footer />
          </>
        } />
        
        {/* Detailed Page for Each Post */}
        <Route path="/post/:id" element={<PostDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
