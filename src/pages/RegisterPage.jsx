import { Box, Container, Typography } from '@mui/material';
import RegisterForm from '../components/RegisterForm';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearMessages } from '../store/slices/authSlice';

function RegisterPage() {
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
                <Typography variant="h3" align="center" gutterBottom>
                    Join Hodler
                </Typography>
                <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 4 }}>
                    Start your crypto learning journey today
                </Typography>
                <RegisterForm />
            </Box>
        </Container>
    );
}

export default RegisterPage;
