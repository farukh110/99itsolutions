import React from "react";
import background from "../../../assets/images/contact/home-two.jpg";

export default function MainSection() {
  return (
    <section className="service-details pt-120 rpt-100 pb-100 rpb-80">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="service-sidebar rmb-55 wow fadeInLeft delay-0-2s">
              <div className="widget widget-services">
                <ul>
                  <li>
                    <a href="/service-details">Data Center</a>
                  </li>
                  <li className="active">
                    <a href="/service-details">IT Management</a>
                  </li>
                  <li>
                    <a href="/service-details">Software Development</a>
                  </li>
                  <li>
                    <a href="/service-details">Web Development</a>
                  </li>
                  <li>
                    <a href="/service-details">Cloud Services</a>
                  </li>
                </ul>
              </div>
              <div
                className="widget contact-info-widget contact-image-number style-two bgs-cover overlay"
                style={{ backgroundImage: `url(${background})` }}
              >
                <div className="contact-informations text-white">
                  <h3>Don't hesitate to contact us</h3>
                  <ul className="contact-info">
                    <li>
                      <i className="fas fa-phone-alt"></i>
                      <div className="content">
                        <span>Call Us</span>
                        <h5>
                          <a href="callto:+012-345-6789">+012-345-6789</a>
                        </h5>
                      </div>
                    </li>
                    <li>
                      <i className="fas fa-envelope"></i>
                      <div className="content">
                        <span>Write to Us</span>
                        <h5>
                          <a href="mailto:info@example.com">info@example.com</a>
                        </h5>
                      </div>
                    </li>
                    <li>
                      <i className="fas fa-clock"></i>
                      <div className="content">
                        <span>Office hours</span>
                        <h5>Mon-Sat 9:00 - 7:00</h5>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="service-details-content wow fadeInRight delay-0-2s">
              <div className="image mb-40">
                <img
                  src={
                    require(`../../../assets/images/services/service-details.jpg`)
                      .default
                  }
                  alt="Service Details"
                />
              </div>
              <h2>Cloud Services</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate{" "}
              </p>
              <ul className="list-style-three pt-15 pb-30">
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipisicLorem ipsum
                  dolor
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipisicLorem ipsum
                  dolor
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipisicLorem ipsum
                  dolor
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipisicLorem ipsum
                  dolor
                </li>
              </ul>
              <h3>Explore our audit & assurance services</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate{" "}
              </p>
              <div className="row pt-25">
                <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                  <div className="service-normal style-two wow fadeInUp delay-0-2s">
                    <div className="icon">
                      <i className="flaticon flaticon-computer"></i>
                    </div>
                    <h6>Software Development</h6>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor{" "}
                    </p>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                  <div className="service-normal style-two wow fadeInUp delay-0-4s">
                    <div className="icon">
                      <i className="flaticon flaticon-analysis"></i>
                    </div>
                    <h6>Machine Learning</h6>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor{" "}
                    </p>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                  <div className="service-normal style-two wow fadeInUp delay-0-6s">
                    <div className="icon">
                      <i className="flaticon flaticon-design-process"></i>
                    </div>
                    <h6>Software Development</h6>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
