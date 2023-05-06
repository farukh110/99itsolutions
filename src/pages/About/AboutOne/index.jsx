import React from "react";
import Layouts from "../../helpers/Layouts";
import AboutSection from "../../HomeThree/AboutSection";
import TestimonialSection from "../../HomeThree/TestimonialSection";
import WorkProcessSection from "../../HomeThree/WorkProcessSection";
import GetInTouchSection from "./GetInTouchSection";

export default function AboutOne() {
  return (
    <>
      <Layouts
        pageTitle="About Us"
        breadcrumbs={[
          { name: "home", path: "/" },
          { name: "about", path: "/about-one" },
        ]}
      >
        <AboutSection className="pb-240" />
        <WorkProcessSection />
        <TestimonialSection />
        <GetInTouchSection />
      </Layouts>
    </>
  );
}
