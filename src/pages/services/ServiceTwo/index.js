import React from "react";
import MainServices from "../components/MainServices/MainServices";
import CustomBanner from "../../../components/layout/CustomBanner/CustomBanner";
import banner from "../../../assets/images/services/services.jpeg"

export default function ServiceTwo() {

  return (<>
    <CustomBanner
      imgSource={banner}
      imgSourceAlt="Our Services"
    />
    <MainServices />
  </>
  );
}
