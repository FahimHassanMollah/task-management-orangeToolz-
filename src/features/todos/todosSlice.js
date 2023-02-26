import { createSlice } from '@reduxjs/toolkit'



const initialState = {
    allTdodos: [],
    newTodos: [],
    inProgressTodos: [],
    completedTodos: [],
}




export const todosSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
    
        addToAllTdodos: (state, action) => {
            state.allTdodos = [...state.allTdodos, action.payload]
        },
        addToNewTodos: (state, action) => {
           state.newTodos = action.payload;

        },
        removeToNewTodos: (state, action) => {
             state.newTodos.splice(action.payload,1);
            
           
        },
        addToInProgressTodos: (state,action) => {
          state.inProgressTodos = action.payload;

        },
        removeToInProgressTodos: (state, action) => {
            
            state.inProgressTodos = state.inProgressTodos.filter((todo) => todo.id !== action.payload);
           
        },
        addToCompletedTodos: (state,action) => {
           state.completedTodos = action.payload;
        },
    },


})
// Action creators are generated for each case reducer function
export const { addToNewTodos, addToInProgressTodos, addToCompletedTodos, removeToNewTodos,addToAllTdodos,removeToInProgressTodos, } = todosSlice.actions
export default todosSlice.reducer