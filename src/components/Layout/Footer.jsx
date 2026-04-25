import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const footerSx = {
  bgcolor: 'background.paper',
  py: 3,
  mt: 'auto',
  borderTop: '1px solid',
  borderColor: 'divider',
};

const iconBtnSx = { color: 'text.secondary', '& svg': { fontSize: '1.75rem' } };

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <Box component="footer" sx={footerSx}>
      <Container>
        <Grid container alignItems="center" spacing={2}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="body1" color="text.secondary">Contact Me:</Typography>
            <Link href="mailto:michaeljdowns99@gmail.com" color="primary">
              michaeljdowns99@gmail.com
            </Link>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }} sx={{ textAlign: { md: 'center' } }}>
            <Typography variant="body1" color="text.secondary">
              &copy; Mike Downs {year}
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }} sx={{ display: 'flex', justifyContent: { md: 'flex-end' }, gap: 1 }}>
            <IconButton
              href="https://www.linkedin.com/in/mike-downs/"
              target="_blank"
              rel="noreferrer"
              sx={iconBtnSx}
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              href="https://github.com/mdowns1999"
              target="_blank"
              rel="noreferrer"
              sx={iconBtnSx}
              aria-label="GitHub"
            >
              <GitHubIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
