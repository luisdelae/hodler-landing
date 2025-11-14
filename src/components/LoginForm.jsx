import { useState } from 'react';
import { Box, TextField, Button, Typography, Alert, Paper } from '@mui/material';
import { useAuth } from '../context/AuthContext';

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(null);

    const { user, login, logout } = useAuth();

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage(null);

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
                login(data.token, data.userId, data.username);
                setMessage({ type: 'success', text: data.message });
                setEmail('');
                setPassword('');
            } else {
                setMessage({ type: 'error', text: data.error });
            }
        } catch (err) {
            setMessage({ type: 'error', text: 'Network error. Please try again.' });
            console.error('Login error:', err);
        }

        setLoading(false);
    };

    const handleLogout = () => {
        logout();
        setMessage({ tyoe: 'success', text: 'Logged out successfully' });
    };

    if (user) {
        return (
            <Box sx={{ p: 4, maxWidth: 500, mx: 'auto' }}>
                <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
                    <Typography variant="h4" gutterBottom color="success.main">
                        Welcome, {user.username}!
                    </Typography>
                    <Button variant="outlined" color="error" onClick={handleLogout}>
                        Logout
                    </Button>
                </Paper>
            </Box>
        );
    }

    return (
        <Box sx={{ p: 4, maxWidth: 500, mx: 'auto' }}>
            <Paper elevation={3} sx={{ p: 4 }}>
                <Typography variant="h4" gutterBottom align="center">
                    Login
                </Typography>

                {message && (
                    <Alert severity={message.type} sx={{ mb: 3 }}>
                        {message.text}
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
                </Box>
            </Paper>
        </Box>
    );
}

export default LoginForm;
