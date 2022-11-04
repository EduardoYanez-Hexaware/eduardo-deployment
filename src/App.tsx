import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Eduardo Yañez Mejía</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a
          className="troll"
          href="https://youtu.be/dQw4w9WgXcQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          Do not click here!
        </a>
      </header>
    </div>
  );
}

export default App;
