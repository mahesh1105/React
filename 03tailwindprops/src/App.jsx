import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let newObj = {
    name: "mahesh",
    age: 25
  }

  let newArr = [1, 2, 3, 4, 5];

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-5'>Tailwind Test</h1>
      /* Passing Props to Components */
      /* React Props are read-only! You will get an error if you try to change their value. */
      <Card name="Mahesh Saini" myObj={newObj} myArr={newArr} role="Software Developer" location="Bangalore"/>
      <Card name="Jarvis" role="Artificial Intelligence" location="Haryana"/>
    </>
  )
}

export default App
