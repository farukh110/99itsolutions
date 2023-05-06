import React from "react";
// import background from "../../../assets/images/banner.jpg";
import background from "../../assets/images/contact/banner.jpg";

export default function Hero({ pageTitle, breadcrumbs = [] }) {
  return (
    <section
      className="page-banner bgs-cover overlay pt-50"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="container">
        <div className="banner-inner">
          <h1 className="page-title">{pageTitle}</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              {breadcrumbs &&
                breadcrumbs.length > 0 &&
                breadcrumbs.map((item) => (
                  <li key={Math.random()} className="breadcrumb-item">
                    <a href={item.path}>{item.name}</a>
                  </li>
                ))}
            </ol>
          </nav>
        </div>
      </div>
    </section>
  );
}
