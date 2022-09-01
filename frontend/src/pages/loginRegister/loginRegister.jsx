import { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import reactLogo from '../../assets/react.svg';
import './loginRegister.css';
import RoomCard from '../../components/RoomCard';
//import test from './test.html'
import Grid2 from '@mui/material/Unstable_Grid2';
import { Button, CssBaseline, Grid, TextField, Typography } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import theme from '../../theme';

export default function LoginRegister() {
  const [count, setCount] = useState(0)
  const props1 = useSpring({ to: { opacity: 1 }, from: { opacity: 0 }, to: { y: 0 }, from: { y: -500 }, delay: 200 })
  const props2 = useSpring({ to: { opacity: 1 }, from: { opacity: 0 }, to: { y: 0 }, from: { y: 500 }, delay: 200 })
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline/>
    <Grid2 container direction='column'>
      {/* <animated.div style={props1}> */}
      <Grid2>
        <a href="" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </Grid2>
      <Grid2>
        <Typography variant="h2">Turing Dog</Typography>
      </Grid2>
      <Grid2 marginBottom={2}>
        <Typography variant="h">A Chatroom That Satisfies Everyone</Typography>
      </Grid2>
      {/* </animated.div> */}
      {/* <animated.div style={props2}> */}

      <form method="POST" action="">
        <Grid2 container spacing={3}>
          <Grid2 xs={12}>
            <TextField id="username" label="Username" style={{width:250}} />
            {/* <input type="text" name="username" placeholder="Username" /> */}
          </Grid2>
          <Grid2 xs={12} marginBottom={2}>
            <TextField id="password" label="Password" style={{width:250}}/>
            {/* <input type="text" name="password" placeholder="Password" /> */}
          </Grid2>
          <Grid2 container xs={12} spacing={4} justifyContent="center" >
            <Grid2 >
              <Button variant='outlined'>
              Login
              <input hidden type="submit" value="Login" />
              </Button>
            </Grid2>
            <Grid2 >
              <Button variant='outlined'>
              Register
              <input hidden type="submit" value="Register" />
              </Button>
            </Grid2>
          </Grid2>
        </Grid2>
      </form>
      <p className="read-the-docs">
      </p>
    </Grid2>
    </ThemeProvider>
  );
}
