import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { loginStart, loginSuccess, loginFailure } from '../store/slices/authSlice';
import { Box, TextField, Button, Typography, Alert, Paper } from '@mui/material';

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user, loading, error, success } = useSelector((state) => state.auth);

    const handleLogin = async (e) => {
        e.preventDefault();
        dispatch(loginStart());

        try {
            const response = await fetch(
                'https://5bnu3oi26m.execute-api.us-east-1.amazonaws.com/prod/auth/login',
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email, password }),
                }
            );

            const data = await response.json();

            if (response.ok) {
                dispatch(
                    loginSuccess({
                        token: data.token,
                        userId: data.userId,
                        username: data.username,
                    })
                );
                setEmail('');
                setPassword('');
                navigate('/dashboard');
            } else {
                dispatch(loginFailure(data.error));
            }
        } catch (err) {
            dispatch(loginFailure('Network error. Please try again.'));
            console.error('Login error:', err);
        }
    };

    return (
        <Box sx={{ p: 4, maxWidth: 500, mx: 'auto' }}>
            <Paper elevation={3} sx={{ p: 4 }}>
                <Typography variant="h4" gutterBottom align="center">
                    Login
                </Typography>

                {error && (
                    <Alert severity={'error'} sx={{ mb: 3 }}>
                        {error}
                    </Alert>
                )}

                {!user && success && (
                    <Alert severity={'success'} sx={{ mb: 3 }}>
                        {success}
                    </Alert>
                )}

                <Box component="form" onSubmit={handleLogin}>
                    <TextField
                        label="Email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        fullWidth
                        sx={{ mb: 2 }}
                    />

                    <TextField
                        label="Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        fullWidth
                        sx={{ mb: 2 }}
                    />

                    <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        size="large"
                        disabled={loading}
                    >
                        {loading ? 'Logging in...' : 'Login'}
                    </Button>

                    <Box sx={{ mt: 2, textAlign: 'center' }}>
                        <Typography variant="body2" color="text.secondary">
                            Don't have an account?{' '}
                        </Typography>
                        <Typography
                            component={Link}
                            to="/register"
                            variant="body2"
                            sx={{
                                color: 'primary.main',
                                textDecoration: 'none',
                                fontWeight: 'bold',
                            }}
                        >
                            Sign up
                        </Typography>
                    </Box>
                </Box>
            </Paper>
        </Box>
    );
}

export default LoginForm;
