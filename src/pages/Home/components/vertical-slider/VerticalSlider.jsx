import React from 'react';
import './vertical-slider.scss';

const VerticalSlider = () => {
    return (
        <div className='vertical-slider-section'>

            <div className='container'>

                <div className='row'>

                    <div className='col-md-8'>

                        <div class="slider-wrapper">
                            <div class="slider">
                                <div class="slider-text-1">
                                    Are you looking for professional web Developers team?
                                </div>
                                <div class="slider-text-2">
                                    Are you looking for professional DevOps Engineers team?
                                </div>
                                <div class="slider-text-3">
                                    Are you looking for professional Design team?
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='col-md-4'>

                        <button class="btn btn-primary mx-auto d-block">Hire Us</button>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default VerticalSlider;
