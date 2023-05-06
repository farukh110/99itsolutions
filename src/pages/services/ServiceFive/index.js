import React from "react";
import ServicesLayout from "../ServicesLayout";
import MainSection from "./MainSection";

export default function ServiceFive() {
  return (
    <ServicesLayout
      pageTitle="Services Five"
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "service Five", path: "/service-five" },
      ]}
    >
      <MainSection />
    </ServicesLayout>
  );
}
