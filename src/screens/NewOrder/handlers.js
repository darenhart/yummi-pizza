import ItemService from '../../services/ItemService';
import CurrencyService from '../../services/CurrencyService';

export const retrieveItems = async (dispatch) => {
  dispatch({ type: 'LOADING_ITEMS', value: true });
  const [items, exchangeRates] = await Promise.all([
    ItemService.get(),
    CurrencyService.exchangeRates(),
  ]);
  dispatch({ type: 'LOADING_ITEMS', value: false });
  dispatch({ type: 'ITEMS_RECEIVED', value: items.data });
  dispatch({
    type: 'EXCHANGE_RATE_RECEIVED',
    rates: exchangeRates.data.rates,
  });
};
