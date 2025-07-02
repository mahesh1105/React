import { useState } from 'react'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react';

function App() {
  const [products, setProducts] = useState([]);

  // WRONG - ❌
  // useEffect(async () => {
  //   // Two ways to handle the asynchronous code -> then-catch or async-await
  //   // then-catch will work fine here without any issue
  //   // but async await can't be used like this - 
  //   const response = await axios.get('api/products')
  // }, [])

  // CORRECT WAY - ✅
  useEffect(() => {
    // In order to use async-await, do it in IIFE or in callback
    // Store the reference of the callback inside the variable and then invoke the function
    (async () => {
      const response = await axios.get('https://opulent-happiness-94xggpqr49h77j9-5000.app.github.dev/api/products');
      console.log(response.data);
      setProducts(response.data);
    })()
  }, [])

  return (
    <>
      <h1>Handle APIs</h1>
      <h2>Number of Products are: {products.length}</h2>
    </>
  )
}

export default App
