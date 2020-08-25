import OrderService from '../../../services/OrderService';

export const confirmOrder = async ({
  dispatch,
  props,
  form,
  price,
  deliveryPrice,
}) => {
  const { selectedItems, history } = props;
  dispatch({ type: 'LOADING_SUBMIT', value: true });
  const order = await OrderService.completeOrder({
    user: form,
    order: {
      price,
      delivery_price: deliveryPrice,
    },
    items: selectedItems,
  });
  dispatch({ type: 'LOADING_SUBMIT', value: false });
  history.push('/');
};
