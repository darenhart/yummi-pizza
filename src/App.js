import React from 'react';
import './App.css';
import NewOrder from './screens/NewOrder';
import { AppBar, Toolbar, Button, IconButton } from '@material-ui/core';
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect,
  NavLink,
} from 'react-router-dom';
import ListOrders from './screens/OrderList';
import About from './screens/About';

const App = () => {
  return (
    <div className="App">
      <Router>
        <AppBar position="static">
          <Toolbar>
            <NavLink to="/">
              <img alt="logo" className="logo" src="/logo192.png"></img>
            </NavLink>
            Yummi Pizza
            <NavLink to="/about" className="about">
              About us
            </NavLink>
          </Toolbar>
        </AppBar>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/orders" component={() => <ListOrders></ListOrders>} />
          <Route path="/new-order" component={NewOrder} />
          <Route path="*">
            <Redirect to="/new-order" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
