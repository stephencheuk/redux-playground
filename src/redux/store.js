import { createStore } from 'redux';

let initState = {
  counter: 0,
};

const reducerFn = (state = initState, action) => {

  let { counter } = state;

  if(action.type === 'add'){
    return {
      ...state,
      counter: counter + 1
    }
  }else
  if(action.type ==='sub'){
    return {
      ...state,
      counter: counter - 1
    }
  }

  return state;
}

const store = createStore(reducerFn);

export default store;