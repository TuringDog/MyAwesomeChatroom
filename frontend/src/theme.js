import { createTheme } from '@mui/material';
import { blueGrey } from '@mui/material/colors';

const theme = createTheme({
    components: {
        MuiOutlinedInput: {
          styleOverrides: {
            notchedOutline: {
            borderColor: blueGrey[500],
            },
          }
        }
    },
    palette: {
      mode: 'dark',
      background: {
        paper: '#0A1929',
        default: '#0A1929',
      },
    //   primary: {
    //     // main: blueGrey[500],
    //     light: '#757ce8',
    //     main: '#3f50b5',
    //     dark: '#002884',
    //     contrastText: '#fff',
    //   },
    },
  })

  export default theme;