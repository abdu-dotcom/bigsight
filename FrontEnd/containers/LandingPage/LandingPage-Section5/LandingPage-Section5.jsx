import React, { Component } from "react";
import { Col, Row, SSRProvider } from "react-bootstrap";
import CardBigSightLandingPage from "../../../components/Card/LandingPage/CardBigSightLandingPage";
import styles from "./LandingPage-Section5.module.css";
import withTranslation from "next-translate/withTranslation";

class LandingPageSection5 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            width: "",
        };
    }
    componentDidMount() {
        this.setState({
            width: window.innerWidth,
        });
    }
    render() {
        const { t } = this.props.i18n;

        return (
            <div id={styles["LandingPage-Section5"]}>
                <SSRProvider>
                    <h1 className={styles["LandingPage-Section5-Title"]}>{t("landingpage:Section5-Title")}</h1>
                    <Row className={styles["LandingPage-Section5-AllCard-Container"]}>
                        <Col lg={4} md={6} sm={6}>
                            <div className={styles["LandingPage-Section5-ColumnContainer"]}>
                                <div data-aos={this.state.width > 992 ? "fade-right" : this.state.width > 576 ? "fade-right" : "fade-up"} data-aos-offset="100">
                                    <CardBigSightLandingPage
                                        altImg={"Logo Legal Analytics"}
                                        logoImg={require("../../../src/Big-Sight/LandingPage/Section5-Legal-Analytic.png")}
                                        marginTopDesc={"49px"}
                                        marginTop={"37px"}
                                        marginLeft={"42px"}
                                        width={"119px"}
                                        height={"54px"}
                                        productName={`Legal Analytics `}
                                        productDesc={`${t("landingpage:Section5-Legal-Desc")}`}
                                        linkProduct={`https://legalanalytics.id/`}
                                        button={`${t("landingpage:Section5-Button")}`}
                                    />
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={6}>
                            <div className={styles["LandingPage-Section5-ColumnContainer"]}>
                                <div data-aos={this.state.width > 992 ? "fade-up" : this.state.width > 576 ? "fade-left" : "fade-up"} data-aos-offset="100">
                                    <CardBigSightLandingPage
                                        altImg={"Logo Big View"}
                                        logoImg={require("../../../src/Big-Sight/LandingPage/Section5-Big-View.png")}
                                        marginTopDesc={"38px"}
                                        marginTop={"26px"}
                                        marginLeft={"11px"}
                                        width={"223px"}
                                        height={"76px"}
                                        productName={`Big View `}
                                        productDesc={`${t("landingpage:Section5-BigView-Desc")}`}
                                        linkProduct={`https://bigbox.co.id/products/big-view`}
                                        button={`${t("landingpage:Section5-Button")}`}
                                    />
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={6}>
                            <div className={styles["LandingPage-Section5-ColumnContainer"]}>
                                <div data-aos={this.state.width > 992 ? "fade-left" : this.state.width > 576 ? "fade-right" : "fade-up"} data-aos-offset="100">
                                    <CardBigSightLandingPage
                                        altImg={"Logo Picaso"}
                                        logoImg={require("../../../src/Big-Sight/LandingPage/Section5-Picaso.png")}
                                        marginTopDesc={"26px"}
                                        marginTop={"27px"}
                                        marginLeft={""}
                                        width={"233px"}
                                        height={"78px"}
                                        productName={`Picaso `}
                                        productDesc={`${t("landingpage:Section5-Picaso-Desc")}`}
                                        linkProduct={`https://picaso.id/`}
                                        button={`${t("landingpage:Section5-Button")}`}
                                    />
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={6}>
                            <div className={styles["LandingPage-Section5-ColumnContainer"]}>
                                <div data-aos={this.state.width > 992 ? "fade-right" : this.state.width > 576 ? "fade-left" : "fade-up"} data-aos-offset="100">
                                    <CardBigSightLandingPage
                                        altImg={"Logo Big Score"}
                                        logoImg={require("../../../src/Big-Sight/LandingPage/Section5-Big-Score.png")}
                                        marginTopDesc={"21px"}
                                        marginTop={"55px"}
                                        marginLeft={"44px"}
                                        width={"169px"}
                                        height={"39px"}
                                        productName={`Big Score `}
                                        productDesc={`${t("landingpage:Section5-BigScore-Desc")}`}
                                        linkProduct={`http://bigscore.id/`}
                                        button={`${t("landingpage:Section5-Button")}`}
                                    />
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={6}>
                            <div className={styles["LandingPage-Section5-ColumnContainer"]}>
                                <div data-aos={this.state.width > 992 ? "fade-up" : this.state.width > 576 ? "fade-right" : "fade-up"} data-aos-offset="100">
                                    <CardBigSightLandingPage
                                        altImg={"Logo Big Box"}
                                        logoImg={require("../../../src/Big-Sight/LandingPage/Section5-Big-Box.png")}
                                        marginTopDesc={"25px"}
                                        marginTop={"43px"}
                                        marginLeft={"42px"}
                                        width={"144px"}
                                        height={"46px"}
                                        productName={`Big Box `}
                                        productDesc={`${t("landingpage:Section5-BigBox-Desc")}`}
                                        linkProduct={`https://bigbox.co.id/`}
                                        button={`${t("landingpage:Section5-Button")}`}
                                    />
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={6}>
                            <div className={styles["LandingPage-Section5-ColumnContainer"]}>
                                <div data-aos={this.state.width > 992 ? "fade-left" : this.state.width > 576 ? "fade-left" : "fade-up"} data-aos-offset="100">
                                    <CardBigSightLandingPage
                                        altImg={"Logo SmartEye"}
                                        logoImg={require("../../../src/Big-Sight/LandingPage/Section5-SmartEye.png")}
                                        marginTopDesc={"29px"}
                                        marginTop={"43px"}
                                        marginLeft={"31px"}
                                        width={"209px"}
                                        height={"46px"}
                                        productName={`Smarteye.id `}
                                        productDesc={`${t("landingpage:Section5-SmartEye-Desc")}`}
                                        linkProduct={`https://www.smarteye.id/`}
                                        button={`${t("landingpage:Section5-Button")}`}
                                    />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </SSRProvider>
            </div>
        );
    }
}

export default withTranslation(LandingPageSection5);
