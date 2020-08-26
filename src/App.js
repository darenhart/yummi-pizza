import React from 'react';
import './App.css';
import NewOrder from './screens/NewOrder';
import { AppBar, Toolbar } from '@material-ui/core';
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect,
  NavLink,
} from 'react-router-dom';
import ListOrders from './screens/OrderList';
import About from './screens/About';
import { SnackbarProvider } from 'notistack';

const App = () => {
  return (
    <div className="App">
      <SnackbarProvider maxSnack={3}>
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
      </SnackbarProvider>
    </div>
  );
};

export default App;
