import { Col, Container, Row, Accordion, Card, useAccordionButton, Button } from "react-bootstrap";
import styles from "./Faq-Section1.module.css";
import React, { Component } from "react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import withTranslation from "next-translate/withTranslation";

function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey);

    return (
        <button type="button" className={styles["Faq-Section1-Accordian-Question-Button"]} onClick={decoratedOnClick}>
            {children}
        </button>
    );
}

class FaqSection1 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            faq1: false,
            faq2: false,
            faq3: false,
            faq4: false,
            faq5: false,
            faq6: false,
            faq7: false,
            faq8: false,
            faq9: false,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = (e) => {
        console.log(e.target.innerHTML);
        if (e.target.innerHTML === "1. Apa itu Big Sight?" || e.target.innerHTML === "1. What is Big Sight?") {
            this.setState({
                faq1: !this.state.faq1,
            });
            console.log(this.state.statusFaq);
        } else if (e.target.innerHTML === "2. Apa saja Produk dan Solusi dari BigSight?" || e.target.innerHTML === "2. What are the products and solutions offered from big sight?") {
            this.setState({
                faq2: !this.state.faq2,
            });
            console.log(this.state.statusFaq);
        } else if (e.target.innerHTML === "3. Bagaimana cara berlangganan atau bekerjasama dengan BigSight?" || e.target.innerHTML === "3. How to subscribe or collaborate with Big Sight?") {
            this.setState({
                faq3: !this.state.faq3,
            });
        } else if (e.target.innerHTML === "4. Berapa Harga untuk berlangganan?" || e.target.innerHTML === "4. How much Big Sight subscription fee?") {
            this.setState({
                faq4: !this.state.faq4,
            });
        } else if (e.target.innerHTML === "5. Apa Kelebihan dari produk dan solusi dari BigSight?" || e.target.innerHTML === "5. What are the advantages of Big Sight's products and solutions?") {
            this.setState({
                faq5: !this.state.faq5,
            });
            console.log(this.state.statusFaq);
        } else if (
            e.target.innerHTML === "6. Bagaimana jenis arsitektur dalam mengimplementasikan Produk dan Solusi dari BigSight?" ||
            e.target.innerHTML === "6. What is the type of architecture used in implementing Big Sight Products and Solutions?"
        ) {
            this.setState({
                faq6: !this.state.faq6,
            });
        } else if (e.target.innerHTML === "7. Apakah user dapat mengajukan kustomisasi produk atau layanan?" || e.target.innerHTML === "7. Is it possible for users to customize the products or services?") {
            this.setState({
                faq7: !this.state.faq7,
            });
        } else if (
            e.target.innerHTML === "8. Apakah user dapat mencoba Produk dan Layanan dari BigSight melalui Demo atau Free Trial?" ||
            e.target.innerHTML === "8. Are users enable to try Big Sight’s Products and Services by Demo or Free Trial?"
        ) {
            this.setState({
                faq8: !this.state.faq8,
            });
        }
    };

    render() {
        const { t } = this.props.i18n;
        return (
            <div id={styles["Faq-Section1"]}>
                <Container>
                    <div className={styles["Faq-Section1-Content-Container"]}>
                        <Row>
                            <Col className={styles["Faq-Section1-Left-Column"]} lg={3}>
                                <h1 className={styles["Faq-Section1-Title"]}>{t("faq:title")}</h1>
                            </Col>
                            <Col className={styles["Faq-Section1-Right-Column"]} lg={9}>
                                <Accordion defaultActiveKey="11" alwaysOpen>
                                    <div data-aos="fade-left">
                                        <Card className={styles["Faq-Section1-Accordian-Row-Container"]}>
                                            <Card.Header className={styles["Faq-Section1-Accordian-Question-Container"]}>
                                                <div onClick={this.handleClick}>
                                                    <CustomToggle eventKey="0">
                                                        <Row>
                                                            <Col sm={11} xs={11}>
                                                                {t("faq:Section1-Question1-Question")}
                                                            </Col>
                                                            <Col sm={1} xs={1}>
                                                                <FontAwesomeIcon className={this.state.faq1 ? styles["Faq-Section1-Accordian-Indicator"] : styles["Faq-Section1-Accordian-Indicator-Normal"]} icon={faPlus} />
                                                            </Col>
                                                        </Row>
                                                    </CustomToggle>
                                                </div>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="0">
                                                <Card.Body>
                                                    <p className={styles["Faq-Section1-Accordian-Answer"]}>{t("faq:Section1-Question1-Answer")}</p>
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                    </div>

                                    <div data-aos="fade-left" data-aos-delay="100">
                                        <Card className={styles["Faq-Section1-Accordian-Row-Container"]}>
                                            <Card.Header className={styles["Faq-Section1-Accordian-Question-Container"]}>
                                                <div onClick={this.handleClick}>
                                                    <CustomToggle eventKey="1">
                                                        <Row>
                                                            <Col sm={11} xs={11}>
                                                                {t("faq:Section1-Question2-Question")}
                                                            </Col>
                                                            <Col sm={1} xs={1}>
                                                                <FontAwesomeIcon icon={faPlus} className={this.state.faq2 ? styles["Faq-Section1-Accordian-Indicator"] : styles["Faq-Section1-Accordian-Indicator-Normal"]} />
                                                            </Col>
                                                        </Row>
                                                    </CustomToggle>
                                                </div>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="1">
                                                <Card.Body>
                                                    <p className={styles["Faq-Section1-Accordian-Answer"]}>{t("faq:Section1-Question2-Answer")}</p>
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                    </div>

                                    <div data-aos="fade-left" data-aos-delay="200">
                                        <Card className={styles["Faq-Section1-Accordian-Row-Container"]}>
                                            <Card.Header className={styles["Faq-Section1-Accordian-Question-Container"]}>
                                                <div onClick={this.handleClick}>
                                                    <CustomToggle eventKey="2">
                                                        <Row>
                                                            <Col sm={11} xs={11}>
                                                                {t("faq:Section1-Question3-Question")}
                                                            </Col>
                                                            <Col sm={1} xs={1}>
                                                                <FontAwesomeIcon className={this.state.faq3 ? styles["Faq-Section1-Accordian-Indicator"] : styles["Faq-Section1-Accordian-Indicator-Normal"]} icon={faPlus} />
                                                            </Col>
                                                        </Row>
                                                    </CustomToggle>
                                                </div>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="2">
                                                <Card.Body>
                                                    <p className={styles["Faq-Section1-Accordian-Answer"]}>
                                                        {t("faq:Section1-Question3-Answer")}
                                                        <Link href="/contact-us" passhref>
                                                            <a className={styles["Faq-Section1-Accordian-Link"]}>{t("faq:Section1-Question3-Answer-Link")}</a>
                                                        </Link>
                                                    </p>
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                    </div>

                                    <div data-aos="fade-left" data-aos-delay="300">
                                        <Card className={styles["Faq-Section1-Accordian-Row-Container"]}>
                                            <Card.Header className={styles["Faq-Section1-Accordian-Question-Container"]}>
                                                <div onClick={this.handleClick}>
                                                    <CustomToggle eventKey="3">
                                                        <Row>
                                                            <Col sm={11} xs={11}>
                                                                {t("faq:Section1-Question4-Question")}
                                                            </Col>
                                                            <Col sm={1} xs={1}>
                                                                <FontAwesomeIcon icon={faPlus} className={this.state.faq4 ? styles["Faq-Section1-Accordian-Indicator"] : styles["Faq-Section1-Accordian-Indicator-Normal"]} />
                                                            </Col>
                                                        </Row>
                                                    </CustomToggle>
                                                </div>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="3">
                                                <Card.Body>
                                                    <p className={styles["Faq-Section1-Accordian-Answer"]}>
                                                        {t("faq:Section1-Question4-Answer")}
                                                        <Link href="/contact-us" passhref>
                                                            <a className={styles["Faq-Section1-Accordian-Link"]}>{t("faq:Section1-Question4-Answer-Link")}</a>
                                                        </Link>
                                                    </p>
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                    </div>

                                    <div data-aos="fade-left" data-aos-delay="400">
                                        <Card className={styles["Faq-Section1-Accordian-Row-Container"]}>
                                            <Card.Header className={styles["Faq-Section1-Accordian-Question-Container"]}>
                                                <div onClick={this.handleClick}>
                                                    <CustomToggle eventKey="4">
                                                        <Row>
                                                            <Col sm={11} xs={11}>
                                                                {t("faq:Section1-Question5-Question")}
                                                            </Col>
                                                            <Col sm={1} xs={1}>
                                                                <FontAwesomeIcon className={this.state.faq5 ? styles["Faq-Section1-Accordian-Indicator"] : styles["Faq-Section1-Accordian-Indicator-Normal"]} icon={faPlus} />
                                                            </Col>
                                                        </Row>
                                                    </CustomToggle>
                                                </div>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="4">
                                                <Card.Body>
                                                    <div className={styles["Faq-Section1-Accordian-Answer"]}>
                                                        <ul>
                                                            <li>{t("faq:Section1-Question5-Answer1")}</li>
                                                            <li>{t("faq:Section1-Question5-Answer2")}</li>
                                                            <li>{t("faq:Section1-Question5-Answer3")}</li>
                                                            <li>{t("faq:Section1-Question5-Answer4")}</li>
                                                        </ul>
                                                    </div>
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                    </div>

                                    <div data-aos="fade-left" data-aos-delay="0">
                                        <Card className={styles["Faq-Section1-Accordian-Row-Container"]}>
                                            <Card.Header className={styles["Faq-Section1-Accordian-Question-Container"]}>
                                                <div onClick={this.handleClick}>
                                                    <CustomToggle eventKey="5">
                                                        <Row>
                                                            <Col sm={11} xs={11}>
                                                                {t("faq:Section1-Question6-Question")}
                                                            </Col>
                                                            <Col sm={1} xs={1}>
                                                                <FontAwesomeIcon className={this.state.faq6 ? styles["Faq-Section1-Accordian-Indicator"] : styles["Faq-Section1-Accordian-Indicator-Normal"]} icon={faPlus} />
                                                            </Col>
                                                        </Row>
                                                    </CustomToggle>
                                                </div>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="5">
                                                <Card.Body>
                                                    <p className={styles["Faq-Section1-Accordian-Answer"]}>
                                                        {t("faq:Section1-Question6-Answer")}
                                                        <Link href="/contact-us" passhref>
                                                            <a className={styles["Faq-Section1-Accordian-Link"]}>{t("faq:Section1-Question6-Answer-Link")}</a>
                                                        </Link>
                                                    </p>
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                    </div>

                                    <div data-aos="fade-left" data-aos-delay="0">
                                        <Card className={styles["Faq-Section1-Accordian-Row-Container"]}>
                                            <Card.Header className={styles["Faq-Section1-Accordian-Question-Container"]}>
                                                <div onClick={this.handleClick}>
                                                    <CustomToggle eventKey="6">
                                                        <Row>
                                                            <Col sm={11} xs={11}>
                                                                {t("faq:Section1-Question7-Question")}
                                                            </Col>
                                                            <Col sm={1} xs={1}>
                                                                <FontAwesomeIcon className={this.state.faq7 ? styles["Faq-Section1-Accordian-Indicator"] : styles["Faq-Section1-Accordian-Indicator-Normal"]} icon={faPlus} />
                                                            </Col>
                                                        </Row>
                                                    </CustomToggle>
                                                </div>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="6">
                                                <Card.Body>
                                                    <p className={styles["Faq-Section1-Accordian-Answer"]}>{t("faq:Section1-Question7-Answer")}</p>
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                    </div>

                                    <div data-aos="fade-left" data-aos-delay="0">
                                        <Card className={styles["Faq-Section1-Accordian-Row-Container"]}>
                                            <Card.Header className={styles["Faq-Section1-Accordian-Question-Container"]}>
                                                <div onClick={this.handleClick}>
                                                    <CustomToggle eventKey="7">
                                                        <Row>
                                                            <Col sm={11} xs={11}>
                                                                {t("faq:Section1-Question8-Question")}
                                                            </Col>
                                                            <Col sm={1} xs={1}>
                                                                <FontAwesomeIcon className={this.state.faq8 ? styles["Faq-Section1-Accordian-Indicator"] : styles["Faq-Section1-Accordian-Indicator-Normal"]} icon={faPlus} />
                                                            </Col>
                                                        </Row>
                                                    </CustomToggle>
                                                </div>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="7">
                                                <Card.Body>
                                                    <p className={styles["Faq-Section1-Accordian-Answer"]}>
                                                        {t("faq:Section1-Question8-Answer1")}
                                                        <Link href="/contact-us" passhref>
                                                            <a className={styles["Faq-Section1-Accordian-Link"]}>{t("faq:Section1-Question8-Answer-Link")}</a>
                                                        </Link>
                                                        {t("faq:Section1-Question8-Answer2")}
                                                    </p>
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                    </div>
                                </Accordion>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        );
    }
}

export default withTranslation(FaqSection1);
