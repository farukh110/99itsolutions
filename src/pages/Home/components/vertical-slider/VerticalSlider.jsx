import React from 'react';
import './vertical-slider.scss';

const VerticalSlider = () => {
    return (
        <div className='vertical-slider-section'>

            <div className='container'>

                <div className='row'>

                    <div className='col-md-8'>

                        <div class="slider-wrapper">
                            Are you looking for professional
                            <div class="slider">
                                <div class="slider-text-1">
                                    Free Consultation
                                </div>
                                <div class="slider-text-2">
                                    web Developer
                                </div>
                                <div class="slider-text-3">
                                    DevOps Engineer
                                </div>
                                <div class="slider-text-4">
                                    Graphic Design
                                </div>
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
