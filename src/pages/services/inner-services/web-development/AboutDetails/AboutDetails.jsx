import React from 'react';
import './about.scss';

const AboutDetails = (props) => {

    const { leftImage, smallContent, leftPoints, rightPoints } = props;

    return (
        <>
            <div className='about-details'>

                <div className='container mt-md-5 mb-md-5'>

                    <div className='row'>

                        <div className='col-md-12 mt-md-0 mt-0'>

                            <div className='row mt-md-0 mt-md-3 mt-0'>

                                <div className='col-md-7 mt-md-0 mt-3'>

                                    <div className='content-small'
                                        dangerouslySetInnerHTML={{ __html: smallContent }}
                                    />

                                    <div className='row'>

                                        <div className='col-md-10'>

                                            <div className='services-h mt-md-3'>

                                                {leftPoints.length > 0 ? (
                                                    leftPoints.map((item, index) => {

                                                        return <>
                                                            <h3 className='fw-bolder mb-0'>{item.title}</h3>
                                                            <p className='mb-0' key={index}> {item.point} </p>
                                                        </>

                                                    })) : null}

                                            </div>

                                        </div>

                                        <div className='col-md-6'>

                                            <ul className='services-ul'>
                                                {rightPoints.length > 0 ? (
                                                    rightPoints.map((item, index) => (
                                                        <li key={index}> {item.point} </li>
                                                    ))
                                                ) : null}
                                            </ul>


                                        </div>

                                    </div>

                                </div>

                                <div className='col-md-5 align-item-middle'>

                                    <img className='img-fluid' alt='' src={leftImage} />

                                </div>



                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default AboutDetails;