import React from "react";

export default function MainSection() {
  return (
    <section className="what-we-do-two text-center pt-115 rpt-95 pb-90 rpb-70">
      <div className="container">
        <div className="section-title mb-55">
          <span className="sub-title">What We Do</span>
          <h2>
            Highlights that Help you <br />
            construct better
          </h2>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-3 col-sm-6">
            <div className="feature-item-two wow fadeInUp delay-0-2s">
              <div className="icon">
                <i className="flaticon flaticon-3d"></i>
              </div>
              <div className="feature-line">
                <span className="animate-bar"></span>
              </div>
              <h4>
                <a href="/service-details">Project manage</a>
              </h4>
              <p>Integer molestie magna in augue euismod,</p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="feature-item-two color-two wow fadeInUp delay-0-4s">
              <div className="icon">
                <i className="flaticon flaticon-coding"></i>
              </div>
              <div className="feature-line">
                <span className="animate-bar delay-1-0s"></span>
              </div>
              <h4>
                <a href="/service-details">Responsive design</a>
              </h4>
              <p>Integer molestie magna in augue euismod,</p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="feature-item-two color-three wow fadeInUp delay-0-6s">
              <div className="icon">
                <i className="flaticon flaticon-art"></i>
              </div>
              <div className="feature-line">
                <span className="animate-bar delay-2-0s"></span>
              </div>
              <h4>
                <a href="/service-details">Easy Customize</a>
              </h4>
              <p>Integer molestie magna in augue euismod,</p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="feature-item-two color-four wow fadeInUp delay-0-8s">
              <div className="icon">
                <i className="flaticon flaticon-web"></i>
              </div>
              <div className="feature-line">
                <span className="animate-bar delay-0-5s"></span>
              </div>
              <h4>
                <a href="/service-details">Project manage</a>
              </h4>
              <p>Integer molestie magna in augue euismod,</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
