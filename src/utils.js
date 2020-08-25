export const formatPrice = (number, currency) => {
  return number
    ? `${currency.symbol} ${((number * currency.rate) / 100)
        .toFixed(2)
        .replace('.', ',')}`
    : '';
};
