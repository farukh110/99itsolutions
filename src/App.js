import React from 'react';
import { Route, Routes } from "react-router-dom";
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './pages/Home/Home';
import AboutSix from './pages/About/AboutSix';
import Contact from './pages/Contact';
import ServiceTwo from './pages/services/ServiceTwo';
import ServiceSix from './pages/services/ServiceSix/index';
import PortfolioPage from './pages/Portfolio/PortfolioPage';
import RequestDemo from './pages/RequestQuote';

const App = () => {

  return (
    <>
      <Header />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about-us" element={<AboutSix />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/services" element={<ServiceTwo />} />
        <Route exact path="/services/software-development" element={<ServiceSix />} />
        <Route exact path="/portfolio" element={<PortfolioPage />} />
        <Route exact path="/get-free-quote" element={<RequestDemo />} />

      </Routes>
      <Footer />

    </>
  )
}

export default App; 