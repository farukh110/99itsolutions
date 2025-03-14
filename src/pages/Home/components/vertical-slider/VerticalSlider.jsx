import React from 'react';
import './vertical-slider.scss';
import { useNavigate } from 'react-router-dom';

const VerticalSlider = (props) => {

    const { title, teamItems } = props;

    const navigate = useNavigate();

    return (
        <div className='vertical-slider-section'>

            <div className='container'>

                <div className='row'>

                    <div className='col-lg-8 col-md-9 col-sm-12 col-12'>

                        <div class="slider-wrapper">
                            {title}
                            <div class="slider">

                                {teamItems?.map((item, index) =>
                                    <div className={`slider-text-${index + 1}`}>
                                        {item?.position} <span className='text-white'>?</span>
                                    </div>
                                )}

                            </div>
                        </div>

                    </div>

                    <div className='col-lg-4 col-md-3 col-sm-12 col-12'>

                        <button onClick={() => navigate('/get-free-quote')} class="btn btn-primary">Hire Us <i class="fa-regular fa-paper-plane"></i> </button>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default VerticalSlider;
