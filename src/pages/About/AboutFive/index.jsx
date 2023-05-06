import React from "react";
import InnerPageDefaultLayout from "../../helpers/InnerPageDefaultLayout";
import MainSection from "./MainSection";

export default function AboutFive() {
  return (<>
    <InnerPageDefaultLayout
      pageTitle="About Us Five"
      breadcrumbs={[
        { name: "home", path: "/" },
        { name: "About Five", path: "/about-five" },
      ]}
    >
      <MainSection />
    </InnerPageDefaultLayout>
    <Clients /></>
  );
}
