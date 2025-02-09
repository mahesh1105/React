import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/theme'
import ThemeBtn from './components/ThemeBtn';
import Card from './components/Card';

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  }

  const darkTheme = () => {
    setThemeMode("dark");
  }

  // Actual Change in Theme
  useEffect(() => {
    // Select the CSS Class for the HTML
    let mode = document.querySelector('html').classList;

    // Removes the "light" and "dark" class configuration, if present
    mode.remove("light", "dark");

    // Adds the Current Theme to the classList
    mode.add(themeMode);
  }, [themeMode])

  return (
    // Wrapping the App in ThemeProvider
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <h1 className='text-center text-3xl bg-gray-500 text-white p-2 mt-5 rounded'>Theme Switcher</h1>

      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App

/*
  Why Use ThemeProvider?
  --> Centralized Theme Management: 
      Stores the current theme and functions to switch themes.
  --> Global Access: 
      Any component in the app can access and change the theme without needing to pass props manually.
  --> Reactivity: 
      When the theme changes, all components consuming the context automatically update.
*/