import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import style from "./ErrorPages-Section1.module.css";

export default function ErrorPagesSection1() {
    return (
        <div id={style["ErrorPages-Section1"]}>
            <Container>
                <Row>
                    <Col md={6} className={`${style["ErrorPages-Column-Container"]} ${style["ErrorPages-Column-Containe-Left"]}`}>
                        <div className={style["ErrorPages-Column-Left-Vector-Wrapper"]}>
                            <Image src={require("../../../src/Big-Sight/ErrorPages/Error.png")} />
                        </div>
                    </Col>
                    <Col md={6} className={style["ErrorPages-Column-Container"]}>
                        <div className={style["ErrorPages-Column-Left-Vector-Wrapper-Responsive"]}>
                            <Image src={require("../../../src/Big-Sight/ErrorPages/Error.png")} />
                        </div>
                        <div>
                            <h1 className={style["ErrorPages-Title"]}>404</h1>
                            <h1 className={style["ErrorPages-Title2"]}>Page Not Found</h1>
                            <div className={style["ErrorPages-Desc-Container"]}>
                                <p className={style["ErrorPages-Desc"]}>We`re sorry, the page you requested could not be found Please go back to the homepage</p>
                            </div>
                            <div className={style["ErrorPages-Button-Container"]}>
                                <button className={style["ErrorPages-ButtonBack"]}>Back</button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
