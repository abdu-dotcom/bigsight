import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./LandingPage-Section3.module.css";
import useTranslation from "next-translate/useTranslation";

export default function LandingPageSection3() {
    let { t } = useTranslation();

    return (
        <div id={styles["LandingPage-Section3"]}>
            <h1 className={styles["LandingPage-Section3-Title"]} data-aos="fade-up" data-aos-delay="0">
                {t("landingpage:Section3-Title1")} <br /> {t("landingpage:Section3-Title2")}
            </h1>
            <Container>
                <Row>
                    <Col md={6} className={styles["LandingPage-Section3-Column-PaddingTop-Container"]}>
                        <div className={styles["LandingPage-Section3-Content-Container"]} data-aos="fade-up-right" data-aos-delay="0">
                            <div className={styles["LandingPage-Section3-Content-Container-Row1"]}>
                                <div className={styles["LandingPage-Section3-Content-Container-Row1-Row"]}>
                                    <div className={styles["LandingPage-Section3-Content-Container-Row1-Img-Wrapper"]}>
                                        <Image alt="Vector Implementasi yang mudah dan fleksibel" src={require("../../../src/Big-Sight/LandingPage/Section3-Content1.png")} />
                                    </div>
                                    <h1 className={styles["LandingPage-Section3-Content-Container-Row1-Title"]}>{t("landingpage:Section3-Vector1-Title")}</h1>
                                </div>
                            </div>
                            <div className={styles["LandingPage-Section3-Content-Container-Row2"]}>
                                <h1 className={styles["LandingPage-Section3-Content-Container-Row2-Desc"]}>{t("landingpage:Section3-Vector1-Desc")}</h1>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} className={styles["LandingPage-Section3-Column-PaddingTop-Container"]}>
                        <div className={styles["LandingPage-Section3-Content-Container"]} data-aos="fade-up-left" data-aos-delay="0">
                            <div className={styles["LandingPage-Section3-Content-Container-Row1"]}>
                                <div className={styles["LandingPage-Section3-Content-Container-Row1-Row"]}>
                                    <div className={styles["LandingPage-Section3-Content-Container-Row1-Img-Wrapper"]}>
                                        <Image alt="Vector Sumber Daya yang Kompeten" src={require("../../../src/Big-Sight/LandingPage/Section3-Content2.png")} />
                                    </div>
                                    <h1 className={styles["LandingPage-Section3-Content-Container-Row1-Title"]}>{t("landingpage:Section3-Vector2-Title")}</h1>
                                </div>
                            </div>
                            <div className={styles["LandingPage-Section3-Content-Container-Row2"]}>
                                <h1 className={styles["LandingPage-Section3-Content-Container-Row2-Desc"]}>{t("landingpage:Section3-Vector2-Desc")}</h1>
                            </div>
                        </div>{" "}
                    </Col>
                </Row>
                <Row>
                    <Col md={6} className={styles["LandingPage-Section3-Column-PaddingTop-Container"]}>
                        <div className={styles["LandingPage-Section3-Content-Container"]} data-aos="fade-up-right" data-aos-delay="0">
                            <div className={styles["LandingPage-Section3-Content-Container-Row1"]}>
                                <div className={styles["LandingPage-Section3-Content-Container-Row1-Row"]}>
                                    <div className={styles["LandingPage-Section3-Content-Container-Row1-Img-Wrapper"]}>
                                        <Image alt="Vector Sumber Daya yang Kompeten" src={require("../../../src/Big-Sight/LandingPage/Section3-Content3.png")} />
                                    </div>
                                    <h1 className={styles["LandingPage-Section3-Content-Container-Row1-Title"]}>{t("landingpage:Section3-Vector3-Title")}</h1>
                                </div>
                            </div>
                            <div className={styles["LandingPage-Section3-Content-Container-Row2"]}>
                                <h1 className={styles["LandingPage-Section3-Content-Container-Row2-Desc"]}>{t("landingpage:Section3-Vector3-Desc")}</h1>
                            </div>
                        </div>{" "}
                    </Col>
                    <Col md={6} className={styles["LandingPage-Section3-Column-PaddingTop-Container"]}>
                        <div data-aos="fade-up-left" data-aos-delay="0" className={styles["LandingPage-Section3-Content-Container"]}>
                            <div className={styles["LandingPage-Section3-Content-Container-Row1"]}>
                                <div className={styles["LandingPage-Section3-Content-Container-Row1-Row"]}>
                                    <div className={styles["LandingPage-Section3-Content-Container-Row1-Img-Wrapper"]}>
                                        <Image alt="Vector Analisis dan Insight yang Akurat" src={require("../../../src/Big-Sight/LandingPage/Section3-Content4.png")} />
                                    </div>
                                    <h1 className={styles["LandingPage-Section3-Content-Container-Row1-Title"]}>{t("landingpage:Section3-Vector4-Title")}</h1>
                                </div>
                            </div>
                            <div className={styles["LandingPage-Section3-Content-Container-Row2"]}>
                                <h1 className={styles["LandingPage-Section3-Content-Container-Row2-Desc"]}>{t("landingpage:Section3-Vector4-Desc")}</h1>
                            </div>
                        </div>{" "}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
