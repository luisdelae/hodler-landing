import { Box, Container, Typography } from '@mui/material';
import RegisterForm from '../components/RegisterForm';

function RegisterPage() {
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
