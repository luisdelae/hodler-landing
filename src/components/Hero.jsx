import { Box, Button, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom'; // ← Add import

function Hero() {
    const handleLearnMore = () => {
        const featuresSection = document.getElementById('features');
        if (featuresSection) {
            featuresSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Box
            sx={{
                minHeight: '50vh',
                display: 'flex',
                alignItems: 'center',
                background: (theme) =>
                    theme.palette.mode === 'dark'
                        ? 'linear-gradient(135deg, #1e1e1e 0%, #2d2d2d 100%)'
                        : 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
            }}
        >
            <Container maxWidth="md">
                <Typography
                    variant="h2"
                    component="h1"
                    gutterBottom
                    align="center"
                    fontWeight="bold"
                >
                    Master Crypto Trading
                </Typography>
                <Typography variant="h5" component="p" align="center" sx={{ mb: 4 }}>
                    Practice trading cryptocurrency without risking real money. Build your skills,
                    compete on leaderboards, and become a confident trader.
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
                    <Button
                        variant="contained"
                        size="large"
                        component={Link}
                        to="/register"
                        sx={{
                            bgcolor: 'white',
                            color: '#667eea',
                            '&:hover': { bgcolor: '#f0f0f0' },
                        }}
                    >
                        Get Started
                    </Button>
                    <Button
                        variant="outlined"
                        size="large"
                        onClick={handleLearnMore}
                        sx={{
                            color: 'white',
                            borderColor: 'white',
                            '&:hover': { borderColor: '#f0f0f0', bgcolor: 'rgba(255,255,255,0.1)' },
                        }}
                    >
                        Learn More
                    </Button>
                </Box>
            </Container>
        </Box>
    );
}

export default Hero;
