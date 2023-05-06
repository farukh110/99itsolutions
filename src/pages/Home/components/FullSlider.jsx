import React from 'react';
import Slider from 'react-animated-slider';
import Fade from 'react-reveal/Fade';
import 'react-animated-slider/build/horizontal.css';
import dev from '../../../assets/images/full-slider/developer.jpg';
import php from '../../../assets/images/full-slider/gradient.jpg';
import mobile from '../../../assets/images/full-slider/emily.jpg';
import graphic from '../../../assets/images/full-slider/mobile-app-1.jpg';
import './fullslider.scss';

const FullSlider = () => {

    const content = [
        { title: 'We build softwares', image: mobile, description: 'We are a software development company committed to helping businesses build and improve their software products', button: 'Get in touch' },
        { title: 'We are powered by research', image: mobile, description: 'We are a software development company committed to helping businesses build and improve their software products', button: 'Get in touch' },
        { title: 'We are all about excellence', image: mobile, description: 'We are a software development company committed to helping businesses build and improve their software products', button: 'Get in touch' },
        { title: 'We build softwares', image: mobile, description: 'We are a software development company committed to helping businesses build and improve their software products', button: 'Get in touch' },
    ]

    return (
        <>
            <Slider autoplay={3000}>
                {content.map((item, index) => (
                    <div
                        className='pt-md-5'
                        key={index}
                        style={{ background: `url('${item.image}') no-repeat center center` }}
                    >
                        <div className="text-center mt-md-5">
                            <Fade left>
                                <h1 className='text-light'>{item.title}</h1>
                            </Fade>
                            <h2 className='text-light w-75 mx-auto'>{item.description}</h2>
                            <button className='btn btn-primary'>{item.button}</button>
                        </div>
                    </div>
                ))}
            </Slider>
        </>
    )
}

export default FullSlider;