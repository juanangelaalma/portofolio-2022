import React, { useState } from 'react'
import { MdOutlineArrowDropDown } from 'react-icons/md'

import SidebarToggle from './SidebarToggle'
import logo from "../../assets/png/logo.png"

const Navbar = ({ isActiveSidebar, setIsActiveSidebar }) => {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false)

  return (
    <nav className="bg-white w-100 border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
      <div className="container flex flex-wrap justify-between items-center">
        <div className='flex flex-row-reverse items-center gap-2'>
          <img className='max-w-[150px]' src={logo} alt="" />
          <div className='text-gray-400'>
            <SidebarToggle setIsActiveSidebar={setIsActiveSidebar} isActiveSidebar={isActiveSidebar} />
          </div>
        </div>
        <div className="md:block md:w-auto" id="mobile-menu">
          <ul className="flex flex-col md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li className='relative'>
              <button onClick={() => setIsOpenDropdown(!isOpenDropdown)} className="flex items-center justify-between w-full pr-2 font-medium text-gray-400 dark:hover:bg-gray-800 md:dark:hover:bg-transparent">
                <MdOutlineArrowDropDown size={30} />
              </button>
              { isOpenDropdown && (
                <div className="z-10 absolute top-8 right-4 font-serif bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                  <div className="py-1">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Sign out</a>
                  </div>
                </div>
              ) }
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar