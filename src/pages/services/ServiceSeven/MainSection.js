import React from "react";
import background from "../../../assets/images/background/services.png";
import shape2 from "../../../assets/images/shapes/service-line.png";
import shape1 from "../../../assets/images/shapes/service-triangle.png";

export default function MainSection() {
  return (
    <section
      className="services-seven rel text-center py-100 rpy-100"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title mb-75">
              <span className="sub-title"> Our Services</span>
              <h2>Our proposition Data Science and Analytics Services</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-sm-6">
            <div className="service-item-seven">
              <img
                src={
                  require(`../../../assets/images/services/service-seven1.png`)
                    .default
                }
                alt="Service"
              />
              <h3>Machine Learning Bootcamp</h3>
              <a href="#" className="read-more">
                Click here <i className="fas fa-long-arrow-alt-right"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="service-item-seven">
              <img
                src={
                  require(`../../../assets/images/services/service-seven2.png`)
                    .default
                }
                alt="Service"
              />
              <h3>Digital Data Consulting for Science lab</h3>
              <a href="#" className="read-more">
                Click here <i className="fas fa-long-arrow-alt-right"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="service-item-seven">
              <img
                src={
                  require(`../../../assets/images/services/service-seven3.png`)
                    .default
                }
                alt="Service"
              />
              <h3>Machine Learning Bootcamp</h3>
              <a href="#" className="read-more">
                Click here <i className="fas fa-long-arrow-alt-right"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="service-item-seven">
              <img
                src={
                  require(`../../../assets/images/services/service-seven1.png`)
                    .default
                }
                alt="Service"
              />
              <h3>Machine Learning Bootcamp</h3>
              <a href="#" className="read-more">
                Click here <i className="fas fa-long-arrow-alt-right"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="service-item-seven">
              <img
                src={
                  require(`../../../assets/images/services/service-seven2.png`)
                    .default
                }
                alt="Service"
              />
              <h3>Digital Data Consulting for Science lab</h3>
              <a href="#" className="read-more">
                Click here <i className="fas fa-long-arrow-alt-right"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="service-item-seven">
              <img
                src={
                  require(`../../../assets/images/services/service-seven3.png`)
                    .default
                }
                alt="Service"
              />
              <h3>Machine Learning Bootcamp</h3>
              <a href="#" className="read-more">
                Click here <i className="fas fa-long-arrow-alt-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="circle-drop-one"></div>
      <div className="circle-drop-two"></div>
      <div className="service-triangle">
        <img src={shape1} alt="Triangle" />
      </div>
      <div className="service-line">
        <img src={shape2} alt="Triangle" />
      </div>
    </section>
  );
}
