import { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import reactLogo from '../../assets/react.svg'
import '../../App.css'
import RoomTag from '../../components/RoomTag'
//import test from './test.html'

function LiaoPage() {
  const [count, setCount] = useState(0)
  const props1 = useSpring({ to: { opacity: 1 }, from: { opacity: 0 }, to:{y:0}, from:{y:-500}, delay:200})
  const props2 = useSpring({ to: { opacity: 1 }, from: { opacity: 0 }, to:{y:0}, from:{y:500}, delay:200})
  return (
    <div className="App">
      <RoomTag/>
      <animated.div style={props1}>
        <div>
          <a href="" target="_blank">
            <img src="/vite.svg" className="logo" alt="Vite logo" />
          </a>
          <a href="https://reactjs.org" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Turing Dog</h1>
        <h3>A Chatroom That Satisfies Everyone</h3>
      </animated.div>
      <animated.div style={props2}>
        <div className="card">
          <form method="POST" action="">
              <input type="text" name="username" placeholder="Username"/>
              <br/>
              <input type="text" name="password" placeholder="Password"/>
              <br/>
              <input type="submit" value="Login"/>
              <input type="submit" value="Register"/> 
          </form>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </animated.div>
    </div>
  )
}

export default LiaoPage
