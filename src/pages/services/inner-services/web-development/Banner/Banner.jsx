import React from 'react';
import './Banner.scss';
import webDevService from '../../../../../assets/images/services/main-services/dev.jpg';

const Banner = () => {
    return (
        <>
            <div className="banner container my-4">
                <div className="animated-wrapper mt-4">
                    <div className="row">
                        <div className="col-xl-6 col-lg-5 col-md-12 col-sm-12 col-12">
                            <div className="header-content">
                                <h2 className='mb-0'>
                                    We offer
                                </h2>
                                <h1 className='mb-md-1'> Custom website design services. </h1>
                                <p>
                                    Your website is possibly your most crucial marketing tool,
                                    and if it's not helping your business grow, it might be time
                                    for a fresh one. Research shows that 75% of customers
                                    assess a company's trustworthiness by evaluating its website design.
                                </p>
                                <div className="input-group mb-3">
                                    <input
                                        type="text"
                                        className="form-control input-email"
                                        placeholder="Enter your Business Name"
                                    />
                                    <div className="input-group-append ps-2">
                                        <button
                                            className="btn btn-primary h-100 btn-subscribe"
                                            type="button"
                                        >
                                            Let's Start
                                        </button>
                                    </div>
                                </div>
                                <div className="row">

                                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-6">

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-7 col-md-12 col-sm-12 col-12">
                            <div className="animation-container">
                                <img
                                    className="img-fluid header-img"
                                    src={webDevService}
                                    alt=""
                                />
                                <div className="people-content">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Banner;