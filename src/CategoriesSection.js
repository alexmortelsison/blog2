import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Import images
import techNewsImage from './assets/1.jpg';
import gadgetReviewsImage from './assets/3.jpg';
import programmingTipsImage from './assets/4.jpg';
import softwareUpdateImage from './assets/5.jpg';

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
    h4: {
      fontSize: '1.25rem',
      color: '#fff',
    },
  },
});

const categories = [
  {
    title: 'Tech News',
    image: techNewsImage,
  },
  {
    title: 'Gadget Reviews',
    image: gadgetReviewsImage,
  },
  {
    title: 'Programming Tips',
    image: programmingTipsImage, // Use different images as needed
  },
  {
    title: 'Software Updates',
    image: softwareUpdateImage, // Use different images as needed
  },
];

const CategoriesSection = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{ padding: '20px', backgroundColor: '#121212' }}>
        <Typography variant="h2">Explore Our Categories</Typography>
        <Grid container spacing={4}>
          {categories.map((category, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: '#1e1e1e' }}>
                <CardMedia
                  component="img"
                  image={category.image}
                  alt={category.title}
                  sx={{ height: 140 }}
                />
                <CardContent>
                  <Typography variant="h4">{category.title}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default CategoriesSection;
