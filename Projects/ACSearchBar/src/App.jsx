import { useEffect, useState } from 'react'
import './App.css'

// Two Major Things in this Project
// 1. Implemented the Debouncing Logic, so that API Call will not be made for each keystroke which user presses, actually call will be made after sometime or when delay passes
// 2. Implemented the Caching Logic, so that If an API call to specific input is already made, then it should not make API call again for same Input - 
//    Storing the results of API call somewhere, that can be state variable, Local Storage

function App() {
  // Create a variable to store the data from the API
  const [results, setResults] = useState([]);

  // Create a variable to manage the input data
  const [input, setInput] = useState("");

  // Create a variable to store the state of result container - show or hidden
  const [showResults, setShowResults] = useState(false);

  // Implementing a Cache - Storing the result of specific inputs for which API call is already made, 
  // so that there is no need to make API call again for the same input
  // It will be an key value pair, i.e. Object, Each key will have an array as a value ( that will store all the results )
  const [cache, setCache] = useState({});

  let url = 'https://dummyjson.com/recipes/search?q='

  const fetchData = async () => {
    try {
      if(cache.hasOwnProperty(input)) {
        setResults(cache[input]);
      } else {
        // Update the url with query
        url += input;

        // Make an API Call using fetch and pass the url to it
        const result = await fetch(url);

        // Convert the string data to JSON Format
        const data = await result.json();
        
        // Set the get data to global state
        setResults(data?.recipes);

        // Cache Implementation
        // Initially set the key to "" and value to be arr (array)
        setCache((prev) => {
          return {...prev, [input]: data?.recipes}
        })
      }

    } catch(err) {
      console.log(err);
    }
  }

  // Fetch the data from API whenever user input changes - Most Important Thing
  // As my input changes everytime, when user presses the key stroke, useEffect will be called each time
  // This is the reason multiple API calls will be placed for each input
  // But my debouncing logic will prevent the mutiple API calls
  useEffect(() => {
    // setTimeout will return the numeric ID (an integer)
    // This ID uniquely identifies that the timer has been created
    const timer = setTimeout(fetchData, 300);

    // Clearing the timer, so that call will not be made for previous data
    // If before 300ms only, user has typed the query and then took the delay
    // Then there is no sense for showing the result for previous input, it must be cleared everytime
    return () => {
      clearTimeout(timer);
    }
  }, [input]);

  const handleNameClick = (val) => {
    // Update the Input State
    setInput(val.toLowerCase());
  }

  const handleBlur = () => {
    // Add a small delay before hiding results to allow click to register
    setTimeout(() => setShowResults(false), 200);
  }

  return (
    <div className="main-cont">
      <h1>AutoComplete Search Bar</h1>

      {/* Search Bar */}
      <div className="search-bar">
        <input 
          type="text" 
          name="search-data" 
          id="search-data" 
          value={input}
          placeholder='Search For Recipes' 
          className='search-input'
          onChange={(e) => setInput(e.target.value.toLowerCase())}
          onFocus={() => setShowResults(true)} // When user is focusing on the search bar
          onBlur={() => handleBlur()} // When user is not focusing on the search bar
        />
      </div>

      {/* Recipes to display on the page */}
      {showResults && (
        <div className="results-container">
          {results.map((r) => {
            return (
              <span 
                key={r.id} 
                className='result'
                onClick={(e) => {
                  e.preventDefault(); // Prevent blur from firing before click
                  handleNameClick(r.name)
                }}
              >
                {r.name}
              </span>
            );
          })}
        </div>
      )}
    </div>
  )
}

export default App

/*
  ?. --> Optional Chaining Operator
  It is used to safely access the properties of an object, to prevent runtime errors if the property value is null or undefined

  The output of the setTimeout function in JavaScript is a numeric ID (an integer). 
  This ID uniquely identifies the timer that has been created. 
  You can use this ID later with the clearTimeout() function to cancel the execution of the scheduled function before it runs.

  **Understanding `useEffect` Cleanup with `setTimeout` (Debouncing Example)**
  ============================================================================

  The `useEffect` hook in React allows you to perform side effects in your functional components. 
  When dealing with asynchronous operations like API calls triggered by user input (e.g., in a search bar), 
  you often want to implement **debouncing**. 
  
  Debouncing delays the execution of a function until a certain period of inactivity has passed. 
  This prevents excessive function calls for rapid sequential events (like typing).

  The `setTimeout` function is commonly used for debouncing, and 
  the `return` statement within `useEffect` plays a crucial role in managing these delayed calls.

  **Scenario:** Imagine a search bar where you want to fetch suggestions as the user types. 
  You don't want to make an API call for every single keystroke. 
  Instead, you want to wait until the user pauses typing for a short period (e.g., 300ms) before making the call.

  **Code Example:**
  -----------------

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchData();
    }, 300);

    // This is the cleanup function returned by useEffect
    return () => {
      clearTimeout(timer);
    };
  }, [input]); // Run this effect whenever the 'input' state changes
*/