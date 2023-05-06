import React from "react";
import GetInTouchSection from "../pages/About/AboutOne/GetInTouchSection";
// import TestimonialSection from "../HomeThree/TestimonialSection";
import BacktoTopCom from "./BackToTopCom";
import Layouts from "./Layouts";

export default function InnerPageDefaultLayout({
  children,
  pageTitle,
  breadcrumbs = [],
}) {
  return (
    <Layouts pageTitle={pageTitle} breadcrumbs={breadcrumbs}>
      {children && children}
      {/* <TestimonialSection /> */}
      <div className="container">



      </div>
      <GetInTouchSection />
      <BacktoTopCom />
    </Layouts>
  );
}
