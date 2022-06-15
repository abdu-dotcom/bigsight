import Image from "next/image";
import Link from "next/link";
import styles from "./LandingPage-Section8.module.css";
import useTranslation from "next-translate/useTranslation";

export default function LandingPageSection8() {
    let { t } = useTranslation();

    return (
        <div id={styles["LandingPage-Section8"]}>
            <div className={styles["LandingPage-Section8-Text-Container"]}>
                <div>
                    <h1 className={styles["LandingPage-Section8-Title"]} data-aos="fade-up" data-aos-delay="0">
                        {t("landingpage:Section8-Title")}{" "}
                    </h1>
                    <div className={styles["LandingPage-Section8-Button-Container"]}>
                        <Link href={"/contact-us"} passHref>
                            <button className={styles["LandingPage-Section8-Button"]} data-aos="fade-up" data-aos-delay="0">
                                {t("landingpage:Section8-Button")}
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className={styles["LandingPage-Section8-Background-Container"]}>
                <div className={styles["LandingPage-Section8-Background1-Container"]} data-aos="fade-down" data-aos-delay="0">
                    <div className={styles["LandingPage-Section8-Background1-Container-Wrapper"]}>
                        <Image alt="Section 8 Background" src={require("../../../src/Big-Sight/LandingPage/Section8-Background.png")} />
                    </div>
                </div>
                <div className={styles["LandingPage-Section8-Background2-Container"]} data-aos="fade-up" data-aos-delay="400">
                    <div className={styles["LandingPage-Section8-Background2-Container-Wrapper"]}>
                        <Image alt="Section 8 Background2" src={require("../../../src/Big-Sight/LandingPage/Section8-Background2.png")} />
                    </div>
                </div>
            </div>
        </div>
    );
}
