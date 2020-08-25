import React, { useReducer } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import ItemList from './ItemList';
import ConfirmOrder from './ConfirmOrder';
import { reducer, initialState } from './reducer';

export const ContextNewOrder = React.createContext();

const NewOrder = () => {
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
              />
            )}
          />
          <Route path="*" component={ItemList} />
        </Switch>
      </Router>
    </ContextNewOrder.Provider>
  );
};

export default NewOrder;
