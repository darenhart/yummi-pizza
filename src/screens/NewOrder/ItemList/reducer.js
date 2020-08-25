export const initialState = {
  loadingItems: true,
  currencies: [
    { currency: 'EUR', symbol: '€', rate: 0, selected: true },
    { currency: 'USD', symbol: 'US$', rate: 0 },
  ],
  items: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'ITEMS_RECEIVED':
      return {
        ...state,
        items: action.value.map((i) => {
          i.quantity = 0;
          return i;
        }),
      };
    case 'EXCHANGE_RATE_RECEIVED':
      return {
        ...state,
        currency: state.currencies.map((c) => {
          c.rate = action.rates[c.currency] || 1;
          return c;
        }),
      };
    case 'LOADING_ITEMS':
      return {
        ...state,
        loadingItems: action.value,
      };
    case 'CHANGE_CURRENCY':
      return {
        ...state,
        currencies: state.currencies.map((c) => {
          c.selected = c.currency === action.value;
          return c;
        }),
      };
    case 'CHANGE_ITEM':
      return {
        ...state,
        items: state.items.map((i) => {
          if (i.id === action.value.item.id) {
            i.quantity = Math.max(0, i.quantity + action.value.update);
          }
          return i;
        }),
      };
    case 'SELECT_ITEM':
      return {
        ...state,
        items: state.items.map((i) => {
          if (i.id === action.item.id && i.quantity === 0) {
            i.quantity = 1;
          }
          return i;
        }),
      };

    default:
      return state;
  }
};
