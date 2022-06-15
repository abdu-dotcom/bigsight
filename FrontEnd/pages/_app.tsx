import "../styles/globals.css";
import type { AppProps } from "next/app";
import "react-multi-carousel/lib/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

config.autoAddCss = false;


function MyApp({ Component, pageProps }: AppProps) {
    useEffect(() => {
        AOS.init({
            easing: "ease-out-cubic",
            offset: 50,
            duration: 1000,
            delay: 50,
        });
    });
    return <Component {...pageProps} />;
}

export default MyApp;
