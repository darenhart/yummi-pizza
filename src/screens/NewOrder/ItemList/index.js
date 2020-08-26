import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Add from '@material-ui/icons/Add';
import Remove from '@material-ui/icons/Remove';
import { CircularProgress } from '@material-ui/core';
import { ContextNewOrder } from '../index';
import { addItem, removeItem, selectItem } from './handlers';
import { formatPrice } from '../../../utils';
import * as Style from './style';
import CurrencyRadio from '../../../components/CurrencyRadio';
import { withRouter } from 'react-router-dom';

const ItemList = ({ history }) => {
  const [state, dispatch] = useContext(ContextNewOrder);

  const price = state.items.reduce((a, b) => a + b.quantity * b.price, 0);
  const currency = state.currencies.find((c) => c.selected);

  return state.loadingItems ? (
    <Style.Loader>
      <CircularProgress />
    </Style.Loader>
  ) : (
    <div>
      <Style.Title>Choose your pizzas:</Style.Title>
      {state.items.map((i) => (
        <Style.Item key={i.id} selected={i.quantity}>
          <Style.Body onClick={() => selectItem(dispatch, i)}>
            <Style.Image url={i.image} />
            <div>
              <h4>{i.title}</h4>
              <div>{i.description}</div>
              <Style.Price>{formatPrice(i.price, currency)}</Style.Price>
            </div>
          </Style.Body>
          <Style.Controls>
            <div className={`quantity ${i.quantity ? '' : 'hide'}`}>
              {i.quantity || 0}
            </div>
            <IconButton
              aria-label="remove"
              size="small"
              className={i.quantity ? '' : 'hide'}
              onClick={() => removeItem(dispatch, i)}
            >
              <Remove fontSize="inherit" />
            </IconButton>
            <IconButton
              aria-label="add"
              onClick={() => addItem(dispatch, i)}
              size="small"
            >
              <Add />
            </IconButton>
          </Style.Controls>
        </Style.Item>
      ))}
      <Style.Submit>
        <CurrencyRadio
          onChange={(c) => {
            dispatch({ type: 'CHANGE_CURRENCY', value: c });
          }}
        ></CurrencyRadio>
        <Button
          variant="contained"
          color="primary"
          disabled={!price}
          onClick={() => {
            history.push('/new-order/confirm');
          }}
        >
          Order {formatPrice(price, currency)}
        </Button>
      </Style.Submit>
    </div>
  );
};

ItemList.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
};

export default withRouter(ItemList);
