import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./LandingPage-Section7.module.css";
import useTranslation from "next-translate/useTranslation";

export default function LandingPageSection7() {
    let { t } = useTranslation();

    return (
        <div id={styles["LandingPage-Section7"]}>
            <Container>
                <h1 className={styles["LandingPage-Section7-Title"]} data-aos="fade-up" data-aos-delay="0">
                    {t("landingpage:Section7-Title1")}{" "}
                </h1>
                <Row className={styles["LandingPage-Section7-RowLogo-Container"]}>
                    <Col lg={2} md={4} className={styles["LandingPage-Section1-Column-Container"]}>
                        <div className={styles["LandingPage-Section7-Column-Container"]} data-aos="fade-up" data-aos-delay="0">
                            <div className={styles["LandingPage-Section7-Telkom-Wrapper"]}>
                                <Image alt="Logo Telkom" src={require("../../../src/Big-Sight/LandingPage/Section7-Telkom-Indonesia.png")} />
                            </div>
                        </div>
                    </Col>
                    <Col lg={2} md={4} className={styles["LandingPage-Section1-Column-Container"]}>
                        <div className={styles["LandingPage-Section7-Column-Container"]} data-aos="fade-up" data-aos-delay="100">
                            <div className={styles["LandingPage-Section7-Kemenkes-Wrapper"]}>
                                <Image alt="Logo Kemenkes" src={require("../../../src/Big-Sight/LandingPage/Section7-Kemenkes.png")} />
                            </div>
                        </div>
                    </Col>
                    <Col lg={2} md={4} className={styles["LandingPage-Section1-Column-Container"]}>
                        <div data-aos="fade-up" data-aos-delay="200" className={styles["LandingPage-Section7-Column-Container"]}>
                            <div className={styles["LandingPage-Section7-Seknat-Negara-Wrapper"]}>
                                <Image alt="Logo Seknat" src={require("../../../src/Big-Sight/LandingPage/Section7-Seknat-Negara.png")} />
                            </div>
                        </div>
                    </Col>
                    <Col lg={2} md={4} className={styles["LandingPage-Section1-Column-Container"]}>
                        <div data-aos="fade-up" data-aos-delay="200" className={styles["LandingPage-Section7-Column-Container"]}>
                            <div className={styles["LandingPage-Section7-Pertamina-Wrapper"]}>
                                <Image alt="Logo Pertamina" src={require("../../../src/Big-Sight/LandingPage/Section7-Pertamina.png")} />
                            </div>
                        </div>
                    </Col>
                    <Col lg={2} md={4} className={styles["LandingPage-Section1-Column-Container"]}>
                        <div data-aos="fade-up" data-aos-delay="100" className={styles["LandingPage-Section7-Column-Container"]}>
                            <div className={styles["LandingPage-Section7-Dishub-Wrapper"]}>
                                <Image alt="Logo Dishub" src={require("../../../src/Big-Sight/LandingPage/Section7-Dishub.png")} />
                            </div>
                        </div>
                    </Col>
                    <Col lg={2} md={4} className={styles["LandingPage-Section1-Column-Container"]}>
                        <div data-aos="fade-up" data-aos-delay="0" className={styles["LandingPage-Section7-Column-Container"]}>
                            <div className={styles["LandingPage-Section7-AHM-Wrapper"]}>
                                <Image alt="Logo AHM" src={require("../../../src/Big-Sight/LandingPage/Section7-AHM.png")} />
                            </div>
                        </div>
                    </Col>
                    <Col className={styles["LandingPage-Section1-Column-Container"]}>
                        <div data-aos="fade-up" data-aos-delay="0" className={styles["LandingPage-Section7-Column-Container"]}>
                            <div className={styles["LandingPage-Section7-KAI-Wrapper"]}>
                                <Image alt="Logo AHM" src={require("../../../src/Big-Sight/LandingPage/Section7-KAI.png")} />
                            </div>
                        </div>
                    </Col>
                    <Col className={styles["LandingPage-Section1-Column-Container"]}>
                        <div data-aos="fade-up" data-aos-delay="0" className={styles["LandingPage-Section7-Column-Container"]}>
                            <div className={styles["LandingPage-Section7-Kimia-Farma-Wrapper"]}>
                                <Image alt="Logo AHM" src={require("../../../src/Big-Sight/LandingPage/Section7-Kimia-Farma.png")} />
                            </div>
                        </div>
                    </Col>
                    <Col className={styles["LandingPage-Section1-Column-Container"]}>
                        <div data-aos="fade-up" data-aos-delay="0" className={styles["LandingPage-Section7-Column-Container"]}>
                            <div className={styles["LandingPage-Section7-Pegadaian-Wrapper"]}>
                                <Image alt="Logo AHM" src={require("../../../src/Big-Sight/LandingPage/Section7-Pegadaian.png")} />
                            </div>
                        </div>
                    </Col>
                </Row>
                <h1 data-aos="fade-up" data-aos-delay="0" className={styles["LandingPage-Section7-Title2"]}>
                    {t("landingpage:Section7-Title2")}{" "}
                </h1>
            </Container>
        </div>
    );
}
