export const initialState = {
  loadingSubmit: false,
  selectedItems: [],
  form: {
    address: '',
    phone: '',
  },
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'SELECTED_ITEMS':
      return {
        ...state,
        selectedItems: action.value.filter((i) => i.quantity),
      };
    default:
      return state;
  }
};
