import React from 'react'
import { useNavigate, Outlet } from 'react-router-dom';

const Dashboard = () => {
  // Get the access of navigate function
  const navigate = useNavigate();

  // Function to Handle Button Click
  function handleClick() {
    navigate('/about');
  }

  return (
    <>
      <div className='content'>
        Dashboard Page
        <Outlet />
      </div>

      <button className='btn' onClick={handleClick}>Go to About</button>
    </>
  )
}

export default Dashboard;