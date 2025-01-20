import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return (
    <div>Custom App</div>
  )
}

// This will not work, as syntax is not correct here - Incorrect
// const reactElement = {
//   type: 'a',
//   props: {
//       href: 'https://www.google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit Google'
// }

const anotherElem = "mahesh"

// Creating the Element as per React Syntax - Correct
const reactElement = React.createElement(
  'a',
  { href: 'https://www.google.com', target: '_blank' },
  'Click me to Google',
  anotherElem // Here item must be 'evaluated expression' means direct variable's value will be inserted, no evaluation at this point
)

const anotherElement = (
  <a href="https://www.google.com" target='_blank'>Visit Google</a>
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// createRoot(document.getElementById('root')).render(
//   // This will not work in strict mode and it is also not a good practice, as syntax will differ from the team people
//   // At the end, MyApp is only a function, can be written like that
//   // MyApp()
//   // This will not work - as Object key can be anything, render function will not expect keys like this
//   // in customReact, there we have customRender function which will help us in rendering the Object Data
//   // reactElement
//   <StrictMode>
//     <MyApp />
//   </StrictMode>,
// )

// createRoot(document.getElementById('root')).render(
//   // This will not work in strict mode
//   // anotherElement
//   reactElement
// )