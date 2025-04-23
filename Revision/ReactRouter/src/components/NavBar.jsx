import React from 'react'
import { Link, NavLink } from 'react-router-dom';

// Navigation Bar is created to route along multiple pages of website {Static Routing} - Everything is fixed here
const NavBar = () => {
  return (
    <div>
      <ul className='list-items'>
        <li>
          {/* Server Side Rendering */}
          {/* <a href="/" className='item'>Home</a>  */}

          {/* Client Side Rendering */}
          {/* <Link to="/" className='item'>Home</Link> */}

          {/* Client Side Rendering with Styling on 'Active' Component */}
          <NavLink to="/" className={({isActive}) => isActive ? 'active' : ""}>Home</NavLink>
        </li>
        <li>
          {/* Server Side Rendering */}
          {/* <a href="/dashboard" className='item'>Dashboard</a> */}

          {/* Client Side Rendering */}
          {/* <Link to="/dashboard" className='item'>Dashboard</Link> */}

          {/* Client Side Rendering with Styling on Active Component */}
          <NavLink to="/dashboard" className={({isActive}) => isActive ? 'active' : ""}>Dashboard</NavLink>
        </li>
        <li>
          {/* Server Side Rendering */}
          {/* <a href="/about" className='item'>About</a> */}

          {/* Client Side Rendering */}
          {/* <Link to="/about" className='item'>About</Link> */}

          {/* Client Side Rendering with Styling on Active Component */}
          <NavLink to="/about" className={({isActive}) => isActive ? 'active' : ""}>About</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default NavBar;