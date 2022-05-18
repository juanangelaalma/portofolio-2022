import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import {HomeContainer, Home, Login, AdminContainer, Dashboard} from './pages'
import "./App.css"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeContainer />}>
          <Route index element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='admin' element={<AdminContainer />}>
            <Route index element={<Dashboard />} />  
            <Route path='dashboard' element={<Dashboard />} />
          </Route> 
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App