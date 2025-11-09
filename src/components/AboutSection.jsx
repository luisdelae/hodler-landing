import { Container, Typography, Grid, Box } from '@mui/material';

function AboutSection() {
    return (
        <Box sx={{ bgcolor: 'grey.50', py: 8 }}>
            <Container id='about' maxWidth="lg">
                <Grid cointainer spacing={6} alignContent="center">
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Typography variant='h3' gutterBottom>
                            Learn Trading Without the Risk
                        </Typography>
                        <Typography variant='body1' component='p' gutterBottom>
                            Hodler is a crypto trading simulator designed for beginners and experienced 
                            traders alike. Start with $10,000 in virtual money and practice trading 
                            strategies with real-time cryptocurrency prices.
                        </Typography>
                        <Typography variant='body1' component='p' gutterBottom>
                            Whether you're curious about crypto or want to test strategies before 
                            investing real money, Hodler provides a risk-free environment to learn 
                            market dynamics, track performance, and compete with others.
                        </Typography>
                        <Typography variant='body1' gutterBottom>
                            <strong>Perfect for:</strong> Students, crypto beginners, active traders 
                            practicing new strategies, and anyone wanting to understand market behavior.
                        </Typography>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        { /* Screenshots here. Probably do three? */ }
                        <Box
                            sx={{
                                height: 400,
                                bgcolor: 'primary.light',
                                borderRadius: 2,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <Typography variant='h6' color='white'>
                                SS placeholder text here.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default AboutSection;
