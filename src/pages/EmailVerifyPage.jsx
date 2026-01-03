import { useEffect, useState, useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Box, Container, Typography, CircularProgress, Alert, Button, Paper } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import config from '../config';

function EmailVerifyPage() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const hasVerified = useRef(false);

    const [status, setStatus] = useState('verifying'); // 'verifying' | 'success' | 'error'
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        if (hasVerified.current) {
            console.log('Verification already in progress, skipping duplicate');
            return;
        }

        const verifyEmail = async () => {
            const token = searchParams.get('token');

            if (!token) {
                console.log('No verification token, redirecting to register');
                navigate('/register');
                return;
            }

            if (!token) {
                setStatus('error');
                setErrorMessage('No verification token provided');
                return;
            }

            hasVerified.current = true;

            try {
                const response = await fetch(`${config.apiBaseUrl}/verify?token=${token}`);
                const data = await response.json();

                if (response.ok) {
                    setStatus('success');
                    // Auto-redirect to login after 3 seconds
                    setTimeout(() => {
                        navigate('/login');
                    }, 3000);
                } else {
                    setStatus('error');
                    setErrorMessage(data.error || 'Verification failed');
                }
            } catch (error) {
                console.error('Verification error:', error);
                setStatus('error');
                setErrorMessage('Network error. Please try again.');
            }
        };

        verifyEmail();
    }, [searchParams, navigate]);

    return (
        <Container maxWidth="sm">
            <Box sx={{ py: 8 }}>
                <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
                    {status === 'verifying' && (
                        <>
                            <CircularProgress size={60} sx={{ mb: 3 }} />
                            <Typography variant="h5" gutterBottom>
                                Verifying your email...
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Please wait a moment
                            </Typography>
                        </>
                    )}

                    {status === 'success' && (
                        <>
                            <CheckCircleIcon sx={{ fontSize: 80, color: 'success.main', mb: 2 }} />
                            <Typography variant="h4" gutterBottom color="success.main">
                                Email Verified!
                            </Typography>
                            <Typography variant="body1" color="text.secondary" component="p">
                                Your account has been successfully verified.
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Redirecting to login page...
                            </Typography>
                        </>
                    )}

                    {status === 'error' && (
                        <>
                            <ErrorIcon sx={{ fontSize: 80, color: 'error.main', mb: 2 }} />
                            <Typography variant="h5" gutterBottom color="error.main">
                                Verification Failed
                            </Typography>
                            <Alert severity="error" sx={{ mb: 3, textAlign: 'left' }}>
                                {errorMessage}
                            </Alert>
                            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
                                <Button variant="contained" onClick={() => navigate('/register')}>
                                    Register Again
                                </Button>
                                <Button variant="outlined" onClick={() => navigate('/')}>
                                    Go Home
                                </Button>
                            </Box>
                        </>
                    )}
                </Paper>
            </Box>
        </Container>
    );
}

export default EmailVerifyPage;
