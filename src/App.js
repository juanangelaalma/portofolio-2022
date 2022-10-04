import React, {useEffect} from 'react'
import Navbar from './components/navbar/Navbar'

import "./App.css"
import { Blog, Contact, Footer, Header, Portofolio } from './containers'
import ReactGA from 'react-ga';
import FixedInformations from "./components/fixed_informations/FixedInformations";

const App = () => {
  useEffect(() => {
    ReactGA.initialize('UA-236024154-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [])
  
  return (
    <div className='App'>
      <Navbar />
      <Header />
      <main>
        <Portofolio />
        <Contact />
        <FixedInformations />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}

export default App