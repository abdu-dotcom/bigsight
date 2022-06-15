import Head from "next/head";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BigSightNavbar from "../../containers/Navbar/BigSightNavbar";
import FaqSection1 from "../../containers/Faq/Faq-Section1/Faq-Section1";
import BeforeFooter from "../../containers/Footer/BeforeFooterBighSight";
import FooterBigSight from "../../containers/Footer/Footer";

export default function faq() {
    return (
        <div>
            <Head>
                <title>Big Sight FAQ </title>
                <meta name="Title" content="Menjawab pertanyaan seputar Big Data." />
                <meta name="description" content="Big Sight frequently asked question (FAQ). Big Sight terdiri dari 6 Produk dan berbagai solusi." />
                <link rel="icon" href="/favicon.ico" />
            </Head>{" "}
            <div className={"Navbar-Container"}>
                <BigSightNavbar />
            </div>
            <div className={"Content-Container"}>
                <FaqSection1 />
                <BeforeFooter />
                <FooterBigSight />
            </div>
        </div>
    );
}
