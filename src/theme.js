import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    type:"light",
    primary: {
      light: '#ffff52',
      main: '#ffd700',
      dark: '#c7a600',
      contrastText: '#000000',
    },
    secondary: {
      light: '#ff6b38',
      main: '#ff2f00',
      dark: '#c30000',
      contrastText: '#000000',
    },
  },
});

export default theme;