import React from "react";
import background from "../../../assets/images/contact/contact.jpg";

export default function GetInTouchSection() {
  return (
    <section className="contact-four mb-md-5">
      <div className="container">
        <div className="contact-inner-four box-shadow p-35 rpx-25 br-5 bg-white">
          <div className="row">
            <div className="col-lg-7">
              <div className="contact-section-form px-15 rpx-0 rmb-50 wow fadeInUp delay-0-2s animated">
                <div className="section-title mb-20">
                  <h2>Get In Touch</h2>
                </div>
                <form
                  id="contact-form"
                  className="contact-form"
                  name="contact-form"
                  action="#"
                  method="post"
                >
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="name">Your name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="form-control"
                          placeholder="Name"
                          required=""
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="email">Your email address</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="form-control"
                          placeholder="Email"
                          required=""
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="number">Your phone number</label>
                        <input
                          type="text"
                          id="number"
                          name="number"
                          className="form-control"
                          placeholder="Phone Number"
                          required=""
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="service">Service Required</label>
                        <select id="service" name="service">
                          <option value="" selected="">
                            Service
                          </option>
                          <option value="">About</option>
                          <option value="">Contact</option>
                          <option value="">Team</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="form-group">
                        <textarea
                          name="comments"
                          id="comments"
                          className="form-control"
                          rows="4"
                          placeholder="Let us know what you need."
                          required=""
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <button type="submit" className="theme-btn">
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-5">
              <div
                className="contact-image-number style-two bgs-cover overlay wow fadeInUp delay-0-4s animated"
                style={{
                  backgroundImage: `url(${background})`,
                  visibility: "visible",
                  animationName: "fadeInUp",
                }}
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
        </div>
      </div>
    </section>
  );
}
