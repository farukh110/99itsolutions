import React from "react";
import GetInTouchSection from "../../AboutPages/AboutOne/GetInTouchSection";
import Layouts from "../../helpers/Layouts/index";
import FeatureSection from "../../HomeOne/FeatureSection";
import PricingSection from "../../HomeOne/PricingSection";
import WorkProcessSection from "./WorkProcessSection";

export default function ServiceOne() {
  return (
    <Layouts
      pageTitle="Services Two"
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Service", path: "/service-one" },
      ]}
    >
      <FeatureSection />
      <WorkProcessSection />
      <PricingSection />
      <GetInTouchSection />
    </Layouts>
  );
}
