import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const NAV_ROUTES = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
];

const boxSx = { display: { xs: 'none', md: 'flex' }, gap: 1 };

const NavDesktop = () => {
  const location = useLocation();

  return (
    <Box sx={boxSx} component="nav">
      {NAV_ROUTES.map((route, i) => {
        const isActive = route.to === '/'
          ? location.pathname === '/'
          : location.pathname.startsWith(route.to);
        return (
          <motion.div
            key={route.to}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.1 + i / 10 }}
          >
            <Button
              component={Link}
              to={route.to}
              color={isActive ? 'secondary' : 'inherit'}
              sx={isActive ? { fontSize: '1.05rem' } : { color: 'text.secondary', fontSize: '1.05rem' }}
            >
              {route.label}
            </Button>
          </motion.div>
        );
      })}
    </Box>
  );
};

export default NavDesktop;
