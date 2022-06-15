import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./AboutUs-Section2.module.css";
import useTranslation from "next-translate/useTranslation";

export default function AboutUsSection2() {
    let { t } = useTranslation();

    return (
        <div id={styles["AboutUs-Section2"]}>
            <Container className={styles["AboutUs-Section2-Content-Contaiener"]}>
                <Row>
                    <Col lg={6} className={styles["AboutUs-Section2-Left-Column"]}>
                        <div className={styles["AboutUs-Section2-Vector-Wrapper"]} data-aos="fade-up-right">
                            <Image src={require("../../../src/Big-Sight/About Us/Section2-Vector.png")} />
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className={styles["AboutUs-Section2-Rigt-Image-Container"]}>
                            <div className={styles["AboutUs-Section2-BackgroundRight"]} data-aos="fade-up-right">
                                <Image src={require("../../../src/Big-Sight/About Us/Section2-Vector.png")} />
                            </div>
                        </div>
                        <div className={styles["AboutUs-Section2-Rigt-Text-Container"]}>
                            <h1 className={styles["AboutUs-Section2-Title"]} data-aos="fade-up-left">
                                {t("about-us:Section2-Title")}
                            </h1>
                            <p className={`${styles["AboutUs-Section2-Desc"]} ${styles["AboutUs-Section2-Par1"]}`} data-aos="fade-up-left">
                                {t("about-us:Section2-Desc1")}
                            </p>
                            <p className={`${styles["AboutUs-Section2-Desc"]} ${styles["AboutUs-Section2-Par1"]}`} data-aos="fade-up-left">
                                {t("about-us:Section2-Desc2")}
                            </p>
                            <p className={`${styles["AboutUs-Section2-Desc"]} ${styles["AboutUs-Section2-Par1"]}`} data-aos="fade-up-left">
                                {t("about-us:Section2-Desc3")}
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
