import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ai from '../../../../assets/images/products-catalog/ai.webp';
import ml from '../../../../assets/images/products-catalog/ml.jpg';
import cv from '../../../../assets/images/products-catalog/computer-vision.webp';
import gi from '../../../../assets/images/products-catalog/Generative-AI.webp';
import bigData from '../../../../assets/images/products-catalog/big-data.webp';
import ar from '../../../../assets/images/products-catalog/arvr.webp';
import './ProductsPortfolio.scss';
import CustomHeading from '../../../../components/heading/CustomHeading';

const ProductsPortfolio = () => {

    const navigate = useNavigate();
    const [activeItem, setActiveItem] = useState('Manufacturing');

    const items = [
        {
            id: 'Manufacturing',
            title: 'Manufacturing',
            description:
                `<ul> 
                    <li> 1) ERP </li>
                    <li> 2) Accounting Management </li>
                    <li> 3) Inventory Management System </li>
                    <li> 4) Retail/Wholesale/Inventory </li>
                </ul>`,
            image: ai,
        },
        {
            id: 'Healthcare',
            title: 'Pharmacy & Healthcare',
            description:
                `<ul>
                    <li> 1) Pharmacy Management System </li>
                    <li> 2) Hospital Management System </li>
                    <li> 3) Clinic Management System </li>
                    <li> 4) Doctor Appointment Booking </li>
                    <li> 5) Patient Management </li>
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
            title: 'Logistics & Transportation',
            description:
                `<ul>
                    <li> 1) Courier & Logistics System </li>
                    <li> 2) Logistics Management </li>
                    <li> 3) Shipping Solution </li>
                    <li> 4) Fleet Management System </li>
                    <li> 5) Car Rental/Fleet Management System </li>
                    <li> 6) Taxi/Uber Management System </li>
                    <li> 7) Delivery Solution </li>
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
                    <li> 1) Accounting and Billing Software </li>
                    <li> 2) Payroll System </li>
                    <li> 3) Client Manager </li>
                    <li> 4) Bank/Money Management System </li>
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
            title: 'Education & Learning',
            description:
                `<ul>
                    <li> 1) School Management System </li>
                    <li> 2) Learning Management System (LMS) </li>
                    <li> 3) Institute Management System </li>
                    <li> 4) Online Course Platform </li>
                    <li> 5) Quiz Game </li>
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

                                    <button onClick={() => navigate('/get-free-quote')} className='btn btn-primary btn-request d-block mx-auto'>
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
