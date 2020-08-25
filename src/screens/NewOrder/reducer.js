export const initialState = {
  selectedItems: [],
  currency: {},
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'CREATED_ORDER':
      return {
        ...state,
        selectedItems: action.value.selectedItems.filter((i) => i.quantity),
        currency: action.value.currency,
      };
    default:
      return state;
  }
};
