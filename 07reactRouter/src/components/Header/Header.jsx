import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <Link
                            to="#"
                            className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Log in
                        </Link>
                        <Link
                            to="#"
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Get started
                        </Link>
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 ${isActive ? "text-orange-700" : "text-gray-700"} duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 ${isActive ? "text-orange-700" : "text-gray-700"} duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 ${isActive ? "text-orange-700" : "text-gray-700"} duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/github"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 ${isActive ? "text-orange-700" : "text-gray-700"} duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Github
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header

/*
    Anchor Tag vs Link Component:
    -----------------------------
    Anchor <a> tag: (Server-Side Scripting)
    ---------------------------------------
    When you anchor tag, it will send the HTTPS request to the server and server sends back the html file as a respone
    To load that file, page reloading will happen

    Link <Link> Component: (Client-Side Scripting)
    ----------------------------------------------
    When Link component is used, it will not send any request to the server, instead, it will go the link directly
    It uses Browser History API, and page reloading will not happen

    NavLink Component:
    ------------------
    - Similar to <Link>, but automatically applies an "active" class when the link is selected.
    - Useful for highlighting the currently active navigation item.
    - Can accept a function to apply custom styling based on the active state.
    - Here, styling is written inside the callback and that callback have one variable which tells whether the link is active or not
      Based on that, we can add the styling.

    <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
        Home
    </NavLink>
*/

/*
  {
    isActive: true,    // Whether the link is currently active
    isPending: false,  // For future support in React Router
    isTransitioning: false // For animated transitions
  }

  props passed to Navlink is the above Object, containing these values, 
  so proper syntax must be followed to destructure the object values

  Here you can clearly see that isActive is the property of an Object, Not any separate value,
  So, For destructuring the object property, ({isActive}) => {}
  Above syntax should be used
*/