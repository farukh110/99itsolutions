import React from 'react'
import Banner from '../web-development/Banner/Banner';

import webDevService from '../../../../assets/images/services/main-services/dev.jpg';

import webServices from '../../../../assets/images/services/web-development-banner.jpg';
import AboutDetails from '../web-development/AboutDetails/AboutDetails';
import Skills from '../../../Home/components/Skills/Skills';
import newTech from '../../../../assets/images/services/new-technology.jpg';
// import OurWork from '../../../Home/components/OurWork';
import ContactForm from '../../../Home/components/ContactForm/ContactForm';
import Technologies from '../../../Home/components/Techologies/Technologies';


const ContentWriting = () => {

    const bannerContent = `Content is the backbone of effective communication in the digital age. At Creative 99iTSolutions, we understand the pivotal role that compelling content plays in capturing your audience's attention and driving engagement. As a rapidly growing content writing agency, we take pride in providing innovative ideas that not only enhance your business but also captivate your audience and keep them connected to your website and desired pages.`;

    let leftText = [
        {
            id: 1, title: 'Concept & Brief:',
            point: `We collaborate with you to understand your content goals, target audience, and key messaging.`
        },
        {
            id: 2, title: 'Research & Strategy:',
            point: `Conducting thorough research and developing a strategic plan to ensure your content resonates with your audience.`
        },
        {
            id: 3, title: 'Writing & Editing:',
            point: `Crafting high-quality, engaging content that aligns with your brand voice and objectives.`
        },
        {
            id: 4, title: 'Delivery:',
            point: `Your polished and impactful content is ready to captivate your audience.`
        },

        {
            id: 5, title: null,
            point: `Ready to enhance your online presence with powerful and engaging content? Let's tell your brand story in a way that leaves a lasting impression.`
        },

    ];

    let leftPoints = [
        {
            id: 1, point: 'Blog Posts and Articles'
        },
        {
            id: 2, point: 'Website Content'
        },
        { id: 3, point: 'SEO Content' },
        {
            id: 4, point: 'Social Media Content'
        },
        {
            id: 5, point: 'Press Releases'
        },
        {
            id: 6, point: 'Product Descriptions'
        },
        {
            id: 7, point: 'Copywriting'
        },
        {
            id: 8, point: 'Email Campaigns'
        },

    ];

    const imgStyle = {

        objectFit: 'cover',
        height: '55vh',
        width: '100%'
    }

    return (
        <>
            <Banner
                bannerHeading1='Elevate Your Brand with the Premier'
                bannerHeading2='Content Writing Services.'
                bannerContent={bannerContent}
                bannerImage={webDevService}
            />
            <h2 className='text-center fw-bolder mt-md-5 mb-md-4'>Content Writing Services:</h2>
            <Skills
                leftImage={newTech}
                ImgStyle={imgStyle}
                smallContent="Explore our comprehensive range of content writing services designed to meet your diverse needs."
                leftPoints={leftPoints}
                rightPoints={[]} />

            <AboutDetails
                leftImage={webServices}
                smallContent="
                <h2 class='fw-bolder'> Conceptualize and Craft with Our Experts: </h2> 
                Whether it's a simple logo design or an extensive app development venture, we follow a proven process to transform your ideas into compelling written narratives.
                "
                leftPoints={leftText}
                rightPoints={[]} />
            {/* <OurWork /> */}

            <ContactForm customPadding="ps-0 pe-0" />
            <Technologies />
        </>
    )
}

export default ContentWriting;