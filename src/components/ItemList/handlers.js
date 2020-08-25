import ItemService from '../../services/ItemService';

export const retrieveItems = async (dispatch) => {
  dispatch({ type: 'LOADING_ITEMS', value: true });
  const result = await ItemService.get();
  dispatch({ type: 'LOADING_ITEMS', value: false });
  dispatch({ type: 'ITEMS_RECEIVED', value: result.data });
};

export const changeItem = (dispatch, item, update) => {
  dispatch({ type: 'CHANGE_ITEM', value: { item, update } });
};

export const addItem = (dispatch, item) => {
  changeItem(dispatch, item, 1);
};

export const removeItem = (dispatch, item) => {
  changeItem(dispatch, item, -1);
};

export const submit = (dispatch) => {};
