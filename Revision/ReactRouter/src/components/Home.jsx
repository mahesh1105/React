import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  // Get the access of navigate function
  const navigate = useNavigate();

  // Function to Handle Button Click
  function handleClick() {
    navigate('/dashboard');
  }

  return (
    <>
      <div className='content'>
        Home Page
      </div>

      <button className='btn' onClick={handleClick}>Go to Dashboard</button>
    </>
  )
}

export default Home;