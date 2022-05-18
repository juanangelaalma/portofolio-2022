import React, { useState } from "react";

import { AiFillDashboard } from 'react-icons/ai'
import { FaProjectDiagram } from 'react-icons/fa'
import { IoMdPaper } from 'react-icons/io'

const Sidebar = ({ isActiveSidebar }) => {
  return (
    <aside className={`w-64 duration-500${isActiveSidebar ? '' : ' ml-[-100%]'}`} aria-label="Sidebar">
      <div className="overflow-y-auto py-4 pt-10 h-screen px-3 bg-gray-50 rounded dark:bg-gray-800">
        <ul className="space-y-2 font-serif">
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <AiFillDashboard className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
              <span className="ml-3">Dashboard</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <FaProjectDiagram className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
              <span className="flex-1 ml-3 whitespace-nowrap">Projects</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <IoMdPaper className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
              <span className="flex-1 ml-3 whitespace-nowrap">Posts</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
