export const initialState = {
  loadingItems: true,
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
    case 'LOADING_ITEMS':
      return {
        ...state,
        loadingItems: action.value,
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
    default:
      return state;
  }
};
