import React from 'react'
import Banner from '../web-development/Banner/Banner';

import branding from '../../../../assets/images/branding/Branding.png';

import webServices from '../../../../assets/images/branding/brand-management-guide.png';
import AboutDetails from '../web-development/AboutDetails/AboutDetails';
import Skills from '../../../Home/components/Skills/Skills';
import brand from '../../../../assets/images/branding/branding1.png';
// import OurWork from '../../../Home/components/OurWork';
import ContactForm from '../../../Home/components/ContactForm/ContactForm';
import Technologies from '../../../Home/components/Techologies/Technologies';
import CustomHeading from '../../../../components/heading/CustomHeading';


const Branding = () => {

    const bannerContent = `At 99 iT Solutions, we specialize in crafting dynamic brands 
    that resonate with your ideal clients and extend your business reach to connect 
    with more customers.
`;

    let leftText = [
        {
            id: 1, title: 'Plan:',
            point: `Conceptualize ideas`
        },
        {
            id: 2, title: 'Design:',
            point: `Illustrate the concept`
        },
        {
            id: 3, title: 'Refine:',
            point: `No design is perfect, someone might request changes`
        },
        {
            id: 4, title: 'Deliver:',
            point: `Time to deliver your final files!`
        },

        {
            id: 4, title: null,
            point: `Let's collaborate to build a brand that truly speaks to your audience and sets your business apart.`
        },

    ];

    let leftPoints = [
        {
            id: 1, point: 'Creative Concepts'
        },
        {
            id: 2, point: 'Business Cards'
        },
        { id: 3, point: 'Letterheads' },
        { id: 4, point: 'Brochures' },
        {
            id: 5, point: 'Posters'
        },
        {
            id: 6, point: 'Flyers'
        },
        { id: 7, point: 'Envelopes' },

        { id: 8, point: 'T-Shirts & Caps' },
    ];

    const imgStyle = {

        objectFit: 'scale-down',
        height: '60vh',
        width: '100%'
    }

    return (
        <>
            <Banner
                bannerHeading1='Building'
                bannerHeading2='Brand With Motive And Devotion'
                bannerContent={bannerContent}
                bannerImage={branding}
            />
            <CustomHeading
                firstWord="Brand Design"
                lastWord="Services:"
                textCenter="text-center"
            />
            <Skills
                leftImage={brand}
                ImgStyle={imgStyle}
                smallContent="We create brands that reflect your business's true colors. Our comprehensive 
                branding approach ensures that your business projects the right identity. Our designers 
                bring your brand to life with:"
                leftPoints={leftPoints}
                rightPoints={[]} />

            <AboutDetails
                leftImage={webServices}
                smallContent="
                <h2 class='fw-bolder'> Smart Logo <span style='color: #FF9900'> Designs: </span> </h2> 
                Whether it's a simple logo design project or an extensive app 
                development venture, we follow a time-tested process. Our flexible 
                roadmap adapts to your business needs and objectives.
                "
                leftPoints={leftText}
                rightPoints={[]} />
            {/* <OurWork /> */}
            <ContactForm customPadding="ps-0 pe-0" />
            <Technologies />
        </>
    )
}

export default Branding;