import React from 'react';
import { Box, Typography, Link, Container, Grid, IconButton } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

// Define the dark theme
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography: {
    body2: {
      color: '#ddd',
      fontFamily: "Roboto"
    },
  },
});

const Footer = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{ backgroundColor: '#121212', padding: '40px 20px' }}>
        <Container>
          <Grid container spacing={4}>
            {/* Footer Links */}
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" color="white" gutterBottom>
                Quick Links
              </Typography >
              <Link href="#" color="white" underline="none">
                Home
              </Link>
              <br />
              <Link href="#" color="white" underline="none">
                About
              </Link>
              <br />
              <Link href="#" color="white" underline="none">
                Blog Categories
              </Link>
              <br />
              <Link href="#" color="white" underline="none">
                Contact
              </Link>
            </Grid>

            {/* Social Media Links */}
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" color="white" gutterBottom>
                Follow Us
              </Typography>
              <Box>
                <IconButton color="white" aria-label="facebook">
                  <FacebookIcon />
                </IconButton>
                <IconButton color="white" aria-label="twitter">
                  <TwitterIcon />
                </IconButton>
                <IconButton color="white" aria-label="instagram">
                  <InstagramIcon />
                </IconButton>
              </Box>
            </Grid>

            {/* Contact Information */}
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" color="white" gutterBottom>
                Contact
              </Typography>
              <Typography variant="body2">
                Email: contact@techblogs.com
              </Typography>
              <Typography variant="body2">
                Phone: +1 (555) 123-4567
              </Typography>
            </Grid>
          </Grid>

          {/* Copyright Notice */}
          <Box sx={{ marginTop: '40px', textAlign: 'center' }}>
            <Typography variant="body2" color="textSecondary">
              &copy; {new Date().getFullYear()} Tech Blogs. All rights reserved.
            </Typography>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Footer;
