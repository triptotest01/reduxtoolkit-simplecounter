// store.js

import { configureStore } from "@reduxjs/toolkit";

//방금 전 counter.js에서 export default한 counterSlice.reducer
import counterSlice from "./redux/counter";


//redux store
export const store = configureStore({
  reducer: {
    //add counterReducer
    counter: counterSlice
  },
});