import { Box, Container, Typography, Link, IconButton, Grid } from '@mui/material';
import { GitHub, Email } from '@mui/icons-material';
import PriceTicker from './PriceTicker';

function Footer() {
    return (
        <Box sx={{ bgcolor: 'grey.900', color: 'white', py: 6 }}>
            <Container maxWidth='lg'>
                <Box sx={{ borderTop: '1px solid', borderColor: 'divider',textAlign: 'center', py: 2, mb: 3 }}>
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 4 }}><PriceTicker coinName="bitcoin" /></Grid>
                        <Grid size={{ xs: 4 }}><PriceTicker coinName="ethereum" /></Grid>
                        <Grid size={{ xs: 4 }}><PriceTicker coinName="solana" /></Grid>
                    </Grid>
                    <Typography variant='body3'>Live pricess from CoinGecko</Typography>
                </Box>
                <Box sx={{ textAlign: 'center', mg: 3 }}>
                    <IconButton color='inherit' aria-label='Github'>
                        <GitHub />
                    </IconButton>
                    <IconButton color='inherit' aria-label='Email'>
                        <Email />
                    </IconButton>
                </Box>

                <Typography variant='body2' align='center' sx={{ mb: 2 }}>
                    <Link href='#features' color='inherit' sx={{ mx: 2 }}>Features</Link>
                    <Link href='#about' color='inherit' sx={{ mx: 2 }}>About</Link>
                    <Link href='#' color='inherit' sx={{ mx: 2 }}>Privacy</Link>
                    <Link href='#' color='inherit' sx={{ mx: 2 }}>Contact</Link>
                </Typography>
        
                <Typography variant='body2' align='center' color='grey.500'>
                    © 2025 Hodler. Built by Luis De La Espriella
                </Typography>
            </Container>
        </Box>
    );
}

export default Footer;
