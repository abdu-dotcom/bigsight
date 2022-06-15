// import { Modal, Button, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
// import Image from "next/image";
import styles from "./AdminBigSightNews-section2.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

export default function AdminBigSightNewsection2() {
  // State Modal
  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  // route id
  const route = useRouter();
  const [news, setNews] = useState([]);
  // console.log(news);
  useEffect(() => {
    getNews();
  }, []);

  const getNews = async () => {
    const response = await axios.get("http://localhost:5000/news");
    setNews(response.data);
  };

  const deleteNews = async (id) => {
    await axios.delete(`http://localhost:5000/news/${id}`);
    getNews();
  };
  return (
    <div id={styles["AdminBigSightNews-Section2"]}>
      {news.map((berita) => (
        <div
          className={styles["AdminBigSightNews-Section2-Container"]}
          data-aos="fade-down"
          data-aos-delay="0"
          key={berita.id}
        >
          <div
            className={styles["AdminBigSightNews-Section2-Container-content"]}
          >
            <div className={styles["AdminBigSightNews-Section2-content-img"]}>
              <img src={`${berita.img}`} alt="" width={"100%"} height={"60%"} />
            </div>
            <h2 className={styles["AdminBigSightNews-Section2-content-title"]}>
              {berita.title}
            </h2>
            <h3 className={styles["AdminBigSightNews-Section2-content-dec"]}>
              {berita.description}
            </h3>
            <div>
              <Link
                href={`/Admin/BigSightNews/Edit/${berita.id}`}
                key={berita.id}
              >
                <button
                  className={
                    styles["AdminBigSightNews-Section2-content-button"]
                  }
                  style={{ marginRight: "20px" }}
                >
                  <span style={{ marginRight: "15px" }}>Update</span>{" "}
                </button>
              </Link>

              <button
                className={styles["AdminBigSightNews-Section2-content-button"]}
                onClick={() => deleteNews(berita.id)}
              >
                <span>Delete</span>{" "}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
