import Head from "next/head";
import React from "react";
import BeforeFooter from "../../../containers/Footer/BeforeFooterBighSight";
import FooterBigSight from "../../../containers/Footer/Footer";
import BigSightNavbar from "../../../containers/Navbar/BigSightNavbar";
import BriSection2 from "../../../containers/OurClient/Bri/Bri-Section2/Bri-Section2";
import OurClientSection1 from "../../../containers/OurClient/OurClient-Section1/OurClient-Section1";
import "bootstrap/dist/css/bootstrap.min.css";
import SectionContactUs from "../../../components/Section/Section Contact Us/SectionContactUs";

export default function index() {
    return (
        <div>
            <Head>
                <title>Big Sight Client</title>
                <meta name="Title" content="Solusi BigSight di Segment Perbankan." />
                <meta name="description" content="Mengubah, mengembangkan, dan memanfaatkan data besar untuk analitik, operasi & keputusan bisnis strategis." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={"Navbar-Container"}>
                <BigSightNavbar />
            </div>
            <div className={"Content-Container"}>
                <OurClientSection1 />
                <BriSection2 />
                <SectionContactUs />
                <BeforeFooter />
                <FooterBigSight />
            </div>{" "}
        </div>
    );
}
