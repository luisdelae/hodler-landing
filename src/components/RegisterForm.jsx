import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginFailure, loginStart, loginSuccess } from '../store/slices/authSlice';
import { Box, TextField, Button, Typography, Alert, Paper } from '@mui/material';

function RegisterForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, error } = useSelector((state) => state.auth);

    const handleRegister = async (e) => {
        e.preventDefault();
        dispatch(loginStart());

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
                dispatch(
                    loginSuccess({
                        token: data.token,
                        userId: data.userId,
                        username: data.username,
                    })
                );
                setEmail('');
                setPassword('');
                setUsername('');
                navigate('/dashboard');
            } else {
                dispatch(loginFailure(data.error));
            }
        } catch (err) {
            dispatch(loginFailure('Network error. Please try again.'));
            console.error('Resgistration error: ', err);
        }
    };

    return (
        <Box sx={{ p: 4, maxWidth: 500, mx: 'auto' }}>
            <Paper elevation={3} sx={{ p: 4 }}>
                <Typography variant="h4" gutterBottom align="center">
                    Create Account
                </Typography>

                {error && (
                    <Alert severity={error} sx={{ mb: 3 }}>
                        {error}
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
