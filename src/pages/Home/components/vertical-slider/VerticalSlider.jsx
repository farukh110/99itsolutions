import React from 'react';
import './vertical-slider.scss';

const VerticalSlider = (props) => {

    const { title, teamItems } = props;

    return (
        <div className='vertical-slider-section'>

            <div className='container'>

                <div className='row'>

                    <div className='col-md-8'>

                        <div class="slider-wrapper">
                            {title}
                            <div class="slider">

                                {teamItems?.map((item, index) =>
                                    <div className={`slider-text-${index + 1}`}>
                                        {item?.position}
                                    </div>
                                )}

                            </div>
                        </div>

                    </div>

                    <div className='col-md-4'>

                        <button class="btn btn-primary mx-auto d-block">Hire Us <i class="fa-regular fa-paper-plane"></i> </button>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default VerticalSlider;
