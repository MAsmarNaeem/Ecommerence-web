import { createSlice, combineReducers } from "@reduxjs/toolkit";

const Todo = createSlice({
  name: "Todo",
  initialState: { data: [] },
  reducers: {
    addToCart: (state, action) => {
      state.data = [...state.data, action.payload];
    },
    removeToCart: (state, action) => {
      const index = state.data.findIndex((item) => item === action.payload);
      console.log("index is ",index);
      if (index !== -1) {
        state.data.splice(index, 1);
      }
    },
  },
});

export const { addToCart, removeToCart } = Todo.actions;

export default combineReducers({
  Todo: Todo.reducer,
});
