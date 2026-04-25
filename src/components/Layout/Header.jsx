import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { alpha } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import NavDesktop from './NavDesktop';
import NavMobile from './NavMobile';
import { useThemeMode } from '../../context/ThemeContext';

const appBarSx = (theme) => ({
  bgcolor: alpha(theme.palette.background.default, 0.9),
  backdropFilter: 'blur(10px)',
  boxShadow: 'none',
  borderBottom: '1px solid',
  borderColor: 'divider',
});

const toolbarSx = { justifyContent: 'space-between' };

const logoSx = {
  fontWeight: 700,
  color: 'text.primary',
  textDecoration: 'none',
};

const Header = () => {
  const { mode, toggleMode } = useThemeMode();

  return (
    <AppBar position="sticky" sx={appBarSx}>
      <Toolbar sx={toolbarSx}>
        <Typography variant="h5" component={Link} to="/" sx={logoSx}>
          MIKE DOWNS
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <NavDesktop />
          <IconButton onClick={toggleMode} sx={{ color: 'text.primary', ml: 1 }}>
            {mode === 'light' ? <WbSunnyIcon /> : <DarkModeIcon />}
          </IconButton>
          <NavMobile />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
