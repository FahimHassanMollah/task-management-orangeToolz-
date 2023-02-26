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
            console.log(action.payload);
            state.newTodos = [...state.newTodos, action.payload]
        },
        removeToNewTodos: (state, action) => {
            console.log(action.payload, "action");
            state.newTodos = state.newTodos.filter((todo) => todo.id !== action.payload);
           
        },
        addToInProgressTodos: (state,action) => {
           const {data,destinationIndex} = action.payload;
           console.log(destinationIndex, "destinationIndex");
           if (destinationIndex !== null) {
                state.inProgressTodos.splice(destinationIndex,0,data);
           }

        },
        addToCompletedTodos: (state) => {
           
        },
    },


})
// Action creators are generated for each case reducer function
export const { addToNewTodos, addToInProgressTodos, addToCompletedTodos, removeToNewTodos,addToAllTdodos } = todosSlice.actions
export default todosSlice.reducer