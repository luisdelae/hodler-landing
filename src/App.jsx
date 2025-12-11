import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import AppContent from './components/AppContent';

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
            ...(darkMode
                ? {
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
                  }
                : {
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
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <AppContent darkMode={darkMode} setDarkMode={setDarkMode} />
            </ThemeProvider>
        </Provider>
    );
}

export default App;
