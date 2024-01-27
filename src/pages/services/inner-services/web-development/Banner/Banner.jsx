import React from 'react';
import './Banner.scss';

const Banner = (props) => {

    const { bannerHeading1, bannerHeading2, bannerContent, bannerImage } = props;

    return (
        <>
            <div className="banner container my-4">
                <div className="animated-wrapper mt-4">
                    <div className="row">
                        <div className="col-xl-6 col-lg-5 col-md-12 col-sm-12 col-12">
                            <div className="header-content">
                                <h2 className='mb-0'>
                                    {bannerHeading1}
                                </h2>
                                <h1 className='mb-md-1'> {bannerHeading2} </h1>
                                <p>
                                    {bannerContent}
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
                                    src={bannerImage}
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