import React from 'react'
import Navbar from './components/navbar/Navbar'

import "./App.css"
import { Header } from './containers'

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Header />
    </div>
  )
}

export default App