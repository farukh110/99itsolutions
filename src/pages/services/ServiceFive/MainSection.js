import React from "react";

export default function MainSection() {
  return (
    <section className="what-we-do bg-lighter pt-115 rpt-95 pb-90 rpb-70">
      <div className="container">
        <div className="section-title text-center mb-65">
          <span className="sub-title">What We Do</span>
          <h2>
            Preparing For Your Business Success <br />
            With IT Solution
          </h2>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-4 col-md-6">
            <div className="feature-item wow fadeInUp delay-0-2s">
              <a href="/service-details" className="feature-btn">
                <i className="fas fa-long-arrow-alt-right"></i>
              </a>
              <div className="icon">
                <i className="flaticon flaticon-software-development"></i>
              </div>
              <div className="feature-content">
                <h5>IT Management</h5>
                <p>
                  Lorem ipsum dolor sitmet consectetur adipiscing elit sed do
                  eiusmod
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="feature-item wow fadeInUp delay-0-4s">
              <a href="/service-details" className="feature-btn">
                <i className="fas fa-long-arrow-alt-right"></i>
              </a>
              <div className="icon">
                <i className="flaticon flaticon-3d-printing"></i>
              </div>
              <div className="feature-content">
                <h5>Cloud Services</h5>
                <p>
                  Lorem ipsum dolor sitmet consectetur adipiscing elit sed do
                  eiusmod
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="feature-item wow fadeInUp delay-0-6s">
              <a href="/service-details" className="feature-btn">
                <i className="fas fa-long-arrow-alt-right"></i>
              </a>
              <div className="icon">
                <i className="flaticon flaticon-web-1"></i>
              </div>
              <div className="feature-content">
                <h5>Machine Learning</h5>
                <p>
                  Lorem ipsum dolor sitmet consectetur adipiscing elit sed do
                  eiusmod
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
