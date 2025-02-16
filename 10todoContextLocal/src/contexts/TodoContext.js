import { createContext, useContext } from "react";

// Setting the Default value for the Context: { todos : [], addTodo: () => {}, ...}
export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Todo msg",
            completed: false,
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})

// Returning the Context of TodoContext
export const useTodo = () => {
    return useContext(TodoContext);
}

// Taking the reference of the Provider, so that it can be used directly
export const TodoProvider = TodoContext.Provider