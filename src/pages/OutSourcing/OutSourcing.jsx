import React from 'react';
import HomeBannerTwo from '../Home/components/HomeBannerTwo/HomeBannerTwo';
import ProductsCatalog from '../Home/components/ProductsCatalog/ProductsCatalog';
import MainServices from '../services/components/MainServices/MainServices';
import Focused from '../Home/components/Focused/Focused';
import Process from '../Home/components/Process/Process';
import ContactForm from '../Home/components/ContactForm/ContactForm';
import VerticalSlider from '../Home/components/vertical-slider/VerticalSlider';
import Technologies from '../Home/components/Techologies/Technologies';
import OutSourcingService from './components/OutSourcingService/OutSourcingService';

const OutSourcing = () => {
    return (
        <>
            <HomeBannerTwo />
            <MainServices />
            <ProductsCatalog />
            <Focused />
            <Process />
            <Technologies />
            <ContactForm customPadding="ps-0 pe-0" />
            <OutSourcingService />
            <VerticalSlider />
        </>
    )
}

export default OutSourcing;
