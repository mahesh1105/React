import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice' // Importing the default export from the file
import authReducer from '../features/auth/authSlice'          // Importing the default export from the file

// This will create the redux store
export const store = configureStore({
  reducer: {
		// Syntax: featureName: reducerName
    counter: counterReducer, // Register the reducer for counter in store
		auth: authReducer,       // Register the reducer for auth in store
  },
})

/*
	Redux:
	------
	Redux is a state management library.
	It manages data (state) for your entire app in one central place.

	State means data like:
	- Login status
	- Counter value
	- List of products in a cart

	** Instead of passing data manually between components (parent → child → grandchild), Redux makes it global — so any component can access it easily.

	📦 What is a Store?
	-------------------
	- A store is an object that holds your entire app’s state.
	- You create a store using configureStore() from Redux Toolkit.
	- You tell the store how to manage the state by giving it reducers.

	🧩 Now what is a Reducer?
	- A reducer is just a function that:
	--> Takes the current state and an action
	--> Returns the new state based on what the action says.

	** Note:
	--------
	- Create different files for each slice:
	--> Like one for Counter - for managing the count
	--> Other for Authentication - for managing the login/logout

	Important:
	----------
	- Create one slice per feature.
	- Combine all slices inside configureStore().
	- Your app becomes super clean, easy to debug, and easy to extend later.

	Note:
	-----
	- State can only be altered by the reducers, not directly
*/