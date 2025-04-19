const Profile = ({data, setData, errors}) => {
  // Object Destructuring
  const {name, age, email} = data;

  const handleDataChange = (e, item) => {
    setData((prevState) => ({
      ...prevState,
      [item]: e.target.value
    }));
  };

  return (
    <div>
      <h3 className="comp-head">Profile</h3>

      <label htmlFor="user-name">Name : </label>
      <input 
        type="text" 
        name="user-name" 
        value={name} 
        id="user-name" 
        className="input-data" 
        onChange={(e) => handleDataChange(e, "name")}
      />
      {errors.name && <span className="error-message">{errors.name}</span>}

      <br />

      <label htmlFor="user-age">Age : </label>
      <input 
        type="number" 
        name="user-age" 
        value={age} 
        id="user-age" 
        className="input-data" 
        onChange={(e) => handleDataChange(e, "age")}
      />
      {errors.age && <span className="error-message">{errors.age}</span>}

      <br />

      <label htmlFor="user-email">Email : </label>
      <input 
        type="text" 
        name="user-email" 
        value={email} 
        id="user-email" 
        className="input-data" 
        onChange={(e) => handleDataChange(e, "email")}
      />
      {errors.email && <span className="error-message">{errors.email}</span>}
    </div>
  )
}

export default Profile;
