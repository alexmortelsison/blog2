import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { createTheme, ThemeProvider } from '@mui/material/styles';

import reacthooksImg from './assets/react_hooks.jpg';
import aiImg from './assets/ai.jpg';
import programmingLangImg from './assets/pl.jpg';


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
    },
  },
});

const featuredPosts = [
  {
    id: 1,
    title: 'Understanding React Hooks',
    image: reacthooksImg,
    excerpt: 'Learn the basics of React Hooks and how to use them effectively in your projects.',
  },
  {
    id: 2,
    title: 'JavaScript Performance Tips',
    image: aiImg,
    excerpt: 'Improve the performance of your JavaScript code with these essential tips.',
  },
  {
    id: 3,
    title: 'Top 10 Programming Languages to Learn',
    excerpt: 'A comprehensive list of the most in-demand programming languages and why you should consider learning them...',
    image: programmingLangImg,
  },
];

const FeaturedPosts = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{ padding: '20px', backgroundColor: '#121212' }}>
        <Typography variant="h2">Featured Posts</Typography>
        <Grid container spacing={4}>
          {featuredPosts.map((post) => (
            <Grid item xs={12} sm={6} md={4} key={post.id}>
              <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: '#1e1e1e' }}>
                <CardMedia
                  component="img"
                  image={post.image}
                  alt={post.title}
                  sx={{ height: 140 }}
                />
                <CardContent>
                  <Typography variant="h4" gutterBottom>{post.title}</Typography>
                  <Typography variant="body1" sx={{ mb: 2 }}>{post.excerpt}</Typography>
                  <Button component={Link} to={`/post/${post.id}`} variant="contained" color="primary">
                    Read More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default FeaturedPosts;
