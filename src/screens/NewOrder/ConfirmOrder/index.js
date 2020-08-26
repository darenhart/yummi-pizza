import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { TextField, Button, CircularProgress } from '@material-ui/core';
import { formatPrice } from '../../../utils';
import * as Style from './style';
import OrderService from '../../../services/OrderService';
import { withRouter } from 'react-router-dom';

const ConfirmOrder = (props) => {
  const { selectedItems, currency, history, appHistory } = props;
  const [loading, setLoading] = useState(false);
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

  const confirmOrder = async () => {
    setLoading(true);
    await OrderService.completeOrder({
      user: form,
      order: {
        price,
        currency: currency.currency,
        delivery_price: deliveryPrice,
      },
      items: selectedItems,
    });
    setLoading(false);
    appHistory.push('/orders');
  };

  return (
    <Style.ConfirmOrder>
      <h3>Confirm your order:</h3>
      <ul>
        {selectedItems.map((i) => (
          <li key={i.id}>
            {i.quantity}x {i.title}:{' '}
            {formatPrice(i.price * i.quantity, currency)}
          </li>
        ))}
      </ul>
      <div>Delivery: {formatPrice(deliveryPrice, currency)}</div>
      <div>
        Total order: <strong>{formatPrice(totalPrice, currency)}</strong>
      </div>
      <h4>Enter your contact information:</h4>
      <Style.Form
        onSubmit={(e) => {
          e.preventDefault();
          confirmOrder();
        }}
      >
        <TextField
          label="Name"
          fullWidth
          value={form.name}
          onChange={handleChange('name')}
        />
        <TextField
          label="Address"
          fullWidth
          value={form.address}
          onChange={handleChange('address')}
        />
        <TextField
          label="Phone"
          fullWidth
          value={form.phone}
          onChange={handleChange('phone')}
        />
        {loading ? (
          <CircularProgress />
        ) : (
          <Button variant="contained" color="primary" type="submit">
            Confirm Order
          </Button>
        )}
      </Style.Form>
    </Style.ConfirmOrder>
  );
};

ConfirmOrder.propTypes = {
  selectedItems: PropTypes.array,
  currency: PropTypes.object.isRequired,
  appHistory: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
};

ConfirmOrder.defaultProps = {
  selectedItems: [],
};

export default withRouter(ConfirmOrder);
