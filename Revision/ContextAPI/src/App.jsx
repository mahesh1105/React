import { createContext, useState } from 'react'
import ChildA from './components/ChildA'
import './App.css'

// Steps to use Context API:
  // 1. Create the Context - "createContext"
  // 2. Wrap all the child inside a provider (Basically wrap the topmost child of the hierarchy)
  // 3. Pass the Values to the Provider
  // 4. Consume the values whereever you want - "useContext"

  // Create the User Context
  const UserContext = createContext();

  // Create the Theme Context
  const ThemeContext = createContext();

function App() {
  // Create the state variable for storing some value
  const [user, setUser] = useState({name: "Mahesh Saini"});

  // Additional value (e.g., theme)
  // const [theme, setTheme] = useState('light');
  const [theme, setTheme] = useState('beige');

  // Bundle multiple values into an object, so that it can be passed to the provider
  // const contextValue = {
  //   user, setUser, theme, setTheme
  // }

  return (
    <div className="main-cont" style={{backgroundColor: theme}}>
      <h1 className='heading'>Context API</h1>

      {/* Wrap all the child inside a provider and pass the values - Single Value */}
      {/* <UserContext.Provider value={user}>
        <ChildA />
      </UserContext.Provider> */}

      {/* Wrap all the child inside a provider and pass the values - Multiple Values */}
      {/* <UserContext.Provider value={contextValue}>
        <ChildA />
      </UserContext.Provider> */}

      {/* Wrap all the child inside a provider and pass the values - Providing multiple Contexts to the Child Component */}
      <UserContext.Provider value={{user, setUser}}>
        <ThemeContext.Provider value={{theme, setTheme}}>
          <ChildA />
        </ThemeContext.Provider>
      </UserContext.Provider>
    </div>
  )
}

export default App
export {UserContext, ThemeContext}

/*
  Note: 
  -----
  - Context must be created or defined in the global scope by using the 'createContext()' function
  - variables, functions, or classes that are defined in the module's top-level scope can only be exported
  - After creating the context, it must be exported from the app explicitly by the user
  - While passing values to the Provider one need to pass "value" prop specifically and pass the desired value into it
  - Also, where ever you want to use or consume the context, it must be imported there
  - To consume the context, one need to use 'useContext("ContextName")'
  - Pass the context name to get the context of it and store that in some variable to use it further


  Diagram:: ( Hierarchy of the Components )
  ---------
  App        -------> Create Context (Global Scope), Wrap Child inside the Provider and Pass the Values (Export the Contexts)
   |
   |
   ---> ChildA        -----> Consume the Context, Extract the Data and use it (Import the Contexts)
          |
          |
          ---> ChildB          -----> Consume the Context, Extract the Data and use it (Import the Contexts)
                 |
                 |
                 ---> ChildC            -----> Consume the Context, Extract the Data and use it (Import the Contexts)


  Here Parent-Child Hierarchy can be clearly seen, App is the topmost parent with child ChildA with sub-child ChildB with sub-child ChildC

  So, if you wrap ChildA inside the Provider, all the children gets wrapped into it automatically because of the heirarchy structure

  # Passing multiple Contexts to the Components:
  ----------------------------------------------
  - It should be done in this way, On top of ChildA, One Provider and on top of that another provider
  - Here ChildA will be rebdered only once and will have access for both the Context
  
  Ex:
  ---
  <UserContext.Provider value={{ user, setUser }}>
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ChildA />
    </ThemeContext.Provider>
  </UserContext.Provider>

  - Wrong way:
  Problem 1: ChildA will be rendered 2 times, means same UI two times on screen which is not the expectation
  Problem 2: Both the rendered component ChildA treated differntly and will have access to its respective provider but not for other
             Like: Rendered Component i.e. First ChildA will have access to UserContext only and Second ChildA will have access to ThemeContext only 

  Ex:
  ---
  <UserContext.Provider value={{ user, setUser }}>
    <ChildA />
  </UserContext.Provider>

  <ThemeContext.Provider value={{ theme, setTheme }}>
    <ChildA />
  </ThemeContext.Provider>

  ==> Also, while passing values to the Provider, if single values then it can be directly passed else it must be wrapped inside the Object and then passed further
*/