import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import lab1Reducer from '../features/lab1/lab1Slice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    lab1: lab1Reducer,
  },
});
