export const changeItem = (dispatch, item, update) => {
  dispatch({ type: 'CHANGE_ITEM', value: { item, update } });
};

export const addItem = (dispatch, item) => {
  changeItem(dispatch, item, 1);
};

export const selectItem = (dispatch, item) => {
  dispatch({ type: 'SELECT_ITEM', item });
};

export const removeItem = (dispatch, item) => {
  changeItem(dispatch, item, -1);
};
