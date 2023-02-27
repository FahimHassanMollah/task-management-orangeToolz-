import { createSlice } from '@reduxjs/toolkit'



const initialState = {
    allTodos: [],
    newTodos: [],
    inProgressTodos: [],
    completedTodos: [],
}



export const todosSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
    
        addToAllTodos: (state, action) => {
            state.allTodos = action.payload;
        },
        addToNewTodos: (state, action) => {
           state.newTodos = action.payload;

        },
      
        addToInProgressTodos: (state,action) => {
          state.inProgressTodos = action.payload;

        },
       
        addToCompletedTodos: (state,action) => {
           state.completedTodos = action.payload;
        },
    },


})
// Action creators are generated for each case reducer function
export const { addToNewTodos, addToInProgressTodos, addToCompletedTodos,addToAllTodos, } = todosSlice.actions
export default todosSlice.reducer