import logo from './logo.svg';
import './App.css';

function App() {
  const apiUrl = process.env.REACT_APP_API_URL;

  return (
    <div className="App">
      <header className="App-header">
        <p>
          API URL: {apiUrl}
        </p>
      </header>
    </div>
  );
}


export default App;
