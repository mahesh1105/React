import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './contexts'
import { TodoForm, TodoItem } from './components'

function App() {
    // State Management for all the todo's not single todo
    const [todos, setTodos] = useState([])

    const addTodo = (todoText) => {
        setTodos((prev) => {
            prev = [...prev, {id: Date.now(), todo: todoText, completed: false}];
            return prev;
        })
    }

    // addTodo -> setTodos --> Implicit Return
    // const addTodo = (todo) => {
    //     setTodos((prev) => [...prev, { id: Date.now(), todo }]);
    // };
    

    const updateTodo = (id, todo) => {
        setTodos((prev) => {
            return prev.map((eachTodo) => eachTodo.id === id ? todo : eachTodo)
        })
    }

    // updateTodo -> setTodos --> Implicit Return
    // const updateTodo = (id, todo) => {
    //   setTodos((prev) => prev.map((eachTodo) => eachTodo.id === id ? todo : eachTodo))
    // }

    // Point to Note:
    // When you are deleting any todo, it will remove the todo from main "todos"
    // When todos changes, then useEffect will render as its dependency changes, resulting in overwriting the localStorage data with current todos

    const deleteTodo = (id) => {
        setTodos((prev) => prev.filter((todo) => todo.id !== id))
    }

    const toggleComplete = (id) => {
        setTodos((prev) => prev.map((todo) => todo.id === id ? {...todo, completed: !todo.completed} : todo))
    }

    // This will run on first render - i.e. every time when the page is reloaded - Script will get rendered
    useEffect(() => {
        const todoItems = localStorage.getItem("todos")
        const todoList = todoItems !== null ? JSON.parse(todoItems) : []
        // This function behaves asynchronously - It will not immediately set the value, instead it will do it later
        setTodos(todoList);
    }, [])

    // This will run on first run and each time when dependency changes
    useEffect(() => {
        // This check is added, so that upon reloading, when todos becomes [], it will not set it to localStorage, preventing it from Over Writing the localStorage
        // Also, For empty todos, There is no sense to set it to localStorage
        if(todos && todos.length > 0) {
            localStorage.setItem("todos", JSON.stringify(todos))
        }
    }, [todos])

    return (
        <TodoProvider value={{todos, addTodo, deleteTodo, updateTodo, toggleComplete}}>
        <h1 className='text-center text-3xl text-white bg-purple-500 p-2 mt-5 mb-5 rounded'>Todo using Context API with Local Storage</h1>

        <div className="bg-[#172842] min-h-screen py-8">
            <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                <div className="mb-4">
                    {/* Todo form goes here - Create New Notes Here */} 
                    <TodoForm />
                </div>

                <div className="flex flex-wrap gap-y-3">
                    {/*Loop and Add TodoItem here - Displaying all the Todo Items */}
                    {todos.map((todo) => (
                        <div key={todo.id}
                            className='w-full'
                        >
                            <TodoItem todo={todo} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </TodoProvider>
    )
}

export default App

/*
  ✅ The value prop of <TodoProvider> provides the context values.
  ✅ Any component inside <TodoProvider> can access those values using useContext(TodoContext).

  🔹 How Does This Work?
    
    value={{ todos, addTodo, updateTodo, deleteTodo }}
    --------------------------------------------------
    - This is the actual data and functions we are passing to the context.
    - Any component inside <App /> can access these values using useContext(TodoContext).
    
    Wrapping Components Inside <TodoProvider>
    -----------------------------------------
    - <TodoProvider> (which is actually TodoContext.Provider) provides the values to all components inside it.
    - Any child component can now use useContext(TodoContext) to access or update these values, like - App Component in Below Code

    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo }}>
      <App />
    </TodoProvider>

    React's Re-Render Mechanism:
    ----------------------------
    Rule: A component re-renders when:
    1. Its state changes (useState updates).
    2. Its props change (parent component passes new values).
    3. Its context values change (useContext updates).

    How React Identifies Components to Re-Render:
    ---------------------------------------------
    React follows a "top-down reconciliation" approach:
    When state changes, React re-renders only the component where the state changed and its child components if necessary.
    If a parent component’s state updates, React checks if it affects any child components.
    If a child component receives unchanged props, it won’t re-render.

    Example: State Update and Re-Renders
    ------------------------------------
    function ParentComponent() {
        const [count, setCount] = useState(0);

        return (
            <div>
                <button onClick={() => setCount(count + 1)}>Increment</button>
                <ChildComponent count={count} />
                <UnrelatedComponent />
            </div>
        );
    }

    function ChildComponent({ count }) {
        console.log("ChildComponent re-rendered");
        return <p>Count: {count}</p>;
    }

    function UnrelatedComponent() {
        console.log("UnrelatedComponent re-rendered");
        return <p>I'm not affected by count.</p>;
    }
    
    ** What Happens on setCount(count + 1)?
    ------------------------------------
    - ParentComponent re-renders (because state changed).
    - ChildComponent re-renders (because count prop changed).
    - UnrelatedComponent does NOT re-render (since it didn’t receive new props).
    👉 React skips re-rendering components whose props or state haven't changed.

    🔄 React’s Efficient Update Process
    -----------------------------------
    React does NOT re-create the entire Virtual DOM; instead, it follows these steps:

    1. State Changes in a Component
    - When a component's state updates (via useState, useReducer, etc.), React marks only that component for re-rendering.
    
    2. Component Re-Renders & Virtual DOM Diffing
    - The affected component generates a new Virtual DOM subtree.
    - React compares (diffs) this new subtree with the previous version.
    
    3. Identifying Minimal Updates
    - React does not diff the entire Virtual DOM.
    - It only checks the affected component and its children.
    
    4. Efficiently Updating the Real DOM (Reconciliation)
    - Once React identifies the differences (using its diffing algorithm), it updates only the changed parts of the real DOM.

    ⚡ Optimization Techniques:
    ==========================
    To prevent unnecessary renders:
    -------------------------------

    1. Use "React.memo" to avoid re-rendering if props haven’t changed.
    
    Ex::
    const Child = React.memo(({ count }) => {
        console.log("Child re-rendered");
        return <p>Count: {count}</p>;
    });

    2. Use "useCallback" for functions passed as props.

    Ex::
    const handleClick = useCallback(() => {
        console.log("Clicked!");
    }, []);

    3. Use "useMemo" for expensive calculations.

    Ex::
    const expensiveValue = useMemo(() => computeValue(data), [data]);
*/