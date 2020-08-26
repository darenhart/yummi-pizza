import React from 'react';
import './App.css';
import NewOrder from './screens/NewOrder';
import { AppBar, Toolbar } from '@material-ui/core';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import ListOrders from './screens/OrderList';

const App = () => {
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <img alt="logo" className="logo" src="/logo192.png"></img>
          Yummi Pizza
        </Toolbar>
      </AppBar>

      <Router>
        <Switch>
          <Route path="/orders" component={() => <ListOrders></ListOrders>} />
          <Route path="*" component={NewOrder} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
