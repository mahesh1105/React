import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home, Dashboard, About, NavBar, ParamComp, UserComp, Courses, MockTests, Reports, NotFound } from './components'
import './App.css'

function App() {
  // Create the Router
  const router = createBrowserRouter(
    [
      // Static Routing
      {
        path: '/',
        element: 
        <div>
          <NavBar />
          <Home />
        </div>
      },
      {
        path: '/about',
        element:
        <div>
          <NavBar />
          <About />
        </div>
      },
      // Nested Routing --> /dashboard/courses, /dashboard/mock-tests, /dashboard/reports
      {
        path: '/dashboard',
        element:
        <div>
          <NavBar />
          <Dashboard />
        </div>,
        children: [
          {
            path: 'courses',
            element: <Courses />
          },
          {
            path: 'mock-tests',
            element: <MockTests />
          },
          {
            path: 'reports',
            element: <Reports />
          }
        ]
      },
      // Dynamic Routing
      {
        // It means whatever is there after "student/", consider that as id
        path: '/student/:id', 
        element:
        <div>
          <NavBar />
          <ParamComp />
        </div>
      },
      {
        path: '/user/:username',
        element:
        <div>
          <NavBar />
          <UserComp />
        </div>
      },
      // Handle Other Routes
      {
        // * means all the routes, when it does not match with any of the above route then it will come to this route
        path: "*",
        element: <NotFound />
      }
    ]
  )

  return (
    <div className='main-cont'>
      <h1 className='heading'>React Router DOM</h1>

      {/* Use RouterProvider Function or Component and pass the router prop to it */}
      <RouterProvider router={router} />
    </div>
  )
}

export default App;

/*
  Types of Routing:
  -----------------
  1. Client-Side Routing
  2. Server-Side Routing

  While using anchor tag for routing from one point to other, Full page reloading will happen because of the default behavior of the anchor tag
  It will send the HTTP request to the server and server responds with the HTML file as a response that browser will render, 
  That's why full page reloading will happen, Default Behavior of Anchor tag is Server-Side Routing and it is slower as compared to Client-Side

  React allows to create the SPA (Single Page Application) using Link and NavLink Function, which enables Client-Side Routing
  Because of it, No request is made to server and routing will happen only in client side, that's why it is fast also

  Types of Routing:
  -----------------
  1. Static Routing - Where URL Route is fixed and will not change
  2. Dynamic Routing - Where URL Route can be changed dynamically

  useParams:
  ==========
  - useParams is a hook provided by React Router that lets you grab dynamic pieces of the URL (aka route parameters).
  - When you app routes like this, 
    Ex: /student/123, /student/abc, /product/456
    and you want to grab that 123, abc, or 456 value — that's where useParams comes in.

  How it works:
  -------------
  { path: '/student/:id', element: <ParamComp /> }

  Here, :id is a placeholder for a dynamic value in the URL.
  So when the user goes to /student/123, React Router matches that route and sets:

  const { id } = useParams(); // id === "123" // <-- pulls `id` from the URL

  # 🚀 Why Use It?
  ----------------
  - It gives you dynamic routing power
  - You can fetch data based on the param (like fetching student #45 from an API)
  - Makes your components reusable for different IDs

  Quick Analogy:
  --------------
  If your route is:
  /user/:username

  And someone visits:
  /user/elonmusk

  Then in your component:
  // Pull username from the URL using useParams() hook
  const { username } = useParams();
  // Result
  username === "elonmusk"

  # Link and NavLink:
  ===================
  Link and NavLink are both components from React Router, and while they seem similar, they serve slightly different purposes.
  
  ## Link:
  --------
  ✅ Purpose:
  - Basic navigation between routes in a React Router app.
  - Does not reload the page.
  - Like a modern SPA-friendly version of the <a> tag.

  🧱 Example:
  -----------
  import { Link } from 'react-router-dom';

  <Link to="/about">About</Link>

  ✅ Use When:
  - You just want to navigate from one route to another.
  - No styling or logic based on the current route is needed.

  ## NavLink:
  -----------
  ✅ Purpose:
  Just like Link, but smarter.

  Adds an active class or allows custom styling when the link matches the current route.

  Perfect for navigation menus or sidebars where you want to highlight the current page.

  🧱 Example:
  -----------
  import { NavLink } from 'react-router-dom';

  <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
    About
  </NavLink>

  ==> React Router internally calls your className function and passes it an object describing the current state of the link — including:
  
  Ex:
  ---
  {
    isActive: true or false,
    isPending: true or false,
    isTransitioning: true or false
  }
  
  ✅ Use When:
  - You want to highlight or style the currently active link.
  - You're building a nav bar, tabs, or any route-aware component.

  🔁 useNavigate Hook:
  ====================
  - useNavigate is a hook from React Router that lets you programmatically navigate (i.e., redirect) to another route in code, not just via a <Link> or <NavLink>.

  ✅ Import it like this:
  import { useNavigate } from 'react-router-dom';

  🧠 Think of it as:
  A modern replacement for history.push() from older React Router versions.

  💡 When to use it?
  - After form submission, go to a different page.
  - On successful login, redirect to dashboard.
  - On button click, navigate to another route.

  🧱 Example 1: Navigate on Button Click
  --------------------------------------

  import React from 'react';
  import { useNavigate } from 'react-router-dom';

  function Home() {
    const navigate = useNavigate();

    const handleClick = () => {
      navigate('/dashboard'); // Go to Dashboard
    };

    return (
      <div>
        <h1>Home Page</h1>
        <button onClick={handleClick}>Go to Dashboard</button>
      </div>
    );
  }

  ⚙️ Navigate with Parameters or State
  🔗 Add Dynamic Parameters:
  navigate(`/student/${studentId}`);

  🧳 Or pass state:
  navigate('/dashboard', { state: { fromLogin: true } });
  You can then read that state in the target component using useLocation.

  ⏮ Optional: Go Back / Forward
  navigate(-1); // Go back
  navigate(1);  // Go forward

  Note:
  -----
  const navigate = useNavigate();
  
  This is how you get access to the navigate function from React Router — 
  which lets you programmatically change the route (i.e., navigate to a different page).

  🧠 Behind the scenes:
  - useNavigate() is a React Router hook.
  - It returns a function called navigate.
  - You call that function with a path or some options to navigate.

  Note:
  -----
  An <Outlet /> should be used in parent route elements to render their child route elements.
*/