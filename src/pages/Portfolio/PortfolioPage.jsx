import React, { useState } from 'react'
import './index.scss';
import pak from "../../assets/images/gallery/pak.jpg";
import hm from "../../assets/images/gallery/hm.jpg";
import transcriberhub from "../../assets/images/gallery/transcriberhub.JPG";
import oxford from "../../assets/images/gallery/oxford.jpg";
import gfs from "../../assets/images/gallery/gfs.jpg";
import green from "../../assets/images/gallery/greensensebilling.png";
import navhoo from "../../assets/images/gallery/navhoo.png";
import app from "../../assets/images/gallery/appedology.jpg";

const PortfolioPage = () => {

    const portfolioItems = [
        {
            id: 1,
            image: transcriberhub,
            name: "project 1",
            category: "web",
            link: "http"
        },
        {
            id: 2,
            image: oxford,
            name: "project 2",
            category: "web",
            link: "http"
        },
        {
            id: 3,
            image: gfs,
            name: "project 3",
            category: "web",
            link: "http"
        },
        {
            id: 4,
            image: green,
            name: "project 4",
            category: "web",
            link: "http"
        },
        {
            id: 5,
            image: navhoo,
            name: "project 5",
            category: "mobile",
            link: "http"
        },
        {
            id: 6,
            image: app,
            name: "project 6",
            category: "mobile",
            link: "http"
        },
        {
            id: 7,
            image: pak,
            name: "project 7",
            category: "graphic",
            link: "http"
        },
        {
            id: 8,
            image: hm,
            name: "project 8",
            category: "graphic",
            link: "http"
        },
        {
            id: 9,
            image: app,
            name: "project 9",
            category: "digital",
            link: "http"
        },
        {
            id: 10,
            image: app,
            name: "project 10",
            category: "digital",
            link: "http"
        },
        {
            id: 11,
            image: app,
            name: "project 11",
            category: "digital",
            link: "http"
        }
    ];

    const [items, setItems] = useState(portfolioItems);
    const [isLoading, setIsLoading] = useState(false);
    const [activeCategory, setActiveCategory] = useState(null);

    const filterItem = (categItem) => {
        setIsLoading(true);
        const updatedItems = portfolioItems.filter((currentItem) => {
            return currentItem.category === categItem;
        });

        setTimeout(() => {
            setItems(updatedItems);
            setIsLoading(false);
        }, 1000);

        setActiveCategory(categItem);
    };

    return (
        <>
            <div className='container portfolio-page-container'>

                <h2 className='text-center'> Portfolio </h2>

                <div className='row justify-content-center my-md-3'>

                    <div className='col-md-10'>

                        <div className='row'>

                            <div className='col-md-3'>
                                <div className="d-grid">
                                    <button onClick={() => filterItem('web')} className={`btn btn-outline-primary ${activeCategory === 'web' ? 'active' : ''}`}>
                                        Web Development
                                    </button>
                                </div>

                            </div>

                            <div className='col-md-3'>

                                <div className="d-grid">
                                    <button onClick={() => filterItem('mobile')} className={`btn btn-outline-primary ${activeCategory === 'mobile' ? 'active' : ''}`}>
                                        Mobile App Development
                                    </button>
                                </div>
                            </div>

                            <div className='col-md-3'>

                                <div className="d-grid">
                                    <button onClick={() => filterItem('digital')} className={`btn btn-outline-primary ${activeCategory === 'digital' ? 'active' : ''}`}>
                                        Digital Marketing
                                    </button>
                                </div>
                            </div>

                            <div className='col-md-2'>

                                <div className="d-grid">
                                    <button onClick={() => filterItem('graphic')} className={`btn btn-outline-primary ${activeCategory === 'graphic' ? 'active' : ''}`}>
                                        Grahpic Design
                                    </button>
                                </div>
                            </div>

                            <div className='col-md-1'>

                                <div className="d-grid">
                                    <button onClick={() => setItems(portfolioItems)} className={`btn btn-outline-primary ${activeCategory === null ? 'active' : ''}`}>
                                        All
                                    </button>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

                <div className='row my-4 mt-md-5'>

                    {isLoading ? (
                        <div className='col-md-12 text-center'>
                            <div className="spinner-border text-primary" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                    ) : (
                        items.map((item) => {

                            const { id, name, image, link } = item;

                            return (
                                <div className='col-md-4' key={id}>

                                    <div className="gallery-item style-three">
                                        <img
                                            src={image}
                                            alt="Gallery"
                                            className='img-fluid'
                                        />
                                        <div className="gallery-content">
                                            <h5>
                                                <a href={link}>{name}</a>
                                            </h5>
                                        </div>
                                    </div>

                                </div>
                            )
                        })
                    )}

                </div>

            </div>
        </>
    )
}

export default PortfolioPage;