import ItemService from '../../../services/ItemService';

export const confirmOrder = async (dispatch) => {
  dispatch({ type: 'LOADING_SUBMIT', value: true });
  const [items, exchange_rates] = await Promise.all([ItemService.get()]);
  dispatch({ type: 'LOADING_SUBMIT', value: false });
  dispatch({ type: 'ITEMS_RECEIVED', value: items.data });
  dispatch({
    type: 'EXCHANGE_RATE_RECEIVED',
    rates: exchange_rates.data.rates,
  });
};
