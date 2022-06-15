import logo from './logo.svg';
import './App.css';

function App() {
  return (
<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Users</h1>
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
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
