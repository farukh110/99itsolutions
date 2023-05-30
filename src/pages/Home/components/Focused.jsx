import React, { useState } from 'react';
import gov from '../../../assets/images/focused/g1.png';
import cor from '../../../assets/images/focused/c1.png';
import ecom from '../../../assets/images/focused/e1.png';
import re from '../../../assets/images/focused/r1.png';
import ed from '../../../assets/images/focused/ed1.png';
import tra from '../../../assets/images/focused/t1.png';
import ins from '../../../assets/images/focused/i1.png';
import hea from '../../../assets/images/focused/h1.png';
import './Focused.scss';

const Focused = () => {

    const items = [
        { name: "Government", img: gov },
        { name: "Corporate", img: cor },
        { name: "Ecommerce", img: ecom },
        { name: "Retail", img: re },
        { name: "Education", img: ed },
        { name: "Travel & Tourism", img: tra },
        { name: "Insurance", img: ins },
        { name: "Healthcare", img: hea },
    ];

    const [dataItems, setDataItems] = useState(items);

    return (
        <div className='container focused-container'>

            <h2 className='text-center text-navy-blue'> Focused Verticles </h2>

            <div className='row my-md-5 my-0'>

                {dataItems.map((item, index) => <div key={index} className='col-md-3 col-6 my-md-4 my-2 p-0'>

                    <div className='row justify-content-center'>

                        <div className='col-md-3 p-0'>
                            <img className='img-fluid' src={item.img} alt={item.name} />
                        </div>
                        <div className='col-md-7 p-0'>
                            <h5 className='mt-md-1'> {item.name} </h5>
                        </div>

                    </div>

                </div>)}

            </div>

        </div>
    )
}

export default Focused;