import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import style from "./Solutions-Section2.module.css";
import styled from "styled-components";
import Image from "next/image";
import withTranslation from "next-translate/withTranslation";

const VectorContainer = styled.div`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    margin-top: ${(props) => props.marginTop};
    margin-left: ${(props) => props.marginLeft};
    position: absolute;
`;

class SolutionsSection2 extends Component {
    render() {
        const { t } = this.props.i18n;

        return (
            <div id={style["SolutionsSection2"]}>
                <Row className={style["SolutionsSection2-Content-Container"]}>
                    <Col xl={4} md={6} data-aos="fade-up" className={style["SolutionsSection2-Column-Container"]}>
                        <div id={style["SolutionsCard"]}>
                            <VectorContainer width={"78px"} height={"62px"} marginTop={"50px"} marginLeft={"25px"}>
                                <Image src={require("../../../src/Big-Sight/Solutions/Section2/No1.png")} />
                            </VectorContainer>
                            <div className={style["SolutionsCard-Text-Container-Parent"]}>
                                <div className={style["SolutionsCard-Text-Container"]}>
                                    <h1 className={style["SolutionsCard-Text-Title"]}>Customer Profiling 360</h1>
                                    <p className={style["SolutionsCard-Text-Desc"]}>
                                        <i>{t("solution:Section2-Card1-I1")} </i>
                                        {t("solution:Section2-Card1-N1")}
                                    </p>
                                </div>
                            </div>
                        </div>{" "}
                    </Col>
                    <Col xl={4} md={6} data-aos="fade-up" className={style["SolutionsSection2-Column-Container"]}>
                        <div id={style["SolutionsCard"]}>
                            <VectorContainer width={"73.5px"} height={"57px"} marginTop={"39px"} marginLeft={"37px"}>
                                <Image src={require("../../../src/Big-Sight/Solutions/Section2/No2.png")} />
                            </VectorContainer>
                            <div className={style["SolutionsCard-Text-Container-Parent"]}>
                                <div className={style["SolutionsCard-Text-Container"]}>
                                    <h1 className={style["SolutionsCard-Text-Title"]}>Customer Activation</h1>
                                    <p className={style["SolutionsCard-Text-Desc"]}>
                                        {t("solution:Section2-Card2-N1")} <i>{t("solution:Section2-Card2-I1")}</i> {t("solution:Section2-Card2-N2")}
                                    </p>
                                </div>
                            </div>
                        </div>{" "}
                    </Col>
                    <Col xl={4} md={6} data-aos="fade-up" className={style["SolutionsSection2-Column-Container"]}>
                        <div id={style["SolutionsCard"]}>
                            <VectorContainer width={"73px"} height={"64px"} marginTop={"32px"} marginLeft={"37px"}>
                                <Image src={require("../../../src/Big-Sight/Solutions/Section2/No3.png")} />
                            </VectorContainer>
                            <div className={style["SolutionsCard-Text-Container-Parent"]}>
                                <div className={style["SolutionsCard-Text-Container"]}>
                                    <h1 className={style["SolutionsCard-Text-Title"]}>Smart Collection</h1>
                                    <p className={style["SolutionsCard-Text-Desc"]}>{t("solution:Section2-Card3-N1")}</p>
                                </div>
                            </div>
                        </div>{" "}
                    </Col>
                    <Col xl={4} md={6} data-aos="fade-up" className={style["SolutionsSection2-Column-Container"]}>
                        <div id={style["SolutionsCard"]}>
                            <VectorContainer width={"66px"} height={"72px"} marginTop={"21px"} marginLeft={"23px"}>
                                <Image src={require("../../../src/Big-Sight/Solutions/Section2/No4.png")} />
                            </VectorContainer>
                            <div className={style["SolutionsCard-Text-Container-Parent"]}>
                                <div className={style["SolutionsCard-Text-Container"]}>
                                    <h1 className={style["SolutionsCard-Text-Title"]}>Customer Behavior</h1>
                                    <p className={style["SolutionsCard-Text-Desc"]}>{t("solution:Section2-Card4-N1")}</p>
                                </div>
                            </div>
                        </div>{" "}
                    </Col>
                    <Col xl={4} md={6} data-aos="fade-up" className={style["SolutionsSection2-Column-Container"]}>
                        <div id={style["SolutionsCard"]}>
                            <VectorContainer width={"61px"} height={"61px"} marginTop={"32px"} marginLeft={"25px"}>
                                <Image src={require("../../../src/Big-Sight/Solutions/Section2/No5.png")} />
                            </VectorContainer>
                            <div className={style["SolutionsCard-Text-Container-Parent"]}>
                                <div className={style["SolutionsCard-Text-Container"]}>
                                    <h1 className={style["SolutionsCard-Text-Title"]}>Customer Profitability</h1>
                                    <p className={style["SolutionsCard-Text-Desc"]}>{t("solution:Section2-Card5-N1")}</p>
                                </div>
                            </div>
                        </div>{" "}
                    </Col>
                    <Col xl={4} md={6} data-aos="fade-up" className={style["SolutionsSection2-Column-Container"]}>
                        <div id={style["SolutionsCard"]}>
                            <VectorContainer width={"60px"} height={"59px"} marginTop={"34px"} marginLeft={"25px"}>
                                <Image src={require("../../../src/Big-Sight/Solutions/Section2/No6.png")} />
                            </VectorContainer>
                            <div className={style["SolutionsCard-Text-Container-Parent"]}>
                                <div className={style["SolutionsCard-Text-Container"]}>
                                    <h1 className={style["SolutionsCard-Text-Title"]}>Merchant Recommendation Engine</h1>
                                    <p className={style["SolutionsCard-Text-Desc"]}>{t("solution:Section2-Card6-N1")}</p>
                                </div>
                            </div>
                        </div>{" "}
                    </Col>
                    <Col xl={4} md={6} data-aos="fade-up" className={style["SolutionsSection2-Column-Container"]}>
                        <div id={style["SolutionsCard"]}>
                            <VectorContainer width={"75px"} height={"50px"} marginTop={"44px"} marginLeft={"36px"}>
                                <Image src={require("../../../src/Big-Sight/Solutions/Section2/No7.png")} />
                            </VectorContainer>
                            <div className={style["SolutionsCard-Text-Container-Parent"]}>
                                <div className={style["SolutionsCard-Text-Container"]}>
                                    <h1 className={style["SolutionsCard-Text-Title"]}>Customer Acquisition</h1>
                                    <p className={style["SolutionsCard-Text-Desc"]}>
                                        {t("solution:Section2-Card7-N1")}
                                        <i> {t("solution:Section2-Card7-I1")} </i>
                                        {t("solution:Section2-Card7-N2")}
                                    </p>
                                </div>
                            </div>
                        </div>{" "}
                    </Col>
                    <Col xl={4} md={6} data-aos="fade-up" className={style["SolutionsSection2-Column-Container"]}>
                        <div id={style["SolutionsCard"]}>
                            <VectorContainer width={"63px"} height={"63px"} marginTop={"31px"} marginLeft={"35px"}>
                                <Image src={require("../../../src/Big-Sight/Solutions/Section2/No8.png")} />
                            </VectorContainer>
                            <div className={style["SolutionsCard-Text-Container-Parent"]}>
                                <div className={style["SolutionsCard-Text-Container"]}>
                                    <h1 className={style["SolutionsCard-Text-Title"]}>Cross Sell Up Sell</h1>
                                    <p className={style["SolutionsCard-Text-Desc"]}>
                                        {t("solution:Section2-Card8-N1")}
                                        <i> {t("solution:Section2-Card8-I1")} </i>
                                        {t("solution:Section2-Card8-N2")} <i> {t("solution:Section2-Card8-I2")} </i>
                                        {t("solution:Section2-Card8-N3")}
                                    </p>
                                </div>
                            </div>
                        </div>{" "}
                    </Col>
                    <Col xl={4} md={6} data-aos="fade-up" className={style["SolutionsSection2-Column-Container"]}>
                        <div id={style["SolutionsCard"]}>
                            <VectorContainer width={"62px"} height={"48px"} marginTop={"46px"} marginLeft={"34px"}>
                                <Image src={require("../../../src/Big-Sight/Solutions/Section2/No9.png")} />
                            </VectorContainer>
                            <div className={style["SolutionsCard-Text-Container-Parent"]}>
                                <div className={style["SolutionsCard-Text-Container"]}>
                                    <h1 className={style["SolutionsCard-Text-Title"]}>GIS Analytics</h1>
                                    <p className={style["SolutionsCard-Text-Desc"]}>{t("solution:Section2-Card9-N1")}</p>
                                </div>
                            </div>
                        </div>{" "}
                    </Col>
                    <Col xl={4} md={6} data-aos="fade-up" className={style["SolutionsSection2-Column-Container"]}>
                        <div id={style["SolutionsCard"]}>
                            <VectorContainer width={"59px"} height={"55px"} marginTop={"31px"} marginLeft={"30px"}>
                                <Image src={require("../../../src/Big-Sight/Solutions/Section2/No10.png")} />
                            </VectorContainer>
                            <div className={style["SolutionsCard-Text-Container-Parent"]}>
                                <div className={style["SolutionsCard-Text-Container"]}>
                                    <h1 className={style["SolutionsCard-Text-Title"]}>Churn Prevention</h1>
                                    <p className={style["SolutionsCard-Text-Desc"]}>{t("solution:Section2-Card10-N1")}</p>
                                </div>
                            </div>
                        </div>{" "}
                    </Col>
                    <Col xl={4} md={6} data-aos="fade-up" className={style["SolutionsSection2-Column-Container"]}>
                        <div id={style["SolutionsCard"]}>
                            <VectorContainer width={"62px"} height={"58px"} marginTop={"28px"} marginLeft={"24px"}>
                                <Image src={require("../../../src/Big-Sight/Solutions/Section2/No11.png")} />
                            </VectorContainer>
                            <div className={style["SolutionsCard-Text-Container-Parent"]}>
                                <div className={style["SolutionsCard-Text-Container"]}>
                                    <h1 className={style["SolutionsCard-Text-Title"]}>Fraud Detection</h1>
                                    <p className={style["SolutionsCard-Text-Desc"]}>{t("solution:Section2-Card11-N1")}</p>
                                </div>
                            </div>
                        </div>{" "}
                    </Col>
                    <Col xl={4} md={6} data-aos="fade-up" className={style["SolutionsSection2-Column-Container"]}>
                        <div id={style["SolutionsCard"]}>
                            <VectorContainer width={"75px"} height={"42px"} marginTop={"22px"} marginLeft={"44px"}>
                                <Image src={require("../../../src/Big-Sight/Solutions/Section2/No12.png")} />
                            </VectorContainer>
                            <div className={style["SolutionsCard-Text-Container-Parent"]}>
                                <div className={style["SolutionsCard-Text-Container"]}>
                                    <h1 className={style["SolutionsCard-Text-Title"]}>Behavior Scoring</h1>
                                    <p className={style["SolutionsCard-Text-Desc"]}>
                                        {t("solution:Section2-Card12-N1")}
                                        <i> {t("solution:Section2-Card12-I1")} </i>
                                        {t("solution:Section2-Card12-N2")}
                                    </p>
                                </div>
                            </div>
                        </div>{" "}
                    </Col>
                    <Col xl={4} md={6} data-aos="fade-up" className={style["SolutionsSection2-Column-Container"]}>
                        <div id={style["SolutionsCard"]}>
                            <VectorContainer width={"59px"} height={"59px"} marginTop={"31px"} marginLeft={"30px"}>
                                <Image src={require("../../../src/Big-Sight/Solutions/Section2/No13.png")} />
                            </VectorContainer>
                            <div className={style["SolutionsCard-Text-Container-Parent"]}>
                                <div className={style["SolutionsCard-Text-Container"]}>
                                    <h1 className={style["SolutionsCard-Text-Title"]}>Customer Segmented</h1>
                                    <p className={style["SolutionsCard-Text-Desc"]}>{t("solution:Section2-Card13-N1")}</p>
                                </div>
                            </div>
                        </div>{" "}
                    </Col>
                    <Col xl={4} md={6} data-aos="fade-up" className={style["SolutionsSection2-Column-Container"]}>
                        <div id={style["SolutionsCard"]}>
                            <VectorContainer width={"59px"} height={"59px"} marginTop={"34px"} marginLeft={"37px"}>
                                <Image src={require("../../../src/Big-Sight/Solutions/Section2/No14.png")} />
                            </VectorContainer>
                            <div className={style["SolutionsCard-Text-Container-Parent"]}>
                                <div className={style["SolutionsCard-Text-Container"]}>
                                    <h1 className={style["SolutionsCard-Text-Title"]}>Insurance Analytics</h1>
                                    <p className={style["SolutionsCard-Text-Desc"]}>
                                        {t("solution:Section2-Card14-N1")}
                                        <i> {t("solution:Section2-Card14-I1")} </i>
                                        {t("solution:Section2-Card14-N2")}
                                    </p>
                                </div>
                            </div>
                        </div>{" "}
                    </Col>
                    <Col xl={4} md={6} data-aos="fade-up" className={`${style["SolutionsSection2-Column-Container"]} ${style["SolutionsSection2-Column-Container-Khusus"]}`}>
                        <div className={style["SolutionsSection2-Column-Vector"]}>
                            <Image src={require("../../../src/Big-Sight/Solutions/Vector-Ruang.png")} />
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default withTranslation(SolutionsSection2);
