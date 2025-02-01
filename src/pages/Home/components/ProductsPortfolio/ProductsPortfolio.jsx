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

    const [activeItem, setActiveItem] = useState('AI');

    const items = [
        {
            id: 'Manufacturing',
            title: 'Manufacturing',
            description:
                `1) ERP Systems 2) Production Management Software 3) Supply Chain Solutions`,
            image: ai,
        },
        {
            id: 'Healthcare',
            title: 'Healthcare',
            description:
                `1) Patient Management Systems 2) Telemedicine Software 3) AI Diagnostic Tools`,
            image: ml,
        },
        {
            id: 'Sports',
            title: 'Sports',
            description:
                `1) Performance Analytics Software 2) Ticketing Platforms 3) Sports Management Systems`,
            image: cv,
        },
        {
            id: 'Logistics',
            title: 'Logistics',
            description:
                `1) Fleet Management Software 2) Warehouse Management Systems 3) Route Optimization Tools`,
            image: gi,
        },
        {
            id: 'Media',
            title: 'Media',
            description:
                `1) Content Management Systems 2) Digital Rights Management Software 3) Streaming Platforms`,
            image: bigData,
        },
        {
            id: 'Finance',
            title: 'Finance',
            description:
                `1) Digital Banking Platforms 2) Fraud Detection Software 3) Financial Analytics`,
            image: ar,
        },
        {
            id: 'Retail',
            title: 'Retail',
            description:
                `1) Inventory Management 2) E-Commerce Platforms 3) Customer Loyalty Systems`,
            image: ar,
        },
        {
            id: 'Education',
            title: 'Education',
            description:
                `1) Learning Management Systems (LMS) 2) Virtual Classroom Platforms 3) Student Portals`,
            image: ar,
        },
        {
            id: 'Energy',
            title: 'Energy',
            description:
                `1) Energy Monitoring Systems 2) Smart Grid Management Software 3) Sustainability Analytics`,
            image: ar,
        },
        {
            id: 'Agriculture',
            title: 'Agriculture',
            description:
                `1) Precision Farming Tools 2) AI Crop Monitoring Systems 3) Yield Forecasting Solutions`,
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
                                            <p>
                                                {item.description}
                                            </p>
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
