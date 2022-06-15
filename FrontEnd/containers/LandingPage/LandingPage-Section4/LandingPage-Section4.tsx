import { Col, Container, Row } from "react-bootstrap";
import styles from "./LandingPage-Section4.module.css";

export default function LandingPageSection4() {
    return (
        <div id={styles["LandingPage-Section4"]}>
            <Container>
                <Row className={styles["LandingPage-Section4-Row-Container"]}>
                    <Col lg={4}>
                        <h1 className={styles["LandingPage-Section4-Title"]} data-aos="fade-right">
                            Pelajari Tentang Kami
                        </h1>
                    </Col>
                    <Col lg={8}>
                        <div className={styles["LandingPage-Section4-Video-Container"]} data-aos="fade-left">
                            <div className={styles["LandingPage-Section4-Aspect-Ratio"]}>
                                <iframe
                                    className={styles["LandingPage-Section4-Video"]}
                                    src="https://www.youtube.com/embed/SFwDJ83GxHE"
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                ></iframe>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
