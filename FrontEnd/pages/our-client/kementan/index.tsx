import Head from "next/head";
import React from "react";
import BeforeFooter from "../../../containers/Footer/BeforeFooterBighSight";
import FooterBigSight from "../../../containers/Footer/Footer";
import BigSightNavbar from "../../../containers/Navbar/BigSightNavbar";
import OurClientSection1 from "../../../containers/OurClient/OurClient-Section1/OurClient-Section1";
import "bootstrap/dist/css/bootstrap.min.css";
import KementanSection2 from "../../../containers/OurClient/Kementan/Kementan-Section2/Kementan-Section2";
import SectionContactUs from "../../../components/Section/Section Contact Us/SectionContactUs";

export default function index() {
    return (
        <div>
            <Head>
                <title>Big Sight Client</title>
                <meta name="Title" content="Solusi Big Sight di Segment Pemerintahan." />
                <meta name="description" content="Mengembangkan Big Data & analitik untuk operasi & keputusan bisnis strategis." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={"Navbar-Container"}>
                <BigSightNavbar />
            </div>
            <div className={"Content-Container"}>
                <OurClientSection1 />
                <KementanSection2 />
                <SectionContactUs />
                <BeforeFooter />
                <FooterBigSight />
            </div>{" "}
        </div>
    );
}
