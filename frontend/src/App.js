import logo from './logo.svg';
import './App.css';
import RoomList from './components/RoomList';

function App() {
  return (
<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* {users.map((user) => <p>
          {user.username} {user.email}
        </p>
        )} */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
           React
        </a>
        <RoomList/>
      </header>
    </div>
  );
}

export default App;
