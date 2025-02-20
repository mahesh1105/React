import { createSlice, nanoid } from "@reduxjs/toolkit";

// Create the Store to store all the values - Can contain initial values
const initialState = {
    todos: [{id: 1, text: "Hello World"}]
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }

            state.todos.push(todo)
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.map((todo) => {
                return todo.id === action.payload.id ? {...todo, text: action.payload.text} : todo
            })
        }
    }
})

// Exporting Individual Reducers - Used in Components
export const {addTodo, deleteTodo, updateTodo} = todoSlice.actions

export default todoSlice.reducer