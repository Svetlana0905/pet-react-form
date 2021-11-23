import { configureStore } from '@reduxjs/toolkit';
import guestReducer from "../store/guestsSlice";

const store = configureStore({
   reducer: {
      guest: guestReducer,
   },
});
export default store;