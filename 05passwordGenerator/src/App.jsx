import { useCallback, useEffect, useState, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // Here we are talking about the optimization - until dependency doesn't change it will return the same function reference
  // Basically it will memoize the function reference and saves our time and gives better performance
  // This is function definition - we are not executing the function here
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed == true) str += "0123456789";
    if(charAllowed == true) str += "!@#$%^&*()-_=+[]{}~`";

    for (let i = 0; i < length; i++) {
      let ind = Math.floor(Math.random() * str.length);
      pass += str[ind];
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword])

  // useRef hook
  const passwordRef = useRef(null);

  const copyPasswordToClipboard = useCallback(() => {
    // Select the Password, so that it will be visible to user what is copied - behind the scenes selected thing is not copied but it is for visibility purpose or making UI good
    passwordRef.current?.select();

    // Select the specific range in the password, means select (0-20) characters
    passwordRef.current?.setSelectionRange(0, 20);
    
    // Writing the password text to clipboard
    window.navigator.clipboard.writeText(password);
  }, [password])

  // Here we are saying, if any changes in dependency happens then rerun the function
  // passwordGenerator will store the reference of the function, It will run the function initially and when dependency changes
  // Here we are executing the function
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto rounded-lg shadow-md text-orange-500 bg-gray-700 px-4 py-3 my-8'>
        <h1 className='text-2xl text-center text-white my-3'>Password Generator</h1>
        
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type='text' value={password} className='outline-none w-full py-1 px-3 my-2 bg-white rounded-lg text-gray-500' placeholder='Password' readOnly ref={passwordRef}/>
          <button className='bg-blue-700 text-white px-3 py-0.5 rounded-lg outline-none shrink-0 cursor-pointer' onClick={copyPasswordToClipboard}>copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>
          
          <div className='flex items-center gap-x-1'>
            <input type='range' min={8} max={100} value={length} className='cursor-pointer' onChange={(e) => {setLength(e.target.value)}}/>
            <label>Length: {length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input type='checkbox' defaultChecked={numberAllowed} id='numberInput' onChange={() => {setNumberAllowed((prev) => !prev)}}/>
            <label htmlFor='numberInput'>Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input type='checkbox' defaultChecked={charAllowed} id='charInput' onChange={() => {setCharAllowed((prev) => !prev)}}/>
            <label htmlFor='charInput'>Characters</label>
          </div>

        </div>
      </div>
    </>
  )
}

export default App

/*
  useCallback:
  ------------
  The useCallback hook in React is used to memoize a function, ensuring that it is not re-created on every render unless its dependencies change.
  This can improve performance in certain scenarios by preventing unnecessary re-renders or re-executions of child components or effects that depend on the function.

  useEffect:
  ----------
  The useEffect hook runs the function (that is called inside the callback passed in useEffect) on first render, every render or when dependency changes
  based on the dependency array []

  1. No dependency passed:
  ------------------------
  useEffect(() => {
    //Runs on every render
  });

  2. An empty array:
  ------------------
  useEffect(() => {
    //Runs only on the first render
  }, []);

  3. Props or state values:
  -------------------------
  useEffect(() => {
    //Runs on the first render
    //And any time any dependency value changes
  }, [prop, state]);

  useRef:
  -------
  - The useRef hook allows you to persist values between renders without triggering a re-render. 
    Whether you’re dealing with DOM manipulation, storing previous values, or managing timers, useRef is an efficient solution.
  - The useRef allows to directly create a reference to the DOM element in the functional component.
    Unlike useState if we change a value in useRef it will not re-render the webpage.

  ** Reasons to use useRef hook:
  ------------------------------
  The main use of useRef hook is to access the DOM elements in a more efficient way as compared to simple refs.
  Since useRef hooks preserve value across various re-renders and do not cause re-renders whenever a value is changed
  they make the application faster and helps in caching and storing previous values
*/

/*
  Accessing DOM Elements with useRef:
  -------------------------------------
  One of the most common use cases of useRef is accessing DOM elements directly.
  This is particularly useful when you need to manipulate an element, such as focusing an input field, as shown earlier.

  -- Here’s a more complex example of using useRef to control video playback:

  function VideoPlayer() {
      const videoRef = useRef(null);

      const playVideo = () => {
          videoRef.current.play();
      };

      const pauseVideo = () => {
          videoRef.current.pause();
      };

      return (
          <div>
              <video ref={videoRef} width="400" controls>
                  <source src="video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
              </video>
              <button onClick={playVideo}>Play</button>
              <button onClick={pauseVideo}>Pause</button>
          </div>
      );
  }

  Persisting Values Across Renders:
  ---------------------------------
  In addition to accessing DOM elements, useRef is useful for storing values that persist across renders.
  
  -- A common use case is storing a previous value, such as the previous state or props.

  function PreviousValue() {
      const [count, setCount] = React.useState(0);
      const prevCountRef = useRef();

      React.useEffect(() => {
          prevCountRef.current = count;
      }, [count]);

      return (
          <div>
              <p>Current count: {count}</p>
              <p>Previous count: {prevCountRef.current}</p>
              <button onClick={() => setCount(count + 1)}>Increment</button>
          </div>
      );
  }

  useRef vs useState:
  -------------------
  While both useRef and useState allow you to store values, they serve different purposes:

  - useState: Triggers a re-render when the state value changes.
  - useRef: Does not cause re-renders when the value updates. It is primarily used for persisting values or accessing DOM elements.
*/

/*
  Page Load vs Render::
  =====================
  Page Load:
  ----------
  This refers to the initial process of fetching all the necessary resources (HTML, CSS, JavaScript) 
  from the server and displaying the page to the user for the first time. 

  Render:
  -------
  This is the process where the browser interprets the HTML code and dynamically updates the visible content on the page, 
  which can happen multiple times during a user session due to interactions like clicking buttons or changing data. 
*/

/*
  JSX file is converted to JavaScript and then it can be rendered by the browser, as browser only understands html, css and js
  in JS, we have access for window object, so window object can be directly used inside React
  But in case of next js, code will be executed on server side, there access of window object will not be there, so it can't be used directly
*/