import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import styles from "./ContactUs-Section1.module.css";
import withTranslation from "next-translate/withTranslation";

class ContactUsSection1 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
        };
    }

    render() {
        const { t } = this.props.i18n;

        return (
            <div id={styles["ContactUs-Section1"]}>
                <div data-aos="fade-up" data-aos-delay="0">
                    <div className={styles["ContactUs-Section1-Form-Container"]}>
                        <Row>
                            <Col lg={5} className={styles["ContactUs-Section1-Left-Column"]}>
                                <div className={styles["ContactUs-Section1-Left-Parent-Content-Container"]}>
                                    <div className={styles["ContactUs-Section1-Left-Container"]}>
                                        <div className={styles["ContactUs-Section1-Left-Content-Container"]}>
                                            <h1 className={styles["ContactUs-Section1-Left-Title"]}>{t("contact-us:ContactUs-Title")}</h1>
                                            <h1 className={styles["ContactUs-Section1-Left-Desc"]}> {t("contact-us:ContactUs-Desc")}</h1>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={7} className={styles["ContactUs-Section1-Form-Content-Right-Container"]}>
                                <div className={styles["ContactUs-Section1-Right-Parent-Content-Container"]}>
                                    <form className={styles["ContactUs-Section1-Right-Form-Container"]} action="mailto:someone@example.com" method="post" encType="text/plain">
                                        <div data-aos="fade-left" data-aos-delay="100">
                                            <Row>
                                                <Col className={styles["ContactUs-Section1-Right-InputGroup"]}>
                                                    <label className={styles["ContactUs-Section1-Right-Label"]} htmlFor="">
                                                        {t("contact-us:ContactUs-Form-Name")}
                                                    </label>
                                                    <br />
                                                    <input required className={styles["ContactUs-Section1-Right-Text-Input"]} type="text" name="Nama Lengkap" />
                                                </Col>
                                                <Col className={styles["ContactUs-Section1-Right-InputGroup"]}>
                                                    <label className={styles["ContactUs-Section1-Right-Label"]} htmlFor="">
                                                        {t("contact-us:ContactUs-Form-Company")}
                                                    </label>
                                                    <br />
                                                    <input required className={styles["ContactUs-Section1-Right-Text-Input"]} type="text" name="Perusahaan" />
                                                </Col>
                                            </Row>
                                        </div>
                                        <div data-aos="fade-left" data-aos-delay="100">
                                            <Row>
                                                <Col className={styles["ContactUs-Section1-Right-InputGroup"]}>
                                                    <label className={styles["ContactUs-Section1-Right-Label"]} htmlFor="">
                                                        {t("contact-us:ContactUs-Form-E-Mail")}
                                                    </label>
                                                    <br />
                                                    <input required className={styles["ContactUs-Section1-Right-Text-Input"]} type="text" name="E-Mail" />
                                                </Col>
                                                <Col className={styles["ContactUs-Section1-Right-InputGroup"]}>
                                                    <label className={styles["ContactUs-Section1-Right-Label"]} htmlFor="">
                                                        {t("contact-us:ContactUs-Form-Telephone")}
                                                    </label>
                                                    <br />
                                                    <input required className={styles["ContactUs-Section1-Right-Text-Input"]} type="text" name="Telephone" />
                                                </Col>
                                            </Row>
                                        </div>
                                        <div data-aos="fade-left" data-aos-delay="200">
                                            <Row>
                                                <p className={`${styles["ContactUs-Section1-Right-Label-RadioGroup"]} ${styles["ContactUs-Section1-Right-InputGroup"]}`}> {t("contact-us:ContactUs-Form-ProductTypeDesc")}</p>
                                                <Row>
                                                    <Col>
                                                        <label className={styles["ContactUs-Section1-RadioButton-Container"]}>
                                                            <span className={styles["ContactUs-Section1-RadioButton-Container-ProductName"]}>Legal Analytics</span>
                                                            <input type="radio" name="Product" value="Legal Analytics" required />
                                                            <span className={styles["checkmark"]}>
                                                                <FontAwesomeIcon icon={faCheck} />
                                                            </span>
                                                        </label>
                                                    </Col>
                                                    <Col>
                                                        <label className={styles["ContactUs-Section1-RadioButton-Container"]}>
                                                            <span className={styles["ContactUs-Section1-RadioButton-Container-ProductName"]}>Big View</span>
                                                            <input type="radio" name="Product" value="Big View" />
                                                            <span className={styles["checkmark"]}>
                                                                <FontAwesomeIcon icon={faCheck} />
                                                            </span>
                                                        </label>
                                                    </Col>
                                                    <Col>
                                                        <label className={styles["ContactUs-Section1-RadioButton-Container"]}>
                                                            <span className={styles["ContactUs-Section1-RadioButton-Container-ProductName"]}>Picaso</span>
                                                            <input type="radio" name="Product" value="Picaso" />
                                                            <span className={styles["checkmark"]}>
                                                                <FontAwesomeIcon icon={faCheck} />
                                                            </span>
                                                        </label>
                                                    </Col>
                                                    <Col>
                                                        <label className={styles["ContactUs-Section1-RadioButton-Container"]}>
                                                            <span className={styles["ContactUs-Section1-RadioButton-Container-ProductName"]}>SmartEye.id</span>
                                                            <input type="radio" name="Product" value="Picaso" />
                                                            <span className={styles["checkmark"]}>
                                                                <FontAwesomeIcon icon={faCheck} />
                                                            </span>
                                                        </label>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col md={3}>
                                                        <label className={styles["ContactUs-Section1-RadioButton-Container"]}>
                                                            <span className={styles["ContactUs-Section1-RadioButton-Container-ProductName"]}>Big Score</span>
                                                            <input type="radio" name="Product" value="Smarteye.id" />
                                                            <span className={styles["checkmark"]}>
                                                                <FontAwesomeIcon icon={faCheck} />
                                                            </span>
                                                        </label>
                                                    </Col>
                                                    <Col md={3}>
                                                        <label className={styles["ContactUs-Section1-RadioButton-Container"]}>
                                                            <span className={styles["ContactUs-Section1-RadioButton-Container-ProductName"]}>Big Box</span>
                                                            <input type="radio" name="Product" value="Big Score" />
                                                            <span className={styles["checkmark"]}>
                                                                <FontAwesomeIcon icon={faCheck} />
                                                            </span>
                                                        </label>
                                                    </Col>
                                                    <Col md={3}>
                                                        <label className={styles["ContactUs-Section1-RadioButton-Container"]}>
                                                            <span className={styles["ContactUs-Section1-RadioButton-Container-ProductName"]}>Other Product</span>
                                                            <input type="radio" name="Product" value="Big Box" />
                                                            <span className={styles["checkmark"]}>
                                                                <FontAwesomeIcon icon={faCheck} />
                                                            </span>
                                                        </label>
                                                    </Col>
                                                </Row>
                                            </Row>
                                        </div>
                                        <div data-aos="fade-left" data-aos-delay="400">
                                            <label className={`${styles["ContactUs-Section1-Right-Label"]} ${styles["ContactUs-Section1-Right-Message-Label"]}`} htmlFor="">
                                                {t("contact-us:ContactUs-Form-Message")}
                                            </label>
                                            <br />
                                            <textarea required className={styles["ContactUs-Section1-Right-TextArea-Input"]} type="text" name="Pesan" cols="30" rows="10" />

                                            <div className={styles["ContactUs-Section1-Right-Submit-Button-Container"]}>
                                                <button className={styles["ContactUs-Section1-Right-Submit-Button"]} type="submit">
                                                    {t("contact-us:ContactUs-Form-Button")}
                                                </button>
                                            </div>
                                        </div>
                                    </form>{" "}
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div data-aos="fade-left" data-aos-delay="0"></div>
                </div>
            </div>
        );
    }
}

export default withTranslation(ContactUsSection1);
