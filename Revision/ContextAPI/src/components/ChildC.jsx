import React, { useContext } from "react";
import { ThemeContext, UserContext } from '../App'

const ChildC = () => {
  // Consume the Context
  // const obj = useContext(UserContext);

  // Consume the Context
  // const objData = useContext(UserContext);

  // Extracting the values using the Object Destructuring
  // const {user, setUser, theme, setTheme} = objData;

  // Consume the User Context
  const userData = useContext(UserContext);

  // Consume the Theme Context
  const themeData = useContext(ThemeContext);

  // Extracting the passed value from the Provider using Object Destructuring
  const {user, setUser} = userData;
  const {theme, setTheme} = themeData;

  // Function to toggle the theme
  // function toggleTheme() {
  //   setTheme(theme === 'light' ? 'dark' : 'light');
  // }

  function toggleTheme() {
    setTheme(theme === 'beige' ? 'aqua' : 'beige');
  }
  
  return (
    <>
      <p>Hello ChildC</p>

      {/* <p>{obj.name}</p> */}

      <p>Hello {user.name}</p>
      <p>Current Theme: {theme}</p>

      <button onClick={toggleTheme} className="btn">ToggleTheme</button>
      <button onClick={() => setUser({name:"Jasmit"})} className="btn">
        ChangeUsername
      </button>
    </>
  )
}

export default ChildC;