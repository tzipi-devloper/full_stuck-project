import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import './index.css';
import App from './App.tsx';


const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', 
    },
    secondary: {
      main: '#9c27b0', 
    },
    error: {
      main: '#d32f2f', 
    },
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MuiThemeProvider theme={theme}>
      <StyledThemeProvider theme={theme}>
        <App />
      </StyledThemeProvider>
    </MuiThemeProvider>
  </StrictMode>
);
