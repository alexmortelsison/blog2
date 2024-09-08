import React from 'react';
import { Button, Typography, Box, Container } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import backgroundImg from './assets/bg.jpg';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography: {
    h1: {
      fontSize: '3rem',
      fontWeight: 'bolder',
      textAlign: 'center',
      color: '#fff',
    },
    h2: {
      fontSize: '1.5rem',
      textAlign: 'center',
      color: '#ddd',
    },
  },
});

const HeroSection = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        sx={{
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative', // Make sure this container is positioned
          overflow: 'hidden', // Hide overflow
          backgroundImage: `url(${backgroundImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#fff',
          textAlign: 'center',
          padding: '0 20px',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the RGBA value to change the darkness level
            zIndex: 1,
          }}
        />
        <Container sx={{ position: 'relative', zIndex: 2 }}>
          <Typography variant="h1">Stay Ahead with the Latest in Tech</Typography>
          <Typography variant="h2">Insights, Reviews, and Trends from the World of Technology</Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 3 }}
            size="large"
          >
            Explore Categories
          </Button>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default HeroSection;
