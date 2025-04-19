const Settings = ({data, setData, errors}) => {
  // Object Destructuring
  const {theme} = data;

  const handleDataChange = (e, val) => {
    setData((prevState) => ({
      ...prevState,
      theme: val
    }))
  }

  return (
    <div>
      <h3 className="comp-head">Settings</h3>

      <div>
        <input 
          type="radio" 
          name="theme" 
          id="light" 
          className="settings" 
          checked={theme === "light"}
          onChange={(e) => handleDataChange(e, "light")}
        />
        <label htmlFor="light">Light</label>

        <br />

        <input 
          type="radio" 
          name="theme" 
          id="dark" 
          className="settings" 
          checked={theme === "dark"}
          onChange={(e) => handleDataChange(e, "dark")}
        />
        <label htmlFor="dark">Dark</label>
      </div>
    </div>
  )
}

export default Settings;
