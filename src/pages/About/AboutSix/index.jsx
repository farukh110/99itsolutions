import React from "react";
// import InnerPageDefaultLayout from "../../../helpers/InnerPageDefaultLayout";
import MainSection from "../AboutFive/MainSection";
import CustomBanner from "../../../components/layout/CustomBanner/CustomBanner";
import banner from "../../../assets/images/about/about.jpg";

export default function AboutSix() {
  return (
    // <InnerPageDefaultLayout
    //   pageTitle="About Us Six"
    //   breadcrumbs={[
    //     { name: "Home", path: "/" },
    //     { name: "About Us Six", path: "/about-six" },
    //   ]}
    // >
    <>
      <CustomBanner
        imgSource={banner}
        imgSourceAlt="About Us"
      />
      <MainSection />
    </>
    // </InnerPageDefaultLayout>
  );
}
