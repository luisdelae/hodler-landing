import AboutSection from './components/AboutSection';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import FeaturesSection from './components/FeaturesSection';
import HowItWorksSection from './components/HowItWorksSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { useState, useEffect  } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved === 'true';
  });

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      ...(darkMode ? {
        primary: {
          main: '#58a6ff',
        },
        background: {
          default: '#0d1117',
          paper: '#161b22',
        },
        text: {
          primary: '#c9d1d9',
          secondary: '#8b949e',
        },
      } : {
        primary: {
          main: '#1976d2',
        },
        background: {
          default: '#ffffff',
          paper: '#f8f9fa',
        },
      }),
    },
  });


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <FeaturesSection />
      <AboutSection />
      <HowItWorksSection />
      <CTASection />
      <Footer />
    </ThemeProvider>
  )
}

export default App;
