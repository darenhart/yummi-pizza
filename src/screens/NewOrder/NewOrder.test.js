import { retrieveItems } from './handlers';
import sinon, { assert, stub } from 'sinon';
import ItemService from '../../services/ItemService';
import CurrencyService from '../../services/CurrencyService';

test('retrieveItems', async () => {
  const dispatch = sinon.fake();
  const items = { data: [] };
  const exchangeRates = { data: { rates: [] } };
  stub(ItemService, 'get').callsFake(() => items);
  stub(CurrencyService, 'exchangeRates').callsFake(() => exchangeRates);
  await retrieveItems(dispatch);
  assert.calledOnce(ItemService.get);
  assert.calledOnce(CurrencyService.exchangeRates);
  assert.calledWith(dispatch, { type: 'ITEMS_RECEIVED', value: items.data });
  assert.calledWith(dispatch, {
    type: 'EXCHANGE_RATE_RECEIVED',
    rates: exchangeRates.data.rates,
  });
});
