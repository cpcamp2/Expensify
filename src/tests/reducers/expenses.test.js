import expensesReducer from '../../reducers/expenses';

test('should set default expenses values', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should add an expense to state', () => {
  const expense = {
    description: '',
    note: '',
    amount: 0,
    createdAt: 0
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense
  };
  const state = expensesReducer(undefined, action);
  expect(state.length).toBe(1);
});

test('should remove an expense from state', () => {
  const currentState = [{
    id: '123abc',
    description: '',
    note: '',
    amount: 0,
    createdAt: 0
  }];
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  };
  const state = expensesReducer(currentState, action);
  expect(state).toEqual([]);
});
