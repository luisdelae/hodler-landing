import { Box, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import LoginForm from '../components/LoginForm';
import { clearMessages } from '../store/slices/authSlice';

function LoginPage() {
    const user = useSelector((state) => state.auth.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(clearMessages());

        if (user) {
            navigate('/dashboard');
        }
    }, [user, navigate, dispatch]);

    return (
        <Container maxWidth="md">
            <Box sx={{ py: 8 }}>
                {!user && (
                    <>
                        <Typography variant="h3" align="center" gutterBottom>
                            Welcome Back
                        </Typography>
                        <Typography
                            variant="body1"
                            align="center"
                            color="text.seconday"
                            sx={{ mb: 4 }}
                        >
                            Sign in to access your portfolio
                        </Typography>
                    </>
                )}

                <LoginForm />
            </Box>
        </Container>
    );
}

export default LoginPage;
