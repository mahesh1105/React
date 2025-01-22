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

/*
  React.createDOM will basically creates the virtual DOM and Whenever any changes happens in UI in browser, it compares
  it with Virtual DOM and only update the things which are changed

  But, whenever any changes happens in UI, Browser will remove the complete DOM and creates it again and load it
  That's the reason reloading will happen, where whole DOM will repaint(whole structure is prepared again)

  In case of Virual DOM, we can track the data in form of tree and whatever changes happens, it can be updated that time
  instead of loading of DOM again, Because of Virtual DOM reloading will not happen and it will save our time

  Fiber:
  ------
  React uses fiber(react's core algorithm) to update the virtual DOM behind the scenes

  Reconciliation:
  ---------------
  It is an algorithm that react uses to differentiate one tree with another to determine which parts need to be changed
  Reconciliation is an algorithm behind what is popularly understood as "virtual DOM"
*/