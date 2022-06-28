import React from 'react';
import useToggle from "../../../../hooks/useToggle";
import Drawer from "../mobile//Drawer";

const MobileHeader = ({ logo }) => {

    const [drawer, setValue] = useToggle(false);

    return (
        <>
            <Drawer drawer={drawer} action={setValue.toggle} />
            <div className="mobile-header d-block d-lg-none">
                <div
                    className="d-flex justify-content-between"
                    style={{ alignItems: "center", height: "100%" }}
                >
                    <a href="/" className="logo-area">
                        <img src={logo} alt="" />
                    </a>
                    <div className="button-area">
                        <span onClick={setValue.toggle}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                style={{ width: "30px", height: "30px" }}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h7"
                                />
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MobileHeader;