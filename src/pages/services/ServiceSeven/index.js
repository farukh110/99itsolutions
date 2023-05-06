import React from "react";
import ServicesLayout from "../ServicesLayout";
import MainSection from "./MainSection";

export default function ServiceSeven() {
  return (
    <ServicesLayout
      pageTitle="Services Seven"
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Services Seven", path: "/service-seven" },
      ]}
    >
      <MainSection />
    </ServicesLayout>
  );
}
