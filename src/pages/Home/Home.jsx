import React from 'react';
// import About from './components/About';
// import Gallery from './components/Gallery';
// import Hero from './components/Hero';
// import Pricing from './components/Pricing';
// import Services from './components/Services';
// import Technologies from './components/Technologies';
// import FullSlider from './components/FullSlider';
import OurServices from './components/OurServices';
// import OurItSolutions from './components/OurItSolutions';
// import MainSlider from './components/MainSlider';
import OurGalleries from './components/OurGalleries';
import OurWork from './components/OurWork';
import Counters from './components/Counters';
import FibonacciSphere from './components/FibonacciSphere/FibonacciSphere';
// import MainBanner from './components/MainBanner/MainBanner';
import brain from '../../assets/images/services/brain1.jpg';
import Focused from './components/Focused/Focused';
import Process from './components/Process/Process';
import Skills from './components/Skills/Skills';
import Features from './components/Features/Features';
import Clients from './components/Clients/Clients';
import TextSlider from './components/TextSlider/TextSlider';
import ContactForm from './components/ContactForm/ContactForm';


const Home = () => {

    let leftPoints = [
        { id: 1, point: 'Understanding your requirements fully.' },
        { id: 2, point: 'Prompt and effective communication by our business coordinators.' },
        { id: 3, point: 'Utilization of the latest tools and software.' },
        { id: 4, point: 'Personalized attention with dedicated Project Managers.' },
        { id: 5, point: 'Timely delivery of high-quality work.' },
    ];

    let rightPoints = [
        { id: 1, point: 'Budget-friendly solutions.' },
        { id: 2, point: 'Building long-term relationships with clients.' },
        { id: 3, point: 'Working together for your greatest benefit.' },
        { id: 4, point: 'Experience creativity, reliability, and customer-centricity.' },
        { id: 5, point: '100% Satisfaction Guarantee.' }
    ];

    const imgStyle = {

        objectFit: 'cover',
        height: '60vh'
    }

    return (
        <>
            {/* <MainBanner /> */}
            <FibonacciSphere />
            {/* <MainSlider /> */}
            <TextSlider />
            <OurServices />
            <Skills
                ImgStyle={imgStyle}
                leftImage={brain}
                smallContent='At 99iTsolutions, we serve as a focal point for representing your ideas and concepts, ensuring they are transformed into visually meaningful results. Our teams solve complex and sophisticated problems with highly advanced digital solutions and a streamlined production process. Here are some key features we offer:'
                leftPoints={leftPoints}
                rightPoints={rightPoints} />
            <Focused />
            <Features />
            <Process />
            <Counters />
            <OurWork isLogoDesignPage={true} isWebPage={true} isMobilePage={true} isGraphicDesignPage={true} />
            <OurGalleries />
            {/* <Work /> */}
            {/* <Technologies /> */}
            <ContactForm customPadding="ps-0 pe-0" />
            <Clients />
        </>
    )
}

export default Home;