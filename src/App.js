import React, { useEffect } from "react";
import Navbar from "./components/navbar/Navbar";

import "./App.css";
import { Blog, Contact, Footer, Header, Portofolio } from "./containers";
import ReactGA from "react-ga";
import FixedInformations from "./components/fixed_informations/FixedInformations";
import Spinner from "./components/spinner/Spinner";
import MainProjects from "./containers/overview/MainProjects";

const App = () => {
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    ReactGA.initialize("UA-236024154-1");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      setLoading(true);
    };
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Navbar />
          <Header />
          <main>
            <MainProjects />
            <Portofolio />
            <Contact />
            <Blog />
            <FixedInformations />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
