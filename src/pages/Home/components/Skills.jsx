import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import brain from '../../../assets/images/services/brain1.jpg';
import './skills.scss'

const Skills = () => {

    return (
        <>
            <div className='container my-md-5 my-5'>

                <div className='row'>

                    {/* <div className='col-md-3'>

                        <p className='mb-0 mt-md-2'> Website (1235) </p>
                        <ProgressBar striped variant="success" now={80} />

                        <p className='mb-0 mt-md-2'> Logos (973) </p>
                        <ProgressBar striped variant="danger" now={70} />

                        <p className='mb-0 mt-md-2'> Mobile Apps (16) </p>
                        <ProgressBar striped variant="info" now={16} />

                        <p className='mb-0 mt-md-2'> Seo (137) </p>
                        <ProgressBar striped variant="warning" now={30} />

                    </div> */}

                    <div className='col-md-12 mt-md-0 mt-4'>

                        <div className='row mt-md-0 mt-3'>

                            <div className='col-md-5'>

                                <img className='img-fluid img-height' alt='' src={brain} />

                            </div>

                            <div className='col-md-7 mt-md-0 mt-3'>

                                <p>

                                    At 99iTsolutions, we serve as a focal point for representing your ideas and concepts, ensuring they are transformed into visually meaningful results. Our teams solve complex and sophisticated problems with highly advanced digital solutions and a streamlined production process.Our extensive range of IT services includes logo designing, domain and hosting, animation services, web designing and software development, digital marketing, and customer support. Here are some key features we offer:

                                </p>

                                <div className='row'>

                                    <div className='col-md-6'>

                                        <ul className='services-ul'>
                                            <li>
                                                Understanding your requirements fully.
                                            </li>
                                            {/* <li>
                                                Firm belief in Work Ethics.
                                            </li> */}
                                            <li>
                                                Prompt and effective communication by our business coordinators.
                                            </li>
                                            <li>
                                                Utilization of the latest tools and software.

                                            </li>
                                            <li>
                                                Personalized attention with dedicated Project Managers.
                                            </li>
                                            <li>
                                                Timely delivery of high-quality work.
                                            </li>
                                            <li>
                                                100% Satisfaction Guarantee.
                                            </li>
                                        </ul>

                                    </div>

                                    <div className='col-md-6'>

                                        <ul className='services-ul'>

                                            <li>
                                                Budget-friendly solutions.
                                            </li>
                                            <li>
                                                Building long-term relationships with clients.

                                            </li>
                                            <li>
                                                Working together for your greatest benefit.

                                            </li>
                                            <li>
                                                Collaborate with renowned brands and award-winning designs.
                                            </li>
                                            <li>
                                                Experience creativity, reliability, and customer-centricity.
                                            </li>
                                            <li>
                                                Choose us for exceptional services that exceed expectations.
                                            </li>
                                        </ul>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}

export default Skills;