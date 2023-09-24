import React from 'react';
import "./index.scss";
import brand from "../../../../assets/images/services/main-services/brand.jpg";
import hosting from "../../../../assets/images/services/main-services/hosting.jpg";
import graphic from "../../../../assets/images/services/main-services/graphic.jpg";
import marketing from "../../../../assets/images/services/main-services/marketing.jpg";
import products from "../../../../assets/images/services/main-services/Product-development.jpg";
// import digitalMarketing from "../../../../assets/images/services/main-services/digital-marketing.jpg";
import mobileApp from "../../../../assets/images/services/main-services/mobile-apps.png";
import contentWriting from "../../../../assets/images/services/main-services/content-writing.png";
import dev from "../../../../assets/images/services/main-services/dev.jpg";
import webDesgin from "../../../../assets/images/services/main-services/Web-Design-Terms.jpg";
import videoAnimation from "../../../../assets/images/services/main-services/video.jpeg";
import ecommerce from "../../../../assets/images/services/main-services/ecommerce.jpeg";
import games from "../../../../assets/images/services/main-services/games.jpg";

const MainServices = () => {
    return (

        <>
            <section className="main-service pt-35 rpt-50 pb-50 rpb-70">
                <div className="container">

                    <div className='row'>

                        <div className='col-md-12'>

                            You get amazingly cost-effective rates for App Development Services, SMM, SEO, Branding and all your digital transformation needs, thanks to our project collaboration setup.

                        </div>

                    </div>

                    <div className="row justify-content-center mt-md-5">
                        <div className="col-xl-3 col-sm-6">
                            <div className="service-box wow fadeInUp delay-0-2s">
                                <div className="service-normal text-center">

                                    <img src={brand} alt="" />

                                    <h6> Brand Identity </h6>

                                    {/* <p>Lorem ipsum dolor sit amet consectetur adipisc</p> */}


                                </div>
                                <div className="service-hover bg-blue text-white">
                                    {/* <h3>Preparing For Your Business Success With IT Solution</h3> */}
                                    <p>
                                        WHAT WE OFFER - WE DO IT WELL
                                        Our team of professionals has 2 years of experience in web development,
                                        design, and marketing. We can help take your business to the next level
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6">
                            <div className="service-box wow fadeInUp delay-0-4s">
                                <div className="service-normal text-center">
                                    <img src={hosting} alt="" />

                                    <h6> Domain and Hosting </h6>

                                    {/* <p>Lorem ipsum dolor sit amet consectetur adipisc</p> */}

                                </div>
                                <div className="service-hover bg-blue text-white">

                                    <p>
                                        99 iT Solutions is a leading domain registrar providing a wide range of domain name options and additional services.
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6">
                            <div className="service-box wow fadeInUp delay-0-4s">
                                <div className="service-normal text-center">
                                    <img src={graphic} alt="" />

                                    <h6> Logo Design </h6>

                                    {/* <p>Lorem ipsum dolor sit amet consectetur adipisc</p> */}

                                </div>
                                <div className="service-hover bg-blue text-white">

                                    <p>
                                        At 99 iT Solutions Logo Designs, we create effective logos that represent your online brand identity and project what your business needs.
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6">
                            <div className="service-box wow fadeInUp delay-0-4s">
                                <div className="service-normal text-center">

                                    <img src={webDesgin} alt="" />

                                    <h6> Web Design </h6>

                                    {/* <p>Your website is crucial for marketing success, with 75% of clients assessing credibility based on design, content, and navigation.</p> */}

                                </div>
                                <div className="service-hover bg-blue text-white">

                                    <p>
                                        Your website is crucial for marketing success, with 75% of clients assessing credibility based on design, content, and navigation.
                                    </p>

                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-sm-6 pt-md-4">
                            <div className="service-box wow fadeInUp delay-0-4s">
                                <div className="service-normal text-center">

                                    <img src={dev} alt="" />

                                    <h6> Development </h6>

                                    {/* <p>Lorem ipsum dolor sit amet consectetur adipisc</p> */}

                                </div>
                                <div className="service-hover bg-blue text-white">

                                    <p>

                                        We provide expert web development services for creating killer websites, including easy navigation and feature-rich online stores..

                                    </p>

                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-sm-6 pt-md-4">
                            <div className="service-box wow fadeInUp delay-0-4s">
                                <div className="service-normal text-center">

                                    <img src={ecommerce} alt="" />

                                    <h6> E-commerce Integration </h6>

                                    {/* <p>Lorem ipsum dolor sit amet consectetur adipisc</p> */}

                                </div>
                                <div className="service-hover bg-blue text-white">

                                    <p>
                                        We optimize e-commerce and mobile apps for efficient supply chain and manufacturing, including m-commerce options.
                                    </p>

                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-sm-6 pt-md-4">
                            <div className="service-box wow fadeInUp delay-0-4s">
                                <div className="service-normal text-center">

                                    <img src={videoAnimation} alt="" />

                                    <h6> Video Animation </h6>

                                    {/* <p>Lorem ipsum dolor sit amet consectetur adipisc</p> */}

                                </div>
                                <div className="service-hover bg-blue text-white">

                                    <p>
                                        We provide engaging video marketing ideas and expertly crafted animations to drive traffic to your website..
                                    </p>

                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-sm-6 pt-md-4">
                            <div className="service-box wow fadeInUp delay-0-4s">
                                <div className="service-normal text-center">

                                    <img src={mobileApp} alt="" />

                                    <h6> Application </h6>

                                    {/* <p>Lorem ipsum dolor sit amet consectetur adipisc</p> */}

                                </div>
                                <div className="service-hover bg-blue text-white">

                                    <p>
                                        We build unique application designs to improve business and personal efficiency, helping clients feel like royalty
                                    </p>

                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-sm-6 pt-md-4">
                            <div className="service-box wow fadeInUp delay-0-4s">
                                <div className="service-normal text-center">

                                    <img src={marketing} alt="" />

                                    <h6> DIGITAL MARKETING </h6>

                                    {/* <p>Lorem ipsum dolor sit amet consectetur adipisc</p> */}

                                </div>
                                <div className="service-hover bg-blue text-white">

                                    <p>
                                        Boost your business with 99 iT Solutions' digital marketing services. We've helped SMBs generate $3B+ revenue with SEO, SMM, PPC, web design, and more.
                                    </p>

                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-sm-6 pt-md-4">
                            <div className="service-box wow fadeInUp delay-0-4s">
                                <div className="service-normal text-center">

                                    <img src={products} alt="" />

                                    <h6> Digital Products </h6>

                                    {/* <p>Lorem ipsum dolor sit amet consectetur adipisc</p> */}

                                </div>
                                <div className="service-hover bg-blue text-white">

                                    <p>
                                        We create optimized digital products for your business with high ROIs, including software development, game development, animations and videos.

                                    </p>

                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-sm-6 pt-md-4">
                            <div className="service-box wow fadeInUp delay-0-4s">
                                <div className="service-normal text-center">

                                    <img src={contentWriting} alt="" />

                                    <h6> Content Writing </h6>

                                    {/* <p>Lorem ipsum dolor sit amet consectetur adipisc</p> */}

                                </div>
                                <div className="service-hover bg-blue text-white">

                                    <p>
                                        99 iT Solutions' customized and affordable content writing services can enhance your online presence and attract clients
                                    </p>

                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-sm-6 pt-md-4">
                            <div className="service-box wow fadeInUp delay-0-4s">
                                <div className="service-normal text-center">

                                    <img src={games} alt="" />

                                    <h6> 2D/3D GAMES </h6>

                                    {/* <p>Lorem ipsum dolor sit amet consectetur adipisc</p> */}

                                </div>
                                <div className="service-hover bg-blue text-white">

                                    <p>
                                        We create custom Unity games: 2D/3D, multiplayer, mobile. Creative visuals, addictive gameplay, latest trends.
                                    </p>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default MainServices;