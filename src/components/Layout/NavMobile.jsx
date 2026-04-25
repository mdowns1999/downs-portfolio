import { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';

const NAV_ROUTES = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
];

const drawerBoxSx = { width: 250 };
const hamburgerBoxSx = { display: { xs: 'flex', md: 'none' } };

const NavMobile = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <Box sx={hamburgerBoxSx}>
      <IconButton onClick={() => setOpen(true)} sx={{ color: 'text.primary' }}>
        <MenuIcon />
      </IconButton>
      <Drawer anchor="right" open={isOpen} onClose={() => setOpen(false)}>
        <Box sx={drawerBoxSx} role="presentation">
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
            <IconButton onClick={() => setOpen(false)} sx={{ color: 'text.primary' }}>
              <CloseIcon />
            </IconButton>
          </Box>
          <List>
            {NAV_ROUTES.map((route) => (
              <ListItemButton
                key={route.to}
                component={Link}
                to={route.to}
                onClick={() => setOpen(false)}
              >
                <ListItemText primary={route.label} />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default NavMobile;
