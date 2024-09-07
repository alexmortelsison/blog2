import React from 'react';
import { Container, Typography } from '@mui/material';

const Footer = () => {
  return (
    <footer style={{ marginTop: 'auto', padding: '20px 0', backgroundColor: 'black' }}>
      <Container>
        <Typography variant="body2" color="white" align="center">
          © {new Date().getFullYear()} Noter Blog. All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
