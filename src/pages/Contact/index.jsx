import React from "react";
// import { Formik, Field, Form, ErrorMessage } from "formik";
// import * as Yup from "yup";
import banner from "../../assets/images/contact/contact-bg1.jpg";
import CustomBanner from "../../components/layout/CustomBanner/CustomBanner";
// import emailjs from '@emailjs/browser';
// import { message } from 'antd';
import phone from "../../assets/images/contact/icons/phone.png";
import email from "../../assets/images/contact/icons/email.png";
import location from "../../assets/images/contact/icons/location.png";
import timings from "../../assets/images/contact/icons/time.png";
import img1 from "../../assets/images/contact/img-1.png";
import quote_img from "../../assets/images/contact/quote.svg";
import img3 from "../../assets/images/contact/img-3.png";
import img2 from "../../assets/images/contact/img-2.png";


import './index.scss';
import ContactForm from "../Home/components/ContactForm/ContactForm";
import CustomHeading from "../../components/heading/CustomHeading";
import VerticalSlider from "../Home/components/vertical-slider/VerticalSlider";

// const YOUR_SERVICE_ID = "service_tdgcnmj";
// const YOUR_TEMPLATE_ID = "template_of24zr7";
// const YOUR_PUBLIC_KEY = "w66GluiKNpzOAH91p";

// Define the validation schema using Yup
// const validationSchema = Yup.object().shape({
//   name: Yup.string().required("Please enter your full name"),
//   email: Yup.string().email("Invalid email address").required("Please enter your email"),
//   message: Yup.string().required("Please enter your message"),
// });

const Contact = () => {

  // const form = React.useRef();

  // const sendEmail = (values, { resetForm }) => { // Modify the function to accept { resetForm } from Formik
  //   emailjs
  //     .sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, form.current, YOUR_PUBLIC_KEY)
  //     .then((result) => {
  //       console.log(result.text);
  //       message.success("Message sent successfully!");

  //       // Reset the form after successful submission
  //       resetForm();
  //     })
  //     .catch((error) => {
  //       console.log(error.text);
  //       message.error("Failed to send message. Please try again."); // Show error notification
  //     });
  // };

  const teamItems = [
    {
      id: 1,
      position: "Solution Architect"
    },
    {
      id: 2,
      position: "Free Consultation"
    },
    {
      id: 3,
      position: ".Net Developer"
    },
    {
      id: 4,
      position: "Fullstack Developer"
    },
    {
      id: 5,
      position: "Mobile Developer"
    },
    {
      id: 6,
      position: "DevOps Engineer"
    }
  ];

  return (
    <>
      <CustomBanner
        imgSource={banner}
        imgSourceAlt="Contact Us"
      />

      <section className="contact-page py-30 pb-5 rpy-100 pt-4">
        {/* <div className="container"> */}

        <CustomHeading
          firstWord="Business Centric"
          lastWord="Solutions"
          textCenter="text-center"
        />

        <div className="container">
          <div className="row justify-content-center">

            <div className="col-xl-12 col-md-8 pb-5">

              <p>
                At 99Itsolutions, our focus is you. Our expert team comprises of professionals with varying business skillsets so we can better understand your needs, and put our money where our mouth is in offering you top-tier solutions. From the start to finish of your digital requirements, and beyond we are here to help.
              </p>

            </div>

          </div>

        </div>

        <div className="row mt-md-4">
          <div className="col-lg-4 p-0">
            <div
              className="contact-form-left bgs-cover h-100"
            >
              <div className="get_in_toch_head pt-md-5 pt-4 pb-4 ps-md-5 ps-0">

                <h5 className="text-xl-left text-center">GET IN TOUCH</h5>

                <div className="contact_team text-xl-left">
                  <h1>
                    CONTACT OUR TEAM
                  </h1>
                  <p className="contact_para text-white">
                    Our Teams are here to help
                  </p>
                </div>

                <div className="row contact_detail_info">
                  <div className="col-xxl-1 col-xl-2 col-lg-2 col-md-1 col-sm-2 col-3 contact_icon">
                    <img src={phone} alt="" />
                  </div>
                  <div className="col-xxl-11 col-xl-10 col-lg-10 col-md-11 col-sm-10 col-9 pe-xl-4 pe-sm-3 pe-3 contact_no text-white">
                    <span className="bold_text">
                      PHONE:
                    </span>
                    <br />
                    <span className="normal_text">
                      <a href="tel:+92 331 293-9594"> +92 331 293-9594 </a>
                    </span>
                  </div>
                </div>

                <div className="row contact_detail_info mt-xl-3">
                  <div className="col-xxl-1 col-xl-2 col-lg-2 col-md-1 col-sm-2 col-3 contact_icon">
                    <img src={email} alt="" />
                  </div>
                  <div className="col-xxl-11 col-xl-10 col-lg-10 col-md-11 col-sm-10 col-9 pe-xl-4 pe-sm-3 pe-3 contact_no text-white">
                    <span className="bold_text">
                      EMAIL:
                    </span>
                    <br />
                    <span className="normal_text">
                      <a href="mailto:info@99itsolutions.com"> info@99itsolutions.com </a>
                    </span>
                  </div>
                </div>

                <div className="row contact_detail_info mt-xl-3">
                  <div className="col-xxl-1 col-xl-2 col-lg-2 col-md-1 col-sm-2 col-3 contact_icon">
                    <img src={location} alt="" />
                  </div>
                  <div className="col-xxl-11 col-xl-10 col-lg-10 col-md-11 col-sm-10 col-9 pe-xl-4 pe-sm-3 pe-3 contact_no text-white">
                    <span className="bold_text text-uppercase">
                      Office:
                    </span>
                    <br />
                    <span className="normal_text">
                      <span> Shaheen Arcade, 26 National Stadium Rd, <br /> Shanti Nagar Chandni Chowk (New Town), Karachi, Karachi City, Sindh 74800 </span>
                    </span>
                  </div>
                </div>

                <div className="row contact_detail_info mt-xl-3">
                  <div className="col-xxl-1 col-xl-2 col-lg-2 col-md-1 col-sm-2 col-3 contact_icon">
                    <img src={timings} alt="" />
                  </div>
                  <div className="col-xxl-11 col-xl-10 col-lg-10 col-md-11 col-sm-10 col-9 pe-xl-4 pe-sm-3 pe-3 contact_no text-white">
                    <span className="bold_text text-uppercase">
                      OPENHOURS:
                    </span>
                    <br />
                    <span className="normal_text">
                      <span> Mon-Fri: 9 am- 6 pm Sat-Sun: Closed </span>
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>
          <div className="col-lg-8 p-0">
            <div className="contact-form">
              {/* <h3 className="comment-title mb-35">Send A Message</h3>
                <p>
                  Avoids pleasure itself, because it is pleasure, but because
                  those who do not know how to pursue pleasure rationally
                  encounter
                </p> */}
              {/* Formik Form */}
              {/* <Formik
                  initialValues={{
                    name: "",
                    email: "",
                    message: "",
                  }}
                  validationSchema={validationSchema}
                  onSubmit={sendEmail}
                >
                  {({ isSubmitting }) => (
                    <Form ref={form}>
                      <div className="row clearfix justify-content-center">
                        <div className="col-sm-6">
                          <div className="form-group">
                            <label htmlFor="name">
                              <i className="far fa-user"></i>
                            </label>
                            <Field
                              type="text"
                              id="name"
                              name="name"
                              className="form-control"
                              placeholder="Your Full Name"
                            />
                            <ErrorMessage name="name" component="div" className="error-message" />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group">
                            <label htmlFor="email">
                              <i className="far fa-envelope"></i>
                            </label>
                            <Field
                              type="email"
                              id="email"
                              name="email"
                              className="form-control"
                              placeholder="Your Email"
                            />
                            <ErrorMessage name="email" component="div" className="error-message" />
                          </div>
                        </div>
                        <div className="col-sm-12">
                          <div className="form-group">
                            <label htmlFor="message">
                              <i className="fas fa-pencil-alt"></i>
                            </label>
                            <Field
                              as="textarea"
                              name="message"
                              id="message"
                              className="form-control"
                              rows="4"
                              placeholder="Write Message"
                            />
                            <ErrorMessage name="message" component="div" className="error-message" />
                          </div>
                        </div>
                        <div className="col-sm-12">
                          <div className="form-group mb-0">
                            <button type="submit" className="theme-btn" disabled={isSubmitting}>
                              {isSubmitting ? "Sending..." : "Send Message"}
                            </button>
                          </div>
                        </div>
                      </div>
                    </Form>
                  )}
                </Formik> */}
              <ContactForm customPadding="ps-md-3 ps-3 pe-md-5 pe-3" />
            </div>
          </div>
        </div>
        {/* </div> */}
      </section>

      <div className="ready_set">

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12">
              <div className="row justify-content-center">

                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                  <div className="what_next_headings">
                    <h4 className="next_hea">READY, SET , GO !</h4>
                    <h1>WHAT'S NEXT ?
                    </h1>
                  </div>
                </div>
                <div>
                  <div className="row justify-content-md-start justify-content-center animate__ animate__slideInLeft animate__repeat-1 animate__delay-1s 1s wow  animated" style={{ visibility: 'visible', animationName: 'slideInLeft' }}>
                    <div className="col-lg-1 col-md-1 col-sm-1 col-12">
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-2 col-12">
                      <div className="proposal_no">
                        1
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-9 col-sm-9 col-12 mt-md-2 mt-sm-0">
                      <div className="proposal">
                        <h5>Prepare a proposal
                        </h5>
                        <p className="mt-3">We’ve sat with you and discussed all your
                          requirements in detail. Time to put it on paper.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-1"></div>
                    <div className="col-lg-1">
                      <div className="proposal_img">
                      </div>
                    </div>
                    <div className="col-lg-1">
                      <div className="proposal_2_img">
                      </div>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="row justify-content-md-start justify-content-center animate__ animate__slideInRight animate__repeat-1 animate__delay-1s 1s wow  animated" data-wow-duration="0.5s" data-wow-delay="0.2s" style={{ visibility: 'visible', animationDuration: '0.5s', animationDelay: '0.2s', animationName: 'slideInRight' }}>
                    <div className="col-lg-2 col-md-1 col-sm-2 col-12">
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-2 col-12  discuss_content">
                      <div className="proposal_no">
                        2
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-9 col-sm-8 col-12 mt-md-2 mt-sm-0 discuss_content">
                      <div className="proposal">
                        <h5>Discuss it
                        </h5>
                        <p className="mt-3">Internally, your project team starts to form, lots of
                          brainstorming and strategizing done to work out
                          what’s best for you.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-md-start justify-content-center animate__ animate__slideInLeft animate__repeat-1 animate__delay-1s 1s wow  animated" style={{ visibility: 'visible', animationName: 'slideInLeft' }}>
                  <div className="col-lg-3 col-md-1 col-sm-3 col-12">
                  </div>
                  <div className="col-lg-3 col-md-2 col-sm-3 col-12 mt-md-2 mt-sm-0  discuss_content">
                    <div className="proposal_no">
                      3
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-9 col-sm-6 col-12 mt-md-2 mt-sm-0  discuss_content">
                    <div className="proposal">
                      <h5>Start the project
                      </h5>
                      <p className="mt-3">Frameworks are set up, teams working full steam ahead on front
                        end, back end, content, design, branding, stationery, SEO, SMM,
                        videos, animations and so much more. Whatever you need, we’re
                        on it.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-5 col-md-12 col-sm-5 col-12 animate__ animate__slideInRight animate__repeat-1 animate__delay-1s 1s wow  animated" style={{ visibility: 'visible', animationName: 'slideInRight' }}>
              <div className="contact_img">
                <div className="row">
                  <div className="col-md-6">
                    <div className=" ">
                      <img className="hands" src={img1} alt="" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-2"></div>
                  <div className="col-md-2 mt-4">
                    <img className="quote_img" src={quote_img} alt="" />
                    <img className="contact_left study" src={img3} alt="" />
                  </div>
                  <div className="col-md-2"></div>
                  <div className="col-md-1">
                    <img className="design" src={img2} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <VerticalSlider
        title="Are you looking for professional"
        teamItems={teamItems}
      />

    </>
  );
};

export default Contact;
