import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

/*
  Hooks allow us to "hook" into React features such as state and lifecycle methods
  You must import Hooks from react: import { useState } from 'react'

  Here we are using the useState Hook to keep track of the application state.
  State generally refers to application data or properties that need to be tracked.

  There are 3 rules for hooks:
  ----------------------------
  - Hooks can only be called inside React function components.
  - Hooks can only be called at the top level of a component.
  - Hooks cannot be conditional

  We initialize our state by calling useState in our function component.
  ** useState accepts an initial state and returns two values:
  -----------------------
  - The current state.
  - A function that updates the state.

  let [counter, setCounter] = useState(5);
  
  Here, Initial Value for the state is 5 and state name is counter that is maintained across the function component
  setCounter function is used to update the state

  - The useState Hook can be used to keep track of strings, numbers, booleans, arrays, objects, and any combination of these!

  1. We could create multiple state Hooks to track individual values.
  const [brand, setBrand] = useState("Ford");
  const [model, setModel] = useState("Mustang");
  const [year, setYear] = useState("1964");
  const [color, setColor] = useState("red");

  2. we can just use one state and include an object instead!
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  });

  If state gets updated then entire state will be overwritten.
  So, if we want to change the any particular property of the object, like - color
  we only call setCar({color: "blue"}), this would remove the brand, model, and year from our state.
  In that case, we need to use the spread operator
*/

/*
  The main use of hooks comes, when you want to reflect the updated variable over multiple places in UI
  To Do So, without using hooks, one needs to select the each tag one by one and update the content inside it
  each time when value gets updated, so here react hooks came to into picture, it will reflect the state updated value in UI
  just call the function when you want to change the state value and it will handle the updation of state in UI
*/

function App() {
  // let counter = 5;

  let [counter, setCounter] = useState(5);

  function addVal() {
    // It will not go beyond 20
    // if(counter < 20) {
    //   counter++;
    // }
    // setCounter(counter);

    // Interview Question - What will be the final value of counter and why?
    // setCounter(counter+1);
    // setCounter(counter+1);
    // setCounter(counter+1);
    // setCounter(counter+1);

    // Everytime when addVal() function will be called then counter will be incremented to 1 only
    // Reason: Above code will be sent in batches and as all the code are doing same thing, then it will update only once

    // To update it multiple time, we need to take previous reference of counter and it will get updated each time
    // so setCounter() function will basically takes the callback, from that we can take the reference of the prevCounter and update it

    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);

    // Now, if the addVal() function will be called then counter will get incremented by 4 each time
    // Note: Here you will take the previous state each time, so first setCounter will be executed and it will update the counter
    // then again when setCounter will be called then it will ask for previous state, which last function call updated,
    // So, all four function will be executed one by one
  }

  function remVal() {
    // It will not go beyond 0
    if(counter > 0) {
      counter--;
    }
    setCounter(counter);
  }

  return (
    <>
      <h1>Counter Project</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addVal}>Add Value: {counter}</button>
      <br/>
      <button onClick={remVal}>Remove Value: {counter}</button>

      <p>Para with Counter: {counter}</p>
    </>
  )
}

export default App
