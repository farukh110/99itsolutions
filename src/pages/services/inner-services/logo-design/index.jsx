import React from 'react'
import Banner from '../web-development/Banner/Banner';

import logoDesignService from '../../../../assets/images/logo-design/logo.png';

import webServices from '../../../../assets/images/logo-design/logo-design2.png';
import AboutDetails from '../web-development/AboutDetails/AboutDetails';
import Skills from '../../../Home/components/Skills/Skills';
import newTech from '../../../../assets/images/logo-design/logo-design1.jpg';
import OurWork from '../../../Home/components/OurWork';
import ContactForm from '../../../Home/components/ContactForm/ContactForm';
import Technologies from '../../../Home/components/Techologies/Technologies';


const LogoDesign = () => {

    const bannerContent = `We consistently deliver distinctive designs, serving as a simple yet powerful visual identifier for your company, product, or service, crafted by an award-winning designer.`;

    let leftText = [
        {
            id: 1, title: 'Plan',
            point: `Crafting ideas`
        },
        {
            id: 2, title: 'Design',
            point: `Bringing concepts to life visually`
        },
        {
            id: 3, title: 'Refine',
            point: `Even if your logo design feels flawless, someone might seek adjustments.`
        },
        {
            id: 4, title: 'Delivery',
            point: `Now, it's time to deliver your finalized files!`
        },
    ];

    const imgStyle = {

        objectFit: 'cover',
        height: '40vh',
        width: '100%'
    }

    return (
        <>
            <Banner
                bannerHeading1='Allow Your Logo to'
                bannerHeading2='Convey Your Message.'
                bannerContent={bannerContent}
                bannerImage={logoDesignService}
            />
            <h2 className='text-center fw-bolder mt-md-5 mb-md-4'>Elevate Your Brand with Our Logo Design Services.</h2>
            <Skills
                leftImage={newTech}
                ImgStyle={imgStyle}
                smallContent="Your logo is the face of your brand, and we understand the importance of 
                creating a distinctive and comprehensive visual representation for your business. 
                Our designers specialize in crafting creative concepts, illustration logo designs, 
                iconic logos, wordmarks, abstract designs, 2D logos, 3D logos, and even animated logos. 
                Trust us to bring a unique identity to your business through our diverse and creative 
                logo design offerings."
                leftPoints={[]}
                rightPoints={[]} />

            <AboutDetails
                leftImage={webServices}
                smallContent="
                <h2 class='fw-bolder'> It's not just about the concept; </h2> 
                <h1 class='fw-bolder mb-md-2'> it's about bringing ideas to life. </h1> 
                Whether it's a modest logo project or an ambitious app development <br/> endeavour, we adhere to our proven process.

                "
                leftPoints={leftText}
                rightPoints={[]} />
            <OurWork />
            <ContactForm customPadding="ps-0 pe-0" />
            <Technologies />
        </>
    )
}

export default LogoDesign;