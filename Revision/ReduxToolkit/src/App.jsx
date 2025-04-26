import { Counter } from './features/counter/Counter'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount ,resetState } from './features/counter/counterSlice'
import './App.css'
import { useState } from 'react';

function App() {
  // Read the state from the store using "useSelector" hook
  const count = useSelector((state) => state.counter.value);

  // Take the reference of the dispatch function using "useDispatch" hook
  // So that action can be dispatched using it
  const dispatch = useDispatch();

  function handlePlusBtnClick() {
    // To execute any action, you need to dispatch it
    dispatch(increment());
  }

  function handleMinusBtnClick() {
    // To execute any action, you need to dispatch it
    dispatch(decrement());
  }

  function handleResetBtnClick() {
    dispatch(resetState());
  }

  // State Management for Input Field
  const [incrVal, setIncrVal] = useState(0);

  function handleOnChange(val) {
    setIncrVal(Number(val));
  }

  function handleIncrBtnClick() {
    // Passing the action to dispatch and payload to the action
    dispatch(incrementByAmount(incrVal));
  }

  return (
    <div className='main-container'>
      <h1 className='heading'>React Redux Toolkit</h1>
      {/* <Counter /> */}

      <button className='btn' onClick={handlePlusBtnClick}>+</button>
      <p className='data'>Count: {count}</p>
      <button className='btn' onClick={handleMinusBtnClick}>-</button>

      <button className='reset-btn' onClick={handleResetBtnClick}>Reset</button>

      <input type="number" name="incrVal" id="incrVal" onChange={(e) => handleOnChange(e.target.value)}/>
      <button className='incr-btn' onClick={handleIncrBtnClick}>Increment By {incrVal}</button>
    </div>
  )
}

export default App

/*
  Run the below two commands to install redux toolkit and react-redux:

  npm install @reduxjs/toolkit
  npm install react-redux

  Steps to start with Redux Toolkit:
  ==================================
  - Install Redux Toolkit and React-Redux
  - Create the Redux store (app/store.js)
  - Provide the Redux Store to React (Wrap the App component inside the Provider) (in main.jsx)
  - Create a Redux State Slice (With Name, Initial State and Reducers) (features/featureName/featureNameSlice.js)
  - Add Slice Reducers to the Store (Register reducer in store) (in app/store.js)
  - Use Redux State and Actions in React Components

  ** The Redux Toolkit (RTK) is an official, opinionated set of tools designed to simplify and streamline the process of using Redux, 
     a popular state management library for JavaScript applications, particularly React apps

  ** Now we can use the React-Redux hooks to let React components interact with the Redux store. 
     We can read data from the store with useSelector, and dispatch actions using useDispatch.

  Note:
  - Value stored in the store can only be changed using the reducers
  - That needs to be exported from Slice File

  Here the best part is, we are just dispatching the actions, state updation in store is handled automatically
*/