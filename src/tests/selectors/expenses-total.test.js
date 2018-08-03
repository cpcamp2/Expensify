import expenses from '../fixtures/expenses';
import getExpensesTotal from '../../selectors/expenses-total';

const total = getExpensesTotal(expenses);

test('should return 0 if no expenses', () => {
  const result = getExpensesTotal();
  expect(result).toBe(0);
});

test('should correctly add up a single expense', () => {
  const result = getExpensesTotal([expenses[0]]);
  expect(result).toBe(195);
});

test('should correctly add up all expenses', () => {
  const result = getExpensesTotal(expenses);
  expect(result).toBe(114195);
});
