// src/pages/About.js
import React from 'react';
import { Container, Typography } from '@mui/material';

const About = () => {
  return (
    <Container style={{ marginTop: '20px' }}>
      <Typography variant="h1" align="center" gutterBottom>
        About Us
      </Typography>
      <Typography variant="body1" textAlign="center" padding={10}>
      Our mission is to make a positive impact through our work. We believe in innovation, integrity, and collaboration as the cornerstones of our approach. Thank you for visiting, and we hope you find what you're looking for!
      </Typography>
    </Container>
  );
};

export default About;
