import React from "react";
import styles from "./OurClient-Section2.module.css";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";

export default function OurClientSection2() {
    return (
        <div id={styles["OurClient-Section2"]}>
            <Link href={"/our-client/bri"}>
                <Container className={styles["OurClient-Section2-container-content"]} data-aos="fade-up">
                    <div className={styles["OurClient-Section2-content-left"]}>
                        <h1 className={styles["OurClient-Section2-content-left-text"]}>Customer Smart Profiling</h1>
                        <div className={styles["OurClient-Section2-content-left-logo"]}>
                            <Image  className={styles["OurClient-Section2-content-right-img"]}   src={require("../../../src/Big-Sight/Our Client/logo/logo-bri.png")} width={170} height={42}></Image>
                        </div>
                    </div>
                    <Container className={styles["OurClient-Section2-content-right"]}>
                        <Image alt="Background Bri" src={require("../../../src/Big-Sight/Our Client/Background-Bri.png")} className={styles["OurClient-Section2-content-right-img"]} objectFit={"fill"} />
                    </Container>
                </Container>
            </Link>
            <Link href={"/our-client/kementan"}>
                <Container className={styles["OurClient-Section2-container-content"]} data-aos="fade-up">
                    <div className={styles["OurClient-Section2-content-left"]}>
                        <h1 className={styles["OurClient-Section2-content-left-text"]}>Integrated Dashboard System Kementerian Pertanian RI</h1>
                        <div className={styles["OurClient-Section2-content-left-logo"]}>
                            <Image src={require("../../../src/Big-Sight/Our Client/logo/logo-kementan.png")} width={71} height={70}></Image>
                        </div>
                    </div>
                    <Container className={styles["OurClient-Section2-content-right"]}>
                        <Image  className={styles["OurClient-Section2-content-right-img"]}   alt="Background Bri" src={require("../../../src/Big-Sight/Our Client/Background-Kementan.png")}  objectFit={"fill"}/>
                    </Container>
                </Container>
            </Link>
        </div>
    );
}
