import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4A90E2', // Primary color similar to the template
    },
    secondary: {
      main: '#000', // Secondary color (black)
    },
    background: {
      default: '#FFFFFF', // Background color
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '3rem',
    },
    h2: {
      fontWeight: 600,
      fontSize: '2rem',
    },
    body1: {
      fontSize: '1rem',
      color: '#333',
    },
  },
});

export default theme;
