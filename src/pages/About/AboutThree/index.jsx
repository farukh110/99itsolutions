import React from "react";
import Layouts from "../../helpers/Layouts";
import TestimonialSection from "../../HomeThree/TestimonialSection";
import AboutSection from "../../HomeTwo/AboutSection";
import GetInTouchSection from "../AboutOne/GetInTouchSection";

export default function AboutThree() {
  return (
    <>
      <Layouts
        pageTitle="About Us Three"
        breadcrumbs={[
          { name: "home", path: "/" },
          { name: "about", path: "/about-two" },
        ]}
      >
        <AboutSection />
        <TestimonialSection />
        <GetInTouchSection />
      </Layouts>
    </>
  );
}
