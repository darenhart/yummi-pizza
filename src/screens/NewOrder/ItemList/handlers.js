import ItemService from '../../../services/ItemService';
import CurrencyService from '../../../services/CurrencyService';

export const retrieveItems = async (dispatch) => {
  dispatch({ type: 'LOADING_ITEMS', value: true });
  const [items, exchange_rates] = await Promise.all([
    ItemService.get(),
    CurrencyService.exchangeRates(),
  ]);
  dispatch({ type: 'LOADING_ITEMS', value: false });
  dispatch({ type: 'ITEMS_RECEIVED', value: items.data });
  dispatch({
    type: 'EXCHANGE_RATE_RECEIVED',
    rates: exchange_rates.data.rates,
  });
};

export const changeItem = (dispatch, item, update) => {
  dispatch({ type: 'CHANGE_ITEM', value: { item, update } });
};

export const addItem = (dispatch, item) => {
  changeItem(dispatch, item, 1);
};

export const selectItem = (dispatch, item) => {
  if (item.quantity === 0) {
    addItem(dispatch, item);
  }
};

export const removeItem = (dispatch, item) => {
  changeItem(dispatch, item, -1);
};
