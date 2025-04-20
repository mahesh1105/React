import { useEffect, useState } from 'react'
import './App.css'
import {ProductCard, Pagination} from './components'
// import PAGE_SIZE from './constants';

function App() {
  // Create a state variable to store all the data from the API
  const [products, setProducts] = useState([]);

  // Create a state variable to store the current page
  const[currentPage, setCurrentPage] = useState(0);

  // Create a state variable to store how many items to be displayed on single page
  const [pageSize, setPageSize] = useState(10);

  // URL to get the data
  const url = 'https://dummyjson.com/products?limit=150';

  useEffect(() => {
    // Fetch will return a promise - that can be consumed using .then()/.catch()
    const result = fetch(url);

    // Consuming the Promise
    result.then((res) => {
      if(!res.ok) {
        throw new Error('Network Response was not OK');
      }
      // console.log(res);
      return res.json(); // Return a resolve Promise to next then
    }).then((data) => {
      // console.log(data);
      return data.products; // See Down for more info
    }).then((val) => {
      // console.log(val);
      setProducts(val);
    }).catch((err) => {
      console.log(err);
    })
  }, []);

  // console.log(products);

  // Fetching the data using async/await
  // const func = async () => {
  //   try {
  //     // Data returned by fetch is not the actual data
  //     const res = await fetch(url);

  //     // Check whether the network response is ok or not
  //     if(!res.ok) {
  //       throw new Error("Network Response was not OK")
  //     }

  //     // It lies inside the 'body' property of the response data, which have value of 'readableStream'
  //     // When you use res.json(), it will read the whole stream which is basically a string and
  //     // under the hood uses JSON.parse() which basically converts that data into JSON Format
  //     // That's how we will get our actual data and its related information as the return value of res.json()
  //     const data = await res.json();

  //     // Actual data and its related info, there can be chances that the data you need will present as the part of some property
  //     console.log(data);

  //     // Which can be extracted like this
  //     console.log(data.products);

  //   } catch(err) {
  //     console.log(err);
  //   }
  // }

  // func();
  
  // Total Number of Products
  const totalProducts = products.length;

  // Total Number of Pages
  const numberOfPages = Math.ceil(totalProducts / pageSize);

  // Function to go to previous page
  const handleLeftClick = () => {
    setCurrentPage((prev) => prev-1);
  }

  // Function to go to next page
  const handleRightClick = () => {
    setCurrentPage((prev) => prev+1);
  }

  // Function to handle the page change
  const handlePageChange = (num) => {
    setCurrentPage(num)
  }

  // Function to display the items on page
  const handleValueChange = (val) => {
    setPageSize(val);
  }

  // Handling the case: When we wil not get any data from API
  return !products.length ? ( 
    <h1>No Products found</h1> 
  ) : (
    <div className='main-cont'>
      <h1>Pagination</h1>

      {/* Pagination Logic - Divide the data among multiple pages and move along them */}
      <Pagination 
        currentPage={currentPage} 
        numberOfPages={numberOfPages} 
        leftClickFunc={handleLeftClick} 
        rightClickFunc={handleRightClick}
        pageChangeFunc={handlePageChange}
      />

      {/* User will select the number of items per page */}
      <div className="items-per-page">
        <label htmlFor="num-of-items" className='disp-label'>Number of Items per page</label>
        <select name="num-of-items" id="num-items" onChange={(e) => handleValueChange(e.target.value)}>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
          <option value="25">25</option>
          <option value="30">30</option>
        </select>
      </div>
      
      {/* Card Container - Collection of Cards */}
      <div className="card-coll">
        {products.map((prod, ind) => {
          if((ind >= currentPage*pageSize) && (ind < (currentPage+1)*pageSize)) {
            return (
              <ProductCard key={prod.id} prod={prod}/>
            )
          }
        })}
      </div>

    </div>
  )
}

export default App;

/*
  Promise: 
  --------
  - A promise represent the eventual completion or failure of an asynchronous operation

  (More Info)
  Here’s the rule:
  ================
  - If a .then() callback returns a Promise, the next .then() waits for that Promise to resolve and receives its resolved value.
  - If a .then() callback returns a non-Promise value (like an array, object, string, or number), 
    the Promise chain wraps that value in a resolved Promise immediately, and the next .then() receives the value.

*/