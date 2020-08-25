import React, { useReducer, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { reducer, initialState } from './reducer';
import { TextField, Button, CircularProgress } from '@material-ui/core';
import { formatPrice } from '../../../utils';
import * as Style from './style';
import { confirmOrder } from './handlers';

const ConfirmOrder = (props) => {
  const { selectedItems, currency, history } = props;
  const [state, dispatch] = useReducer(reducer, initialState);
  const [form, setValues] = useState({
    name: '',
    address: '',
    phone: '',
  });

  useEffect(() => {
    if (!selectedItems.length) {
      history.push('/');
    }
  }, [selectedItems, history]);

  const price = selectedItems.reduce((a, b) => a + b.quantity * b.price, 0);
  const deliveryPrice = 1000;
  const totalPrice = price + deliveryPrice;

  const handleChange = (prop) => (event) => {
    setValues({ ...form, [prop]: event.target.value });
  };

  return (
    <div>
      <h4>Confirm your order:</h4>
      {selectedItems.map((i) => (
        <div key={i.id}>
          {i.quantity}x {i.title} -{' '}
          {formatPrice(i.price * i.quantity, currency)}
        </div>
      ))}
      <div>Delivery price: {formatPrice(deliveryPrice, currency)}</div>
      <div>Total order price: {formatPrice(totalPrice, currency)}</div>
      <h4>Enter your contact information:</h4>
      <Style.Form
        onSubmit={(e) => {
          e.preventDefault();
          confirmOrder({
            dispatch,
            props,
            form,
            price,
            deliveryPrice,
          });
        }}
      >
        <TextField
          label="Name"
          value={form.name}
          onChange={handleChange('name')}
        />
        <TextField
          label="Address"
          value={form.address}
          onChange={handleChange('address')}
        />
        <TextField
          label="Phone"
          value={form.phone}
          onChange={handleChange('phone')}
        />
        {state.loadingSubmit ? (
          <CircularProgress />
        ) : (
          <Button variant="contained" color="primary" type="submit">
            Confirm Order
          </Button>
        )}
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
