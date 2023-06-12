import React, { useContext } from 'react'
import { useAuth } from '../UserContext'


const Home = () => {
  const user = useAuth()
  user && console.log(user);
  return (
    <div className='text-black'>
      <h1 className='text-4xl font-bold'>Home</h1>
    </div>
  )
}

export default Home