import expensesReducer from '../../reducers/expenses';
import expenses from '..//fixtures/expenses';

test('should set default expenses values', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expenses if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

// test('should add an expense to state', () => {
//   const expense = {
//     description: '',
//     note: '',
//     amount: 0,
//     createdAt: 0
//   };
//   const action = {
//     type: 'ADD_EXPENSE',
//     expense
//   };
//   const state = expensesReducer(undefined, action);
//   expect(state.length).toBe(1);
// });
//
//
// test('should edit an expense from state', () => {
//   const currentState = [{
//     id: '123abc',
//     description: '',
//     note: '',
//     amount: 0,
//     createdAt: 0
//   }];
//   const updates = { note: 'New note value' };
//   const action = {
//     type: 'EDIT_EXPENSE',
//     id: '123abc',
//     updates
//   };
//   const state = expensesReducer(currentState, action);
//   expect(state[0].note).toEqual('New note value');
// });
