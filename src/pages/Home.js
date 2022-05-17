import React from 'react'
import { Navbar } from '../components'
import { Contact, Footer, Header, Portofolio } from '../containers'

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <main>
        <Portofolio />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default Home