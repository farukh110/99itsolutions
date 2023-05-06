import React from "react";
import ServicesLayout from "../ServicesLayout";
import MainSection from "./MainSection";

export default function ServiceFour() {
  return (
    <ServicesLayout
      pageTitle="Services Four"
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Services Four", path: "/service-four" },
      ]}
    >
      <MainSection />
    </ServicesLayout>
  );
}
