import React from 'react'
import { useNavigate } from 'react-router-dom';

const About = () => {
  // Get the access of navigate function
  const navigate = useNavigate();

  // Function to Handle Button Click
  function handleClick() {
    navigate('/');
  }

  return (
    <>
      <div className='content'>
        About Page
      </div>
      
      <button className='btn' onClick={handleClick}>Go to Home</button>
  </>
  )
}

export default About;