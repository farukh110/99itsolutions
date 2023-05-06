import React from "react";
// import BacktoTopCom from "../helpers/BackToTopCom";
import BacktoTopCom from "../../helpers/BackToTopCom";
import Layouts from "../../helpers/Layouts";
import WorkProcessSection from "./ServiceOne/WorkProcessSection";
import GetInTouchSection from "../About/AboutOne/GetInTouchSection";
import Pricing from './../Home/components/Pricing';

export default function ServicesLayout({ children, pageTitle, breadcrumbs }) {
  return (
    <Layouts pageTitle={pageTitle} breadcrumbs={breadcrumbs}>
      {children && children}
      <WorkProcessSection />
      <Pricing />
      <GetInTouchSection />
      <BacktoTopCom />
    </Layouts>
  );
}
