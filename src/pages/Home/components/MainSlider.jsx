import React, { useRef } from 'react';
import SliderCom from '../../../helpers/SliderCom';
// import dev from '../../../assets/images/full-slider/developer.jpg';
import php from '../../../assets/images/full-slider/gradient.jpg';
import mobile from '../../../assets/images/full-slider/emily.jpg';
import graphic from '../../../assets/images/full-slider/mobile-app-1.jpg';

const MainSlider = () => {

    const settings = {
        infinite: true,
        autoplay: true,
        arrows: false,
        pauseOnHover: false,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        cssEase: "linear",
    };
    const heroSlider = useRef(null);

    const prevHandler = () => {
        heroSlider.current.slickPrev();
    };
    const nextHandler = () => {
        heroSlider.current.slickNext();
    };

    return (
        <section className="main-slider bg-black text-white">
            <div className="main-slider-wrap position-relative">
                <button
                    onClick={prevHandler}
                    type="button"
                    className="prev slick-arrow"
                >
                    <i className="fas fa-angle-left"></i>
                </button>
                <SliderCom selector={heroSlider} settings={settings}>
                    <div className="main-slider-item">
                        <div className="image">
                            <img
                                src={graphic}
                                alt="Slider"
                            />
                        </div>
                        <div className="slider-caption">
                            <div className="container">
                                <div className="main-slider-content">
                                    <span className="sub-title">We’re the best Protect</span>
                                    <h1>We secure the World from cyber Threats</h1>
                                    <p>
                                        Phasellus nisl velit, interdum lobortis elit quis, placerat
                                        bibendum lorem. Maecenas eget mi quis enim
                                    </p>
                                    <div className="slider-btns">
                                        <a href="/about" className="theme-btn style-ten">
                                            Discover More <i className="far fa-paper-plane"></i>
                                        </a>
                                        <a href="/about" className="theme-btn style-eleven">
                                            Get Started <i className="far fa-paper-plane"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="main-slider-item">
                        <div className="image">
                            <img
                                src={php}
                                alt="Slider"
                            />
                        </div>
                        <div className="slider-caption">
                            <div className="container">
                                <div className="main-slider-content">
                                    <span className="sub-title">We’re the best Protect</span>
                                    <h1>We secure the World from cyber Threats</h1>
                                    <p>
                                        Phasellus nisl velit, interdum lobortis elit quis, placerat
                                        bibendum lorem. Maecenas eget mi quis enim
                                    </p>
                                    <div className="slider-btns">
                                        <a href="/about" className="theme-btn style-ten">
                                            Discover More <i className="far fa-paper-plane"></i>
                                        </a>
                                        <a href="/about" className="theme-btn style-eleven">
                                            Get Started <i className="far fa-paper-plane"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="main-slider-item">
                        <div className="image">
                            <img
                                src={mobile}
                                alt="Slider"
                            />
                        </div>
                        <div className="slider-caption">
                            <div className="container">
                                <div className="main-slider-content">
                                    <span className="sub-title">We’re the best Protect</span>
                                    <h1>We secure the World from cyber Threats</h1>
                                    <p>
                                        Phasellus nisl velit, interdum lobortis elit quis, placerat
                                        bibendum lorem. Maecenas eget mi quis enim
                                    </p>
                                    <div className="slider-btns">
                                        <a href="/about" className="theme-btn style-ten">
                                            Discover More <i className="far fa-paper-plane"></i>
                                        </a>
                                        <a href="/about" className="theme-btn style-eleven">
                                            Get Started <i className="far fa-paper-plane"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SliderCom>
                <button
                    onClick={nextHandler}
                    type="button"
                    className="next slick-arrow"
                >
                    <i className="fas fa-angle-right"></i>
                </button>
            </div>
        </section>
    );
}

export default MainSlider;