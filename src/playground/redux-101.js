import { createStore } from 'redux';

// Action generators - functions that return action objects

// IncrementCount action generator
// Action generator takes payload as an argument w/ default value of an empty obj
// Use destructuring in argument to get incrementBy from obj.
// If there is an incrementBy then it's default is 1
// If there isn't an action.incrementBy then the default is set to an empty object
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

// DecrementCount action generator
const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

// Set action generator
const setCount = ({ count } = {}) => ({
  type: 'SET',
  count
});

// Reset action generator
const resetCount = () => ({
  type: 'RESET'
});

// create state using the createStore redux method. It expects a function
// with the argument being your state. you must define the state

// Reducers
// 1. Reducers are pure functions (functions that only use variables within scope)
// 2. Never directly change/mututate state or action

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
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
};

const store = createStore(countReducer);

// const store = createStore((state = { count: 0 }, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return {
//         count: state.count + action.incrementBy
//       };
//     case 'DECREMENT':
//       return {
//         count: state.count - action.decrementBy
//       };
//     case 'SET':
//       return {
//         count: action.count
//       };
//     case 'RESET':
//       return {
//         count: 0
//       };
//     default:
//       return state;
//   }
// });

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

// Actions - than an object that gets sent to the store
// Action type names should be uppercase. *if two words use an _ to seperate them

// Increment by five
  // store.dispatch({
  //   type: 'INCREMENT',
  //   incrementBy: 5
  // });

// Use case of action generator
store.dispatch(incrementCount());
store.dispatch(incrementCount({ incrementBy: 5}))

// Decrement
store.dispatch(decrementCount({ decrementBy: 10}))
store.dispatch(decrementCount());

// Reset
store.dispatch(resetCount());

// Set
store.dispatch(setCount({ count: 200 }));
