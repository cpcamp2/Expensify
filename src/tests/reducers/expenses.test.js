import expensesReducer from '../../reducers/expenses';

test('should set default expenses values', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});
