//import { configureStore } from '@reduxjs/toolkit';
//import logger from 'redux-logger'
//import cartSlice from './cartSlice'
//import userSlice from './userSlice'
//
//const store = configureStore({
//  reducer: {
//    cart: cartSlice,
//    user: userSlice,
//  },
//  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
//});
//
//
//// be careful! it needs to unsubscribe(), otherwise the memory leakage
//// const = unsubscribe = store.subscribe(() => {
////   console.log('subscribe: store changed', store.getState())
//// })
//
//export default store;