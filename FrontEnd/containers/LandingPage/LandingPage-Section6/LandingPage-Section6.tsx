import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./LandingPage-Section6.module.css";
import useTranslation from "next-translate/useTranslation";

export default function LandingPageSection6() {
    let { t } = useTranslation();

    return (
        <div id={styles["LandingPage-Section6"]}>
            <Container>
                <h1 className={styles["LandingPage-Section6-Title"]} data-aos="fade-up">
                    {t("landingpage:Section6-Title")}{" "}
                </h1>
                <Row className={styles["LandingPage-Section6-Content-Container"]}>
                    <Col lg={4} md={6} className={styles["LandingPage-Section6-Column-Container"]}>
                        <div>
                            <div className={`${styles["LandingPage-Section6-Cloudera-Logo-Container"]}`} data-aos="fade-right">
                                <div className={styles["LandingPage-Section6-Cloudera-Logo-Wrapper"]}>
                                    <Image alt={"Logo Cloudera"} src={require("../../../src/Big-Sight/LandingPage/Section6-Cloudera.png")} />
                                </div>
                            </div>
                            <p className={`${styles["LandingPage-Section6-Column-Content-Title"]} ${styles["LandingPage-Section6-Column-Content-Title-Cloudera"]}`} data-aos="fade-right">
                                Cloudera Data Impact
                            </p>
                            <p className={styles["LandingPage-Section6-Column-Content-Desc"]} data-aos="fade-right">
                                Edge-to-AI Category ( The Biggest <br /> data-in-motion implementator)
                            </p>
                        </div>
                    </Col>
                    <Col lg={4} md={6} className={styles["LandingPage-Section6-Column-Container"]}>
                        <div>
                            <div className={`${styles["LandingPage-Section6-Seknat-Logo-Container"]}`} data-aos="fade-up">
                                <div className={styles["LandingPage-Section6-Seknat-Logo-Wrapper"]}>
                                    <Image alt={"Logo Seknat"} src={require("../../../src/Big-Sight/LandingPage/Section6-Seknat.png")} />
                                </div>
                            </div>
                            <p className={`${styles["LandingPage-Section6-Column-Content-Title"]} ${styles["LandingPage-Section6-Column-Content-Title-Seknat"]}`} data-aos="fade-up">
                                Penghargaan <br /> Innovation Awards
                            </p>
                            <p className={`${styles["LandingPage-Section6-Column-Content-Desc"]} ${styles["LandingPage-Section6-Column-Content-Desc-Seknat"]}`} data-aos="fade-up">
                                Kementrian Sekretariat Negara <br /> Republik Indonesia{" "}
                            </p>
                        </div>
                    </Col>
                    <Col lg={4} md={12} className={styles["LandingPage-Section6-Column-Container"]}>
                        <div>
                            <div className={`${styles["LandingPage-Section6-CioOutlook-Logo-Container"]}`} data-aos="fade-left">
                                <div className={styles["LandingPage-Section6-CioOutlook-Logo-Wrapper"]}>
                                    <Image alt="Logo CioOutlook" src={require("../../../src/Big-Sight/LandingPage/Section6-CioOutlook.png")} />
                                </div>
                            </div>
                            <p className={`${styles["LandingPage-Section6-Column-Content-Title"]} ${styles["LandingPage-Section6-Column-Content-Title-CioOutlook"]}`} data-aos="fade-left">
                                Cloudera Data Impact
                            </p>
                            <p className={styles["LandingPage-Section6-Column-Content-Desc"]} data-aos="fade-left">
                                Edge-to-AI Category ( The Biggest <br /> data-in-motion implementator)
                            </p>
                        </div>{" "}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
