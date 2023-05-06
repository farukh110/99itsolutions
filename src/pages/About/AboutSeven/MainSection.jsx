import React from "react";
import aboutThumb from "../../../assets/images/about/about-seven.png";

export default function MainSection() {
  return (
    <section className="about-seven rel z-1 pt-150 rpt-30 pb-120">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="about-seven-image rmb-60">
              <img src={aboutThumb} alt="About" />
            </div>
          </div>
          <div className="col-lg-5">
            <div className="about-seven-content">
              <div className="section-title mb-30">
                <span className="sub-title">What We Do</span>
                <h2>Relational Database Is What We Do</h2>
              </div>
              <p>
                Maecenas tincidunt ex quis arcu ultrices, et commodo diam
                volutpat. Fusce ligula mauris, sodales efficitur justo et,
                molestie tincidunt ex.
              </p>
              <ul className="list-style-three mt-35 mb-50">
                <li>Access any data flexible and easily</li>
                <li>In-database optimized algorithms</li>
              </ul>
              <a href="/contact" className="theme-btn style-eight">
                Start Free Tral <i className="fas fa-long-arrow-alt-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="circle-drop"></div>
    </section>
  );
}
