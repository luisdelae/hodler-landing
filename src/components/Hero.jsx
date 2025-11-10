import { Box, Typography, Button, Container } from '@mui/material'
import { Download } from '@mui/icons-material';
import { motion } from 'framer-motion';

function Hero() {
    function handleClick() {
        window.open('https://github.com/luisdelae/hodler-android', '_blank');
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <Box
                sx={{
                    bgcolor: 'primary.main',
                    color: 'white',
                    py: 8,
                    textAlign: 'center'
                }}
            >
                <Container maxWidth='lg'>
                    <Typography variant='h2' gutterBottom>
                        Hodler - Crypto Trading Simulator
                    </Typography>
                    <Typography variant='h5' gutterBottom>
                        Practice trading without risking real money. Start with $10,000 virtual cash.
                    </Typography>
                    <Button
                        onClick={handleClick}
                        variant='contained'
                        size='large'
                        startIcon={<Download/>}
                        sx={{
                            bgcolor: 'white',
                            color: 'primary.main',
                            '&hover': { bgcolor:  'grey.100'}
                        }}
                    >
                        View on Github
                    </Button>
                </Container>
            </Box>
        </motion.div>
    );
}

export default Hero;