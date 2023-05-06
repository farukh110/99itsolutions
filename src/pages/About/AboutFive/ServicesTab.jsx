import React from 'react';
import { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import mob from '../../../assets/images/services/mob_icon.png';
import web from '../../../assets/images/services/02.png';
import graphic from '../../../assets//images/services/gra.png';
import digital from '../../../assets//images/services/03.png';
import './tab.scss';

const ServicesTab = () => {

    const [key, setKey] = useState('appsDev');

    return (
        <>
            <div className='container tab-container mt-md-5 mb-md-5'>

                <div className='shadow'>
                    <Tabs
                        id="controlled-tab-example"
                        activeKey={key}
                        onSelect={(k) => setKey(k)}
                        className="mb-3"
                    >
                        <Tab eventKey="appsDev" title="Apps Development">

                            <div className='container tab-content'>

                                <div className='row'>

                                    <div className='col-md-4 p-md-3'>

                                        <img src={mob} alt='' className='img-fluid' />

                                    </div>

                                    <div className='col-md-8 p-md-3'>

                                        <h4 className="title">Apps Development</h4>
                                        <p>
                                            At 99 iT Solutions, we recognize the immense potential of smartphones and offer expert Mobile App Development services. Our skilled developers are equipped to design and build customized apps to meet your business needs, with a focus on functionality and user experience. We specialize in creating both iPhone and Android Apps, as well as Web and Hybrid, Native Apps, Flutter, and React native.
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
                        <Tab eventKey="webSol" title="Web Solutions">

                            <div className='tab-content'>

                                <div className='row'>

                                    <div className='col-md-4 p-md-3'>

                                        <img src={web} alt='' className='img-fluid' />

                                    </div>

                                    <div className='col-md-8 p-md-3'>

                                        <h4 className="title"> Web Development / Web Designing </h4>
                                        <p>
                                            Our skilled team at 99 iT Solutions offers comprehensive web development and web designing services. We specialize in creating dynamic web applications using full-stack development and with different databases, ensuring they are functional and interactive for both visitors and businesses. Additionally, we offer customized solutions for content management systems, e-commerce, and social networking using platforms such as Magento, OpenCart, Shopify, WordPress, and Joomla. Our designers focus on creating clean, modern, responsive, and retina-ready designs for various purposes, including e-commerce, portfolio, corporate, and landing/sales pages. We also develop plugins, extensions, crawlers/scrapper codes, and social networking solutions to meet your unique needs.
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
                        <Tab eventKey="graphicDes" title="Graphic Designing">

                            <div className='tab-content'>

                                <div className='row'>

                                    <div className='col-md-4 p-md-3'>

                                        <img src={graphic} alt='' className='img-fluid' />

                                    </div>

                                    <div className='col-md-8 p-md-3'>

                                        <h4 className="title"> Graphic Designing </h4>
                                        <p>

                                            Effective graphic design is a crucial aspect of any successful business, as it communicates the company's identity and values to its customers. Our team of graphic designers understands the importance of creating visually appealing and unique designs that will leave a lasting impression on your target audience. We offer a wide range of graphic design services including.
                                        </p>

                                        <div className="row">
                                            <div className="col-md-5">
                                                <ul className="list-unstyled list-icon">
                                                    <li className="mb-3"><i class="flaticon-tick"></i> Corporate Branding</li>
                                                    <li className="mb-3"><i class="flaticon-tick"></i> Logo design</li>
                                                    <li className="mb-3"><i class="flaticon-tick"></i> Banner creation</li>
                                                    <li className="mb-3"><i class="flaticon-tick"></i> Brochure Printing</li>
                                                    <li className="mb-3"><i class="flaticon-tick"></i> Business card design</li>
                                                    <li><i className="flaticon-tick"></i> Calendar Design</li>
                                                </ul>
                                            </div>
                                            <div className="col-md-7">
                                                <ul className="list-unstyled list-icon">
                                                    <li className="mb-3"><i class="flaticon-tick"></i> Landing &amp; Sales Page Design</li>
                                                    <li className="mb-3"><i class="flaticon-tick"></i> Custom WordPress / Magento / Joomla theme Design</li>
                                                    <li className="mb-3"><i class="flaticon-tick"></i> E-Commerce / Portfolio / Corporate Designs</li>

                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </Tab>
                        <Tab eventKey="digitalMar" title="Digital Marketing">

                            <div className='tab-content'>

                                <div className='row'>

                                    <div className='col-md-4 p-md-3'>

                                        <img src={digital} alt='' className='img-fluid' />

                                    </div>

                                    <div className='col-md-8 p-md-3'>

                                        <h4 className="title">Digital Marketing</h4>
                                        <p>
                                            Our team of digital marketing experts offers effective online advertising solutions to enhance the visibility of your business. Through search engine optimization (SEO), search engine marketing (SEM), social media marketing (SMM), app store optimization (ASO), online reputation management (ORM), and business reputation management (BRM), we increase your online presence and help convert your traffic into sales. Our experts are skilled at boosting your traffic and targeting the appropriate audience while creating an effective marketing strategy to elevate your business.
                                        </p>

                                        {/* <div className="row">
                                            <div className="col-md-6">
                                                <ul className="list-unstyled list-icon">
                                                    <li className="mb-3"><i class="flaticon-tick"></i>Search Engine Optimization (SEO)</li>
                                                    <li className="mb-3"><i class="flaticon-tick"></i>Search Engine Marketing (SEM)</li>
                                                    <li className="mb-3"><i class="flaticon-tick"></i>Social Media Marketing (SMM)</li>
                                                </ul>
                                            </div>
                                            <div className="col-md-6">
                                                <ul className="list-unstyled list-icon">
                                                    <li className="mb-3"><i class="flaticon-tick"></i>App Store Optimization (ASO)</li>
                                                    <li className="mb-3"><i class="flaticon-tick"></i>Online Reputation Management (ORM)</li>
                                                    <li className="mb-3"><i class="flaticon-tick"></i>Business Reputation Management (BRM)</li>
                                                </ul>
                                            </div>
                                        </div> */}
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