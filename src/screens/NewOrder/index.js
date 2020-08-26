import React, { useReducer, useEffect } from 'react';
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect,
} from 'react-router-dom';
import ItemList from './ItemList';
import ConfirmOrder from './ConfirmOrder';
import { reducer, initialState } from './reducer';
import { withRouter } from 'react-router-dom';
import { retrieveItems } from './handlers';

export const ContextNewOrder = React.createContext();

const NewOrder = ({ history }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    retrieveItems(dispatch);
  }, []);

  return (
    <ContextNewOrder.Provider value={[state, dispatch]}>
      <Router>
        <Switch>
          <Route
            path="/new-order/confirm"
            component={() => <ConfirmOrder appHistory={history} />}
          />
          <Route path="/new-order/" component={ItemList} />
          <Route path="*">
            <Redirect to="/new-order/" />
          </Route>
        </Switch>
      </Router>
    </ContextNewOrder.Provider>
  );
};

export default withRouter(NewOrder);
