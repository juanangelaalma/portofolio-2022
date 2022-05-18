import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'

const Menu = () => {
  const [isActiveSidebar, setIsActiveSidebar] = useState(true);
  return (
    <div className='flex flex-col'>
      <Navbar isActiveSidebar={isActiveSidebar} setIsActiveSidebar={setIsActiveSidebar} />
      <Sidebar isActiveSidebar={isActiveSidebar} />
    </div>
  )
}

export default Menu