# Portfolio Redesign – Material UI Migration

## Context
React 19 + Vite portfolio. Currently uses CSS Modules + custom styles. Goal: migrate to MUI v5 with a clean light theme — white and sky blue base, sage green accent, slate navy text. All reusable UI components need to be created from scratch.

---

## Task 1 – Install Dependencies

```bash
npm install @mui/material @emotion/react @emotion/styled @mui/icons-material
```

Verify install succeeded before continuing.

---

## Task 2 – Create MUI Theme

Create `src/theme.js`:

```js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2F7EC8',      // sky blue — buttons, bars, links
      light: '#EEF4FB',     // powder blue — hero bg, hover tints
      dark: '#1A5E99',      // deep blue — hover states
    },
    secondary: {
      main: '#3E7E5F',      // sage green — accent, active nav, CTA
      light: '#EBF5EF',     // pale sage — chip backgrounds
      dark: '#295C43',      // deep sage — chip text
    },
    background: {
      default: '#FFFFFF',   // white — page body
      paper: '#F0F7FF',     // powder blue — cards, alt sections
    },
    text: {
      primary: '#1A2C42',   // slate navy
      secondary: '#4A6882', // muted slate
    },
    divider: '#DDE7EF',
  },
  typography: {
    fontFamily: '"Nunito", "Helvetica Neue", sans-serif',
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 600 },
    h4: { fontWeight: 600 },
    body1: { lineHeight: 1.7 },
  },
  shape: { borderRadius: 10 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { textTransform: 'none', fontWeight: 600 },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: { textTransform: 'none' },
      },
    },
  },
});

export default theme;
```

Update `src/main.jsx` — wrap `<App />` with `<ThemeProvider theme={theme}><CssBaseline />{...}</ThemeProvider>`.

Add to `index.html` `<head>`:
```html
<link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700&display=swap" rel="stylesheet" />
```

---

## Task 3 – Create Reusable UI Components

Create all files in `src/components/UI/`. These are net-new files.

### `Heading.jsx`
```jsx
import Typography from '@mui/material/Typography';

export default function Heading({ level = 'h1', size, centered = false, children, bold = false, sx = {}, ...props }) {
  return (
    <Typography
      variant={size || level}
      component={level}
      gutterBottom
      sx={{ fontWeight: bold ? 700 : undefined, textAlign: centered ? 'center' : 'left', ...sx }}
      {...props}
    >
      {children}
    </Typography>
  );
}
```

### `Paragraph.jsx`
```jsx
import Typography from '@mui/material/Typography';

const sizeMap = { xs: 'caption', sm: 'body2', md: 'body1', lg: 'h6' };

export default function Paragraph({ centered = false, children, size = 'md', sx = {}, ...props }) {
  return (
    <Typography
      component="p"
      variant={sizeMap[size]}
      gutterBottom
      sx={{ textAlign: centered ? 'center' : 'left', ...sx }}
      {...props}
    >
      {children}
    </Typography>
  );
}
```

### `Separator.jsx`
```jsx
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

const sizeMap = { nano: '0.25rem', xxs: '0.5rem', xs: '1rem', sm: '2rem', md: '2.5rem', lg: '3rem', xl: '4rem', xxl: '5rem' };

export default function Separator({ size = 'md', showLine = false, lineColor, sx = {}, ...props }) {
  return (
    <Box sx={{ height: sizeMap[size] || sizeMap.md, width: '100%', display: 'flex', alignItems: 'center', ...sx }} {...props}>
      {showLine && <Divider sx={{ width: '100%', borderColor: lineColor || 'divider' }} />}
    </Box>
  );
}
```

### `LayoutBand.jsx`
```jsx
import Container from '@mui/material/Container';

const spacingMap = { none: 0, xxs: '0.5rem', xs: '1rem', sm: '2rem', md: '4rem', lg: '6rem', xl: '8rem' };

export default function LayoutBand({ spacing = 'sm', spacingDirection = 'vertical', children, sx = {}, ...props }) {
  const p = spacingMap[spacing];
  const paddingSx = spacingDirection === 'vertical' ? { py: p }
    : spacingDirection === 'horizontal' ? { px: p }
    : { p };
  return (
    <Container sx={{ ...paddingSx, ...sx }} {...props}>
      {children}
    </Container>
  );
}
```

### `Image.jsx`
```jsx
import { Link } from 'react-router-dom';

export default function Image({ src, alt, className, style, to, external = false, ...props }) {
  const img = <img src={src} alt={alt} className={className} style={style} loading="lazy" {...props} />;
  if (!to) return img;
  if (external) return <a href={to} target="_blank" rel="noreferrer">{img}</a>;
  return <Link to={to}>{img}</Link>;
}
```

### `SkillChip.jsx`
```jsx
import Chip from '@mui/material/Chip';

export default function SkillChip({ label, ...props }) {
  return (
    <Chip
      label={label}
      size="small"
      sx={{
        bgcolor: 'secondary.light',
        color: 'secondary.dark',
        border: '1px solid',
        borderColor: 'secondary.main',
        fontWeight: 600,
      }}
      {...props}
    />
  );
}
```

---

## Task 4 – Rebuild Header/Nav

Rewrite `src/components/Layout/Header/` (keep file/folder structure, replace content):

- `<AppBar position="sticky">` with:
  ```js
  const appBarSx = {
    bgcolor: 'rgba(255,255,255,0.9)',
    backdropFilter: 'blur(10px)',
    boxShadow: 'none',
    borderBottom: '1px solid',
    borderColor: 'divider',
  };
  ```
- Logo: `<Typography variant="h6" fontWeight={700} color="text.primary" component={Link} to="/">MIKE DOWNS</Typography>`
- Desktop nav: MUI `<Button component={Link} to={route}>` — use `useLocation()` to detect active route; active gets `color="secondary"`, others `sx={{ color: 'text.secondary' }}`
- Mobile nav: keep hamburger icon, replace custom dropdown with MUI `<Drawer anchor="right">` containing nav links as `<List><ListItemButton component={Link}>` items

---

## Task 5 – Rebuild Footer

Rewrite `src/components/Layout/Footer/`:

```jsx
const footerSx = { bgcolor: 'background.paper', py: 3, mt: 'auto', borderTop: '1px solid', borderColor: 'divider' };

<Box component="footer" sx={footerSx}>
  <Container>
    <Grid2 container alignItems="center">
      <Grid2 size={{ xs: 12, md: 4 }}>
        <Typography variant="body2" color="text.secondary">Contact Me:</Typography>
        <MuiLink href="mailto:michaeljdowns99@gmail.com" color="primary">michaeljdowns99@gmail.com</MuiLink>
      </Grid2>
      <Grid2 size={{ xs: 12, md: 4 }} sx={{ textAlign: 'center' }}>
        <Typography variant="body2" color="text.secondary">© Mike Downs 2026</Typography>
      </Grid2>
      <Grid2 size={{ xs: 12, md: 4 }} sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
        <IconButton href="https://linkedin.com/in/..." target="_blank" sx={{ color: 'text.secondary' }}><LinkedInIcon /></IconButton>
        <IconButton href="https://github.com/..." target="_blank" sx={{ color: 'text.secondary' }}><GitHubIcon /></IconButton>
      </Grid2>
    </Grid2>
  </Container>
</Box>
```

Find the correct LinkedIn and GitHub URLs from the existing footer/header code.

---

## Task 6 – Rebuild Home Page

Rewrite the home page component. Define all `sx` style objects as named constants above the `return` — do not write sx objects inline inside JSX.

**Hero section** — two-column grid, text left, photo right:
```jsx
const heroSx = { bgcolor: 'background.paper', minHeight: '60vh', display: 'flex', alignItems: 'center' };
const photoSx = { width: '100%', borderRadius: '12px', boxShadow: '0 4px 24px rgba(47,126,200,0.15)' };
const ctaBtnSx = { mt: 1 };

<Box sx={heroSx}>
  <LayoutBand spacing="lg">
    <Grid2 container spacing={6} alignItems="center">
      <Grid2 size={{ xs: 12, md: 7 }}>
        <Heading level="h1">My name is Mike Downs</Heading>
        <Paragraph size="lg">{/* existing bio */}</Paragraph>
        <Separator size="sm" />
        <Button variant="contained" color="secondary" component={Link} to="/projects" size="large" sx={ctaBtnSx}>
          See Projects
        </Button>
      </Grid2>
      <Grid2 size={{ xs: 12, md: 5 }}>
        <Image src={profilePhoto} alt="Mike Downs" style={photoSx} />
      </Grid2>
    </Grid2>
  </LayoutBand>
</Box>
```

**Work Experience section** — photo left, text right, white background:
```jsx
const workSectionSx = { bgcolor: 'background.default' };
const workPhotoSx = { width: '100%', borderRadius: '12px' };

<Box sx={workSectionSx}>
  <LayoutBand spacing="lg">
    <Grid2 container spacing={6} alignItems="center">
      <Grid2 size={{ xs: 12, md: 5 }}>
        <Image src={workPhoto} alt="Mike Downs" style={workPhotoSx} />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 7 }}>
        <Heading level="h2">Work Experience</Heading>
        <Paragraph>{/* existing work experience text */}</Paragraph>
        <Button variant="outlined" color="primary" href={resumeLink} target="_blank">See Resume</Button>
      </Grid2>
    </Grid2>
  </LayoutBand>
</Box>
```

**Skills section** — replace `@ramonak/react-progress-bar` with MUI `LinearProgress`:
```jsx
const skillsSectionSx = { bgcolor: 'background.paper' };
const barSx = { height: 8, borderRadius: 4, bgcolor: 'primary.light' };
const barLabelSx = { mb: 0.5, color: 'text.secondary', fontWeight: 600 };

<Box sx={skillsSectionSx}>
  <LayoutBand spacing="lg">
    <Grid2 container spacing={6}>
      <Grid2 size={{ xs: 12, md: 6 }}>
        {skills.map(skill => (
          <Box key={skill.name} sx={{ mb: 2 }}>
            <Typography variant="body2" sx={barLabelSx}>{skill.name}</Typography>
            <LinearProgress variant="determinate" value={skill.percentage} color="primary" sx={barSx} />
          </Box>
        ))}
      </Grid2>
      <Grid2 size={{ xs: 12, md: 6 }}>
        <Paragraph>{/* skills description text */}</Paragraph>
      </Grid2>
    </Grid2>
  </LayoutBand>
</Box>
```

---

## Task 7 – Rebuild Projects Page

Rewrite the projects list page. Define all `sx` style objects as named constants above the `return`.

**Filter bar** using `ToggleButtonGroup`:
```jsx
const filterGroupSx = { mb: 4 };
const toggleBtnSx = { px: 3, color: 'text.secondary', '&.Mui-selected': { bgcolor: 'secondary.light', color: 'secondary.dark', borderColor: 'secondary.main' } };

<ToggleButtonGroup value={filter} exclusive onChange={(_, val) => val && setFilter(val)} sx={filterGroupSx}>
  {['All', 'Web', 'Design', 'Other'].map(f => (
    <ToggleButton key={f} value={f} sx={toggleBtnSx}>{f}</ToggleButton>
  ))}
</ToggleButtonGroup>
```

**Project grid** using MUI Cards:
```jsx
const cardSx = {
  height: '100%', display: 'flex', flexDirection: 'column',
  bgcolor: 'background.default', textDecoration: 'none', color: 'inherit',
  border: '1px solid', borderColor: 'divider',
  transition: '0.25s ease',
  '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 8px 24px rgba(47,126,200,0.15)', borderColor: 'primary.main' },
};
const cardMediaSx = { height: 180, objectFit: 'cover' };
const cardTitleSx = { fontWeight: 700, color: 'text.primary' };
const cardDescSx = { display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' };

<Grid2 container spacing={3}>
  {filteredProjects.map(project => (
    <Grid2 size={{ xs: 12, sm: 6, md: 4 }} key={project.id}>
      <Card component={Link} to={`/projects/${project.id}`} sx={cardSx}>
        <CardMedia component="img" image={project.image} alt={project.name} sx={cardMediaSx} />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography variant="h6" sx={cardTitleSx}>{project.name}</Typography>
          <Typography variant="body2" color="text.secondary" sx={cardDescSx}>{project.description}</Typography>
        </CardContent>
        <CardActions sx={{ px: 2, pb: 2 }}>
          <Stack direction="row" spacing={0.5} flexWrap="wrap" useFlexGap>
            {project.skills?.slice(0, 3).map(s => <SkillChip key={s} label={s} />)}
          </Stack>
        </CardActions>
      </Card>
    </Grid2>
  ))}
</Grid2>
```

Note: `projects.json` does not currently have an `image` field per project. If images are stored elsewhere (e.g. imported at the top of the old component), keep that same import/reference pattern and map it into `CardMedia`.

---

## Task 8 – Rebuild Project Detail Page

Rewrite the individual project page. Define all `sx` style objects as named constants above the `return`.

```jsx
const photoStyle = { width: '100%', borderRadius: '12px', boxShadow: '0 4px 24px rgba(47,126,200,0.15)' };
const skillsLabelSx = { color: 'text.secondary', letterSpacing: '0.08em' };
const chipsStackSx = { mt: 1, mb: 3 };
const btnsStackSx = { mt: 1 };

<LayoutBand spacing="lg">
  <Grid2 container spacing={6}>
    <Grid2 size={{ xs: 12, md: 5 }}>
      <Image src={project.image} alt={project.name} style={photoStyle} />
    </Grid2>
    <Grid2 size={{ xs: 12, md: 7 }}>
      <Heading level="h1">{project.name}</Heading>
      <Paragraph>{project.description}</Paragraph>
      <Separator size="sm" />
      <Typography variant="overline" sx={skillsLabelSx}>Skills</Typography>
      <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={chipsStackSx}>
        {project.skills.map(s => <SkillChip key={s} label={s} />)}
      </Stack>
      <Stack direction="row" spacing={2} sx={btnsStackSx}>
        {project.links.map((l, i) => (
          <Button key={i} variant={i === 0 ? 'contained' : 'outlined'} color={i === 0 ? 'secondary' : 'primary'}
            href={l.link} target="_blank">
            {l.name}
          </Button>
        ))}
      </Stack>
    </Grid2>
  </Grid2>
</LayoutBand>
```

---

## Task 9 – Rebuild About Page

Rewrite the about page. Define all `sx` style objects as named constants above the `return`.

```jsx
const photoStyle = { width: '100%', borderRadius: '12px', boxShadow: '0 4px 24px rgba(47,126,200,0.12)' };

<LayoutBand spacing="lg">
  <Grid2 container spacing={6} alignItems="flex-start">
    <Grid2 size={{ xs: 12, md: 6 }}>
      <Heading level="h2">Personal Life</Heading>
      <Separator size="xs" showLine />
      <Paragraph>{/* existing personal bio */}</Paragraph>
    </Grid2>
    <Grid2 size={{ xs: 12, md: 6 }}>
      <Image src={aboutPhoto} alt="Mike and wife" style={photoStyle} />
    </Grid2>
  </Grid2>
</LayoutBand>
```

---

## Task 10 – Cleanup & Verification

1. Remove unused CSS Module files for any pages fully rewritten (Home, Projects, About, Header, Footer `.module.css` files)
2. Remove `@ramonak/react-progress-bar` import/usage — replaced by MUI `LinearProgress`
3. Keep all `framer-motion` animations exactly as-is
4. Keep all `react-intersection-observer` usage exactly as-is
5. Keep `projects.json` data structure unchanged
6. Run `npm run lint` — fix all errors
7. Run `npm run build` — must pass with zero errors

---

## Definition of Done Checklist

- [ ] Task 1: MUI + icons installed, no peer dependency errors
- [ ] Task 2: `src/theme.js` created with light palette (sky blue + sage green), ThemeProvider wraps app in `main.jsx`, Nunito font in `index.html`
- [ ] Task 3: All 6 UI components created — `Heading`, `Paragraph`, `Separator`, `LayoutBand`, `Image`, `SkillChip`
- [ ] Task 4: Header rebuilt — white glass AppBar, active route uses sage green (`color="secondary"`), mobile uses MUI Drawer
- [ ] Task 5: Footer rebuilt — three-column layout with MUI `LinkedInIcon` and `GitHubIcon`
- [ ] Task 6: Home page rebuilt — hero two-column grid, MUI `LinearProgress` skill bars, Work Experience in Paper bg section
- [ ] Task 7: Projects page rebuilt — `ToggleButtonGroup` filter, Card grid with hover lift
- [ ] Task 8: Project detail rebuilt — two-column grid, `SkillChip` tags, contained/outlined buttons
- [ ] Task 9: About page rebuilt — two-column grid with photo
- [ ] Task 10: Dead CSS Modules removed, `npm run lint` clean, `npm run build` passes
