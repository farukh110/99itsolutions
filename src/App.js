import React, { Suspense, lazy } from 'react';
import { Route, Routes } from "react-router-dom";
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import ShimmerOverlay from './components/general/ShimmerOverlay';

// Lazy load the components
const Home = lazy(() => import('./pages/Home/Home'));
const AboutSix = lazy(() => import('./pages/About/AboutSix'));
const Contact = lazy(() => import('./pages/Contact'));
const ServiceTwo = lazy(() => import('./pages/services/ServiceTwo'));
const PortfolioPage = lazy(() => import('./pages/Portfolio/PortfolioPage'));
const RequestDemo = lazy(() => import('./pages/RequestQuote'));
const WebDevelopment = lazy(() => import('./pages/services/inner-services/web-development'));
const LogoDesign = lazy(() => import('./pages/services/inner-services/logo-design'));
const Branding = lazy(() => import('./pages/services/inner-services/branding'));
const AppDevelopment = lazy(() => import('./pages/services/inner-services/app-development'));
const VideoAnimation = lazy(() => import('./pages/services/inner-services/video-animation'));
const ContentWriting = lazy(() => import('./pages/services/inner-services/content-writing'));
const Seo = lazy(() => import('./pages/services/inner-services/seo'));
const OutSourcing = lazy(() => import('./pages/OutSourcing/OutSourcing'));

const App = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<ShimmerOverlay />}>
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
          <Route exact path="/outsourcing" element={<OutSourcing />} />
          <Route exact path="/portfolio" element={<PortfolioPage />} />
          <Route exact path="/get-free-quote" element={<RequestDemo />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
