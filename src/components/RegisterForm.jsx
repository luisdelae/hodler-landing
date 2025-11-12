import { useState } from 'react';
import { Box, TextField, Button, Typography, Alert, Paper } from '@mui/material';

function RegisterForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(null);
    const [registered, setRegistered] = useState(false);

    const handleRegister = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage(null);

        try {
            const response = await fetch(
                'https://5bnu3oi26m.execute-api.us-east-1.amazonaws.com/prod/auth/register',
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email, password, username }),
                }
            );

            const data = await response.json();

            if (response.ok) {
                setMessage({
                    type: 'success',
                    text: `${data.message} Welcome, ${data.username}!`,
                });
                setRegistered(true);
                setEmail('');
                setPassword('');
                setUsername('');
            } else {
                setMessage({ type: 'error', text: data.error });
            }
        } catch (err) {
            setMessage({ type: 'error', text: 'Network error. Please try again.' });
            console.error('Resgistration error: ', err);
        }

        setLoading(false);
    };

    if (registered) {
        return (
            <Box sx={{ p: 4, maxWidth: 500, mx: 'auto' }}>
                <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
                    <Typography variant="h`4" gutterBottom color="success.main">
                        Account Created!
                    </Typography>
                    <Alert severity="success" sx={{ mb: 3 }}>
                        {message.text}
                    </Alert>
                    <Button variant="outlined" onClick={() => setRegistered(false)}>
                        Create Another Account
                    </Button>
                </Paper>
            </Box>
        );
    }

    return (
        <Box sx={{ p: 4, maxWidth: 500, mx: 'auto' }}>
            <Paper elevation={3} sx={{ p: 4 }}>
                <Typography variant="h4" gutterBottom align="center">
                    Create Account
                </Typography>

                {message && (
                    <Alert severity={message.type} sx={{ mb: 3 }}>
                        {message.text}
                    </Alert>
                )}

                <Box component="form" onSubmit={handleRegister}>
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
                        label="Username (optional)"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        fullWidth
                        sx={{ mb: 2 }}
                        helperText="Leave blank to use email prefix"
                    />

                    <TextField
                        label="Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        fullWidth
                        sx={{ mb: 2 }}
                        helperText="Min 8 chars, uppercase, lowercase, number, special character"
                    />

                    <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        size="large"
                        disabled={loading}
                    >
                        {loading ? 'Creating Account...' : 'Register'}
                    </Button>
                </Box>
            </Paper>
        </Box>
    );
}

export default RegisterForm;
