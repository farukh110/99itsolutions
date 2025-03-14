import React from 'react';
import { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import mob from '../../../assets/images/about/Mission.JPG';
import web from '../../../assets/images/about/vision.JPG';
import graphic from '../../../assets//images/about/values.JPG';
import './tab.scss';

const ServicesTab = () => {

    const [key, setKey] = useState('appsDev');

    return (
        <>
            <div className='container tab-container mt-md-5 mb-md-5 mb-4'>

                <div className='shadow'>
                    <Tabs
                        id="controlled-tab-example"
                        activeKey={key}
                        onSelect={(k) => setKey(k)}
                        className="mb-3"
                    >
                        <Tab eventKey="appsDev" title="Mission">

                            <div className='container tab-content'>

                                <div className='row'>

                                    <div className='col-md-4 col-sm-4 p-md-3'>

                                        <img src={mob} alt='' className='img-fluid' />

                                    </div>

                                    <div className='col-md-8 col-sm-8 p-md-3'>

                                        <h4 className="title">Mission</h4>
                                        <p>
                                            99 IT Solutions empowers businesses with innovative web, software, and marketing solutions. Our dedicated team delivers high-quality, tailored services to drive success. We aim to establish lasting partnerships, fueling the growth and prosperity of businesses worldwide.

                                        </p>

                                        {/* <div className="row">
                                            <div className="col-md-3">
                                                <ul className="list-unstyled list-icon">
                                                    <li className="mb-3"><i class="flaticon-tick"></i> iPhone Apps</li>
                                                    <li className="mb-3"><i class="flaticon-tick"></i> Android Apps</li>
                                                </ul>
                                            </div>
                                            <div className="col-md-3">
                                                <ul className="list-unstyled list-icon">
                                                    <li className="mb-3"><i class="flaticon-tick"></i> Web App Development</li>
                                                    <li className="mb-3"><i class="flaticon-tick"></i> Hybrid &amp; Native Apps</li>
                                                </ul>
                                            </div>
                                        </div> */}
                                    </div>

                                </div>

                            </div>

                        </Tab>
                        <Tab eventKey="webSol" title="Vision">

                            <div className='tab-content'>

                                <div className='row'>

                                    <div className='col-md-4 col-sm-4 p-md-3'>

                                        <img src={web} alt='' className='img-fluid' />

                                    </div>

                                    <div className='col-md-8 col-sm-8 p-md-3'>

                                        <h4 className="title"> Vision </h4>
                                        <p>
                                            Our vision is to be your trusted technology partner and a global leader in delivering best and unique design, software development and marketing services to improve our clients' productivity and business strength

                                        </p>

                                        {/* <div className="row">
                                            <div className="col-md-6">
                                                <ul className="list-unstyled list-icon">
                                                    <li className="mb-3"><i class="flaticon-tick"></i> Content Management System</li>
                                                    <li className="mb-3"><i class="flaticon-tick"></i> Customized E-Commerce Solution</li>
                                                    <li className="mb-3"><i class="flaticon-tick"></i> Magento, OpenCart, Drupal Customization</li>
                                                    <li><i className="flaticon-tick"></i> Complex Dynamic Portal</li>
                                                </ul>
                                            </div>
                                            <div className="col-md-6">
                                                <ul className="list-unstyled list-icon">
                                                    <li className="mb-3"><i class="flaticon-tick"></i> Crawlers / Scrapper Code</li>
                                                    <li className="mb-3"><i class="flaticon-tick"></i> Plugins &amp; Extensions Development</li>
                                                    <li className="mb-3"><i class="flaticon-tick"></i> Social Networking Solutions</li>
                                                    <li><i className="flaticon-tick"></i> Wordpress, Joomla Customization</li>
                                                </ul>
                                            </div>
                                        </div> */}

                                        {/* <div className="row">
                                            <div className="col-md-6">
                                                <ul className="list-unstyled list-icon">
                                                    <li className="mb-3"><i class="flaticon-tick"></i>Flat, Lightweight &amp; Responsive Designs</li>
                                                    <li className="mb-3"><i class="flaticon-tick"></i>HTML5, CSS3 and Retina Ready Designs</li>
                                                    <li className="mb-3"><i class="flaticon-tick"></i>Clean Modern Minimalistic Design</li>
                                                    <li><i className="flaticon-tick"></i>E-Commerce / Portfolio / Corporate Designs</li>
                                                </ul>
                                            </div>
                                            <div className="col-md-6">
                                                <ul className="list-unstyled list-icon">
                                                    <li className="mb-3"><i class="flaticon-tick"></i>Landing &amp; Sales Page Design</li>
                                                    <li className="mb-3"><i class="flaticon-tick"></i>Custom WordPress / Magento / Joomla theme</li>
                                                    <li className="mb-3"><i class="flaticon-tick"></i> Social Networking Solutions</li>

                                                </ul>
                                            </div>
                                        </div> */}

                                    </div>

                                </div>

                            </div>

                        </Tab>
                        <Tab eventKey="graphicDes" title="Values">

                            <div className='tab-content'>

                                <div className='row'>

                                    <div className='col-md-4 col-sm-4 p-md-3'>

                                        <img src={graphic} alt='' className='img-fluid' />

                                    </div>

                                    <div className='col-md-8 col-sm-8 p-md-3'>

                                        <h4 className="title"> Client-Centric Partnership:
                                        </h4>
                                        <p>
                                            Forge deep client business relationships, deeply understanding their unique goals and challenges, and collaboratively crafting solutions that exceed expectations.
                                        </p>

                                        <h4 className="title"> Trailblazing Innovation:
                                        </h4>

                                        <p>
                                            Embrace innovation, constantly pushing boundaries, deliver market-disrupting solutions and drive industry advancements through emerging tech.
                                        </p>

                                        <h4 className="title"> Collaborative Excellence:
                                        </h4>

                                        <p>
                                            Foster collaborative talents, deliver exceptional solutions for remarkable outcomes.
                                        </p>


                                    </div>

                                </div>

                            </div>

                        </Tab>

                    </Tabs>
                </div>
            </div>
        </>
    )
}

export default ServicesTab;