import { AppBar, Toolbar, Typography, Button, Box, IconButton } from '@mui/material';
import { Android } from '@mui/icons-material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../store/slices/authSlice';

function NavBar({ darkMode, setDarkMode }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.auth.user);

    const handleLogout = () => {
        dispatch(logout());
        navigate('/');
    };

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        localStorage.setItem('darkMode', !darkMode);
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <Android sx={{ mr: 2 }} />
                <Typography
                    variant="h6"
                    component={Link}
                    to="/"
                    sx={{
                        flexGrow: 1,
                        textDecoration: 'none',
                        color: 'inherit',
                        fontWeight: 'bold',
                    }}
                >
                    Hodler
                </Typography>

                <IconButton color="inherit" onClick={toggleDarkMode} sx={{ mr: 2 }}>
                    {darkMode ? <Brightness7 /> : <Brightness4 />}
                </IconButton>

                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                    {user ? (
                        <>
                            <Button color="inherit" component={Link} to="/dashboard">
                                Dashboard
                            </Button>
                            <Button color="inherit" onClick={handleLogout}>
                                Logout
                            </Button>
                            <Typography variant="body2" sx={{ ml: 1 }}>
                                {user.username}
                            </Typography>
                        </>
                    ) : (
                        <>
                            <Button color="inherit" component={Link} to="/login">
                                Login
                            </Button>
                            <Button color="inherit" component={Link} to="/register">
                                Sign Up
                            </Button>
                        </>
                    )}
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;
