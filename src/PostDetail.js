// src/PostDetail.js

import React from 'react';
import { useParams } from 'react-router-dom'; // Import useParams to get route parameters
import { Box, Typography, Container } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import posts from './postsdata'; // Import the centralized posts data

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

const PostDetail = () => {
  const { id } = useParams(); // Get the post ID from the route parameters
  const post = posts.find((p) => p.id === parseInt(id)); // Find the post that matches the ID

  return (
    <ThemeProvider theme={darkTheme}>
      <Container sx={{ padding: '80px', backgroundColor: '#121212', minHeight: '100vh' }}>
        {post ? (
          <>
            <Typography variant="h2" gutterBottom>{post.title}</Typography>
            <Typography variant="body1" component="div" dangerouslySetInnerHTML={{ __html: post.content }} />
          </>
        ) : (
          <Typography variant="h4">Post not found.</Typography>
        )}
      </Container>
    </ThemeProvider>
  );
};

export default PostDetail;
