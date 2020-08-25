import axios from 'axios';
import config from '../config';

const instance = axios.create({
  baseURL: config.endpoint,
});

const OrderService = {
  post: () => {
    return instance({
      method: 'POST',
      url: `/order`,
    });
  },
  completeOrder: (completeOrder) => {
    return instance({
      method: 'POST',
      url: `/completeOrder`,
      data: completeOrder,
    });
  },
};

export default OrderService;
