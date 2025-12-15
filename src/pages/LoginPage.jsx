import { Box, Container, Typography } from '@mui/material';
import LoginForm from '../components/LoginForm';
import { useSelector } from 'react-redux';

function LoginPage() {
    const user = useSelector((state) => state.auth.user);
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
