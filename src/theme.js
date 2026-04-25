import { createTheme } from '@mui/material/styles';

export function createAppTheme(mode) {
  return createTheme({
    palette: {
      mode,
      primary: {
        main: '#2F7EC8',
        light: mode === 'dark' ? '#1E3A5C' : '#EEF4FB',
        dark: '#1A5E99',
      },
      secondary: {
        main: '#3E7E5F',
        light: mode === 'dark' ? '#1A3527' : '#EBF5EF',
        dark: mode === 'dark' ? '#6EC997' : '#295C43',
      },
      background: {
        default: mode === 'dark' ? '#111827' : '#FFFFFF',
        paper: mode === 'dark' ? '#1E2D3D' : '#F0F7FF',
      },
      text: {
        primary: mode === 'dark' ? '#E2E8F0' : '#1A2C42',
        secondary: mode === 'dark' ? '#94A3B8' : '#4A6882',
      },
      divider: mode === 'dark' ? '#2D3748' : '#DDE7EF',
    },
    typography: {
      fontFamily: '"Nunito", "Helvetica Neue", sans-serif',
      h1: { fontWeight: 700, fontSize: '2.75rem' },
      h2: { fontWeight: 700, fontSize: '2rem' },
      h3: { fontWeight: 600, fontSize: '1.625rem' },
      h4: { fontWeight: 600, fontSize: '1.375rem' },
      body1: { fontSize: '1.1rem', lineHeight: 1.7 },
      body2: { fontSize: '1rem' },
    },
    shape: { borderRadius: 10 },
    components: {
      MuiButton: {
        defaultProps: { size: 'large' },
        styleOverrides: {
          root: { textTransform: 'none', fontWeight: 600 },
          sizeLarge: { fontSize: '1rem', padding: '0.6rem 1.5rem' },
        },
      },
      MuiToggleButton: {
        styleOverrides: {
          root: { textTransform: 'none' },
        },
      },
    },
  });
}
