import React from "react";
import background from "../../assets/images/contact/contact.jpg";
import banner from "../../assets/images/contact/contact-us-Banner.png";
import CustomBanner from "../../components/layout/CustomBanner/CustomBanner";
// import Layouts from "../../helpers/Layouts";

export default function Contact() {
  return (
    <>
      {/* <Layouts
        pageTitle="Contact us"
        breadcrumbs={[
          { name: "home", path: "/" },
          { name: "contact", path: "/contact" },
        ]}
      > */}

      <CustomBanner
        imgSource={banner}
        imgSourceAlt="Contact Us"
      />

      <section className="contact-page py-70 rpy-100">
        <div className="container">
          <div className="contact-info-area mb-80">
            <div className="contact-info-item wow fadeInUp delay-0-2s">
              <i className="far fa-map"></i>
              <p>27 Division St, New York, NY 10002,USA</p>
            </div>
            <div className="contact-info-item wow fadeInUp delay-0-4s">
              <i className="far fa-envelope"></i>
              <p>
                <a href="mailto:support@gmail.com">support@gmail.com</a>{" "}
                <br />
                <a href="!#">www.restly.net</a>
              </p>
            </div>
            <div className="contact-info-item wow fadeInUp delay-0-6s">
              <i className="fas fa-phone-alt"></i>
              <p>
                <a href="callto:+08(964)712365">+08 (964) 712365</a> <br />
                <a href="callto:+0234(456)9864">+0234 (456) 9864</a>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div
                className="contact-form-left bgs-cover h-100 wow fadeInLeft delay-0-2s"
                style={{ backgroundImage: `url(${background})` }}
              >
                <h2>Leave A Message</h2>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="contact-form ml-40 rml-0 rmt-55 wow fadeInRight delay-0-2s">
                <h3 className="comment-title mb-35">Send A Message</h3>
                <p>
                  Avoids pleasure itself, because it is pleasure, but because
                  those who do not know how to pursue pleasure rationally
                  encounter
                </p>
                <form
                  id="comment-form"
                  className="comment-form mt-35"
                  name="comment-form"
                  action="#"
                  method="post"
                >
                  <div className="row clearfix justify-content-center">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="full-name">
                          <i className="far fa-user"></i>
                        </label>
                        <input
                          type="text"
                          id="full-name"
                          name="full-name"
                          className="form-control"
                          value=""
                          placeholder="Your Full Name"
                          required=""
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="email">
                          <i className="far fa-envelope"></i>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="form-control"
                          value=""
                          placeholder="Your Email"
                          required=""
                        />
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="form-group">
                        <label htmlFor="comments">
                          <i className="fas fa-pencil-alt"></i>
                        </label>
                        <textarea
                          name="comments"
                          id="comments"
                          className="form-control"
                          rows="4"
                          placeholder="Write Message"
                          required=""
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="form-group mb-0">
                        <button type="submit" className="theme-btn">
                          Send Message
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="contact-page-map">
        <div className="our-location">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d136834.1519573059!2d-74.0154445224086!3d40.7260256534837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1639991650837!5m2!1sen!2sbd"
            height="650"
            style={{ border: "0", width: "100%" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
      {/* </Layouts> */}
    </>
  );
}
