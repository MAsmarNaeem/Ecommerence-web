import { createSlice } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";

const Todo = createSlice({
  name: "Todo",
  // initialState: { todos: false, data: [] },
  initialState:  {data: [] },

  reducers: {

    addToCart: (state, action) => {
      console.log("state,",state);
     
      
       state.data=[...state.data,action.payload]
      console.log("value",state.data);
    
    },
  },
});

export const {   addToCart } = Todo.actions;
//export default Todo.reducer;
export default combineReducers({
  Todo: Todo.reducer,
});
