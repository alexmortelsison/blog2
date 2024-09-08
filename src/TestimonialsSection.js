import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Define the dark theme
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography: {
    h2: {
      fontSize: '2rem',
      fontWeight: 'bold',
      color: '#fff',
      textAlign: 'center',
      marginBottom: '20px',
    },
    body1: {
      color: '#ddd',
      fontStyle: 'italic',
    },
    h4: {
      color: '#fff',
      marginTop: '10px',
    },
  },
});

const testimonials = [
  {
    quote: "This is the best tech blog I've ever read! The content is always fresh and insightful.",
    name: 'Alice Johnson',
  },
  {
    quote: 'Incredible reviews and up-to-date news. I always find what I need here.',
    name: 'Bob Smith',
  },
  {
    quote: 'A fantastic resource for tech enthusiasts. I highly recommend it to everyone.',
    name: 'Carol White',
  },
];

const TestimonialsSection = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{ padding: '40px 20px', backgroundColor: '#121212' }}>
        <Typography variant="h2">What Our Readers Say</Typography>
        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper sx={{ padding: '20px', backgroundColor: '#1e1e1e', height: '100%' }}>
                <Typography variant="body1" paragraph>
                  "{testimonial.quote}"
                </Typography>
                <Typography variant="h4">
                  - {testimonial.name}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default TestimonialsSection;
