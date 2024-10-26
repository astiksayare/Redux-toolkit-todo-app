

import { createSlice, nanoid } from "@reduxjs/toolkit";

const initailState = {
    todos: [{
        id: 1,
        text: 'Hello World'
    }]
}



export const todoSlice = createSlice({
    name: 'todo',
    initialState: initailState,
    reducers: {
        addTodo: (state, actions) => {
            const todo = {
                id: nanoid(),
                text: actions.payload
            }
            state.todos.push(todo);
        },

        deleteTodo: (state, actions) => {
            state.todos = state.todos.filter(todo => todo.id !== actions.payload)
        }
    }
});

export const { addTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;