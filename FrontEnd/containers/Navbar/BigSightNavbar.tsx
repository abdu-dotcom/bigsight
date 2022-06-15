import styles from "./BigSightNavbar.module.css";
import { Navbar, Container, Nav, NavDropdown, Row, Col } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import LogoBigSight from "../../src/Big-Sight/LogoBigSight.png";
import { NavbarButton } from "../../components/Button/Navbar/NavbarButton.styled";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";

export default function BigSightNavbar() {
    const router = useRouter();
    const { locale } = useRouter();
    let { t } = useTranslation();

    return (
        <div data-aos="fade-down" data-aos-duration="1000">
            <Navbar className={styles.NavbarBigSight} expand="lg">
                <Container>
                    <Link href="/" passHref>
                        <Navbar.Brand className={styles.BigSightNavbarLogo}>
                            <Image alt="Logo Big Sight" src={LogoBigSight} />
                        </Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="ms-auto my-2 my-lg-0" style={{ maxHeight: "400px" }} navbarScroll>
                            <NavDropdown
                                className={`${styles.BigSightNavbarMenuMarginLeft} ${styles.DropdownProduct}`}
                                title={<span className={`${styles.BigSightNavbarMenuDropdown}`}>{t("common:Product")}</span>}
                                id="navbarScrollingDropdown"
                            >
                                <div className={styles["dropdown-menu-width"]}>
                                    <Row className={`${styles.rowDropDown} container`}>
                                        <Col xs={7}>
                                            <a href="https://picaso.id/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                                                <div className={styles["BigSightDropDown-Menu1"]}>
                                                    <p>Picaso</p>
                                                </div>{" "}
                                            </a>
                                        </Col>
                                        <Col>
                                            <a href="https://bigbox.co.id/products/big-view" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                                                <div className={styles["BigSightDropDown-Menu1"]}>
                                                    <p>Big View</p>
                                                </div>
                                            </a>
                                        </Col>
                                    </Row>
                                    <Row className={`${styles.rowDropDown} container`}>
                                        <Col xs={7}>
                                            <a href="https://www.smarteye.id/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                                                <div className={styles["BigSightDropDown-Menu1"]}>
                                                    <p>Smarteye</p>
                                                </div>
                                            </a>
                                        </Col>
                                        <Col>
                                            <a href="https://bigbox.co.id/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                                                <div className={styles["BigSightDropDown-Menu1"]}>
                                                    <p>Big Box</p>
                                                </div>
                                            </a>
                                        </Col>
                                    </Row>
                                    <Row className={`${styles.rowDropDown} container`}>
                                        <Col xs={7}>
                                            <a href="https://legalanalytics.id/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                                                <div className={styles["BigSightDropDown-Menu1"]}>
                                                    <p>Legal Analytics</p>
                                                </div>
                                            </a>
                                        </Col>
                                        <Col>
                                            <a href="http://bigscore.id/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                                                <div className={styles["BigSightDropDown-Menu1"]}>
                                                    <p>Big Score</p>
                                                </div>
                                            </a>
                                        </Col>
                                    </Row>
                                </div>
                            </NavDropdown>
                            <Link href="/solutions" passHref>
                                <Nav.Link className={styles.BigSightNavbarMenuMarginLeft}>
                                    <p className={router.pathname === "/solutions" ? styles["BigSightNavbarMenu-Active"] : styles.BigSightNavbarMenu}>{t("common:Solutions")}</p>
                                </Nav.Link>
                            </Link>
                            <Link href="/our-client" passHref>
                                <Nav.Link className={styles.BigSightNavbarMenuMarginLeft}>
                                    <p className={router.pathname === "/our-client" ? styles["BigSightNavbarMenu-Active"] : styles.BigSightNavbarMenu}>{t("common:OurClient")}</p>
                                </Nav.Link>
                            </Link>
                            <NavDropdown className={styles.BigSightNavbarMenuMarginLeft} title={<span className={styles.BigSightNavbarMenuDropdown}>{t("common:Company")}</span>} id="navbarScrollingDropdown">
                                <Link href="/about-us" passHref>
                                    <NavDropdown.Item className={styles["dropdown-item"]}>
                                        <p className={styles["BigSightDropDown-Menu1"]}>{t("common:AboutUs")}</p>{" "}
                                    </NavDropdown.Item>
                                </Link>
                                <Link href="/update" passHref>
                                    <NavDropdown.Item className={styles["dropdown-item"]}>
                                        {" "}
                                        <p className={router.pathname === "/update" ? styles["BigSightDropDown-Menu1-Active"] : styles["BigSightDropDown-Menu1"]}>{t("common:Update")}</p>{" "}
                                    </NavDropdown.Item>
                                </Link>{" "}
                            </NavDropdown>
                            <Link href="/faq" passHref>
                                <Nav.Link className={styles.BigSightNavbarMenuMarginLeft}>
                                    <p className={router.pathname === "/faq" ? styles["BigSightNavbarMenu-Active"] : styles.BigSightNavbarMenu}>faq</p>
                                </Nav.Link>
                            </Link>
                            <Row className={styles["NavbarButton-Container"]}>
                                <Col>
                                    <div className={styles["Button-Container"]}>
                                        <Link passHref href={"/contact-us"}>
                                            <NavbarButton backgroundColor={"#EE2E24"} border={"1px solid #EE2E24"} color={"white"} hoverBackgroundColor={"white"} hoverBorder={"1px solid #EE2E24"} hoverColor={"#EE2E24"}>
                                                {t("common:ContactUs")}
                                            </NavbarButton>
                                        </Link>
                                    </div>
                                </Col>
                                <Col>
                                    <div className={styles["NavbarButton-Dropdown-Container"]}>
                                        <NavDropdown
                                            title={
                                                <span
                                                    style={{
                                                        color: "#ee2e24",
                                                    }}
                                                    className={styles.BigSightNavbarMenuDropdown}
                                                >
                                                    {locale}
                                                </span>
                                            }
                                            id="navbarScrollingDropdown"
                                        >
                                            <Link href={router.asPath} locale={"id"} passHref>
                                                <NavDropdown.Item className={styles["dropdown-item"]}>
                                                    <p className={styles["BigSightDropDown-Menu1"]}>ID</p>{" "}
                                                </NavDropdown.Item>
                                            </Link>
                                            <Link href={router.asPath} locale={"en"} passHref>
                                                <NavDropdown.Item className={styles["dropdown-item"]}>
                                                    <p className={styles["BigSightDropDown-Menu1"]}>EN</p>{" "}
                                                </NavDropdown.Item>
                                            </Link>
                                        </NavDropdown>
                                    </div>
                                </Col>
                            </Row>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>{" "}
        </div>
    );
}
