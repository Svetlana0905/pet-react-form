import { configureStore } from '@reduxjs/toolkit';
import todoReducer from "../store/guestsSlice";

const store = configureStore({
   reducer: {
      guest: todoReducer,
   },
});
export default store;