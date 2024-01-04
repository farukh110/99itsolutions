import React from 'react';
import './index.scss';

const PricingTables = () => {
    return (
        <>
            <div className='pricing-tables2 pt-65 rpt-50 pb-60 rpb-30'>

                <div className='container'>

                    <div className='row'>

                        <div className='col-md-3'>

                            <div className="d-grid"><button className="btn btn-outline-primary active">Html website</button></div>

                        </div>

                        <div className='col-md-3'>

                            <div className="d-grid"><button className="btn btn-outline-primary active">Cms website</button></div>

                        </div>

                        <div className='col-md-3'>

                            <div className="d-grid"><button className="btn btn-outline-primary active"> Ecommerce website </button></div>

                        </div>

                        <div className='col-md-3'>

                            <div className="d-grid"><button className="btn btn-outline-primary active">Portal website</button></div>

                        </div>

                    </div>

                    <div className='row justify-content-center'>

                        <div className='col-md-8'>

                            <h5 className="text-darkblue text-center mt-md-4">Our packages can be customized to fit </h5>

                            <h3 className="text-center">  your needs and budget the best way. </h3>

                        </div>

                    </div>

                    <div className='row'>

                        <div
                            className="col-lg-4 col-md-6 col-sm-8 col-12">
                            <div className="pricing-box pt-md-4 pt-4">
                                <h4 className="ms-md-4 ms-4">
                                    BASIC CMS <br /> WEBSITE PACKAGE
                                </h4>
                                <div className="row justify-content-center mt-md-4">
                                    <div className="col-md-12 col-12">
                                        {/*<span class="old-price ml-md-4 ml-4"> <span class="sale-price mr-md-1"> $ 500 </span>  ONLY </span>*/}
                                        <h3 className="ms-md-4 ms-4 mt-md-2 real-price"> $ 389 USD </h3>
                                    </div>
                                    <div className="col-md-12 col-12 mt-md-4 mt-2">
                                        {/*  <p class="ms-md-4 ms-4"> Suitable for potential super-startups and brand revamps for companies.  </p> */}
                                        <div className="pricing-scroll ms-md-4 ms-4">
                                            <ul className="price-table-features">
                                                <li>
                                                    {" "}
                                                    <i className="fa fa-check-circle-o"> </i> 1 Page Custom Website
                                                </li>
                                                <li>
                                                    {" "}
                                                    <i className="fa fa-check-circle-o"> </i> CMS Admin Panel
                                                </li>
                                                <li>
                                                    {" "}
                                                    <i className="fa fa-check-circle-o"> </i> 1 jQuery Slider
                                                </li>
                                                <li>
                                                    {" "}
                                                    <i className="fa fa-check-circle-o"> </i> 1 Banner{" "}
                                                </li>
                                                <li>
                                                    {" "}
                                                    <i className="fa fa-check-circle-o"> </i> Mobile Responsive Layout{" "}
                                                </li>
                                                <li>
                                                    {" "}
                                                    <i className="fa fa-check-circle-o"> </i> Company Profile Section
                                                </li>
                                                <li>
                                                    {" "}
                                                    <i className="fa fa-check-circle-o"> </i> Products/Services
                                                    Section
                                                </li>
                                                <li>
                                                    {" "}
                                                    <i className="fa fa-check-circle-o"> </i> Portfolio/Gallery
                                                    Section{" "}
                                                </li>
                                                <li>
                                                    {" "}
                                                    <i className="fa fa-check-circle-o"> </i> Contact Us Section
                                                </li>
                                                <li>
                                                    {" "}
                                                    <i className="fa fa-check-circle-o"> </i> Lead Inquiry Form{" "}
                                                </li>
                                                <li>
                                                    {" "}
                                                    <i className="fa fa-check-circle-o"> </i> Website Favicon Design
                                                </li>
                                                <li>
                                                    {" "}
                                                    <i className="fa fa-check-circle-o"> </i> 3 Royalty Free Stock
                                                    Image
                                                </li>
                                                <li>
                                                    {" "}
                                                    <i className="fa fa-check-circle-o"> </i> Advance UI &amp; Effects
                                                </li>
                                                <li>
                                                    {" "}
                                                    <i className="fa fa-check-circle-o"> </i> Social Media
                                                    Integrations{" "}
                                                </li>
                                                <li>
                                                    {" "}
                                                    <i className="fa fa-check-circle-o"> </i> Business Domain Emails{" "}
                                                </li>
                                                <li>
                                                    {" "}
                                                    <i className="fa fa-check-circle-o"> </i> Live Chat Integration
                                                </li>
                                                <li>
                                                    {" "}
                                                    <i className="fa fa-check-circle-o"> </i> 1 Year Domain
                                                    Registration
                                                </li>
                                            </ul>
                                        </div>
                                        <br />
                                        {/*<p class="text-center delivery-text mt-md-4 mt-4"> Add on: $500 for expedited services </p>      */}
                                    </div>
                                    <div className="col-md-8 col-8">
                                        <form className="mb-md-2">
                                            {/*<button type="submit" class="btn btn-primary btn-order-now btn-block"> order now </button>*/}
                                            <a
                                                href="!#"
                                                className="btn btn-primary w-100 btn-order-now btn-block"
                                                data-toggle="modal"
                                                data-target="#order-form"
                                            >
                                                Order Now
                                            </a>
                                        </form>
                                        <span className="view-details mt-md-4 mt-4">
                                            {/*<a href="#" class="text-uppercase text-center"> View Details </a>*/}
                                        </span>
                                    </div>
                                    <div className="col-md-12 ps-md-4 ps-4 pe-md-4 pe-4">
                                        <hr />
                                    </div>
                                    <div className="col-md-12 col-12">
                                        <div className="row contact-footer mb-md-4">
                                            <div className="col-md-6 col-6 ps-md-5 ps-4 contact-border">
                                                <small>Share your idea?</small>
                                                <a href="tel:+1-717-387-8003 ">
                                                    {" "}
                                                    <p className="contact-info">+1-717-387-8003 </p>{" "}
                                                </a>
                                            </div>
                                            <div className="col-md-6 col-6 text-right pe-md-5 pe-4">
                                                <small> Want to discuss? </small>
                                                <a href="!#">
                                                    {" "}
                                                    <p className="contact-info"> Live Chat Now </p>{" "}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            className="col-lg-4 col-md-6 col-sm-8 col-12">
                            <div className="pricing-box pt-md-4 pt-4">
                                <h4 className="ms-md-4 ms-4">
                                    BASIC CMS <br /> WEBSITE PACKAGE
                                </h4>
                                <div className="row justify-content-center mt-md-4">
                                    <div className="col-md-12 col-12">
                                        {/*<span class="old-price ml-md-4 ml-4"> <span class="sale-price mr-md-1"> $ 500 </span>  ONLY </span>*/}
                                        <h3 className="ms-md-4 ms-4 mt-md-2 real-price"> $ 389 USD </h3>
                                    </div>
                                    <div className="col-md-12 col-12 mt-md-4 mt-2">
                                        {/*  <p class="ms-md-4 ms-4"> Suitable for potential super-startups and brand revamps for companies.  </p> */}
                                        <div className="pricing-scroll ms-md-4 ms-4">
                                            <ul className="price-table-features">
                                                <li>
                                                    {" "}
                                                    <i className="fa fa-check-circle-o"> </i> 1 Page Custom Website
                                                </li>
                                                <li>
                                                    {" "}
                                                    <i className="fa fa-check-circle-o"> </i> CMS Admin Panel
                                                </li>
                                                <li>
                                                    {" "}
                                                    <i className="fa fa-check-circle-o"> </i> 1 jQuery Slider
                                                </li>
                                                <li>
                                                    {" "}
                                                    <i className="fa fa-check-circle-o"> </i> 1 Banner{" "}
                                                </li>
                                                <li>
                                                    {" "}
                                                    <i className="fa fa-check-circle-o"> </i> Mobile Responsive Layout{" "}
                                                </li>
                                                <li>
                                                    {" "}
                                                    <i className="fa fa-check-circle-o"> </i> Company Profile Section
                                                </li>
                                                <li>
                                                    {" "}
                                                    <i className="fa fa-check-circle-o"> </i> Products/Services
                                                    Section
                                                </li>
                                                <li>
                                                    {" "}
                                                    <i className="fa fa-check-circle-o"> </i> Portfolio/Gallery
                                                    Section{" "}
                                                </li>
                                                <li>
                                                    {" "}
                                                    <i className="fa fa-check-circle-o"> </i> Contact Us Section
                                                </li>
                                                <li>
                                                    {" "}
                                                    <i className="fa fa-check-circle-o"> </i> Lead Inquiry Form{" "}
                                                </li>
                                                <li>
                                                    {" "}
                                                    <i className="fa fa-check-circle-o"> </i> Website Favicon Design
                                                </li>
                                                <li>
                                                    {" "}
                                                    <i className="fa fa-check-circle-o"> </i> 3 Royalty Free Stock
                                                    Image
                                                </li>
                                                <li>
                                                    {" "}
                                                    <i className="fa fa-check-circle-o"> </i> Advance UI &amp; Effects
                                                </li>
                                                <li>
                                                    {" "}
                                                    <i className="fa fa-check-circle-o"> </i> Social Media
                                                    Integrations{" "}
                                                </li>
                                                <li>
                                                    {" "}
                                                    <i className="fa fa-check-circle-o"> </i> Business Domain Emails{" "}
                                                </li>
                                                <li>
                                                    {" "}
                                                    <i className="fa fa-check-circle-o"> </i> Live Chat Integration
                                                </li>
                                                <li>
                                                    {" "}
                                                    <i className="fa fa-check-circle-o"> </i> 1 Year Domain
                                                    Registration
                                                </li>
                                            </ul>
                                        </div>
                                        <br />
                                        {/*<p class="text-center delivery-text mt-md-4 mt-4"> Add on: $500 for expedited services </p>      */}
                                    </div>
                                    <div className="col-md-8 col-8">
                                        <form className="mb-md-2">
                                            {/*<button type="submit" class="btn btn-primary btn-order-now btn-block"> order now </button>*/}
                                            <a
                                                href="!#"
                                                className="btn btn-primary w-100 btn-order-now btn-block"
                                                data-toggle="modal"
                                                data-target="#order-form"
                                            >
                                                Order Now
                                            </a>
                                        </form>
                                        <span className="view-details mt-md-4 mt-4">
                                            {/*<a href="#" class="text-uppercase text-center"> View Details </a>*/}
                                        </span>
                                    </div>
                                    <div className="col-md-12 ps-md-4 ps-4 pe-md-4 pe-4">
                                        <hr />
                                    </div>
                                    <div className="col-md-12 col-12">
                                        <div className="row contact-footer mb-md-4">
                                            <div className="col-md-6 col-6 ps-md-5 ps-4 contact-border">
                                                <small>Share your idea?</small>
                                                <a href="tel:+1-717-387-8003 ">
                                                    {" "}
                                                    <p className="contact-info">+1-717-387-8003 </p>{" "}
                                                </a>
                                            </div>
                                            <div className="col-md-6 col-6 text-right pe-md-5 pe-4">
                                                <small> Want to discuss? </small>
                                                <a href="!#">
                                                    {" "}
                                                    <p className="contact-info"> Live Chat Now </p>{" "}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            className="col-lg-4 col-md-6 col-sm-8 col-12">
                            <div className="pricing-box pt-md-4 pt-4">
                                <h4 className="ms-md-4 ms-4">
                                    BASIC CMS <br /> WEBSITE PACKAGE
                                </h4>
                                <div className="row justify-content-center mt-md-4">
                                    <div className="col-md-12 col-12">
                                        {/*<span class="old-price ml-md-4 ml-4"> <span class="sale-price mr-md-1"> $ 500 </span>  ONLY </span>*/}
                                        <h3 className="ms-md-4 ms-4 mt-md-2 real-price"> $ 389 USD </h3>
                                    </div>
                                    <div className="col-md-12 col-12 mt-md-4 mt-2">
                                        {/*  <p class="ms-md-4 ms-4"> Suitable for potential super-startups and brand revamps for companies.  </p> */}
                                        <div className="pricing-scroll ms-md-4 ms-4">
                                            <ul className="price-table-features">
                                                <li>
                                                    {" "}
                                                    <i className="fa fa-check-circle-o"> </i> 1 Page Custom Website
                                                </li>
                                                <li>
                                                    {" "}
                                                    <i className="fa fa-check-circle-o"> </i> CMS Admin Panel
                                                </li>
                                                <li>
                                                    {" "}
                                                    <i className="fa fa-check-circle-o"> </i> 1 jQuery Slider
                                                </li>
                                                <li>
                                                    {" "}
                                                    <i className="fa fa-check-circle-o"> </i> 1 Banner{" "}
                                                </li>
                                                <li>
                                                    {" "}
                                                    <i className="fa fa-check-circle-o"> </i> Mobile Responsive Layout{" "}
                                                </li>
                                                <li>
                                                    {" "}
                                                    <i className="fa fa-check-circle-o"> </i> Company Profile Section
                                                </li>
                                                <li>
                                                    {" "}
                                                    <i className="fa fa-check-circle-o"> </i> Products/Services
                                                    Section
                                                </li>
                                                <li>
                                                    {" "}
                                                    <i className="fa fa-check-circle-o"> </i> Portfolio/Gallery
                                                    Section{" "}
                                                </li>
                                                <li>
                                                    {" "}
                                                    <i className="fa fa-check-circle-o"> </i> Contact Us Section
                                                </li>
                                                <li>
                                                    {" "}
                                                    <i className="fa fa-check-circle-o"> </i> Lead Inquiry Form{" "}
                                                </li>
                                                <li>
                                                    {" "}
                                                    <i className="fa fa-check-circle-o"> </i> Website Favicon Design
                                                </li>
                                                <li>
                                                    {" "}
                                                    <i className="fa fa-check-circle-o"> </i> 3 Royalty Free Stock
                                                    Image
                                                </li>
                                                <li>
                                                    {" "}
                                                    <i className="fa fa-check-circle-o"> </i> Advance UI &amp; Effects
                                                </li>
                                                <li>
                                                    {" "}
                                                    <i className="fa fa-check-circle-o"> </i> Social Media
                                                    Integrations{" "}
                                                </li>
                                                <li>
                                                    {" "}
                                                    <i className="fa fa-check-circle-o"> </i> Business Domain Emails{" "}
                                                </li>
                                                <li>
                                                    {" "}
                                                    <i className="fa fa-check-circle-o"> </i> Live Chat Integration
                                                </li>
                                                <li>
                                                    {" "}
                                                    <i className="fa fa-check-circle-o"> </i> 1 Year Domain
                                                    Registration
                                                </li>
                                            </ul>
                                        </div>
                                        <br />
                                        {/*<p class="text-center delivery-text mt-md-4 mt-4"> Add on: $500 for expedited services </p>      */}
                                    </div>
                                    <div className="col-md-8 col-8">
                                        <form className="mb-md-2">
                                            {/*<button type="submit" class="btn btn-primary btn-order-now btn-block"> order now </button>*/}
                                            <a
                                                href="!#"
                                                className="btn btn-primary w-100 btn-order-now btn-block"
                                                data-toggle="modal"
                                                data-target="#order-form"
                                            >
                                                Order Now
                                            </a>
                                        </form>
                                        <span className="view-details mt-md-4 mt-4">
                                            {/*<a href="#" class="text-uppercase text-center"> View Details </a>*/}
                                        </span>
                                    </div>
                                    <div className="col-md-12 ps-md-4 ps-4 pe-md-4 pe-4">
                                        <hr />
                                    </div>
                                    <div className="col-md-12 col-12">
                                        <div className="row contact-footer mb-md-4">
                                            <div className="col-md-6 col-6 ps-md-5 ps-4 contact-border">
                                                <small>Share your idea?</small>
                                                <a href="tel:+1-717-387-8003 ">
                                                    {" "}
                                                    <p className="contact-info">+1-717-387-8003 </p>{" "}
                                                </a>
                                            </div>
                                            <div className="col-md-6 col-6 text-right pe-md-5 pe-4">
                                                <small> Want to discuss? </small>
                                                <a href="!#">
                                                    {" "}
                                                    <p className="contact-info"> Live Chat Now </p>{" "}
                                                </a>
                                            </div>
                                        </div>
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

export default PricingTables;