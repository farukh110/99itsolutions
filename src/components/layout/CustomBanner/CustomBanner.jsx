import React from 'react';
import './index.scss';

const CustomBanner = (props) => {

    const { imgSource, imgSourceAlt } = props;

    return (
        <><section style={{ background: `url(${imgSource})` }} className="main-banner pt-md-5 pb-md-5">
            <div className='pt-md-5 pb-md-5'>
                <h1 className='mt-md-5 mb-md-5 text-center text-light'> {imgSourceAlt} </h1>
            </div>
        </section>
        </>
    )
}

export default CustomBanner;