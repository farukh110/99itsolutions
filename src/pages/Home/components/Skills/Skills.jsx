import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import './skills.scss'

const Skills = (props) => {

    const { ImgStyle, leftImage, smallContent, leftPoints, rightPoints, belowText } = props;

    console.log(leftPoints, rightPoints);

    return (
        <>
            <div className='container my-md-5 my-5'>

                <div className='row'>

                    <div className='col-md-12 mt-md-0 mt-0'>

                        <div className='row mt-md-0 mt-3'>

                            <div className='col-md-5'>

                                <img className='img-fluid' style={ImgStyle} alt='' src={leftImage} />

                            </div>

                            <div className='col-md-7 mt-md-0 mt-3'>

                                <div
                                    dangerouslySetInnerHTML={{ __html: smallContent }}
                                />

                                <div className='row'>

                                    <div className='col-md-6'>

                                        <ul className='services-ul'>

                                            {leftPoints.map((item, index) => {

                                                return <li key={index}> {item.point} </li>

                                            })}

                                        </ul>

                                    </div>

                                    <div className='col-md-6'>

                                        <ul className='services-ul'>

                                            {rightPoints.map((item, index) => {

                                                return <li key={index}> {item.point} </li>

                                            })}

                                        </ul>

                                    </div>

                                    <div className='col-md-12'>

                                        <p>{belowText}</p>

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