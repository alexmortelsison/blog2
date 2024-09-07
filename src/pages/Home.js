import React from 'react';
import { Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel'; // Import Carousel component

// Import images
import reactImage from '../assets/1.jpg'; // Adjust path if needed
import closuresImage from '../assets/2.jpg'; // Adjust path if needed

const Home = () => {
  const blogPosts = [
    {
      title: 'How to Build a React App',
      description: 'Learn the basics of building a React application.',
      image: reactImage,
    },
    {
      title: 'Understanding JavaScript Closures',
      description: 'A deep dive into closures in JavaScript.',
      image: closuresImage,
    },
  ];

  return (
    <>
      <Container style={{ marginTop: '80px' }}>
        <Typography variant="h1" align="center" gutterBottom>
          Welcome to Noter Blog
        </Typography>
        <Carousel blogPosts={blogPosts} /> {/* Add Carousel here */}
      </Container>
    </>
  );
};

export default Home;
