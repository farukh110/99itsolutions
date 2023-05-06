import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import './TextSlider.scss';

const TextSlider = () => {
    return (
        <>
            <div className='container mt-md-4 mt-5 mb-md-3'>
                <h3 className='text-center mt-md-5'> If you are looking for creativity, </h3>
                <TypeAnimation
                    // Same String at the start will only be typed once, initially
                    className='text-center text-slider'
                    sequence={[
                        'Welcome to 99I.Tsolutions, home to your',
                        1000,
                        'Complete Business branding & IT solutions'
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