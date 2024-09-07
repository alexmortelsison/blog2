// src/components/Header.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar sx={{ backgroundColor: 'black', padding: 0, margin: 0, width: '100%' }}>
      <Container disableGutters sx={{ padding: 0, width: '100%' }}>
        <Toolbar sx={{ padding: 0, margin: 0 }}>
          <Typography variant="h6" sx={{ flexGrow: 1, color: 'white' }}>
            Noter Blog
          </Typography>
          <Button component={Link} to="/" color="inherit">Home</Button>
          <Button component={Link} to="/about" color="inherit">About</Button>
          <Button component={Link} to="/contact" color="inherit">Contact</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
