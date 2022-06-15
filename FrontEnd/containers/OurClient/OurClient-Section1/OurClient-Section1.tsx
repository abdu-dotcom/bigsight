import React from "react";
import styles from "./OurClient-Section1.module.css";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";

export default function OurClientSection1() {
    let { t } = useTranslation();

    return (
        <div id={styles["OurClient-Section1"]}>
            <Container>
                <Row>
                    <Col className={styles["OurClient-Section1-Left-Column"]} data-aos="fade-right">
                        <h1 className={styles["OurClient-Section1-Title"]}>{t("common:OurClient-Section1-Title")}</h1>
                    </Col>
                    <Col className={styles["OurClient-Section1-Right-Column"]}>
                        <div data-aos="fade-left">
                            <div className={styles["OurClient-Section1-Vector-Wrapper"]}>
                                <Image alt="Section 1 Vector" src={require("../../../src/Big-Sight/Our Client/Section1 Vector.png")} />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>{" "}
        </div>
    );
}
