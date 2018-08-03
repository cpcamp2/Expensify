import expenses from '../fixtures/expenses';
import expense from '../fixtures/expense';
import getExpensesTotal from '../../selectors/expenses-total';

const total = getExpensesTotal(expenses);

test('should return 0 if no expenses', () => {
  const result = getExpensesTotal();
  expect(result).toBe(0);
});

test('should correctly add up a single expense', () => {
  const result = getExpensesTotal(expense);
  expect(result).toBe(2500);
});
