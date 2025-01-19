import React from 'react';
import './CustomHeading.scss';

const CustomHeading = (props) => {

    const { firstWord, lastWord, textCenter } = props;

    return (
        <div className='custom-heading-title'>
            <h2 className={`fist-word ${textCenter}`}> {firstWord} <span className='last-word'> {lastWord} </span> </h2>
        </div>
    )
}

export default CustomHeading;