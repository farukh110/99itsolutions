import React from "react";
import Layouts from "../../helpers/Layouts";
import AboutSection from "../../HomeOne/AboutSection";
import TestimonialSection from "../../HomeThree/TestimonialSection";
import WorkProcessSection from "../../HomeThree/WorkProcessSection";
import GetInTouchSection from "../AboutOne/GetInTouchSection";

export default function AboutTwo() {
  return (
    <>
      <Layouts
        pageTitle="About Us Two"
        breadcrumbs={[
          { name: "home", path: "/" },
          { name: "about", path: "/about-three" },
        ]}
      >
        <AboutSection
          className="pb-240 r-com-about-section-two"
          funFact={false}
        />
        <WorkProcessSection />
        <TestimonialSection />
        <GetInTouchSection />
      </Layouts>
    </>
  );
}
