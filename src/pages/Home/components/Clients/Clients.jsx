import React from 'react';
import SliderCom from '../../../../helpers/SliderCom';
import client1 from "../../../../assets/images/logos/1.png";
// import client2 from "../../../assets/images/logos/2.png";
import client3 from "../../../../assets/images/logos/3.png";
import client4 from "../../../../assets/images/logos/4.png";
import client5 from "../../../../assets/images/logos/5.png";
import client6 from "../../../../assets/images/logos/7.png";
// import client7 from "../../../../assets/images/logos/8.png";
import client8 from "../../../../assets/images/logos/9.png";
import client9 from "../../../../assets/images/logos/11.png";
import client10 from "../../../../assets/images/logos/12.png";
import client11 from "../../../../assets/images/logos/14.png";
import client12 from "../../../../assets/images/logos/15.png";
import "./Clients.scss";

const Clients = () => {

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };

    return (
        <div className="client-logo-area mt-md-4">
            <div className="container">

                <div className='row'>

                    <div className='col-xl-3 col-lg-3 col-md-3 col-sm-3 col-12'>

                        <div className="section-title text-left mb-30 mt-md-5 mt-5">
                            {/* <span className="sub-title">Our Portfolio</span> */}
                            <h2>Our Trusted Partners and Valuable clients</h2>
                        </div>


                    </div>

                    <div className='col-xl-9 col-lg-9 col-md-9 col-sm-9 col-12 align-self-center'>
                        <div className="logo-carousel-wrap pt-0">
                            <SliderCom settings={settings}>
                                <div className="logo-item">
                                    <a href="!#">
                                        <img
                                            src={client1}
                                            alt="Client Logo"
                                        />
                                    </a>
                                </div>
                                {/* <div className="logo-item">
                            <a href="!#">
                                <img
                                    src={client2}
                                    alt="Client Logo"
                                />
                            </a>
                        </div> */}
                                <div className="logo-item">
                                    <a href="!#">
                                        <img
                                            src={client3}
                                            alt="Client Logo"
                                        />
                                    </a>
                                </div>
                                <div className="logo-item">
                                    <a href="!#">
                                        <img
                                            src={client4}
                                            alt="Client Logo"
                                        />
                                    </a>
                                </div>
                                <div className="logo-item">
                                    <a href="!#">
                                        <img
                                            src={client5}
                                            alt="Client Logo"
                                        />
                                    </a>
                                </div>
                                <div className="logo-item">
                                    <a href="!#">
                                        <img
                                            src={client6}
                                            alt="Client Logo"
                                        />
                                    </a>
                                </div>
                                {/* <div className="logo-item">
                                    <a href="!#">
                                        <img
                                            src={client7}
                                            alt="Client Logo"
                                        />
                                    </a>
                                </div> */}
                                <div className="logo-item">
                                    <a href="!#">
                                        <img
                                            src={client8}
                                            alt="Client Logo"
                                        />
                                    </a>
                                </div>
                                <div className="logo-item">
                                    <a href="!#">
                                        <img
                                            src={client9}
                                            alt="Client Logo"
                                        />
                                    </a>
                                </div>
                                <div className="logo-item">
                                    <a href="!#">
                                        <img
                                            src={client10}
                                            alt="Client Logo"
                                        />
                                    </a>
                                </div>
                                <div className="logo-item">
                                    <a href="!#">
                                        <img
                                            src={client11}
                                            alt="Client Logo"
                                        />
                                    </a>
                                </div>
                                <div className="logo-item">
                                    <a href="!#">
                                        <img
                                            src={client12}
                                            alt="Client Logo"
                                        />
                                    </a>
                                </div>

                            </SliderCom>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Clients;