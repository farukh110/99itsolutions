import React, { useEffect } from "react";
import BackToTop from "../lib/BackToTop";

function BacktoTopCom({ className }) {
  useEffect(() => {
    BackToTop(".scroll-top");
  });
  return (
    <button
      type="button"
      className={`scroll-top scroll-to-target ${className || ""}`}
    >
      <span className="fa fa-angle-up"></span>
    </button>
  );
}

export default BacktoTopCom;
