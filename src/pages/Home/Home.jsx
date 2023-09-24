import React from 'react';
// import About from './components/About';
import Features from './components/Features';
// import Gallery from './components/Gallery';
// import Hero from './components/Hero';
// import Pricing from './components/Pricing';
// import Services from './components/Services';
import Technologies from './components/Technologies';
import TextSlider from './components/TextSlider';
// import FullSlider from './components/FullSlider';
import Skills from './components/Skills';
import OurServices from './components/OurServices';
import ContactForm from './components/ContactForm';
// import OurItSolutions from './components/OurItSolutions';
import Clients from './components/Clients';
import MainSlider from './components/MainSlider';
import OurGalleries from './components/OurGalleries';
import OurWork from './components/OurWork';
import Focused from './components/Focused';
import Counters from './components/Counters';
import Process from './components/Process';
import FibonacciSphere from './components/FibonacciSphere/FibonacciSphere';
// import MainBanner from './components/MainBanner/MainBanner';

const Home = () => {

    return (
        <>
            {/* <MainBanner /> */}
            <FibonacciSphere />
            {/* <MainSlider /> */}
            <TextSlider />
            <OurServices />
            <Skills />
            <Focused />
            <Features />
            <Process />
            <Counters />
            <OurWork />
            <OurGalleries />
            {/* <Work /> */}
            {/* <Technologies /> */}
            <ContactForm customPadding="ps-0 pe-0" />
            <Clients />
        </>
    )
}

export default Home;