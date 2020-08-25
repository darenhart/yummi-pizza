export const initialState = {
  loadingSubmit: false,
  form: {
    address: '',
    phone: '',
  },
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'LOADING_SUBMIT':
      return {
        ...state,
        loadingSubmit: action.value,
      };
    default:
      return state;
  }
};
