import { useState } from 'react'
import './App.css'
import { AddTodo, Todos } from './components'

function App() {

    return (
        <>
            <h1 className='text-center text-3xl text-white bg-black rounded mt-5 p-2'>Todo List using Redux Toolkit</h1>
            <AddTodo />
            <Todos />
        </>
    )
}

export default App
