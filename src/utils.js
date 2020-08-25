export const formatPrice = (number) => {
  return number ? `US$ ${(number / 100).toFixed(2)}` : '';
};
