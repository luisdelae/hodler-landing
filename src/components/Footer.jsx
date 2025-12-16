import { Box, Container, Typography, Link, IconButton, Grid } from '@mui/material';
import { GitHub } from '@mui/icons-material';
import PriceTicker from './PriceTicker';

function Footer() {
    return (
        <Box sx={{ bgcolor: 'grey.900', color: 'white', py: 6 }}>
            <Container maxWidth="lg">
                <Box
                    sx={{
                        borderTop: '1px solid',
                        borderColor: 'divider',
                        textAlign: 'center',
                        py: 2,
                        mb: 3,
                    }}
                >
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 4 }}>
                            <PriceTicker coinName="bitcoin" />
                        </Grid>
                        <Grid size={{ xs: 4 }}>
                            <PriceTicker coinName="ethereum" />
                        </Grid>
                        <Grid size={{ xs: 4 }}>
                            <PriceTicker coinName="solana" />
                        </Grid>
                    </Grid>
                    <Typography variant="body3">Live prices from CoinGecko</Typography>
                </Box>

                <Box sx={{ textAlign: 'center', mb: 3 }}>
                    <IconButton
                        color="inherit"
                        aria-label="Github"
                        component="a"
                        href="https://github.com/luisdelae"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <GitHub />
                    </IconButton>
                </Box>

                <Typography variant="body2" align="center" sx={{ mb: 2 }}>
                    <Link href="#features" color="inherit" sx={{ mx: 2 }}>
                        Features
                    </Link>
                    <Link href="#about" color="inherit" sx={{ mx: 2 }}>
                        About
                    </Link>
                </Typography>

                <Typography variant="body2" align="center" color="grey.500">
                    © {new Date().getFullYear()} Hodler. Built by Luis De La Espriella
                </Typography>
            </Container>
        </Box>
    );
}

export default Footer;
