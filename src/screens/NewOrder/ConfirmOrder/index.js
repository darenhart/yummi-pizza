import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import {
  TextField,
  Button,
  CircularProgress,
  Input,
  InputLabel,
  IconButton,
} from '@material-ui/core';
import { formatPrice } from '../../../utils';
import * as Style from './style';
import OrderService from '../../../services/OrderService';
import { withRouter } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import PhoneInput from '../../../components/PhoneInput';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { ContextNewOrder } from '../index';

const ConfirmOrder = (props) => {
  const [state] = useContext(ContextNewOrder);
  const { history, appHistory } = props;
  const [loading, setLoading] = useState(false);
  const [form, setValues] = useState({
    name: '',
    address: '',
    phone: '',
  });
  const { enqueueSnackbar } = useSnackbar();

  const selectedItems = state.items.filter((i) => i.quantity);
  const currency = state.currencies.find((c) => c.selected);

  useEffect(() => {
    if (!selectedItems.length) {
      history.push('/new-order/');
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
    enqueueSnackbar('Order created.', { variant: 'success' });
    appHistory.push('/orders');
  };

  const disabled =
    !form.name || !form.address || form.phone.replace(/\D/g, '').length < 9;

  return (
    <Style.ConfirmOrder>
      <IconButton aria-label="back" onClick={() => history.push('/new-order')}>
        <ArrowBackIcon />
      </IconButton>
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
          required
          label="Name"
          fullWidth
          value={form.name}
          onChange={handleChange('name')}
        />
        <TextField
          required
          label="Address"
          fullWidth
          value={form.address}
          onChange={handleChange('address')}
        />
        <InputLabel htmlFor="phone">Phone *</InputLabel>
        <Input
          required
          value={form.phone}
          fullWidth
          onChange={handleChange('phone')}
          name="phone"
          inputComponent={PhoneInput}
        />
        {loading ? (
          <CircularProgress />
        ) : (
          <Button
            variant="contained"
            color="primary"
            type="submit"
            disabled={disabled}
          >
            Confirm Order
          </Button>
        )}
      </Style.Form>
    </Style.ConfirmOrder>
  );
};

ConfirmOrder.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
  appHistory: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
};

ConfirmOrder.defaultProps = {
  selectedItems: [],
};

export default withRouter(ConfirmOrder);
