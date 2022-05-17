import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import {HomeContainer, Home, Login} from './pages'
import "./App.css"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeContainer />}>
          <Route index element={<Home />} />
          <Route path='login' element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App