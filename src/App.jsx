import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import AppContent from './components/AppContent';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import ProtectedRoute from './components/ProtectedRoute';
import NotFoundPage from './pages/NotFoundPage';
import EmailVerifyPage from './pages/EmailVerifyPage';

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
                <Router>
                    <AppContent />
                    <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/register" element={<RegisterPage />} />
                        <Route path="/verify" element={<EmailVerifyPage />} />
                        <Route
                            path="/dashboard"
                            element={
                                <ProtectedRoute>
                                    <DashboardPage />
                                </ProtectedRoute>
                            }
                        />
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                    <Footer />
                </Router>
            </ThemeProvider>
        </Provider>
    );
}

export default App;
