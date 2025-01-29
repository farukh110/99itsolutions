import React, { useState } from 'react';
import ai from '../../../../assets/images/products-catalog/ai.webp';
import ml from '../../../../assets/images/products-catalog/ml.jpg';
import cv from '../../../../assets/images/products-catalog/computer-vision.webp';
import gi from '../../../../assets/images/products-catalog/Generative-AI.webp';
import bigData from '../../../../assets/images/products-catalog/big-data.webp';
import ar from '../../../../assets/images/products-catalog/arvr.webp';
import './ProductsPortfolio.scss';

const ProductsPortfolio = () => {

    const [activeItem, setActiveItem] = useState('AI');

    const items = [
        {
            id: 'AI',
            title: 'AI',
            description:
                'Leverage our AI expertise to enhance automation, efficiency, and smart decision-making in your software solutions.',
            image: ai,
        },
        {
            id: 'ML',
            title: 'ML',
            description:
                'Utilize our ML services to unlock predictive insights and personalized experiences in your applications.',
            image: ml,
        },
        {
            id: 'ComputerVision',
            title: 'Computer Vision',
            description:
                'Employ our Computer Vision capabilities to revolutionize user interaction and data processing in apps.',
            image: cv,
        },
        {
            id: 'GenerativeAI',
            title: 'Generative AI',
            description:
                'Incorporate Generative AI for creative and dynamic content generation in your software, boosting engagement.',
            image: gi,
        },
        {
            id: 'BigData',
            title: 'Big Data',
            description:
                'Harness Big Data analytics with our services for deeper insights and strategic business decisions.',
            image: bigData,
        },
        {
            id: 'ARVR',
            title: 'AR/VR',
            description:
                'Adopt our AR/VR development services to create immersive and interactive user experiences in your apps.',
            image: ar,
        },
    ];

    return (
        <>
            <div className='products-catalog my-md-5'>

                <div className='container'>

                    <div className='row'>

                        <div className='col-md-5 pe-5'>

                            {/* mouse over area */}
                            <div className='left-panel'>

                                {items.map((item) => (
                                    <div
                                        key={item.id}
                                        className={`industry-item ${activeItem === item.id ? 'active' : ''
                                            }`}
                                        onMouseEnter={() => setActiveItem(item.id)}
                                    >
                                        {item.title}
                                        <div className="arrowDiv" style={{
                                            display: activeItem === item.id ? 'block' : 'none',
                                        }}>
                                            <i className="fa fa-long-arrow-right" />
                                        </div>
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
