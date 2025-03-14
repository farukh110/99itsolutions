import React from "react";
// import aboutThumbTwo from "../../../assets/images/about/about-circle-dots.png";
// import aboutThumb from "../../../assets/images/about/about-two.jpg";
// import Clients from "../../Home/components/Clients";
import Counters from "../../Home/components/Counters";
import ServicesTab from "./ServicesTab";
import './index.scss';
import Technologies from "../../Home/components/Techologies/Technologies";
import Clients from "../../Home/components/Clients/Clients";
import CustomSubHeading from "../../../components/sub-heading/CustomSubHeading";
import CustomHeading from "../../../components/heading/CustomHeading";
import Focused from "../../Home/components/Focused/Focused";

export default function MainSection() {
  return (
    <>
      <section className="about-section style-five mt-md-0 mt-0 mb-md-5 rpy-100 pt-4 pb-4">
        <div className="container">
          <div className="row">

            <div className="col-xl-12 col-lg-12 pt-md-5 pb-md-5">
              {/* <div className="about-content pl-70 rpl-0 wow fadeInRight delay-0-2s">
                <div className="section-title mb-35">
                  <span className="sub-title">It Support For Business</span>
                  <h2>Preparing for your IT business success</h2>
                </div>
                <div className="feature-item">
                  <div className="icon">
                    <i className="flaticon flaticon-3d-printing"></i>
                  </div>
                  <div className="feature-content">
                    <h5>IT Management</h5>
                    <p>
                      Lorem ipsum dolor sitmet consectetur adipiscing elit sed do
                      eiusmod
                    </p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="icon">
                    <i className="flaticon flaticon-repair"></i>
                  </div>
                  <div className="feature-content">
                    <h5>Machine Learning</h5>
                    <p>
                      Lorem ipsum dolor sitmet consectetur adipiscing elit sed do
                      eiusmod
                    </p>
                  </div>
                </div>
                <a href="!#" className="theme-btn mt-10">
                  learn about more
                </a>
              </div> */}
              <CustomHeading
                firstWord="99 IT Solutions - Your Trusted"
                lastWord="Technology Partner"
                textCenter="text-center"
              />
              <p>
                Since 2015, 99 IT Solutions has been delivering cutting-edge technology solutions to businesses worldwide. We specialize in web and software development, product development, WhatsApp Business API and chatbot integrations, DevOps, solutions architecture, IT outsourcing, and consulting. Our team of experienced professionals is dedicated to providing high-quality solutions tailored to your business needs.
              </p>
            </div>

            <div className="col-md-6">

              <CustomSubHeading
                firstWord="What We"
                lastWord="Do"
                textCenter="text-left"
              />

              <p>
                Our company is a leader in web and software development, product development, WhatsApp Business API and chatbot integrations, DevOps, and solutions architecture. We also specialize in IT outsourcing and consulting, helping businesses leverage technology effectively.
                <br />
                Additionally, we assist clients in developing competitive strategies that drive measurable outcomes. Our approach is designed to deliver the best results efficiently, ensuring high-quality solutions, ongoing maintenance, and support—all at the most reasonable prices.

              </p>
            </div>

            <div className="col-md-6">

              <CustomSubHeading
                firstWord="How We"
                lastWord="Do"
                textCenter="text-left"
              />

              <p>
                Our proven process ensures efficiency, quality, and timely delivery. With a strong global presence across the USA, Canada, UK, Australia, New Zealand, Saudi Arabia, Qatar, Bahrain, and UAE, we focus on delivering tailored solutions that empower businesses to scale and succeed.
                <br />
                At 99 IT Solutions, we don’t just build technology—we build long-term partnerships by delivering excellence, innovation, and measurable results.

              </p>

            </div>

          </div>
          {/* <div className="row justify-content-center mt-md-5">

            <div className="col-md-12">

              <div className="about-content pl-70 rpl-0 wow fadeInRight delay-0-2s">
                <div className="section-title mb-35">
                  <span className="sub-title">It Support For Business</span>
                  <h2>Preparing for your IT business success</h2>
                </div>

                <div className="row">

                  <div className="col-md-4">
                    <div className="feature-item">
                      <div className="icon">
                        <i className="flaticon flaticon-3d-printing"></i>
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

                  <div className="col-md-4">
                    <div className="feature-item">
                      <div className="icon">
                        <i className="flaticon flaticon-repair"></i>
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

                  <div className="col-md-4">
                    <div className="feature-item">
                      <div className="icon">
                        <i className="flaticon flaticon-repair"></i>
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

                  <div className="col-md-3">
                    <a href="!#" className="theme-btn mt-10 mx-auto">
                      learn about more
                    </a>
                  </div>

                </div>


              </div>

            </div>

          </div> */}
        </div>
      </section>
      <ServicesTab />
      <Focused />
      <Counters />
      <Technologies />
      <section className="container">

        <Clients />

      </section>
    </>
  );
}
