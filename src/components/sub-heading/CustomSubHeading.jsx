import React from 'react';
import './CustomSubHeading.scss';

const CustomSubHeading = (props) => {

    const { firstWord, lastWord, textCenter } = props;

    return (
        <div className='custom-heading-title'>
            <h2 className={`custom-h2 fist-word ${textCenter}`}> {firstWord} <span className='last-word'> {lastWord} </span> </h2>
        </div>
    )
}

export default CustomSubHeading;