import uuid from 'uuid';
import database from '../firebase/firebase';

// ADD_EXPENSE
export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense
});

export const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    // This is a readable way of setting up default data for expenseData
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = expenseData;

    // Set up variable for cleaner code to pass in below. Get rid of uuid since firebase
    // will create unique key for us.
    const expense = { description, note, amount, createdAt };

    // Push expense to firebase database. Pass in ref to then for access to unique key
    // Add return so that I can add another then to chain promises
    // * since this has a promise attached the return is necessary so that
    // another promise can be chained in the test case
    return database.ref('expenses').push(expense).then((ref) => {
      dispatch(addExpense({
        id: ref.key,
        ...expense
      }));
    });
  };
};

// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});
