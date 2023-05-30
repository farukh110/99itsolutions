import React, { useState } from 'react';
import g1 from "../../../assets/images/gallery/pak.jpg";
import g2 from "../../../assets/images/gallery/hm.jpg";
import g3 from "../../../assets/images/gallery/sme.jpg";
import g4 from "../../../assets/images/gallery/Bdom.jpg";
import g5 from "../../../assets/images/gallery/ei.jpg";
import g6 from "../../../assets/images/gallery/tlc.jpg";
import g7 from "../../../assets/images/gallery/ready.jpg";
import g8 from "../../../assets/images/gallery/nar.jpg";
import './OurWork.scss';

const OurWork = () => {

    const portfolioItems = [
        {
            id: 1,
            image: g1,
            name: "project 1",
            category: "web",
            link: "http"
        },
        {
            id: 2,
            image: g2,
            name: "project 2",
            category: "web",
            link: "http"
        },
        {
            id: 3,
            image: g3,
            name: "project 3",
            category: "web",
            link: "http"
        },
        {
            id: 4,
            image: g4,
            name: "project 4",
            category: "web",
            link: "http"
        },
        {
            id: 5,
            image: g5,
            name: "project 5",
            category: "mobile",
            link: "http"
        },
        {
            id: 6,
            image: g6,
            name: "project 6",
            category: "mobile",
            link: "http"
        },
        {
            id: 7,
            image: g7,
            name: "project 7",
            category: "graphic",
            link: "http"
        },
        {
            id: 8,
            image: g8,
            name: "project 8",
            category: "graphic",
            link: "http"
        },
        {
            id: 9,
            image: g1,
            name: "project 9",
            category: "digital",
            link: "http"
        },
        {
            id: 10,
            image: g2,
            name: "project 10",
            category: "digital",
            link: "http"
        },
        {
            id: 11,
            image: g3,
            name: "project 11",
            category: "digital",
            link: "http"
        },
        {
            id: 12,
            image: g3,
            name: "project 12",
            category: "logo",
            link: "http"
        },
        {
            id: 13,
            image: g8,
            name: "project 8",
            category: "logo",
            link: "http"
        },
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
        <section className="gallery-section portfolio-home-section px-55 rpx-0 rpt-30 pb-85 rpb-20">
            <div className="container-fluid">
                <div className="section-title text-center mb-30">
                    <span className="sub-title">Our Portfolio</span>
                    <h2>Some Of Our Work</h2>
                </div>

                <div className='row'>

                    <div className='col-md-2'>
                        <div className="d-grid">
                            <button onClick={() => filterItem('logo')} className={`btn btn-outline-primary ${activeCategory === 'logo' ? 'active' : ''}`}>
                                Logo Design
                            </button>
                        </div>
                    </div>

                    <div className='col-md-2'>
                        <div className="d-grid">

                            <button onClick={() => filterItem('web')} className={`btn btn-outline-primary ${activeCategory === 'web' ? 'active' : ''}`}>
                                Web Development
                            </button>

                        </div>
                    </div>

                    <div className='col-md-2'>
                        <div className="d-grid">
                            <button onClick={() => filterItem('mobile')} className={`btn btn-outline-primary ${activeCategory === 'mobile' ? 'active' : ''}`}>
                                Mobile App Development
                            </button>
                        </div>
                    </div>

                    <div className='col-md-2'>
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

                    <div className='col-md-2'>
                        <div className="d-grid">
                            <button onClick={() => setItems(portfolioItems)} className={`btn btn-outline-primary ${activeCategory === null ? 'active' : ''}`}>
                                All
                            </button>
                        </div>
                    </div>

                </div>

                <div className="row text-white justify-content-center mt-md-5">

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
                                <div key={id} className="col-xl-3 col-lg-4 col-sm-6">
                                    <div
                                        className="gallery-item style-four wow fadeInUp delay-0-8s"
                                        style={{ visibility: "visible", animationName: "fadeInUp" }}
                                    >
                                        <img
                                            src={image}
                                            alt="Gallery"
                                        />
                                        <div className="gallery-content">
                                            <div className="gallery-content-inner">
                                                <span className="category">Our Gallery</span>
                                                <h5>{name}</h5>
                                                <a href={link}>
                                                    <i className="fas fa-arrow-right"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>)

                        })

                    )}

                </div>
            </div>
        </section>
    )
}

export default OurWork;