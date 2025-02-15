import React from 'react';
import './CustomHeading.scss';

const CustomHeadingTwo = (props) => {

    const { firstWord, lastWord, textCenter } = props;

    return (
        <div className='custom-heading-title'>
            <h2 className={`fist-word ${textCenter}`}> {firstWord} </h2>
            <h2 className={`fist-word ${textCenter}`}> <span className='last-word'> {lastWord} </span> </h2>
        </div>
    )
}

export default CustomHeadingTwo;