import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./Solutions-Section1.module.css";
import useTranslation from "next-translate/useTranslation";

export default function SolutionsSection1() {
    let { t } = useTranslation();

    return (
        <div id={styles["Solutions-Section1"]}>
            <Container>
                <Row>
                    <Col className={styles["Solutions-Section1-Left-Column"]} data-aos="fade-right">
                        <h1 className={styles["Solutions-Section1-Title"]}>
                            {t("solution:Section1-Title")} <br /> {t("solution:Section1-Title2")}
                        </h1>
                    </Col>
                    <Col className={styles["Solutions-Section1-Right-Column"]} data-aos="fade-left">
                        {/* <div>
                            <div className={styles["Solutions-Section1-Vector-Wrapper"]}>
                                <Image src={require("../../../src/Big-Sight/Solutions/Section1-Vector.png")} />
                            </div>
                        </div> */}
                        <div>
                            {" "}
                            {/** div buat display center of column */}
                            <div className={styles["Section1-Right-Full-Vector"]}>
                                {/** div buat full vector container */}
                                <div className={styles["Solutions-Section1-Lamp-Row-Container"]}>
                                    <div>
                                        <div className={styles["Solutions-Section1-Lamp-Wrapper"]}>
                                            <Image src={require("../../../src/Big-Sight/Solutions/Section1-Lamp.png")} />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    {/** div buat partial content */}
                                    <div className={styles["Solutions-Section1-Doping-Wrapper"]}>
                                        <Image src={require("../../../src/Big-Sight/Solutions/Section1-Doping.png")} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
