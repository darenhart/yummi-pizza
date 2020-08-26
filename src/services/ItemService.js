import axios from 'axios';
import config from '../config';

const instance = axios.create({
  baseURL: config.endpoint,
});

const ItemService = {
  get: () => {
    return instance({
      method: 'GET',
      url: `/item`,
    });
  },
};

export default ItemService;
