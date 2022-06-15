import { Col, Container, Row } from "react-bootstrap";
import styles from "./LandingPage-Section1.module.css";
import { LandingPageSection1Button } from "../../../components/Button/LandingPage/ButtonLandingPage.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { LandingPageSection1Type } from "../../../components/Typing/TypingLandingPage.styled";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { useRouter } from "next/router";

export default function LandingPageSection1() {
    const { locale } = useRouter();
    let { t } = useTranslation();
    return (
        <div id={styles["LandingPage-Section1"]}>
            <div style={{ position: "relative" }}>
                <div className={styles["Section1-Background-Container"]}>
                    <Image src={require("../../../src/Big-Sight/LandingPage/Section1-background.gif")} />
                </div>
                <Container fluid className={styles["Section1-Content-Container"]}>
                    <Row>
                        <Col xs={{ order: "last" }} sm={{ order: "last" }} lg={{ order: "first" }} xl={{ order: "first" }} className={styles["LandingPage-Section1-Left"]}>
                            <div className={styles["LandingPage-Section1-Left-Content-Container"]}>
                                <p className={styles["LandingPage-Section1-Left-Desc"]} data-aos="fade-up" data-aos-delay="100">
                                    BIG IMPACT EXCELLENT INSIGHT
                                </p>
                                <div className={styles["LandingPage-Section1-Type-Container"]} data-aos="fade-up" data-aos-delay="300">
                                    <LandingPageSection1Type length={locale === "en" ? 40 : 37} bgLength={locale === "en" ? 1 : 8}>
                                        {t("landingpage:Section1-Title")}
                                    </LandingPageSection1Type>
                                </div>
                                <div className={styles["LandingPage-Section1-Button-Container"]} data-aos="fade-up">
                                    <Link href="/about-us">
                                        <LandingPageSection1Button>
                                            {t("landingpage:Section1-Button")}
                                            <span className={styles["LandingPage-Section1-Button-Span-Arrow"]}>
                                                <FontAwesomeIcon icon={faAngleRight} />
                                            </span>
                                        </LandingPageSection1Button>
                                    </Link>
                                </div>
                            </div>
                        </Col>
                        <Col xs={{ order: "first" }} sm={{ order: "first" }} lg={{ order: "last" }} xl={{ order: "last" }} className={styles["LandingPage-Section1-Right-Column"]}>
                            <div className={styles["LandingPage-Section1-Video-Container"]} data-aos="fade-left" data-aos-delay="400">
                                <div className={styles["LandingPage-Section1-Aspect-Ratio"]}>
                                    <iframe
                                        className={styles["LandingPage-Section1-Video"]}
                                        src="https://www.youtube.com/embed/SFwDJ83GxHE"
                                        title="YouTube video player"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    ></iframe>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}
