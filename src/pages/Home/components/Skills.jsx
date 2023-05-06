import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import brain from '../../../assets/images/services/brain.jpg';

const Skills = () => {

    return (
        <>
            <div className='container my-md-5 my-5'>

                <div className='row'>

                    <div className='col-md-3'>

                        <p className='mb-0 mt-md-2'> Website (1235) </p>
                        <ProgressBar striped variant="success" now={80} />

                        <p className='mb-0 mt-md-2'> Logos (973) </p>
                        <ProgressBar striped variant="danger" now={70} />

                        <p className='mb-0 mt-md-2'> Mobile Apps (16) </p>
                        <ProgressBar striped variant="info" now={16} />

                        <p className='mb-0 mt-md-2'> Seo (137) </p>
                        <ProgressBar striped variant="warning" now={30} />

                    </div>

                    <div className='col-md-9 mt-md-0 mt-4'>

                        <div className='row mt-md-0 mt-3'>

                            <div className='col-md-5'>

                                <img className='img-fluid' alt='' src={brain} />

                            </div>

                            <div className='col-md-7 mt-md-0 mt-3'>

                                <p>

                                    99iTsolutions is a focal point of representation; we ensure your ideas and concepts are well received and converted into something visually meaningful. Footprints of our operations extend over a broad range from Graphics designing, website and mobile apps designing and development to search engine optimization (SEO & ASO) and printing service. Some of our key features would be:

                                </p>

                                <div className='row'>

                                    <div className='col-md-6'>

                                        <ul className='services-ul'>
                                            <li>
                                                Understanding your requirements
                                            </li>
                                            <li>
                                                Always delivering within promised date
                                            </li>
                                            <li>
                                                Dedicated Project Manager
                                            </li>
                                            <li>
                                                Using latest tools and softwares
                                            </li>
                                        </ul>

                                    </div>

                                    <div className='col-md-6'>

                                        <ul className='services-ul'>
                                            <li>
                                                100% Satisfaction Guarantee
                                            </li>
                                            <li>
                                                Prompt communication by Business coordinators
                                            </li>
                                            <li>
                                                Pocket friendly
                                            </li>
                                            <li>
                                                2-tier Quality Assurance
                                            </li>
                                            <li>
                                                Ready to Live
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