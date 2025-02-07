import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {


  return (
    <UserContextProvider>
      <h1 className='bg-orange-700 text-white p-4 text-3xl rounded-md text-center mt-5'>Context API</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
