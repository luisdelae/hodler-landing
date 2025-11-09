import { Container, Grid, Card, CardContent, Typography, Box } from '@mui/material';
import { AccountBalance, TrendingUp, EmojiEvents, School, BarChart, Security } from '@mui/icons-material';

function FeaturesSection() {
    const features = [
        {
            icon: <AccountBalance fontSize='large' />,
            title: 'Virtual Trading',
            description: 'Start with $10,000 virtual money. Learn without financial risk.'
        },
        {
            icon: <TrendingUp fontSize='large' />,
            title: 'Real-Time Prices',
            description: 'Trade with live cryptocurrency prices from CoinGecko API.'
        },
        {
            icon: <EmojiEvents fontSize='large' />,
            title: 'Global Leaderboards',
            description: 'Compete with traders worldwide and climb the rankings.'
        },
        {
            icon: <School fontSize='large' />,
            title: 'Learn Trading',
            description: 'Educational tools to understand market dynamics and strategies.'
        },
        {
            icon: <BarChart fontSize='large' />,
            title: 'Performance Analytics',
            description: 'Track your portfolio performance with detailed charts and metrics.'
        },
        {
            icon: <Security fontSize='large' />,
            title: 'Risk-Free',
            description: 'Practice strategies without losing real money. Perfect for beginners.'
        }
    ];

    return (
        <Container id='features' maxWidth='lg'  sx={{ py: 8 }}>
            <Typography variant='h3' align='center' gutterBottom>
                Why Choose Hodler?
            </Typography>
            <Typography variant='h6' align='center' color='text.secondary' component='p'>
                Everything you need to master crypto trading
            </Typography>

            <Grid container spacing={4} sx={{ mt: 4 }}>
                {features.map((feature, index) => (
                    <Grid xs={12} size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                        <Card 
                            sx={{
                                height: '100%',
                                textAlign: 'center',
                                p: 2,
                                transition: 'transform 0.2s',
                                '&:hover': {
                                    transform: 'translateY(-8px)',
                                    boxShadow: 4
                                }
                            }}
                        >
                            <CardContent>
                                <Box sx={{ color: 'primary.main', mb: 2}}>
                                    {feature.icon}
                                </Box>
                                <Typography variant='h5' gutterBottom>
                                    {feature.title}
                                </Typography>
                                <Typography variant='body1' color='text.secondary'>
                                    {feature.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default FeaturesSection;