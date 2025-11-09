import { Container, Typography, Grid, Card, CardContent, Avatar } from '@mui/material';

function HowItWorksSection() {
    const steps = [
        {
            step: 1,
            title: 'Download & Start',
            description: 'Get Hodler from Google Play and start with $10,000 virtual USD'
        },
        {
            step: 2,
            title: 'Practice Trading',
            description: 'Buy and sell crypto with real-time prices. Test strategies risk-free.'
        },
        {
            step: 3,
            title: 'Track Performance',
            description: 'Monitor your portfolio, analyze gains/losses, and learn from results.'
        },
        {
            step: 4,
            title: 'Compete & Learn',
            description: 'Climb leaderboards, unlock achievements, and master trading skills.'
        }
    ];

    return (
        <Container sx={{ py: 8 }}>
            <Typography variant='h3' align='center' gutterBottom>
                How It Works
            </Typography>
            <Grid container spacing={4} sx={{ mt:4 }}>
                {steps.map((item) => (
                    <Grid size={{ xs: 12, sm: 6, md: 6 }} key={item.step}>
                        <Card sx={{ textAlign: 'center', height: '100%' }}>
                            <CardContent>
                                <Avatar
                                    sx={{ 
                                        bgcolor: 'primary.main', 
                                        width: 56, 
                                        height: 56,
                                        margin: '0 auto 16px'
                                    }}
                                >
                                    {item.step}
                                </Avatar>
                                <Typography variant='h6' gutterBottom>
                                    {item.title}
                                </Typography>
                                <Typography variant='body2' color='text.secondary'>
                                    {item.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
                
            </Grid>
        </Container>
    );
}

export default HowItWorksSection;
