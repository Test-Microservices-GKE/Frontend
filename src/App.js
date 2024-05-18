import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
function App() {
  const apiUrl = process.env.REACT_APP_API_URL;
  const apiCommentUrl = apiUrl + '/comment';
  const apiVideoUrl = apiUrl + '/video';
  console.log(apiUrl);
  console.log(apiCommentUrl);
  console.log(apiVideoUrl);

  return (
    <div className="App">
      <header className="App-header">
        
      </header>
    </div>
  );
}



export default App;
