import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography: {
    htmlFontSize: 16,
    fontSize: 22.4,
    allVariants: {
      fontSize: '1.4rem',
      lineHeight: 1.5,
    },
    h6: {
      fontSize: '1.4rem',
    },
    h5: {
      fontSize: '1.8rem',
    },
    h4: {
      fontSize: '2.0rem',
    },
    h3: {
      fontSize: '2.2rem',
    },
    h2: {
      fontSize: '2.4rem',
    },
    h1: {
      fontSize: '2.6rem',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontSize: '1.4rem',
        },
      },
    },
  },
});

export default darkTheme;
