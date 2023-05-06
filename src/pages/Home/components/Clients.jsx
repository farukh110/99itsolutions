import React from 'react';
import SliderCom from '../../../helpers/SliderCom';
import client1 from "../../../assets/images/client-logo/client-logo-1.png";
import client2 from "../../../assets/images/client-logo/client-logo-2.png";
import client3 from "../../../assets/images/client-logo/client-logo-3.png";
import client4 from "../../../assets/images/client-logo/client-logo-4.png";
import client5 from "../../../assets/images/client-logo/client-logo-5.png";
import client6 from "../../../assets/images/client-logo/client-logo-6.png";
import client7 from "../../../assets/images/client-logo/client-logo-7.png";
import client8 from "../../../assets/images/client-logo/client-logo-8.png";
import client9 from "../../../assets/images/client-logo/client-logo-9.png";
import client10 from "../../../assets/images/client-logo/client-logo-10.png";
import client11 from "../../../assets/images/client-logo/client-logo-11.png";
import client12 from "../../../assets/images/client-logo/client-logo-12.png";

const Clients = () => {

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        speed: 1000,
        slidesToShow: 5,
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
                    slidesToShow: 3,
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
        <div className="client-logo-area">
            <div className="container">

                <div className="logo-carousel-wrap pt-65 pb-65">
                    <SliderCom settings={settings}>
                        <div className="logo-item">
                            <a href="!#">
                                <img
                                    src={client1}
                                    alt="Client Logo"
                                />
                            </a>
                        </div>
                        <div className="logo-item">
                            <a href="!#">
                                <img
                                    src={client2}
                                    alt="Client Logo"
                                />
                            </a>
                        </div>
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
                        <div className="logo-item">
                            <a href="!#">
                                <img
                                    src={client7}
                                    alt="Client Logo"
                                />
                            </a>
                        </div>
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
    );
}

export default Clients;