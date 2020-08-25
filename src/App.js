import React from 'react';
import './App.css';
import NewOrder from './screens/NewOrder';
import { AppBar, Toolbar } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>Yummi Pizza</Toolbar>
      </AppBar>
      <NewOrder></NewOrder>
    </div>
  );
}

export default App;
