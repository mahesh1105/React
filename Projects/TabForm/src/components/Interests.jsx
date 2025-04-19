const Interests = ({data, setData, errors}) => {
  // Object Destructuring
  const {interests} = data;

  const handleDataChange = (e, name) => {
    setData((prevState) => ({
      ...prevState,
      interests: e.target.checked 
        ? [...interests, name] 
        : prevState.interests.filter((i) => (i !== name))
    }));
  };

  return (
    <div>
      <h3 className="comp-head">Interests</h3>

      <div>
        <input 
          type="checkbox" 
          name="coding" 
          id="coding" 
          className="interests" 
          checked={interests.includes("coding")}
          onChange={(e) => handleDataChange(e, "coding")}
        />
        <label htmlFor="coding">Coding</label>

        <br />

        <input 
          type="checkbox" 
          name="cricket" 
          id="cricket" 
          className="interests"
          checked={interests.includes("cricket")} 
          onChange={(e) => handleDataChange(e, "cricket")}
        />
        <label htmlFor="cricket">Cricket</label>

        <br />

        <input 
          type="checkbox" 
          name="badminton" 
          id="badminton" 
          className="interests" 
          checked={interests.includes("badminton")}
          onChange={(e) => handleDataChange(e, "badminton")}
        />
        <label htmlFor="badminton">Badminton</label>

        <br />

        <input 
          type="checkbox" 
          name="writing" 
          id="writing" 
          className="interests" 
          checked={interests.includes("writing")}
          onChange={(e) => handleDataChange(e, "writing")}
        />
        <label htmlFor="writing">Writing</label>

        <br />

        <input 
          type="checkbox" 
          name="reading" 
          id="reading" 
          className="interests" 
          checked={interests.includes("reading")}
          onChange={(e) => handleDataChange(e, "reading")}
        />
        <label htmlFor="reading">Reading</label>

        {errors.interests && <span className="error-message">{errors.interests}</span>}
      </div>
    </div>
  )
}

export default Interests;
