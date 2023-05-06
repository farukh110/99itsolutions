import React from "react";

export default function MainSection() {
  return (
    <>
      <section className="services-four pt-115 rpt-95 pb-100 rpb-150">
        <div className="container">
          <div className="row justify-content-between align-items-center mb-40">
            <div className="col-lg-6 wow fadeInLeft delay-0-2s">
              <div className="section-title mb-35">
                <span className="sub-title">It Support For Business</span>
                <h2>
                  Preparing for your success trusted source in IT services.
                </h2>
              </div>
            </div>
            <div className="col-lg-5 wow fadeInRight delay-0-2s">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="service-item-four wow fadeInUp delay-0-2s">
                <div className="image">
                  <img
                    src={
                      require(`../../../assets/images/services/service-1.jpg`)
                        .default
                    }
                    alt="Service"
                  />
                </div>
                <div className="service-four-content">
                  <div className="service-title-area">
                    <span className="category">Web Delopment</span>
                    <h3>
                      <a href="/service-details">IT Management</a>
                    </h3>
                  </div>
                  <i className="flaticon flaticon-settings-1"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="service-item-four wow fadeInUp delay-0-4s">
                <div className="image">
                  <img
                    src={
                      require(`../../../assets/images/services/service-2.jpg`)
                        .default
                    }
                    alt="Service"
                  />
                </div>
                <div className="service-four-content">
                  <div className="service-title-area">
                    <span className="category">Data Analytics</span>
                    <h3>
                      <a href="/service-details">Cloud Services</a>
                    </h3>
                  </div>
                  <i className="flaticon flaticon-seo-1"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="service-item-four wow fadeInUp delay-0-6s">
                <div className="image">
                  <img
                    src={
                      require(`../../../assets/images/services/service-3.jpg`)
                        .default
                    }
                    alt="Service"
                  />
                </div>
                <div className="service-four-content">
                  <div className="service-title-area">
                    <span className="category">Mobile Development</span>
                    <h3>
                      <a href="/service-details">Machine Learning</a>
                    </h3>
                  </div>
                  <i className="flaticon flaticon-web"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
