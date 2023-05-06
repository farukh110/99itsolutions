import React from "react";
// import FooterHomeTwo from "../../partials/Footers/FooterHomeTwo/index";
// import HeaderHomeOne from "../../partials/Headers/HeaderHomeThree";
import Hero from "./Hero";

export default function Layouts({ children, pageTitle, breadcrumbs = [] }) {
  return (
    <>
      {/* <HeaderHomeOne /> */}
      <Hero pageTitle={pageTitle} breadcrumbs={breadcrumbs} />
      {children && children}
      {/* <FooterHomeTwo /> */}
    </>
  );
}
