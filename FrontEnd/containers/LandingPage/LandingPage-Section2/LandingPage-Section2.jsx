import { Col, Container, Row, Card } from "react-bootstrap";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import axios from "axios";
import styles from "./LandingPage-Section2.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useTranslation from "next-translate/useTranslation";

export default function LandingPageSection2() {
  let { t } = useTranslation();
  const [news, setNews] = useState([]);

  useEffect(() => {
    getNews();
  }, []);

  const getNews = async () => {
    const response = await axios.get("http://localhost:5000/news");
    setNews(response.data);
  };

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
    <div id={styles["LandingPage-Section2"]}>
      <Container fluid className="h-100" data-aos="fade-up">
        <Row className="h-100">
          <Col lg={3} className={styles["LandingPage-Section2-Left"]}>
            <div
              className={styles["LandingPage-Section2-Left-content-container"]}
            >
              <h2 className={styles["LandingPage-Section2-Left-content-Title"]}>
                {t("landingpage:Section2-Title")}
              </h2>
            </div>
          </Col>
          <Col lg={9} className={styles["LandingPage-Section2-right"]}>
            <div
              className={styles["LandingPage-Section2-Right-content-container"]}
            >
              <Slider {...settings}>
                {news.map((berita) => (
                  // <Link href={`/update/${berita.id}`}>
                  <div>
                    <Card className={styles["LandingPage-Section2-Right-Card"]}>
                      <div
                        className={
                          styles[
                            "LandingPage-Section2-Right-Card-container-Image"
                          ]
                        }
                      >
                        {/* <Image
                          className={
                            styles["LandingPage-Section2-Right-Card-Image"]
                          }
                          src={news1}
                          alt={"berita 1"}
                        /> */}
                        <img
                          src={`http://localhost:5000/Images/${berita.img}`}
                          alt={berita.img}
                          width={"100%"}
                          height={"60%"}
                        />
                      </div>
                      <Card.Body
                        className={
                          styles["LandingPage-Section2-Right-Card-Body"]
                        }
                      >
                        <Card.Title
                          className={
                            styles["LandingPage-Section2-Right-Card-Title"]
                          }
                        >
                          {/* <b>Penghargaan</b> <i>Innovation Awards</i>{" "} */}
                          {berita.title}
                        </Card.Title>
                        <Card.Text
                          className={
                            styles["LandingPage-Section2-Right-Card-Text"]
                          }
                        >
                          {berita.description}
                        </Card.Text>
                      </Card.Body>
                      <Card.Footer
                        className={
                          styles["LandingPage-Section2-Right-Card-Footer"]
                        }
                      />
                    </Card>
                  </div>
                  // </Link>
                ))}
              </Slider>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
