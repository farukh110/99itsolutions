import React from "react";
import InnerPageDefaultLayout from "../../helpers/InnerPageDefaultLayout";
import MainSection from "./MainSection";

export default function AboutSeven() {
  return (
    <InnerPageDefaultLayout
      pageTitle="About Us Seven"
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "About Seven", path: "/about-seven" },
      ]}
    >
      <MainSection />
    </InnerPageDefaultLayout>
  );
}
