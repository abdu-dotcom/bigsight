import type { NextPage } from "next";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import LandingPageSection1 from "../containers/LandingPage/LandingPage-Section1/LandingPage-Section1";
import LandingPageSection2 from "../containers/LandingPage/LandingPage-Section2/LandingPage-Section2";
import LandingPageSection3 from "../containers/LandingPage/LandingPage-Section3/LandingPage-Section3";
import LandingPageSection4 from "../containers/LandingPage/LandingPage-Section4/LandingPage-Section4";
import LandingPageSection5 from "../containers/LandingPage/LandingPage-Section5/LandingPage-Section5";
import LandingPageSection6 from "../containers/LandingPage/LandingPage-Section6/LandingPage-Section6";
import LandingPageSection7 from "../containers/LandingPage/LandingPage-Section7/LandingPage-Section7";
import LandingPageSection8 from "../containers/LandingPage/LandingPage-Section8/LandingPage-Section8";
import BigSightNavbar from "../containers/Navbar/BigSightNavbar";
import BeforeFooterBighSight from "../containers/Footer/BeforeFooterBighSight";
import FooterBigSight from "../containers/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { SSRProvider } from "react-bootstrap";

const Home: NextPage = () => {
    return (
        <div
            style={{
                backgroundColor: "#f2f4f8",
            }}
        >
            <Head>
                <title>Big Sight</title>
                <meta name="title" content="Leverage Your Business Through Big Data Analytics" />
                <meta name="description" content="Solusi Big Data Analytics dari Telkom Indonesia" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={"Navbar-Container"}>
                <SSRProvider>
                    <BigSightNavbar />
                </SSRProvider>
            </div>
            <div>
                <LandingPageSection1 />
                <LandingPageSection2 />
                <LandingPageSection3 />
                {/* <LandingPageSection4 /> */}
                <LandingPageSection5 />
                <LandingPageSection6 />
                <LandingPageSection7 />
                <LandingPageSection8 />
                <BeforeFooterBighSight />
                <FooterBigSight />
            </div>
        </div>
    );
};

export default Home;
