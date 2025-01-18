import Mahesh from "./Mahesh"

function App() {
  return (
    <>
      <Mahesh />
      <h2>Hello Mahesh</h2>
      <p>This is Para</p>
    </>
  )
}

export default App

/*
  Note: Only one tag can be retuned by the function, that's why all the tag are written inside the fragments (<></>) provided by jsx and returned
  Also, Function Name must be capital, so as the tag Name, otherwise it will show the error while rendering
  JSX is syntax extension for JavaScript that allows you to write the HTML code within JS File
  JSX is useful when you want to write React components in a more readable, HTML-like syntax.

  Also, while importing any JS file, its not necessary to write the extension of file
*/