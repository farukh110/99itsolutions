import React from "react";
import background from "../../../assets/images/background/progress.png";

export default function WorkProcessSection() {
  return (
    <section
      className="work-progress-three bg-blue text-white pt-115 rpt-95 pb-85 rpb-65"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="container">
        <div className="section-title text-center mb-35">
          <span className="sub-title">How We Do</span>
          <h2>
            Custom IT Solutions <br />
            for Your Business
          </h2>
        </div>
        <div className="work-progress-inner-three">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6">
              <div className="progress-item-two style-two wow fadeInUp delay-0-2s">
                <span className="progress-step">01</span>
                <div className="icon">
                  <i className="flaticon flaticon-speech-bubble"></i>
                </div>
                <h3>
                  Advertising and <br />
                  Marketing
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore
                </p>
                <a href="/service-details" className="learn-more">
                  Read More <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="progress-item-two style-two wow fadeInUp delay-0-4s">
                <span className="progress-step">02</span>
                <div className="icon">
                  <i className="flaticon flaticon-vector"></i>
                </div>
                <h3>
                  Web <br />
                  Development
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore
                </p>
                <a href="/service-details" className="learn-more">
                  Read More <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="progress-item-two style-two wow fadeInUp delay-0-6s no-border mb-0">
                <span className="progress-step">03</span>
                <div className="icon">
                  <i className="flaticon flaticon-like-1"></i>
                </div>
                <h3>
                  Mobile App <br />
                  Development
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore
                </p>
                <a href="/service-details" className="learn-more">
                  Read More <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
