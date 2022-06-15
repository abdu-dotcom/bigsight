import Head from "next/head";
import React from "react";
import BeforeFooter from "../../containers/Footer/BeforeFooterBighSight";
import FooterBigSight from "../../containers/Footer/Footer";
import BigSightNavbar from "../../containers/Navbar/BigSightNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import OurClientSection1 from "../../containers/OurClient/OurClient-Section1/OurClient-Section1";
import OurClientSection2 from "../../containers/OurClient/OurClient-Section2/OurClient-Section2";
import OurClientSection3 from "../../containers/OurClient/OurClient-Section3/OurClient-Section3";

export default function index() {
    return (
        <div>
            <Head>
                <title>Our Client</title>
                <meta name="title" content="Keberhasilan implementasi Big Data." />
                <meta name="description" content="Big Sight Memberikan banyak kemudahan untuk perusahaan, UKM dan Pemerintahan" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={"Navbar-Container"}>
                <BigSightNavbar />
            </div>
            <div className={"Content-Container"}>
                <OurClientSection1 />
                <OurClientSection2 />
                <OurClientSection3 />
                <BeforeFooter />
                <FooterBigSight />
            </div>{" "}
        </div>
    );
}
