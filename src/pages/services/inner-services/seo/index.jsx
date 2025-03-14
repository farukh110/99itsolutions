import React from 'react'
import Banner from '../web-development/Banner/Banner';

// import webDevService from '../../../../assets/images/services/main-services/dev.jpg';

import seo from '../../../../assets/images/seo/seo.png';
import AboutDetails from '../web-development/AboutDetails/AboutDetails';
import Skills from '../../../Home/components/Skills/Skills';
import newTech from '../../../../assets/images/seo/Mango-Mash-SEO-1.jpg';
import seoCompany from '../../../../assets/images/seo/seo-company.svg';
// import OurWork from '../../../Home/components/OurWork';
import ContactForm from '../../../Home/components/ContactForm/ContactForm';
import Technologies from '../../../Home/components/Techologies/Technologies';
import CustomHeading from '../../../../components/heading/CustomHeading';


const Seo = () => {

    const bannerContent = `In an era dominated by online presence, ensuring your brand 
    is discoverable is crucial. At Creative 99iTSolutions, we specialize in top-notch 
    SEO services designed to elevate your business visibility and drive organic 
    traffic. As the fastest-growing SEO agency, we are committed to providing 
    innovative strategies that not only enhance your brand but also ensure it ranks 
    prominently in search engine results.`;

    let leftText = [
        {
            id: 1, title: 'Strategy Development:',
            point: `Collaborating with you to understand your business goals, target audience, and competitive landscape.`
        },
        {
            id: 2, title: 'Keyword Research & Optimization:',
            point: `Identifying strategic keywords and optimizing content to enhance search engine rankings.`
        },
        {
            id: 3, title: 'Technical SEO:',
            point: `Implementing technical optimizations to improve website performance and user experience.`
        },
        {
            id: 4, title: 'Link Building & Content Optimization:',
            point: `Building high-quality backlinks and optimizing content for search engine visibility.`
        },

        {
            id: 5, title: 'Monitoring & Reporting:',
            point: `Constantly monitoring performance and providing insightful reports to track progress.`
        },
        {
            id: 6, title: null,
            point: `Ready to skyrocket your online presence with effective SEO strategies? Let's ensure your brand shines bright in the digital landscape.`
        },

    ];

    let leftPoints = [
        {
            id: 1, point: 'On-Page SEO'
        },
        {
            id: 2, point: 'Off-Page SEO'
        },
        { id: 3, point: 'Keyword Research and Optimization' },
        {
            id: 4, point: 'SEO Audits'
        },
        {
            id: 5, point: 'Local SEO'
        },
        {
            id: 6, point: 'Technical SEO'
        },
        {
            id: 7, point: 'Link Building'
        },
        {
            id: 8, point: 'Content Optimization'
        },

    ];

    const imgStyle = {

        objectFit: 'fill',
        height: '48vh',
        width: '100%'
    }

    return (
        <>
            <Banner
                bannerHeading1='Boost Your Visibility with'
                bannerHeading2='Cutting-Edge SEO Services.'
                bannerContent={bannerContent}
                bannerImage={seo}
            />
            <CustomHeading
                firstWord="SEO"
                lastWord="Services:"
                textCenter="text-center"
            />
            <Skills
                leftImage={newTech}
                ImgStyle={imgStyle}
                smallContent="Explore our comprehensive suite of SEO services tailored to meet the evolving needs of your business."
                leftPoints={leftPoints}
                rightPoints={[]} />

            <AboutDetails
                leftImage={seoCompany}
                smallContent="
                <h2 class='fw-bolder'> Strategize and Optimize with Our Experts: </h2> 
                Whether it's a straightforward logo design or an extensive app development venture, we follow a proven process to optimize your online presence.
                "
                leftPoints={leftText}
                rightPoints={[]} />
            {/* <OurWork /> */}

            <ContactForm customPadding="ps-0 pe-0" />
            <Technologies />
        </>
    )
}

export default Seo;