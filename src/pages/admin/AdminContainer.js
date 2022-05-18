import React from 'react'
import { Outlet } from 'react-router-dom'
import "./admin.css"

const AdminContainer = () => {
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default AdminContainer