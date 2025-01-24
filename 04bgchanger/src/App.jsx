import { useState } from 'react'
import './App.css'
import { use } from 'react'

function App() {
  const [color, setColor] = useState('olive');

  document.body.style.backgroundColor = color;

  return (
    <>
      <div className='bg-white p-2 rounded-3xl'>
        <button className='text-white rounded-xl px-4 py-1 m-1 cursor-pointer' onClick={() => setColor('red')} style={{backgroundColor:'red'}}>Red</button>
        <button className='text-white rounded-xl px-4 py-1 m-1 cursor-pointer' onClick={() => setColor('green')} style={{backgroundColor:'green'}}>Green</button>
        <button className='text-white rounded-xl px-4 py-1 m-1 cursor-pointer' onClick={() => setColor('blue')} style={{backgroundColor:'blue'}}>Blue</button>
        <button className='text-white rounded-xl px-4 py-1 m-1 cursor-pointer' onClick={() => setColor('olive')} style={{backgroundColor:'olive'}}>Olive</button>
        <button className='text-white rounded-xl px-4 py-1 m-1 cursor-pointer' onClick={() => setColor('gray')} style={{backgroundColor:'gray'}}>Gray</button>
        <button className='text-black rounded-xl px-4 py-1 m-1 cursor-pointer' onClick={() => setColor('yellow')} style={{backgroundColor:'yellow'}}>Yellow</button>
        <button className='text-white rounded-xl px-4 py-1 m-1 cursor-pointer' onClick={() => setColor('pink')} style={{backgroundColor:'pink'}}>Pink</button>
        <button className='text-white rounded-xl px-4 py-1 m-1 cursor-pointer' onClick={() => setColor('purple')} style={{backgroundColor:'purple'}}>Purple</button>
        <button className='text-black rounded-xl px-4 py-1 m-1 cursor-pointer' onClick={() => setColor('lavender')} style={{backgroundColor:'lavender'}}>Lavender</button>
        <button className='text-black rounded-xl px-4 py-1 m-1 cursor-pointer border' onClick={() => setColor('white')} style={{backgroundColor:'white'}}>White</button>
        <button className='text-white rounded-xl px-4 py-1 m-1 cursor-pointer' onClick={() => setColor('black')} style={{backgroundColor:'black'}}>Black</button>
      </div>
    </>
  )
}

export default App

/*
  Note: onClick attribute will always take an handler or callback, i.e. function reference
  But if callback is passed then arguments cannot be passed with it.
  onClick={setColor} --> Right
  But, if we want to pass the argument, then => onClick={setColor('red')} --> Wrong -- as this is not callback, it is function execution, 
  if this is passed, onClick will get the return value from the function, not the function reference
  setColor('red') --> that's how arguments is passed to function as per the syntax
  That's why, we will execute the function inside onClick so that onClick will get only callback
  onClick={() => {setColor('red')}}
  So, when button is clicked, then event will be triggered and callback will get executed and then inside function will get called
*/