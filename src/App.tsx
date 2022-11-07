import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p id="myName">Eduardo Yañez Mejía</p>
        <p>Hello there! </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1>7</h1>
        <a
          className="troll"
          href="https://youtu.be/dQw4w9WgXcQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h1>Do not click here!</h1>
        </a>
      </header>
    </div>
  );
}

export default App;
