import Profile from './Profile'
import Interests from './Interests'
import Settings from './Settings'
import { useState } from 'react'

const TabForm = () => {
  // Central Storage to manage the User Data
  const [data, setData] = useState({
    name: "",
    age: 0,
    email: "",
    interests: [],
    theme: "dark"
  });

  // State to keep the track of Active Tab
  const [activeTab, setActiveTab] = useState(0);

  // State to keep track of the errors
  const [errors, setErrors] = useState({});

  // Array for Config-Driven UI
  const tabs = [
    {
      name: "Profile",
      component: Profile,
      validate: () => {
        const err = {};

        if(!data.name || data.name.length < 2)
          err.name = "Name is not valid";

        if(!data.age || data.age < 18)
          err.age = "Age is not valid";

        if(!data.email || data.email.length < 2)
          err.email = "Email is not valid";

        setErrors(err);

        // return (err.name || err.age || err.email) ? false : true;
        return Object.keys(err).length === 0;
      }
    },
    {
      name: "Interests",
      component: Interests,
      validate: () => {
        const err = {};

        if(data.interests.length === 0) {
          err.interests = "Select atleast One Interest";
        }

        setErrors(err);

        // return (err.interests) ? false : true;
        return Object.keys(err).length === 0;
      }
    },
    {
      name: "Settings",
      component: Settings,
      validate: () => {
        return true;
      }
    }
  ];

  // Create a variable to store the reference to Current Component
  const ActiveComponent = tabs[activeTab].component;

  // Handle Prev Click
  const handlePrevClick = () => {
    if(tabs[activeTab].validate() === true) {
      // Note setActiveTab or functions like these for setting the state behaves asynchronously
      // If you use activeTab state variable, there can be the chances that it will be stale or not the latest value
      setActiveTab((state) => state - 1);
    }
  }

  // Handle Next Click
  const handleNextClick = () => {
    if(tabs[activeTab].validate() === true) {
      // If multiple functions like these are fired at the same time, then as you know it behaves asynchronously
      // And if you use activeTab then it might use the same value for multiple calls, resulting in undefined or unexpected behavior
      setActiveTab((state) => state + 1);
    }
  }

  // Handle Submit
  const handleSubmitClick = () => {
    // Make API Call
    console.log(data);
  }

  return (
    <div className='main-container'>
      <div className='heading-container'>
        {tabs.map((tab, ind) => {
          return (
            <h2 
              key={ind} 
              className='heading' 
              onClick={() => {
                if(tabs[activeTab].validate() === true)
                  setActiveTab(ind);
              }}
            >
              {tab.name}
            </h2>
          )
        })}
      </div>
      
      <div className="tab-body">
        <ActiveComponent key={activeTab} data={data} setData={setData} errors={errors}/>
      </div>

      <div className='button-cont'>
        {activeTab !== 0 && <button onClick={handlePrevClick} >Prev</button>}
        {activeTab !== tabs.length -1 && <button onClick={handleNextClick} >Next</button>}
        {activeTab === tabs.length -1 && <button onClick={handleSubmitClick} >Submit</button>}
      </div>
    </div>
  )
}

export default TabForm;

/*
  Whenever you are using a map, always use key prop while rendering the element, so that react can differentiate between the elements
  onClick will take the callback, not the function reference
*/
