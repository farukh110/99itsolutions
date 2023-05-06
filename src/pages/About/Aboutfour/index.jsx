import React from "react";
import InnerPageDefaultLayout from "../../helpers/InnerPageDefaultLayout";
import MainSection from "./MainSection";

export default function AboutFour() {
  return (
    <InnerPageDefaultLayout
      pageTitle="About Us Four"
      breadcrumbs={[
        { name: "Restly", path: "/" },
        { name: "AboutFour", path: "/about-four" },
      ]}
    >
      <MainSection />
    </InnerPageDefaultLayout>
  );
}
