import { createStore } from 'redux';

// create state using the createStore redux method. It expects a function
// with the argument being your state. you must define the state
const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
      return {
        count: state.count + incrementBy
      };
    case 'DECREMENT':
      const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
      return {
        count: state.count - decrementBy
      };
    case 'SET':
      return {
        count: action.count
      };
    case 'RESET':
      return {
        count: 0
      };
    default:
      return state;
  }
});

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

// Actions - than an object that gets sent to the store
// Action type names should be uppercase. *if two words use an _ to seperate them

// Increment
store.dispatch({
  type: 'INCREMENT',
  incrementBy: 5
});

// Decrement
store.dispatch({
  type: 'DECREMENT',
  decrementBy: 10
});

// Reset
store.dispatch({
  type: 'RESET'
});

// Set
store.dispatch({
  type: 'SET',
  count: 101
});
