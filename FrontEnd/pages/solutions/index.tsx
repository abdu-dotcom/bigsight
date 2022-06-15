import React from "react";
import BigSightNavbar from "../../containers/Navbar/BigSightNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import BeforeFooter from "../../containers/Footer/BeforeFooterBighSight";
import FooterBigSight from "../../containers/Footer/Footer";
import SolutionsSection1 from "../../containers/Solutions/Solutions-Section1/Solutions-Section1";
import SolutionsSection2 from "../../containers/Solutions/Solutions-Section2/Solutions-Section2";
import SectionContactUs from "../../components/Section/Section Contact Us/SectionContactUs";

export default function Solution() {
    return (
        <div>
            <Head>
                <title>Contact Big Sight</title>
                <meta name="title" content="Big Data Solution by Big Sight." />
                <meta name="description" content="Solusi big data analytic yang ditawarkan oleh Telkom Indonesia yang dapat digunakan untuk pemerintahan dan perusahaan yang dapat di custom sesuai kebutuhan user." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={"Navbar-Container"}>
                <BigSightNavbar />
            </div>
            <div className={"Content-Container"}>
                <SolutionsSection1 />
                <SolutionsSection2 />
                <SectionContactUs />
                <BeforeFooter />
                <FooterBigSight />
            </div>
        </div>
    );
}
