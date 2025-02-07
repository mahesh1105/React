import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
      e.preventDefault()
      setUser({username, password})
      document.getElementById('input-user').value = ""
      document.getElementById('input-pass').value = ""
    }

  return (
    <div>
        <h2 className='text-center m-10 text-3xl'>Login</h2>
        <input 
            type='text' 
            placeholder='username' 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className='bg-gray-800 ml-190 p-1 rounded'
            id="input-user"
        />
        <input 
            type='text' 
            placeholder='password' 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='bg-gray-800 ml-5 p-1 rounded'
            id="input-pass"
        />
        <button 
            onClick={handleSubmit}
            className='bg-purple-700 p-2 ml-5 rounded-xl'
        >
            Submit
        </button>
    </div>
  )
}

export default Login