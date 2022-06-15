import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React, { Component } from "react";
import styled from "styled-components";
import styles from "./CardBigSightLandingPage.module.css";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const CardBigSightLandingPageLogoContainer = styled.div`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    margin-top: ${(props) => props.marginTop};
    margin-left: ${(props) => props.marginLeft};
`;

const CardBigSightLandingPageDesc = styled.p`
    margin-top: ${(props) => props.marginTopDesc};
`;

class CardBigSightLandingPage extends Component {
    render() {
        return (
            <div id={styles.CardBigSightLandingPage}>
                <a href={this.props.linkProduct} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                    <button className={styles["CardBigSightLandingPage-Button"]}>
                        {this.props.button}
                        <span className={styles["CardBigSightLandingPage-Button-ArrowRight"]}>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </span>
                    </button>
                </a>{" "}
                <div>
                    <CardBigSightLandingPageLogoContainer width={this.props.width} height={this.props.height} marginTop={this.props.marginTop} marginLeft={this.props.marginLeft}>
                        <Image alt={this.props.altImage} src={this.props.logoImg} />
                    </CardBigSightLandingPageLogoContainer>

                    <CardBigSightLandingPageDesc marginTopDesc={this.props.marginTopDesc} className={styles["CardBigSightLandingPage-Desc"]}>
                        <b>{this.props.productName}</b> {this.props.productDesc}
                    </CardBigSightLandingPageDesc>
                </div>
            </div>
        );
    }
}

export default CardBigSightLandingPage;
