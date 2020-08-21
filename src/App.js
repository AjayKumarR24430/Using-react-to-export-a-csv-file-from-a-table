import React from 'react';
import './App.css';
import Home from '../src/components/HomeComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Home Page!</h1>
        <h3>Click on the specific row inside the table and press export button to download data.</h3>
        <Home />
      </header>
    </div>
  );
}

export default App;
