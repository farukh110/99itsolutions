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
// import MainSlider from './components/MainSlider';
import OurGalleries from './components/OurGalleries';
import OurWork from './components/OurWork';
import Focused from './components/Focused';
import Counters from './components/Counters';
import Process from './components/Process';
import MainBanner from './components/MainBanner/MainBanner';

const Home = () => {

    return (
        <>
            <MainBanner />
            {/* <MainSlider /> */}
            <TextSlider />
            <Focused />
            <Features />
            <Counters />
            <OurServices />
            <Skills />
            <Process />
            <OurGalleries />
            <OurWork />
            {/* <Work /> */}
            <Technologies />
            <ContactForm />
            <Clients />
        </>
    )
}

export default Home;