import { useState } from 'react'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react';

function App() {
  // const [products, error, loading] = customReactQuery('/api/products');

  // We can use the readymade available react query library - Just install them and use

  // Handle the API Data
  const [products, setProducts] = useState([]);

  // Handle the Error State => false - No Error & true - Error
  const [error, setError] = useState(false);

  // If API response is taking time - then handle the delay with state
  const [loading, setLoading] = useState(false);

  // Handle the input query
  const [search, setSearch] = useState('');

  // WRONG - ❌
  // useEffect(async () => {
  //   // Two ways to handle the asynchronous code -> then-catch or async-await
  //   // then-catch will work fine here without any issue
  //   // but async await can't be used like this - 
  //   const response = await axios.get('api/products')
  // }, [])

  // CORRECT WAY - ✅
  useEffect(() => {
    // If multiple request is made to same URl, then it will cancel the old requests but send them to catch block
    // That must be handled carefully else issue will be there
    // It will not exactly cancel the old request, instead it will assure that request will be made in proper sequence
    // one after the other in the same order we are doing...
    const controller = new AbortController();
    // In order to use async-await, do it in IIFE or in callback
    // Store the reference of the callback inside the variable and then invoke the function
    // Note: If any code present before IIFE then semi-colon is mandatory else
    // JS will not able to identify from where the IIFE is starting
    (async () => {
      // Fetch the data from the backend - By Direct URL
      // const response = await axios.get('http://localhost:5000/api/products');

      // Fetch the data from the backend - By Vite Proxy
      try {
        setLoading(true); // Fetching the Data - Taking time
        setError(false);
        const response = await axios.get('/api/products' + '?search=' + search, {
          // Send the controller signal with axios api call
          signal: controller.signal
        });
        console.log(response.data);
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        // Handle the cancelled request by Axios
        if(axios.isCancel(error)) {
          console.log('Request cancelled', error.message);
          return;
        }
        setError(true); // Set Error to true, if some error encounters while fetching the data from API
        setLoading(false); // Set Loading to false, if some error occurs while fetching the data from API
      }
    })()

    // Clean up Code
    return () => {
      controller.abort();
    }
  }, [search]);

  // Handle error using state - like a pro
  // if(error) {
  //   return(
  //     <h1>Something went wrong</h1>
  //   )
  // }

  // Handle the API response time
  // if(loading) {
  //   return(
  //     <h1>Loading...</h1>
  //   )
  // }

  return (
    <>
      <h1>Handle APIs</h1>

      <input type='text' placeholder='Search' value={search} onChange={(e) => setSearch(e.target.value)} />

      {loading && <h1>Loading...</h1>}
      {error && <h1>Something went wrong</h1>}

      <h2>Number of Products are: {products.length}</h2>
    </>
  )
}

const customReactQuery = (urlPath) => {
  // // Handle the API Data
  // const [products, setProducts] = useState([]);

  // // Handle the Error State => false - No Error & true - Error
  // const [error, setError] = useState(false);

  // // If API response is taking time - then handle the delay with state
  // const [loading, setLoading] = useState(false);

  // // Handle the input query
  // const [search, setSearch] = useState('');

  // // WRONG - ❌
  // // useEffect(async () => {
  // //   // Two ways to handle the asynchronous code -> then-catch or async-await
  // //   // then-catch will work fine here without any issue
  // //   // but async await can't be used like this - 
  // //   const response = await axios.get('api/products')
  // // }, [])

  // // CORRECT WAY - ✅
  // useEffect(() => {
  //   // In order to use async-await, do it in IIFE or in callback
  //   // Store the reference of the callback inside the variable and then invoke the function
  //   (async () => {
  //     // Fetch the data from the backend - By Direct URL
  //     // const response = await axios.get('http://localhost:5000/api/products');

  //     // Fetch the data from the backend - By Vite Proxy
  //     try {
  //       setLoading(true); // Fetching the Data - Taking time
  //       setError(false);
  //       const response = await axios.get(urlPath + '?search=' + search);
  //       console.log(response.data);
  //       setProducts(response.data);
  //       setLoading(false);
  //     } catch (error) {
  //       setError(true); // Set Error to true, if some error encounters while fetching the data from API
  //       setLoading(false); // Set Loading to false, if some error occurs while fetching the data from API
  //     }
  //   })()
  // }, [search]);

  // return [products, error, loading];
}

export default App
