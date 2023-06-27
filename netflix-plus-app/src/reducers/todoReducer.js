// What's a reducer?
/*
 * reducer is a fn
 * that takes in state and action
 * it must return new state based on the type of action dispatched.
 * action is an object -- that must have type property and an optional payload
 */

const todoReducer = (state = [], action) => {
  console.log('called todoReducer');
  // it must return new state based on the type of action dispatched

  switch (action.type) {
  case 'LIST_TODOS':
    return action.payload;

  case 'ADD_TODO':
    return [...state, action.payload];

  default:
    return state;
  }
};

export default todoReducer;
