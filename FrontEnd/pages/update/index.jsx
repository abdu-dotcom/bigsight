import React from "react";
import BigSightNavbar from "../../containers/Navbar/BigSightNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import BeforeFooterBighSight from "../../containers/Footer/BeforeFooterBighSight";
import FooterBigSight from "../../containers/Footer/Footer";
import UpdatePageSection1 from "../../containers/update/UpdatePage-Section1/UpdatePage-Section1";
import UpdatePageSection2 from "../../containers/update/UpdatePage-Section2/UpdatePage-Section2";

export default function Solution() {
    return (
        <div>
            <BigSightNavbar />
            <UpdatePageSection1 />
            <UpdatePageSection2 />
            <BeforeFooterBighSight />
            <FooterBigSight />
        </div>
    );
}
