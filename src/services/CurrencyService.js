import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.exchangeratesapi.io/',
});

const CurrencyService = {
  exchangeRates: () => {
    return instance({
      method: 'GET',
      url: `/latest`,
    });
  },
};

export default CurrencyService;
