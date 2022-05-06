import React from 'react'
import Navbar from './components/navbar/Navbar'

import "./App.css"
import { Contact, Header, Portofolio } from './containers'

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Header />
      <main>
        <Portofolio />
        <Contact />
      </main>
    </div>
  )
}

export default App