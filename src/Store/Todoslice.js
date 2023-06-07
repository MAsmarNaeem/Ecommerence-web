

import { createSlice } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";

const Todo = createSlice({
    name: "Todo",
    initialState: { todos: false },
  
    reducers: {
      addvalue: (state,action)=>
      {
        console.log("state is :",state.todos);

      }
     
    },
  });
  
  export const { addvalue } = Todo.actions;
  //export default Todo.reducer;
  export default combineReducers({
    Todo: Todo.reducer,
  });
  