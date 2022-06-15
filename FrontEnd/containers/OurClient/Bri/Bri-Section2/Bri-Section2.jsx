import React, { Component } from "react";
import style from "./Bri-Section2.module.css";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import withTranslation from "next-translate/withTranslation";

const VectorContainer = styled.div`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    border: ${(props) => props.border};
`;

class BriSection2 extends Component {
    render() {
        const { t } = this.props.i18n;

        return (
            <div id={style["Bri-Section2"]}>
                <Container>
                    <Row>
                        <div className={style["Bri-Section2-Image-Container"]} data-aos="fade-up">
                            <div className={style["Bri-Section2-Image-Wrapper"]}>
                                <Image alt="Background Bri" src={require("../../../../src/Big-Sight/Our Client/Background-Bri.png")} />
                            </div>
                        </div>
                    </Row>
                    <Row>
                        <h1 className={style["Bri-Section2-Title"]} data-aos="fade-up">
                            Customer Smart Profiling
                        </h1>
                    </Row>
                    <Row>
                        <h1 className={style["Bri-Section2-Section-Title"]} data-aos="fade-up">
                            Description
                        </h1>
                        <p className={style["Bri-Section2-Section-Desc"]} data-aos="fade-up">
                            {t("our-client-bri:Section2-Desc")}
                        </p>
                    </Row>
                    <Row>
                        <Col md={6} className={style["Bri-Section2-Column-Container"]}>
                            <h1 className={style["Bri-Section2-Description-Title"]} data-aos="fade-up">
                                Benefit
                            </h1>
                            <div className={style["Bri-Section2-Description-List-Container"]}>
                                <ul>
                                    <li className={style["Bri-Section2-Description-Desc"]} data-aos="fade-up">
                                        {t("our-client-bri:Section2-Benefit1")}
                                    </li>
                                    <li className={style["Bri-Section2-Description-Desc"]} data-aos="fade-up">
                                        {t("our-client-bri:Section2-Benefit2")}
                                    </li>
                                    <li className={style["Bri-Section2-Description-Desc"]} data-aos="fade-up">
                                        {t("our-client-bri:Section2-Benefit3")}
                                    </li>
                                    <li className={style["Bri-Section2-Description-Desc"]} data-aos="fade-up">
                                        {t("our-client-bri:Section2-Benefit4")}
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col md={6} className={style["Bri-Section2-Column-Container"]}>
                            <h1 className={style["Bri-Section2-Description-Title"]} data-aos="fade-up">
                                Objective
                            </h1>
                            <div className={style["Bri-Section2-Description-List-Container"]}>
                                <ul>
                                    <li className={style["Bri-Section2-Description-Desc"]} data-aos="fade-up">
                                        {t("our-client-bri:Section2-Objective1")}
                                    </li>
                                    <li className={style["Bri-Section2-Description-Desc"]} data-aos="fade-up">
                                        {t("our-client-bri:Section2-Objective2")}
                                    </li>
                                    <li className={style["Bri-Section2-Description-Desc"]} data-aos="fade-up">
                                        {t("our-client-bri:Section2-Objective3")}
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <h1 className={style["Bri-Section2-Section-Title"]} data-aos="fade-up">
                            Implementation
                        </h1>
                        <p className={style["Bri-Section2-Section-Desc"]} data-aos="fade-up">
                            360 Profile Insights
                        </p>
                    </Row>
                    <Row>
                        <h1 className={style["Bri-Section2-Section-Title"]} data-aos="fade-up">
                            Solutions
                        </h1>
                        <div className={style["Bri-Section2-Section-Solutions-Container"]} data-aos="fade-up">
                            <Row className={style["Bri-Section2-Section-Solutions-Container-Row"]}>
                                <Col data-aos="fade-up">
                                    <div className={style["Bri-Section2-Section-Solutions-Column-Container"]}>
                                        <VectorContainer width="48px" height="48px">
                                            <Image alt="Vector1" src={require("../../../../src/Big-Sight/Our Client/Bri/Vector1.png")} />
                                        </VectorContainer>
                                    </div>
                                    <p className={style["Bri-Section2-Section-Solutions-Column-Desc"]}>Customer Profile</p>
                                </Col>
                                <Col data-aos="fade-up">
                                    <div className={style["Bri-Section2-Section-Solutions-Column-Container"]}>
                                        <VectorContainer width="54px" height="42px">
                                            <Image alt="Vector2" src={require("../../../../src/Big-Sight/Our Client/Bri/Vector2.png")} />
                                        </VectorContainer>
                                    </div>
                                    <p className={style["Bri-Section2-Section-Solutions-Column-Desc"]}>Customer Profiles Per Product</p>
                                </Col>
                                <Col data-aos="fade-up">
                                    <div className={style["Bri-Section2-Section-Solutions-Column-Container"]}>
                                        <VectorContainer width="51px" height="51px">
                                            <Image alt="Vector3" src={require("../../../../src/Big-Sight/Our Client/Bri/Vector3.png")} />
                                        </VectorContainer>
                                    </div>
                                    <p className={style["Bri-Section2-Section-Solutions-Column-Desc"]}>Customer Transaction Per Product</p>
                                </Col>
                                <Col data-aos="fade-up">
                                    <div className={style["Bri-Section2-Section-Solutions-Column-Container"]}>
                                        <VectorContainer width="53px" height="53px">
                                            <Image alt="Vector4" src={require("../../../../src/Big-Sight/Our Client/Bri/Vector4.png")} />
                                        </VectorContainer>
                                    </div>
                                    <p className={style["Bri-Section2-Section-Solutions-Column-Desc"]}>Customer/Product History</p>
                                </Col>
                                <Col data-aos="fade-up">
                                    <div className={style["Bri-Section2-Section-Solutions-Column-Container"]}>
                                        <VectorContainer width="63px" height="55px">
                                            <Image alt="Vector5" src={require("../../../../src/Big-Sight/Our Client/Bri/Vector5.png")} />
                                        </VectorContainer>
                                    </div>
                                    <p className={style["Bri-Section2-Section-Solutions-Column-Desc"]}>Customer Transaction</p>
                                </Col>
                                <Col data-aos="fade-up">
                                    <div className={style["Bri-Section2-Section-Solutions-Column-Container"]}>
                                        <VectorContainer width="63px" height="55px">
                                            <Image alt="Vector6" src={require("../../../../src/Big-Sight/Our Client/Bri/Vector6.png")} />
                                        </VectorContainer>
                                    </div>
                                    <p className={style["Bri-Section2-Section-Solutions-Column-Desc"]}>Customer relation</p>
                                </Col>
                            </Row>
                        </div>
                    </Row>
                </Container>{" "}
            </div>
        );
    }
}

export default withTranslation(BriSection2);
