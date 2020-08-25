import React, { useReducer, useEffect } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Add from '@material-ui/icons/Add';
import Remove from '@material-ui/icons/Remove';
import { reducer, initialState } from './reducer';
import { retrieveItems, addItem, removeItem } from './handlers';
import { formatPrice } from '../../utils';
import * as Style from './style';

const ItemList = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    retrieveItems(dispatch);
  }, []);

  const price = state.items.reduce((a, b) => a + b.quantity * b.price, 0);

  return (
    <div>
      {state.items.map((i) => (
        <Style.Item key={i.id} selected={i.quantity}>
          <Style.Body onClick={() => addItem(dispatch, i)}>
            <Style.Image url={i.image} />
            <div>
              <h4>{i.title}</h4>
              <div>{i.description}</div>
              <div>{formatPrice(i.price)}</div>
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
        <Button variant="contained" color="primary" disabled={!price}>
          Buy {formatPrice(price)}
        </Button>
      </Style.Submit>
    </div>
  );
};

export default ItemList;
