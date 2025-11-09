import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Android } from '@mui/icons-material';

function NavBar() {
    return (
        <AppBar position='static'>
            <Toolbar>
                <Android sx={{ mr: 2}} />
                <Typography variant='h6' sx={{ flexGrow: 1}}>
                    Hodler
                </Typography>
                <Box>
                    <Button 
                        color='inherit'
                        onClick={() => document.getElementById('features').scrollIntoView({ behavior: 'smooth' })}
                    >
                        Features
                    </Button>
                    <Button 
                        color='inherit'
                        onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
                    >
                        About
                    </Button>
                    <Button 
                        color='inherit' 
                        variant="outlined" 
                        sx={{ ml: 1 }}
                        onClick={() => window.open('https://github.com/luisdelae/hodler-android', '_blank')}
                    >
                        Download
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;
