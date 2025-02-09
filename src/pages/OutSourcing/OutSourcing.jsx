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
import CustomHeading from '../../components/heading/CustomHeading';

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

            <div className='container mb-md-5'>
                <CustomHeading
                    firstWord="99 IT Solutions - Your Trusted"
                    lastWord="Technology Partner"
                    textCenter="text-center"
                />
                <p>

                    Since 2015, we have been running 99 IT Solutions that provides a full range of IT services, including Logo designing, domain, hosting, Animation Services, web designing and software development, digital marketing and customer support. We strive to provide the latest technology and best customer service to meet the needs of all my clients.
                    We have a team of professional developers, designers and digital marketers who have great experience and expertise in their respective fields. We have a good track record of successfully completing the projects on time and within the budget. We focus on quality work and customer satisfaction. We also provide training and support to our customers.
                    <br /><br />
                    We are continuously striving to maintain our place in the market and stay ahead of the competition by providing excellent services to our clients. We are always looking for ways to improve our services and provide the best service to our clients.
                    <br /><br />
                    To boost the business, We also provide some digital marketing services to our clients. We have expertise in SEO, PPC, Content Marketing, Social Media Marketing and Email Marketing services. We provide complete digital marketing solutions for our clients.
                </p>
            </div>
            <VerticalSlider />

        </>
    )
}

export default OutSourcing;
