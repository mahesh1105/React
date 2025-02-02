import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header, Footer } from './components'

function Layout() {
  return (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
  )
}

export default Layout

/*
  Do NOT use './components/index' because "index.js" is automatically detected.
  Directly write './components'

  <Outlet /> --> Whenever Outlet is used, then nesting of the Components can be done using react-router-dom
*/