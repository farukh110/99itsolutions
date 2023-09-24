import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import './TextSlider.scss';

const TextSlider = () => {
    return (
        <>
            <div className='container mt-md-4 mt-5 mb-md-3'>
                <h3 className='text-center mt-md-5 text-navy-blue'> If you are looking for creativity, either new, existing, or readymade solutions, you've landed at the right place!
                </h3>
                <TypeAnimation
                    // Same String at the start will only be typed once, initially
                    className='text-center text-slider'
                    sequence={[
                        "Unlocking Creativity, We are an experienced team, Join hands with us, to bring your most complicated ideas to life.",
                        "Technology, We're proficient in almost every technology, ready for any challenge.",
                        "Building Brands, We craft brands with with a long-term perspective, caring for your ideas to success.",
                        "Solutions Experts, Specializing in web and software development, we're here to transform your vision into reality. Reach out to us today.",
                        "Web Alive, From basic blogs to advanced e-Commerce platforms, we bring the web to life. Contact us today.",
                        "Digital Impact,  As digital marketers, we connect brands with their ideal audience, maximizing impact.",
                        "Looking for Readymade Solutions? Dont worry!, Rest assured, our team is ready to fulfill your needs, ensuring you save valuable time and costs, delivering prompt solutions.",
                        "Let Us Tackle Your Web Design, Software Dev, and Marketing Challenges! , With expert designers, developers, and marketers on a monthly flat rate. Maximize your website’s earning potential today.",
                        1000
                    ]}
                    speed={25} // Custom Speed from 1-99 - Default Speed: 40
                    wrapper="h1" // Animation will be rendered as a <span>
                    repeat={Infinity} // Repeat this Animation Sequence infinitely
                />
            </div>
        </>
    );
}

export default TextSlider;