import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Container } from '@mui/material';
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
      textAlign: 'center',
    },
  },
});

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    // Simulate a submission process
    setTimeout(() => {
      setIsSubmitting(false);
      setEmail('');
      alert('Thank you for subscribing!');
    }, 1000);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{ padding: '40px 20px', backgroundColor: '#121212' }}>
        <Container>
          <Typography variant="h2">Stay Updated!</Typography>
          <Typography variant="body1" paragraph>
            Get the latest tech news delivered straight to your inbox. Subscribe to our newsletter and never miss an update!
          </Typography>
          <form onSubmit={handleSubmit} noValidate>
            <TextField
              variant="outlined"
              fullWidth
              label="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{ mb: 2 }}
              required
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={isSubmitting}
              fullWidth
            >
              {isSubmitting ? 'Subscribing...' : 'Subscribe Now'}
            </Button>
          </form>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default NewsletterSignup;
