import React from "react";
import aboutThumbTwo from "../../../assets/images/about/about-circle-dots.png";
import aboutThumb from "../../../assets/images/about/about-two.jpg";
import Clients from "../../Home/components/Clients";
import Counters from "../../Home/components/Counters";
import ServicesTab from "./ServicesTab";
import './index.scss';
import Technologies from "../../Home/components/Technologies";

export default function MainSection() {
  return (
    <>
      <section className="about-section style-five mt-md-0 mb-md-5 rpy-100">
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
              <h2> 99 IT Solutions - Your Trusted Technology Partner </h2>
              <p>

                Since 2015, we have been running 99 IT Solutions that provides a full range of IT services, including Logo designing, domain, hosting, Animation Services, web designing and software development, digital marketing and customer support. We strive to provide the latest technology and best customer service to meet the needs of all my clients.
                We have a team of professional developers, designers and digital marketers who have great experience and expertise in their respective fields. We have a good track record of successfully completing the projects on time and within the budget. We focus on quality work and customer satisfaction. We also provide training and support to our customers.
                <br /><br />
                We are continuously striving to maintain our place in the market and stay ahead of the competition by providing excellent services to our clients. We are always looking for ways to improve our services and provide the best service to our clients.
                <br /><br />
                To boost the business, We also provide some digital marketing services to our clients. We have expertise in SEO, PPC, Content Marketing, Social Media Marketing and Email Marketing services. We provide complete digital marketing solutions for our clients.
              </p>
            </div>

            <div className="col-md-6">

              <h3 className="heading-bg text-white"> WHAT WE DO </h3>

              <p>
                Our company is a leader in creating excellent websites, mobile apps, software, graphics, and online marketing. We have expertise in promoting and marketing businesses, helping clients develop competitive strategies that deliver measurable outcomes. Our method is designed to produce the best results in a short period of time. Our tools are our intellect, and we are dedicated to providing top-notch work, support, and maintenance at the most reasonable prices.

              </p>
            </div>

            <div className="col-md-6">

              <h3 className="heading-bg text-white"> HOW WE DO </h3>
              <p>
                We have a proven process that delivers outstanding results quickly. With numerous satisfied clients located in various countries, including the USA, Canada, UK, Australia, New Zealand, Saudi Arabia, Qatar, Bahrain, and UAE, we are dedicated to providing top-notch work that meets the client's needs. Our goal is to offer the ideal solution to help their business reach new heights.
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
      <Counters />
      <Technologies />
      <section className="container">

        <Clients />

      </section>
    </>
  );
}
