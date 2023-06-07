import { configureStore } from '@reduxjs/toolkit'

import myTodo from '../Store/Todoslice'

const store = configureStore({
    reducer: {
    
     myTodo,
    }
});


export default store;
