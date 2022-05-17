import React from 'react'
import { Outlet } from 'react-router-dom'

const HomeContainer = () => {
  return (
    <div className='home'>
      <Outlet />
    </div>
  )
}

export default HomeContainer