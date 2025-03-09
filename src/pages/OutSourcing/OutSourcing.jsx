import React from 'react';
import { useNavigate } from 'react-router-dom';
import HomeBannerTwo from '../Home/components/HomeBannerTwo/HomeBannerTwo';
import ProductsCatalog from '../Home/components/ProductsCatalog/ProductsCatalog';
// import MainServices from '../services/components/MainServices/MainServices';
import Focused from '../Home/components/Focused/Focused';
import Process from '../Home/components/Process/Process';
import ContactForm from '../Home/components/ContactForm/ContactForm';
import VerticalSlider from '../Home/components/vertical-slider/VerticalSlider';
import Technologies from '../Home/components/Techologies/Technologies';
import OutSourcingService from './components/OutSourcingService/OutSourcingService';
import CustomHeading from '../../components/heading/CustomHeading';
import MainServicesTwo from '../services/components/MainServicesTwo/MainServicesTwo';
import OutSourcingServiceTwo from './components/OutSourcingServiceTwo/OutSourcingServiceTwo';
import './index.scss';
import CustomHeadingTwo from '../../components/heading/CustomHeadingTwo';

const OutSourcing = () => {

    const navigate = useNavigate();

    const teamItems = [
        {
            id: 1,
            position: "Solution Architect?"
        },
        {
            id: 2,
            position: "Full Stack Developer?"
        },
        {
            id: 3,
            position: "Mobile App Developer?"
        },
        {
            id: 4,
            position: ".Net Developer?"
        },
        {
            id: 5,
            position: "Web Designer?"
        },
        {
            id: 6,
            position: "Backend Developer?"
        },
        {
            id: 7,
            position: "Frontend Developer?"
        },
        {
            id: 8,
            position: "Unity Game Developer?"
        },
        {
            id: 9,
            position: "DevOps Engineer?"
        },
        {
            id: 10,
            position: "WordPress Developer?"
        },
        {
            id: 11,
            position: "SEO Specialist?"
        },
        {
            id: 12,
            position: "Digital Marketer?"
        },
        {
            id: 13,
            position: "Social Media Manager?"
        },
        {
            id: 14,
            position: "Graphic Designer?"
        }
    ];

    return (
        <>
            <HomeBannerTwo />

            <div className='container mb-md-5 mt-md-5 mt-sm-5 mt-4'>

                <div className='row justify-content-center mt-md-3'>

                    <div className='col-md-12'>

                        <CustomHeadingTwo
                            firstWord="The Future of Business Success Starts Here:"
                            lastWord="Outsource Smarter, Grow Faster & Earn Higher"
                            textCenter="text-center"
                        />

                        <CustomHeadingTwo
                            firstWord="99 IT Solutions: Your Trusted Tech Partner"
                            lastWord="Reduce Costs, Maximize Profitability, and Scale Efficiently with Our Outsourcing Services"
                            textCenter="text-center"
                        />

                    </div>

                </div>

                <p>
                    At 99ITsolutions.com, we specialize in web design, software and product development as your dedicated outsourcing partner. Whether you're looking to optimize your budget, scale operations, or meet tight deadlines, our expert team is here to help.

                </p>

            </div>

            <OutSourcingServiceTwo />
            <div className='container'>

                <CustomHeading
                    firstWord="How We Help You Scale &"
                    lastWord="Earn More"
                    textCenter="text-center mt-md-4"
                />

                <div className='outsourcing'>

                    <ul className="why-out-sourcing">
                        <li>
                            <span className="teamInfoIcon">
                                <i className="fa fa-angle-double-right" />
                            </span>
                            <span className="it-outsourcing-desc">
                                <h5>Manage Small or Large Projects at Lower Costs </h5>
                                Outsource Google Ads, Facebook marketing, web development, and content creation at a lower rate than hiring full-time staff.

                            </span>
                        </li>
                        <li>
                            <span className="teamInfoIcon">
                                <i className="fa fa-angle-double-right" />
                            </span>
                            <span className="it-outsourcing-desc">
                                <h5> Test Us with a Small Project  </h5>
                                Before committing, start with a small task and experience our speed, quality, and reliability.

                            </span>
                        </li>
                        <li>
                            <span className="teamInfoIcon">
                                <i className="fa fa-angle-double-right" />
                            </span>
                            <span className="it-outsourcing-desc">
                                <h5>Increase Your Profit & Reduce Risk </h5>
                                Keep your existing clients while outsourcing part of the work. Earn more without the hassle of additional hires.

                            </span>
                        </li>
                        <li>
                            <span className="teamInfoIcon">
                                <i className="fa fa-angle-double-right" />
                            </span>
                            <span className="it-outsourcing-desc">
                                <h5>No Need to Downsize Your Team</h5>
                                We help manage workload overflow so you don’t have to lay off employees—just scale smarter.

                            </span>
                        </li>
                    </ul>
                </div>

            </div>
            <OutSourcingService />

            <div className='container mb-md-5 mt-md-5'>

                <div className='row'>

                    <div className='col-md-12'>

                        <CustomHeading
                            firstWord="Try Us with a"
                            lastWord="Small Task!"
                            textCenter="text-center"
                        />

                        <p className='text-center'>
                            Experience our quality, speed, and professionalism firsthand with a small trial project. We’re confident you’ll see the difference.

                        </p>

                        <CustomHeading
                            firstWord="Earn Referral"
                            lastWord="Rewards"
                            textCenter="text-center"
                        />

                        <p className='text-center'>
                            Refer businesses to us and enjoy exclusive rewards. Let’s grow together!

                        </p>

                        {/* <CustomHeading
                            firstWord="Let’s"
                            lastWord="Connect!"
                            textCenter="text-center"
                        />

                        <p className='text-center'>
                            Ready to get started? Schedule a quick video call via Zoom or Skype to discuss your outsourcing needs. <br /> We’re here to be your reliable partner in success.

                        </p> */}

                        {/* <button onClick={() => navigate('/get-free-quote')} className='btn btn-primary btn-connect mx-auto d-block'> Contact Us Today!  </button> */}


                        {/* <div className='outsourcing'>

                            <ul className="why-out-sourcing">
                                <li>
                                    <span className="teamInfoIcon">
                                        <i className="fa fa-angle-double-right" />
                                    </span>
                                    <span className="it-outsourcing-desc">
                                        <h5>Cut Operational Costs </h5>
                                        Save on high salaries, office rent, utilities, and employee benefits while maintaining quality work.

                                    </span>
                                </li>
                                <li>
                                    <span className="teamInfoIcon">
                                        <i className="fa fa-angle-double-right" />
                                    </span>
                                    <span className="it-outsourcing-desc">
                                        <h5> Scale Without Hiring More In-House Staff </h5>
                                        Expand your business without the risk of permanent hires. Access on-demand teams for projects of any size.

                                    </span>
                                </li>
                                <li>
                                    <span className="teamInfoIcon">
                                        <i className="fa fa-angle-double-right" />
                                    </span>
                                    <span className="it-outsourcing-desc">
                                        <h5>Increase Profit Margins </h5>
                                        Instead of paying $7,000+ for local hires, outsource key tasks for $1,500–$2,000 while delivering the same (or better) results.

                                    </span>
                                </li>
                                <li>
                                    <span className="teamInfoIcon">
                                        <i className="fa fa-angle-double-right" />
                                    </span>
                                    <span className="it-outsourcing-desc">
                                        <h5>Save Time & Focus on Growth</h5>
                                        Spend less time managing employees and more time acquiring clients while we handle time-consuming tasks.

                                    </span>
                                </li>

                                <li>
                                    <span className="teamInfoIcon">
                                        <i className="fa fa-angle-double-right" />
                                    </span>
                                    <span className="it-outsourcing-desc">
                                        <h5>Eliminate Employee Turnover Risks</h5>
                                        No more losing employees after months of training. Enjoy a stable team that works consistently on your projects.

                                    </span>
                                </li>

                                <li>
                                    <span className="teamInfoIcon">
                                        <i className="fa fa-angle-double-right" />
                                    </span>
                                    <span className="it-outsourcing-desc">
                                        <h5>Expertise Without Long-Term Commitments</h5>
                                        Hire top-tier professionals for specialized tasks without long-term contracts.

                                    </span>
                                </li>

                            </ul>
                        </div> */}

                        <CustomHeading
                            firstWord="Let’s Connect How"
                            lastWord="We Can Help You!"
                            textCenter="text-center mt-md-4"
                        />

                        <p className='text-center'>
                            Your success starts with a conversation Ready to get started? Schedule a free consultation quick video call via Zoom or Google Meeting to discuss your outsourcing needs today and discover how outsourcing can help you scale and save. We’re here to be your reliable partner in success.
                            Let’s scale your business together!

                        </p>

                        <button onClick={() => navigate('/contact')} className='btn btn-primary btn-connect mx-auto d-block'> Contact Us Today! </button>


                    </div>

                </div>
            </div>

            <MainServicesTwo />
            <ProductsCatalog />
            {/* <Focused /> */}
            <Process />
            <Technologies />
            <ContactForm customPadding="ps-0 pe-0" />
            <VerticalSlider title="Do you need a Full or Part-time" teamItems={teamItems} />

        </>
    )
}

export default OutSourcing;
