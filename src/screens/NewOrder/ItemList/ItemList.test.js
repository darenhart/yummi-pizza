import { selectItem, changeItem } from './handlers';
import sinon, { assert } from 'sinon';

test('changeItem', () => {
  const dispatch = sinon.fake();
  const item = 123;
  const update = 1;
  changeItem(dispatch, item, update);
  assert.calledWith(dispatch, {
    type: 'CHANGE_ITEM',
    value: { item, update },
  });
});

test('selectItem', () => {
  const describe = sinon.fake();
  const item = 123;
  selectItem(describe, item);
  assert.calledWith(describe, { type: 'SELECT_ITEM', item });
});
