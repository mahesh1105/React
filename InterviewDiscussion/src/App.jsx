import { useState } from 'react'
import './App.css'

function App() {
  const [value, setValue] = useState(1);
  // const [multipliedValue, setMultipliedValue] = useState(1);
  let multipliedValue = value * 5;

  function handleOnClick() {
    // setMultipliedValue(value*5);
    setValue(value+1);
  }

  return (
    <>
      <h1 className='text-center text-3xl font-bold'>Interview Discussion</h1>
      
      <div className='mx-auto w-70 my-10 flex flex-col items-center'>
        <h2 className='text-2xl font-bold my-5'>Main Value: {value}</h2>
        
        <button 
          className='border-1 border-solid border-blue-500 px-10 py-2 rounded-sm font-bold bg-blue-500 text-white cursor-pointer'
          onClick={handleOnClick}
        >
          Click to multiply by 5
        </button>

        <h3 className='text-xl font-semibold my-5'>Multiplied Value: {multipliedValue}</h3>
      </div>
    </>
  )
}

export default App

/*
  Note:
  -----
  When any changes happen in state or props, whole component will re-render again
  Sometimes, to forcefully re-render the component, we use useEffect hook with dependency arrays

  In the above code, whenever button is clicked then it will change the state
  results in re-render of the app component and multipliedValue will get computed again and rendered.
*/