import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Layout from './Layout.jsx'
import { Home, About, Contact, Github, loadGithubInfo, User } from './components'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} >
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route 
        loader={loadGithubInfo}
        path='github' 
        element={<Github />} 
      />
      <Route path='user/:userid' element={<User />} 
      />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)

/*
  The <RouterProvider> component is used in React Router v6+ to manage routing in a React application.
  Before <RouterProvider> is used, the router is typically defined using createBrowserRouter() or createHashRouter().

  Here, <RouterProvider> does three things:
  ✅ Supplies the router configuration to the app.
  ✅ Enables client-side navigation (prevents full-page reloads).
  ✅ Provides context to nested components so they can access routing features.

  Important:
  ----------
  ✅ createBrowserRouter() → Creates the router with browser history.
  ✅ createRoutesFromElements() → Defines nested routes inside <Layout />.
  ✅ Dynamic Routes (/user/:userid) allow capturing params (useParams()).
  ✅ RouterProvider renders the router and manages navigation.
  ✅ <Outlet /> inside <Layout /> dynamically loads child components.

  <Route path='/' element={<Layout />} >
  It is the Top Level Element or wrapper for the components to be rendered
  But Inside Layout, Oulet must be there, then only nesting will happen

  <RouterProvider router={router} />
  It is basically a wrapper which takes router props and handles the rendering of Components

  Further nesting can also be done in about say,
  <Route path='about' element={<About />} /> ==> 
  
  <Route path='about/' element={<About />} >
    <Route path="mahesh" element={<Component />} />
  </Route>
*/