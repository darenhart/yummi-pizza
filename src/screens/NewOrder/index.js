import React, { useReducer } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import ItemList from './ItemList';
import ConfirmOrder from './ConfirmOrder';
import { reducer, initialState } from './reducer';
import { withRouter } from 'react-router-dom';

export const ContextNewOrder = React.createContext();

const NewOrder = ({ history }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ContextNewOrder.Provider value={[state, dispatch]}>
      <Router>
        <Switch>
          <Route
            path="/confirm"
            component={() => (
              <ConfirmOrder
                selectedItems={state.selectedItems}
                currency={state.currency}
                appHistory={history}
              />
            )}
          />
          <Route path="*" component={ItemList} />
        </Switch>
      </Router>
    </ContextNewOrder.Provider>
  );
};

export default withRouter(NewOrder);
