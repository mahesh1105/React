import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
  const {user} = useContext(UserContext)

  if(!user) return <div className='text-center pt-5 text-xl'>Please Login</div>

  return <div className='text-center pt-5 text-xl'>Welcome {user.username}</div>
}

export default Profile