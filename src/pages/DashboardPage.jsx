import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import ProfileEditor from '../components/ProfileEditor';
import { useSelector } from 'react-redux';

function DashboardPage() {
    const user = useSelector((state) => state.auth.user);

    return (
        <Container maxWidth="lg">
            <Box sx={{ py: 8 }}>
                <Typography variant="h3" gutterBottom>
                    Dashboard
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                    Welcome back, {user?.username}!
                </Typography>

                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <ProfileEditor />
                    </Grid>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 4, textAlign: 'center', minHeight: 300 }}>
                        <Typography variant="h5" gutterBottom>
                            Portfolio coming soon...
                        </Typography>
                    </Paper>
                </Grid>

                <Grid item xs={12}>
                    <Paper sx={{ p: 4, textAlign: 'center', minHeight: 200 }}>
                        <Typography variant="h5" gutterBottom>
                            Leaderboard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Coming soon: See how you rank against other traders
                        </Typography>
                    </Paper>
                </Grid>
            </Box>
        </Container>
    );
}

export default DashboardPage;
