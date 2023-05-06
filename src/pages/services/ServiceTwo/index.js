import React from "react";
import Layouts from "../../../helpers/Layouts";
import MainServices from "../components/MainServices/MainServices";
// import WorkProcessSection from "../ServiceOne/WorkProcessSection";
export default function ServiceTwo() {
  return (
    <Layouts
      pageTitle="Service Two"
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "service", path: "/service-two" },
      ]}
    >

      <MainServices />

    </Layouts>
  );
}
