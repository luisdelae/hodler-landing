import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import { Android, Menu as MenuIcon } from '@mui/icons-material';
import { useState } from 'react';
import { Brightness4, Brightness7 } from '@mui/icons-material';

function NavBar({ darkMode, setDarkMode }) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setDrawerOpen(false);
  };

  const handleDownload = () => {
    window.open('https://github.com/luisdelae/hodler-android', '_blank');
    setDrawerOpen(false);
  };

  const menuItems = [
    { text: 'Features', action: () => handleScroll('features') },
    { text: 'About', action: () => handleScroll('about') },
    { text: 'Download', action: handleDownload },
  ];

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Android sx={{ mr: 2 }} />
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Hodler
          </Typography>

          {/* Dark mode toggle */}
          <IconButton color="inherit" onClick={() => setDarkMode(!darkMode)} sx={{ mr: 2 }}>
            {darkMode ? <Brightness7 /> : <Brightness4 />}
          </IconButton>

          {/* Desktop buttons */}
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Button color="inherit" onClick={() => handleScroll('features')}>
              Features
            </Button>
            <Button color="inherit" onClick={() => handleScroll('about')}>
              About
            </Button>
            <Button color="inherit" variant="outlined" sx={{ ml: 1 }} onClick={handleDownload}>
              Download
            </Button>
          </Box>

          {/* Mobile menu icon */}
          <IconButton
            color="inherit"
            edge="end"
            onClick={() => setDrawerOpen(true)}
            sx={{ display: { xs: 'block', sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 250 }}>
          <List>
            {menuItems.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton onClick={item.action}>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}

export default NavBar;
