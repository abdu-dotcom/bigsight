import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./AboutUs-Section3.module.css";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";

export default function AboutUsSection3() {
    let { t } = useTranslation();

    return (
        <div id={styles["AboutUs-Section3"]}>
            <Container>
                <Row className={styles["AboutUs-Section3-Container"]}>
                    <Col>
                        <div className={styles["AboutUs-Section3-Left-Content-Container"]}>
                            <h1 className={styles["AboutUs-Section3-Title"]} data-aos="fade-up-right">
                                {t("about-us:Section3-Vision-Title")}{" "}
                            </h1>
                            <p className={styles["AboutUs-Section3-Desc"]} data-aos="fade-up-right">
                                {t("about-us:Section3-Vision-Desc")}{" "}
                            </p>
                        </div>
                        <div className={styles["AboutUs-Section3-Left-Content-Row2"]}>
                            <div className={styles["AboutUs-Section3-Left-Content-Container"]}>
                                <h1 className={styles["AboutUs-Section3-Title"]} data-aos="fade-up-right">
                                    {t("about-us:Section3-Mission-Title")}{" "}
                                </h1>
                                <ul>
                                    <li className={styles["AboutUs-Section3-Desc"]} data-aos="fade-up-right">
                                        {t("about-us:Section3-Mission-Desc1")}{" "}
                                    </li>
                                    <li className={styles["AboutUs-Section3-Desc"]} data-aos="fade-up-right">
                                        {t("about-us:Section3-Mission-Desc2")}{" "}
                                    </li>
                                    <li className={styles["AboutUs-Section3-Desc"]} data-aos="fade-up-right">
                                        {t("about-us:Section3-Mission-Desc3")}{" "}
                                    </li>
                                </ul>
                            </div>{" "}
                        </div>
                    </Col>
                    <Col className={styles["AboutUs-Section3-Right-Content-Container"]}>
                        {/* <div className={styles["AboutUs-Section3-Left-Background"]}>
                            <div className={styles["AboutUs-Section3-Awan1-Container"]}>
                                <div className={styles["AboutUs-Section3-Awan1-Wrapper"]}>
                                    <Image src={require("../../../src/Big-Sight/About Us/Awan1.png")} />
                                </div>
                            </div>
                            <div className={styles["AboutUs-Section3-Awan2-Container"]}>
                                <div className={styles["AboutUs-Section3-Awan2-Wrapper"]}>
                                    <Image src={require("../../../src/Big-Sight/About Us/Awan2.png")} />
                                </div>
                            </div>
                        </div> */}
                        {/* <div className={styles["AboutUs-Section3-Panah-Container"]}>
                            <div className={styles["AboutUs-Section3-Panah-Wrapper"]}>
                                <Image src={require("../../../src/Big-Sight/About Us/PanahFull.png")} />
                            </div>
                        </div> */}
                        <div className={styles["AboutUs-Section3-Background-Container"]}>
                            <div className={styles["AboutUs-Section3-Panah-Container"]}>
                                <div className={styles["AboutUs-Section3-Panah-Wrapper"]}>
                                    <Image src={require("../../../src/Big-Sight/About Us/PanahFull.png")} />
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
