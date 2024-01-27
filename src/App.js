import React from 'react';
import { Route, Routes } from "react-router-dom";
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './pages/Home/Home';
import AboutSix from './pages/About/AboutSix';
import Contact from './pages/Contact';
import ServiceTwo from './pages/services/ServiceTwo';
// import ServiceSix from './pages/services/ServiceSix/index';
import PortfolioPage from './pages/Portfolio/PortfolioPage';
import RequestDemo from './pages/RequestQuote';
import WebDevelopment from './pages/services/inner-services/web-development';
import LogoDesign from './pages/services/inner-services/logo-design';
import Branding from './pages/services/inner-services/branding';
import AppDevelopment from './pages/services/inner-services/app-development';
import VideoAnimation from './pages/services/inner-services/video-animation';
import ContentWriting from './pages/services/inner-services/content-writing';
import Seo from './pages/services/inner-services/seo';

const App = () => {

  return (
    <>
      <Header />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about-us" element={<AboutSix />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/services" element={<ServiceTwo />} />
        <Route exact path="/services/web-development" element={<WebDevelopment />} />
        <Route exact path="/services/logo-design" element={<LogoDesign />} />
        <Route exact path="/services/branding" element={<Branding />} />
        <Route exact path="/services/app-design-and-development" element={<AppDevelopment />} />
        <Route exact path="/services/video-animation" element={<VideoAnimation />} />
        <Route exact path="/services/content-writing" element={<ContentWriting />} />
        <Route exact path="/services/seo" element={<Seo />} />
        <Route exact path="/portfolio" element={<PortfolioPage />} />
        <Route exact path="/get-free-quote" element={<RequestDemo />} />

      </Routes>
      <Footer />

    </>
  )
}

export default App; 