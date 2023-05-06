import React from "react";
import Layouts from "../../helpers/Layouts";
import MainSection from "./MainSection";

export default function ServiceDetails() {
  return (
    <Layouts
      pageTitle="Service Details"
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "service-details", path: "/service-details" },
      ]}
    >
      <MainSection />
    </Layouts>
  );
}
