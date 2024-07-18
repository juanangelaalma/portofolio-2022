import React, { useEffect, useState } from "react";
import Navbar from "./components/navbar/Navbar";

import "./App.css";
import { Blog, Contact, Footer, Header, Portofolio } from "./containers";
import ReactGA from "react-ga";
import FixedInformations from "./components/fixed_informations/FixedInformations";
import Spinner from "./components/spinner/Spinner";
import MainProjects from "./containers/overview/MainProjects";
import ModalPreview from "./components/modal-preview/ModalPreview";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [previewToShow, setPreviewToShow] = useState(null)
  const [modalPreviewOpen, isModalPreviewOpen] = useState(false)

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

  const handlePreviewClick = (project) => {
    document.body.classList.add('disable-scrolling');
    setPreviewToShow(project)
    isModalPreviewOpen(true)
  }

  const handleClosePreview = () => {
    document.body.classList.remove('disable-scrolling');
    isModalPreviewOpen(false)
  }

  return (
    <div className="App">
      {loading ? (
        <Spinner />
      ) : (
        <>
          <ModalPreview handleClosePreview={handleClosePreview} preview={previewToShow} isOpen={modalPreviewOpen} />
          <Navbar />
          <Header />
          <main>
            <MainProjects handlePreviewClick={handlePreviewClick} />
            <Portofolio handlePreviewClick={handlePreviewClick} />
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
