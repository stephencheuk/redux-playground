import { configureStore, createSlice } from '@reduxjs/toolkit';
import logger from 'redux-logger'

const counterSlice = createSlice({
  name: 'counter',
  initialState: { counter: 0 },
  reducers: {
    add(state, action){
      console.log('increment', state, action);
      state.counter++;
    },
    sub(state, action){
      console.log('decrement', state, action);
      state.counter--;
    },
    addBy(state, action){
      console.log('addBy', state, action);
      state.counter += action.payload;
    },
  }
});

export const actions = counterSlice.actions;

const store = configureStore({
  reducer: counterSlice.reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;