import React from "react";
import style from "./Kementan-Section2.module.css";
import styled from "styled-components";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import useTranslation from "next-translate/useTranslation";

const VectorContainer = styled.div`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    border: ${(props) => props.border};
`;

const KementanSection2 = () => {
    let { t } = useTranslation();

    return (
        <div>
            <div id={style["Kementan-Section2"]}>
                <Container>
                    <Row>
                        <div className={style["Kementan-Section2-Image-Container"]} data-aos="fade-up">
                            <div className={style["Kementan-Section2-Image-Wrapper"]}>
                                <Image alt="Background Kementan" src={require("../../../../src/Big-Sight/Our Client/Background-Kementan.png")} />
                            </div>
                        </div>
                    </Row>
                    <Row>
                        <h1 className={style["Kementan-Section2-Title"]} data-aos="fade-up">
                            Integrated Dashboard System Kementerian Pertanian RI
                        </h1>
                    </Row>
                    <Row>
                        <h1 className={style["Kementan-Section2-Section-Title"]} data-aos="fade-up">
                            Description
                        </h1>
                        <p className={style["Kementan-Section2-Section-Desc"]} data-aos="fade-up">
                            {t("our-client-kementan:Section2-Desc")}
                        </p>
                    </Row>
                    <Row>
                        <Col md={6} className={style["Kementan-Section2-Column-Container"]}>
                            <h1 className={style["Kementan-Section2-Section-Title"]} data-aos="fade-up">
                                Objective
                            </h1>
                            <div className={style["Kementan-Section2-Description-List-Container"]}>
                                <p className={style["Kementan-Section2-Section-Desc"]} data-aos="fade-up">
                                    {t("our-client-kementan:Section2-Objective")}
                                </p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <h1 className={style["Kementan-Section2-Section-Title"]} data-aos="fade-up">
                            Solutions
                        </h1>
                        <div className={style["Kementan-Section2-Section-Solutions-Container"]} data-aos="fade-up">
                            <Row className={style["Kementan-Section2-Section-Solutions-Container-Row"]}>
                                <Col className={style["Kementan-Section2-Section-Solutions-Container-Row-Left"]} data-aos="fade-up">
                                    <div>
                                        <div className={style["Kementan-Section2-Section-Solutions-Column-Container"]}>
                                            <VectorContainer width="48px" height="48px">
                                                <Image alt="Vector1" src={require("../../../../src/Big-Sight/Our Client/Kementan/Vector1.png")} />
                                            </VectorContainer>
                                        </div>
                                        <p className={style["Kementan-Section2-Section-Solutions-Column-Desc"]}>Big Data Platform</p>
                                    </div>
                                </Col>
                                <Col className={style["Kementan-Section2-Section-Solutions-Container-Row-Right"]} data-aos="fade-up">
                                    <div>
                                        <div className={style["Kementan-Section2-Section-Solutions-Column-Container"]}>
                                            <VectorContainer width="48px" height="48px">
                                                <Image alt="Vector2" src={require("../../../../src/Big-Sight/Our Client/Kementan/Vector2.png")} />
                                            </VectorContainer>
                                        </div>
                                        <p className={style["Kementan-Section2-Section-Solutions-Column-Desc"]}>Executive Dashboard</p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Row>
                </Container>{" "}
            </div>{" "}
        </div>
    );
};

export default KementanSection2;
