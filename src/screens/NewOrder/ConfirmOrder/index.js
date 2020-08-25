import React, { useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { reducer, initialState } from './reducer';
import { TextField, Button } from '@material-ui/core';
import { formatPrice } from '../../../utils';
import * as Style from './style';
import { confirmOrder } from './handlers';

const ConfirmOrder = ({ selectedItems, currency, history }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (!selectedItems.length) {
      history.push('/');
    }
  }, []);

  const price = selectedItems.reduce((a, b) => a + b.quantity * b.price, 0);

  return (
    <div>
      {selectedItems.map((i) => (
        <div key={i.id}>
          {i.quantity}x {i.title} -{' '}
          {formatPrice(i.price * i.quantity, currency)}
        </div>
      ))}
      <div>Total: {formatPrice(price, currency)}</div>
      <Style.Form
        onSubmit={(e) => {
          e.preventDefault();
          confirmOrder();
        }}
      >
        <TextField label="Address" />
        <TextField label="Phone" />
        <Button variant="contained" color="primary" type="submit">
          Confirm Order
        </Button>
      </Style.Form>
    </div>
  );
};

ConfirmOrder.propTypes = {
  selectedItems: PropTypes.array,
  currency: PropTypes.object.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
};

ConfirmOrder.defaultProps = {
  selectedItems: [],
};

export default withRouter(ConfirmOrder);
