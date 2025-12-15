import { Box, Button, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function NotFoundPage() {
    return (
        <Container maxWidth="md">
            <Box sx={{ py: 12, textAlign: 'center' }}>
                <Typography variant="h1" gutterBottom>
                    404
                </Typography>
                <Typography variant="h4" gutterBottom>
                    Page Not Found!
                </Typography>
                <Typography variant="body1" color="text.secondary" component="p" gutterBottom>
                    The page you're looking for doesn't exist.
                </Typography>
                <Button variant="contained" component={Link} to="/" size="large">
                    Go Home
                </Button>
            </Box>
        </Container>
    );
}

export default NotFoundPage;
