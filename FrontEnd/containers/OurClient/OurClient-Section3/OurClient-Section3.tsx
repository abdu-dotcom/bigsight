import React from "react";
import styles from "./OurClient-Section3.module.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Col, Container, Row, Card } from "react-bootstrap";
import news1 from "../../../src/Big-Sight/LandingPage/news/news1.png";
import news2 from "../../../src/Big-Sight/LandingPage/news/news2.png";

import Image from "next/image";

export default function OurClientSection3() {
     const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: false,
        autoplaySpeed: 3000,
        dotsClass: styles["button__bar"],
        arrows: false,
        responsive: [
        {
            breakpoint: 768,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
            },
        },
        {
            breakpoint: 640,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            },
        },
        ],
    };
    return (
        <div id={styles["OurClient-Section3"]}>
            <Container>
                <div className={styles["OurClient-Section3-container-testimoni"]}>
<div className={styles["container-top"]}>
                    <div className={styles["img"]}>
                    <Image alt="Icon coma" src={require("../../../src/Big-Sight/Our Client/icon-coma.png")} width={92} height={92} />
                    </div>
                    <h2 className={styles["title"]}>Testimoni dari  Client</h2>
                </div>
                <Slider {...settings}>
                    <div>
                        <div className={styles["container-content-testimoni"]}>
                            <h4 className={styles["content-testimoni-title"]}>Pemkot Payakumbuh</h4>
                            <h5 className={styles["content-testimoni-desc"]}>Payakumbuh  pemkot satu-satunya di sumatera sebagai pilot project IDSG  (Big View) ini.  Ini menjadi media bagi pak walikota dalam mengambil keputusan target-target yang sudah dituangkan ke dalam rpjm</h5>
                            <div className={styles["container-content-testimoni-user"]}>
                                <div className={styles["container-content-testimoni-detail-user-image"]}>
                                <Image alt="Icon coma" src={require("../../../src/Big-Sight/Our Client/img-testimoni-user/photo_user.png")} width={65} height={65} />
                                </div>
                                <div className={styles["container-content-testimoni-detail-user"]}>
                                    <h6 className={styles["container-content-testimoni-user-name"]}>ARMEIN BUSRA S.KOM</h6>
                                    <h6 className={styles["container-content-testimoni-user-gelar"]}>Sekretaris Diskominfo Pemkot Payakumbuh</h6>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={styles["container-content-testimoni"]}>
                            <h4 className={styles["content-testimoni-title"]}>Pemkot Payakumbuh</h4>
                            <h5 className={styles["content-testimoni-desc"]}>Payakumbuh  pemkot satu-satunya di sumatera sebagai pilot project IDSG  (Big View) ini.  Ini menjadi media bagi pak walikota dalam mengambil keputusan target-target yang sudah dituangkan ke dalam rpjm</h5>
                            <div className={styles["container-content-testimoni-user"]}>
                                <div className={styles["container-content-testimoni-detail-user-image"]}>
                                <Image alt="Icon coma" src={require("../../../src/Big-Sight/Our Client/img-testimoni-user/photo_user.png")} width={65} height={65} />
                                </div>
                                <div className={styles["container-content-testimoni-detail-user"]}>
                                    <h6 className={styles["container-content-testimoni-user-name"]}>ARMEIN BUSRA S.KOM</h6>
                                    <h6 className={styles["container-content-testimoni-user-gelar"]}>Sekretaris Diskominfo Pemkot Payakumbuh</h6>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={styles["container-content-testimoni"]}>
                            <h4 className={styles["content-testimoni-title"]}>Pemkot Payakumbuh</h4>
                            <h5 className={styles["content-testimoni-desc"]}>Payakumbuh  pemkot satu-satunya di sumatera sebagai pilot project IDSG  (Big View) ini.  Ini menjadi media bagi pak walikota dalam mengambil keputusan target-target yang sudah dituangkan ke dalam rpjm</h5>
                            <div className={styles["container-content-testimoni-user"]}>
                                <div className={styles["container-content-testimoni-detail-user-image"]}>
                                <Image alt="Icon coma" src={require("../../../src/Big-Sight/Our Client/img-testimoni-user/photo_user.png")} width={65} height={65} />
                                </div>
                                <div className={styles["container-content-testimoni-detail-user"]}>
                                    <h6 className={styles["container-content-testimoni-user-name"]}>ARMEIN BUSRA S.KOM</h6>
                                    <h6 className={styles["container-content-testimoni-user-gelar"]}>Sekretaris Diskominfo Pemkot Payakumbuh</h6>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                
              </Slider>
                </div>
                
            </Container>{" "}
        </div>
    );
}
