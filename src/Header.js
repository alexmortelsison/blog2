import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Define the dark theme
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography: {
    h6: {
      fontSize: '1.25rem',
      fontWeight: 'bold',
      color: '#fff',
    },
  },
});

const Header = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar sx={{ mb: 4 }}>
        <Toolbar  sx={{ flexDirection: { xs: 'column', sm: 'row' }, justifyContent:'space-between'}}>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Tech Blogs
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button href="#hero" color="inherit">Home</Button>
            <Button href="#about" color="inherit">About</Button>
            <Button href="#categories" color="inherit">Blog Categories</Button>
            <Button href="#contact" color="inherit">Contact</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
