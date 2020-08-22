import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Yummi App</p>
        <Home></Home>
      </header>
    </div>
  );
}

export default App;
