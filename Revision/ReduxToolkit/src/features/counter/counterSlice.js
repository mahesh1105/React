import { createSlice } from '@reduxjs/toolkit'

// Create the Initial State, which is basically an Object with required values
const initialState = {
  value: 0,
}

// Creating the Slice(Feature) for the Counter
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    resetState: (state) => {
      state.value = 0;
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, resetState } = counterSlice.actions

export default counterSlice.reducer

/*
  Creating the Slice or Feature for the Counter:
  ----------------------------------------------
  
  export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
      increment: (state) => {
        state.value += 1
      },
      decrement: (state) => {
        state.value -= 1
      },
      incrementByAmount: (state, action) => {
        state.value += action.payload
      },
    },
  })

  After the above line, counterSlice will look like below:
  --------------------------------------------------------
  
  counterSlice = {
    name: 'counter',
    reducer: function,    // 🔥 This function knows how to handle actions and update the state
    actions: {
      increment,
      decrement,
      incrementByAmount,
    }
  }

  Ques: Why initialState is not there in counterSlice(Feature)?
  -------------------------------------------------------------

  ✅ initialState is INTERNALLY used when the reducer function is created.
  ✅ When createSlice runs, it creates a reducer like:

  function reducer(state = initialState, action) {
    // internally uses initialState if state is undefined
  }

  ➡️ So initialState is baked inside the reducer function automatically.
  ➡️ You don’t need to separately store it — it becomes part of reducer's logic.

  That's why you can't see it anymore inside counterSlice, but it's still there inside the reducer function.

  Note:
  -----
  - Reducer is basically a function which needs an action as parameter and for state, it will take the initialState by default.
  - Actions array contains a bunch of actions that can be passed to the reducer for its execution. Reducer will handle all the actions.

  🎨 Super Simple Real-Life Example:
  ==================================
  Imagine:
  --------
  - You have a TV remote.
  - The remote has many buttons (volume up, volume down, change channel, etc.).
  - But inside the TV, there is one main brain (reducer) that reads all the buttons and acts accordingly.
  - The starting TV settings (volume=0, channel=1) is the initialState.

  ✅ Multiple buttons (actions)
  ✅ One TV brain (reducer)
  ✅ One starting TV state (initialState)

  Important:
  ----------

  In JavaScript ES6, There are two types of Export:
  1. Default Export - Export ONE main thing from a file
  2. Named Export - Export MULTIPLE things from a file


  🎯 So why do we need a default export?
  ======================================
  Here’s the logic:

  ✅ When your file has one main responsibility,
  ✅ It makes sense to export it as default — because that's the "main thing" from that file.

  👉 It says: "Hey, when someone imports from me, THIS is the main thing they should get."

  📦 Quick Concept:
  -----------------
  ✅ In JavaScript, when you export default something,
  ✅ When you import, you can give it ANY NAME you want.

  The export name and import name DO NOT need to match for default exports.

  Example for below questions:
  ----------------------------
  function reducer(state = initialState, action) {
    // internally uses initialState if state is undefined
  }

  Ques: How state parameter is handled by the functions/reducer?
  --------------------------------------------------------------
  ✅ state is the current value of the slice of Redux store
  ✅ It's just an object (your initialState structure)

  ** When you create the slice, you defined:

  const initialState = {
    value: 0
  }

  ** So here, initially:

  state = {
    value: 0
  }

  That's why "state.value" will give you the required value

  Ques: How action parameter is handled by the functions/reducer?
  ---------------------------------------------------------------
  ✅ action is an object which has:
  - type: What kind of action it is (like "counter/incrementByAmount")
  - payload: The extra data you are sending

  Example:
  --------
  {
    type: 'counter/incrementByAmount', // featureName/ActionName
    payload: 5
  }

  That's why upon giving "action.payload" will give you the actual data which you need

*/