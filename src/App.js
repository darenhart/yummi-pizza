import React from 'react';
import './App.css';
import * as Style from './style';
import NewOrder from './screens/NewOrder';
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

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { brownSecondary, yellowSecondary } from './variables';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: yellowSecondary,
    },
    secondary: {
      main: brownSecondary,
    },
  },
});

const App = () => {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <SnackbarProvider maxSnack={3}>
          <Router>
            <Style.Header>
              <div>
                <NavLink to="/">
                  <Style.Brand>
                    <img alt="logo" className="logo" src="/logo192.png"></img>
                    <h3>Yummi Pizza</h3>
                  </Style.Brand>
                </NavLink>
                <NavLink to="/about">About us</NavLink>
              </div>
            </Style.Header>
            <Style.Body>
              <Switch>
                <Route path="/about" component={About} />
                <Route
                  path="/orders"
                  component={() => <ListOrders></ListOrders>}
                />
                <Route path="/new-order" component={NewOrder} />
                <Route path="*">
                  <Redirect to="/new-order" />
                </Route>
              </Switch>
            </Style.Body>
          </Router>
        </SnackbarProvider>
      </ThemeProvider>
    </div>
  );
};

export default App;
