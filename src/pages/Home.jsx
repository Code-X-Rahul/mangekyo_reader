import React, { useContext } from 'react'
import { useUser } from '../UserContext'

const Home = () => {
  const user = useContext(useUser)
  user && console.log(user);
  return (
    <div className='text-black'>
      user
    </div>
  )
}

export default Home