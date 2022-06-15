import styles from "./BeforeFooterBighSight.module.css";
import { Row, Col } from "react-bootstrap";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faLinkedin, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function BeforeFooter() {
    return (
        <div>
            <div id={styles["BeforeFooter"]}>
                <Row className={styles["BeforeFooter-Content-Container"]}>
                    <Col md={4}>
                        <Row>
                            <Col md={12}>
                                <div className={styles["BeforeFooter-Left-Row1"]} data-aos="fade-right" data-aos-delay="0">
                                    <div className={styles["BeforeFooter-Logo"]}>
                                        <Image alt="Logo Big Sight" src={require("../../src/Big-Sight/LogoBigSight.png")} />
                                    </div>
                                </div>
                            </Col>
                            <Col md={12}>
                                <h1 className={styles["BeforeFooter-Left-Title"]} data-aos="fade-right" data-aos-delay="100">
                                    Tribe Big Data and smart platform <br /> business & technology <br /> PT Telkom Indonesia (persero) tbk
                                </h1>
                            </Col>
                            <Col md={12} sm={6} xs={12} className={styles["BeforeFooter-Left-Desc-Bold-Container"]}>
                                <h1 className={styles["BeforeFooter-Left-Desc-Bold"]} data-aos="fade-right" data-aos-delay="200">
                                    Jl. Sisingamangaraja No.4 RT.2/RW.1
                                </h1>
                            </Col>
                            <Col md={12} sm={6} xs={12}>
                                <h1 className={styles["BeforeFooter-Left-Desc"]} data-aos="fade-right" data-aos-delay="300">
                                    Kec. Kebayoran Baru, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12110
                                </h1>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={4} className={styles["BeforeFooter-Middle-Container"]}>
                        <div className={styles["BeforeFooter-Middle-Sosmed-Container"]} data-aos="fade-up" data-aos-delay="100">
                            <Row>
                                <Col md={12} sm={6} className={styles["BeforeFooter-Middle-Each-Sosmed-Container"]}>
                                    <a href="https://www.instagram.com/big.sight/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                                        <div className={styles["BeforeFooter-Middle-Sosmed-Container-Section"]}>
                                            <FontAwesomeIcon icon={faInstagram} className={styles["BeforeFooter-Middle-Sosmed-Logo"]} />
                                            <p className={styles["BeforeFooter-Middle-Sosmed-Desc"]}>big.sight</p>
                                        </div>
                                    </a>
                                </Col>
                                <Col md={12} sm={6} className={styles["BeforeFooter-Middle-Each-Sosmed-Container"]}>
                                    <a href="https://www.instagram.com/big.sight/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                                        <div className={styles["BeforeFooter-Middle-Sosmed-Container-Section"]}>
                                            <FontAwesomeIcon icon={faFacebookSquare} className={styles["BeforeFooter-Middle-Sosmed-Logo"]} />
                                            <p className={styles["BeforeFooter-Middle-Sosmed-Desc"]}>Big Data & Smart Platform</p>
                                        </div>
                                    </a>
                                </Col>
                                <Col md={12} sm={6} className={styles["BeforeFooter-Middle-Each-Sosmed-Container"]}>
                                    <a href="https://www.linkedin.com/company/big-sight/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                                        <div className={styles["BeforeFooter-Middle-Sosmed-Container-Section"]}>
                                            <FontAwesomeIcon icon={faLinkedin} className={styles["BeforeFooter-Middle-Sosmed-Logo"]} />
                                            <p className={styles["BeforeFooter-Middle-Sosmed-Desc"]}>Big Sight </p>
                                        </div>
                                    </a>
                                </Col>
                                <Col md={12} sm={6} className={styles["BeforeFooter-Middle-Each-Sosmed-Container"]}>
                                    <a href="https://twitter.com/bigsight_id" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                                        <div className={styles["BeforeFooter-Middle-Sosmed-Container-Section"]}>
                                            <FontAwesomeIcon icon={faTwitter} className={styles["BeforeFooter-Middle-Sosmed-Logo"]} />
                                            <p className={`${styles["BeforeFooter-Middle-Sosmed-Desc"]} ${styles["BeforeFooter-Middle-Sosmed-Desc-Twitter"]}`}>bigsight_id</p>
                                        </div>
                                    </a>
                                </Col>
                                <Col md={12} sm={6} className={styles["BeforeFooter-Middle-Each-Sosmed-Container"]}>
                                    <a href="mailto:info@bigsight.id" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                                        <div className={styles["BeforeFooter-Middle-Sosmed-Container-Section"]}>
                                            <FontAwesomeIcon icon={faEnvelope} className={styles["BeforeFooter-Middle-Sosmed-Logo"]} />
                                            <p className={styles["BeforeFooter-Middle-Sosmed-Desc"]}>info@bigsight.id</p>
                                        </div>
                                    </a>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className={styles["BeforeFooter-Right-Logo-Wrapper"]} data-aos="fade-left" data-aos-delay="100">
                            <Image alt="Logo Right" src={require("../../src/Big-Sight/LogoRight.png")} />
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}
