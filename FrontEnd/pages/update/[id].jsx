import React from "react";
import BigSightNavbar from "../../containers/Navbar/BigSightNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import DetailNewsPage from "../../containers/update/DetailNewsPage/DetailNewsPage";
import BeforeFooterBighSight from "../../containers/Footer/BeforeFooterBighSight";
import FooterBigSight from "../../containers/Footer/Footer";

export default function detailNews() {
    return (
        <div>
            <BigSightNavbar />
            <DetailNewsPage />
            <BeforeFooterBighSight />
            <FooterBigSight />
        </div>
    );
}
