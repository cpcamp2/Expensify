import expenses from '../fixtures/expenses';
import getExpensesTotal from '../../selectors/expenses-total';

const total = getExpensesTotal(expenses);
console.log(total);
