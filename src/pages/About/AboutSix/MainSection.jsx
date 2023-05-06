import React from "react";
import aboutThumbTwo from "../../../assets/images/about/about-graph.png";
import aboutThumb from "../../../assets/images/about/about-six.png";

export default function MainSection() {
  return (
    <>
      <section className="about-section-six py-120 rpb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="about-six-content mr-65 rmr-0 wow fadeInLeft delay-0-2s">
                <div className="section-title mb-35">
                  <span className="sub-title">Management</span>
                  <h2>
                    The just investigation apparatus you'll at any point need
                  </h2>
                </div>
                <div className="service-item-six">
                  <div className="icon">
                    <i className="flaticon flaticon-3d-printing"></i>
                  </div>
                  <div className="service-content">
                    <h5>Fully Responsive</h5>
                    <p>
                      Integer molestie magna in augue euismod, sit amet pulvinar
                      arcu dapibus.
                    </p>
                  </div>
                </div>
                <div className="service-item-six">
                  <div className="icon">
                    <i className="flaticon flaticon-bars"></i>
                  </div>
                  <div className="service-content">
                    <h5>Reporting & Analysis</h5>
                    <p>
                      Integer molestie magna in augue euismod, sit amet pulvinar
                      arcu dapibus.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="about-shape-six ml-50 rml-0 pr-30 wow fadeInRight delay-0-2s">
                <img src={aboutThumb} alt="About" />
                <img className="about-graph" src={aboutThumbTwo} alt="Graph" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
