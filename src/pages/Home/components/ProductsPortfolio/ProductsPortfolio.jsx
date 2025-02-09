import React, { useState } from 'react';
import ai from '../../../../assets/images/products-catalog/ai.webp';
import ml from '../../../../assets/images/products-catalog/ml.jpg';
import cv from '../../../../assets/images/products-catalog/computer-vision.webp';
import gi from '../../../../assets/images/products-catalog/Generative-AI.webp';
import bigData from '../../../../assets/images/products-catalog/big-data.webp';
import ar from '../../../../assets/images/products-catalog/arvr.webp';
import './ProductsPortfolio.scss';
import CustomHeading from '../../../../components/heading/CustomHeading';

const ProductsPortfolio = () => {

    const [activeItem, setActiveItem] = useState('Manufacturing');

    const items = [
        {
            id: 'Manufacturing',
            title: 'Manufacturing',
            description:
                `<ul> 
                    <li> 1) ERP Systems </li> 
                    <li> 2) Production Management Software </li> 
                    <li> 3) Supply Chain Solutions </li> 
                </ul>`,
            image: ai,
        },
        {
            id: 'Healthcare',
            title: 'Healthcare',
            description:
                `<ul>
                    <li> 1) Patient Management Systems </li>
                    <li> 2) Telemedicine Software </li>
                    <li> 3) AI Diagnostic Tools </li>
                </ul>`,
            image: ml,
        },
        {
            id: 'Sports',
            title: 'Sports',
            description:
                `<ul>
                    <li> 1) Performance Analytics Software </li>
                    <li> 2) Ticketing Platforms </li>
                    <li> 3) Sports Management Systems </li>
                </ul>`,
            image: cv,
        },
        {
            id: 'Logistics',
            title: 'Logistics',
            description:
                `<ul>
                    <li> 1) Fleet Management Software </li>
                    <li> 2) Warehouse Management Systems </li>
                    <li> 3) Route Optimization Tools </li>
                </ul>`,
            image: gi,
        },
        {
            id: 'Media',
            title: 'Media',
            description:
                `<ul>
                    <li> 1) Content Management Systems </li>
                    <li> 2) Digital Rights Management Software </li>
                    <li> 3) Streaming Platforms </li>
                </ul>`,
            image: bigData,
        },
        {
            id: 'Finance',
            title: 'Finance',
            description:
                `<ul>
                    <li> 1) Digital Banking Platforms </li>
                    <li> 2) Fraud Detection Software </li>
                    <li> 3) Financial Analytics </li>
                </ul>`,
            image: ar,
        },
        {
            id: 'Retail',
            title: 'Retail',
            description:
                `<ul>
                    <li> 1) Inventory Management </li>
                    <li> 2) E-Commerce Platforms </li>
                    <li> 3) Customer Loyalty Systems </li>
                </ul>`,
            image: ar,
        },
        {
            id: 'Education',
            title: 'Education',
            description:
                `<ul>
                    <li> 1) Learning Management Systems (LMS) </li>
                    <li> 2) Virtual Classroom Platforms </li>
                    <li> 3) Student Portals </li>
                </ul>`,
            image: ar,
        },
        {
            id: 'Energy',
            title: 'Energy',
            description:
                `<ul>
                    <li> 1) Energy Monitoring Systems </li>
                    <li> 2) Smart Grid Management Software </li>
                    <li> 3) Sustainability Analytics </li>
                </ul>`,
            image: ar,
        },
        {
            id: 'Agriculture',
            title: 'Agriculture',
            description:
                `<ul>
                    <li> 1) Precision Farming Tools </li>
                    <li> 2) AI Crop Monitoring Systems </li>
                    <li> 3) Yield Forecasting Solutions </li>
                </ul>`,
            image: ar,
        },
    ];

    return (
        <>
            <div className='products-catalog my-md-5'>

                <div className='container'>

                    <div className='row justify-content-center'>

                        <div className='col-md-12 pe-5'>
                            <CustomHeading
                                firstWord="Readymade and Custom-Made"
                                lastWord="Solutions for Diverse Industries"
                                textCenter="text-center"
                            />
                            <p>
                                99 IT Solutions delivers industry-focused ready-made & fully custom software solutions crafted to overcome unique challenges and enhance business success. Our expertise ensures each solution is tailored and quickly customizable to meet the dynamic requirements of the industries we cater to.
                            </p>
                        </div>

                        <div className='col-md-5 pe-5'>

                            {/* mouse over area */}
                            <div className='row left-panel'>

                                {items.map((item) => (
                                    <div
                                        key={item.id}
                                        className={`col-md-6 industry-item ${activeItem === item.id ? 'active' : ''
                                            }`}
                                        onMouseEnter={() => setActiveItem(item.id)}
                                    >
                                        {item.title}
                                    </div>))}

                                <div className='col-md-12'>

                                    <button className='btn btn-primary btn-request d-block mx-auto'>
                                        Request of a Demo
                                    </button>

                                </div>

                            </div>

                        </div>

                        <div className='col-md-7 d-flex flex-column align-items-end pe-5'>

                            {/* image and content will show according to mouse over */}

                            {items.map((item) => activeItem === item.id && (

                                <div key={item.id} className='row image-content-area'>
                                    <div className="img-outer">
                                        <img src={item.image} alt={item.title} />
                                    </div>

                                    <div className="content-shadow">
                                        <p className="right-title">{item.title}</p>
                                        <div className="right-description">
                                            <p
                                                dangerouslySetInnerHTML={{ __html: item.description }}
                                            />
                                        </div>
                                    </div>
                                </div>))}

                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}

export default ProductsPortfolio;
