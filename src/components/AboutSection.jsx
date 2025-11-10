import { Container, Typography, Grid, Box } from '@mui/material';

function AboutSection() {
    return (
        <Box sx={{ py: 8 }}>
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
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 12, sm: 6, md: 3 }} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Box component="img" src="/images/market.png" sx={{ maxWidth: '100%', height: 'auto', borderRadius: 2 }} />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 3 }} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Box component="img" src="/images/portfolio.png" sx={{ maxWidth: '100%', height: 'auto', borderRadius: 2 }} />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 3 }} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Box component="img" src="/images/add-holding.png" sx={{ maxWidth: '100%', height: 'auto', borderRadius: 2 }} />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 3 }} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Box component="img" src="/images/coin-detail.png" sx={{ maxWidth: '100%', height: 'auto', borderRadius: 2 }} />
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default AboutSection;
