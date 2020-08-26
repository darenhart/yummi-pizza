import React, { useEffect, useState } from 'react';
import { CircularProgress } from '@material-ui/core';
import * as Style from './style';
import { withRouter } from 'react-router-dom';
import OrderService from '../../services/OrderService';

const OrderList = () => {
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState([]);

  const loadOrders = async () => {
    setLoading(true);
    const response = await OrderService.get();
    setOrders(response.data);
    setLoading(false);
  };

  useEffect(() => {
    loadOrders();
  }, []);

  return loading ? (
    <Style.Loader>
      <CircularProgress />
    </Style.Loader>
  ) : (
    <div>
      <Style.Title>Orders:</Style.Title>
      {orders.map((o) => (
        <Style.Item key={o.id}>
          <ul>
            {o.items.map((i) => (
              <li key={i.id}>
                {i.pivot.quantity}x {i.title}:{' '}
                {/* {formatPrice(i.price * i.pivot.quantity, o.currency)} */}
              </li>
            ))}
          </ul>
        </Style.Item>
      ))}
    </div>
  );
};

export default withRouter(OrderList);
