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


const VideoAnimation = () => {

    const bannerContent = `Video marketing has soared from 63% to an impressive 81%, 
    and at 99iTSolutions, we're here to provide you with innovative ideas that not 
    only elevate your business but also captivate your audience and keep them 
    engaged with your website and desired pages. With hands-on experience in crafting 
    the liveliest animations, we take pride in being the go-to video animation 
    agency for dynamic visual storytelling.`;

    let leftText = [
        {
            id: 1, title: 'Concept & Script:',
            point: `We collaborate with you to understand the video's purpose, product features, target audience, and more.`
        },
        {
            id: 2, title: 'Voiceover & Storyboard:',
            point: `Choosing the perfect voice and crafting a compelling narrative that aligns with your brand tone.`
        },
        {
            id: 3, title: 'Illustrations & Animation:',
            point: `Creating vibrant and informative illustrations to bring your ideas to life.`
        },
        {
            id: 4, title: 'Delivery:',
            point: `Your explainer video is ready to charm the audience. Ready to bring your ideas to life through captivating animations? Let's make your brand story unforgettable.`
        },

    ];

    let leftPoints = [
        {
            id: 1, point: '2D Animations'
        },
        {
            id: 2, point: '3D Animations'
        },
        { id: 3, point: 'Character Animations' },
        {
            id: 4, point: 'Explanatory Videos'
        },
        {
            id: 5, point: 'Motion Graphics'
        },
        {
            id: 6, point: 'Whiteboard Videos'
        },

    ];

    const imgStyle = {

        objectFit: 'cover',
        height: '50vh',
        width: '100%'
    }

    return (
        <>
            <Banner
                bannerHeading1='Ignite Your Brand with the Fastest'
                bannerHeading2='Growing Video Animation Agency:'
                bannerContent={bannerContent}
                bannerImage={webDevService}
            />
            <h2 className='text-center fw-bolder mt-md-5 mb-md-4'>Video Animation Services:</h2>
            <Skills
                leftImage={newTech}
                ImgStyle={imgStyle}
                smallContent="Explore our full suite of 3D animation services, producing both graphic and photorealistic styles. Our advanced capabilities include 360° interactive product spins, machine rigging, industrial modeling, and product process simulation."
                leftPoints={leftPoints}
                rightPoints={[]} />

            <AboutDetails
                leftImage={webServices}
                smallContent="
                <h2 class='fw-bolder'> Conceptualize and Animate with Our Experts: </h2> 
                Whether it's a straightforward logo design or an extensive app development venture, we follow a proven process to breathe life into your ideas.
                "
                leftPoints={leftText}
                rightPoints={[]} />
            {/* <OurWork /> */}

            <ContactForm customPadding="ps-0 pe-0" />
            <Technologies />
        </>
    )
}

export default VideoAnimation;