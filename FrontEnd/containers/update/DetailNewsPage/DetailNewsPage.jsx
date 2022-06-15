import React from "react";
import styles from "../DetailNewsPage/DetailNewsPage.module.css";
import Image from "next/image";
import news1 from "../../../src/Big-Sight/LandingPage/news/news1.png";

export default function DetailNewsPage() {
    return (
        <div id={styles["DetailNewsPage"]}>
            <div className={styles["DetailNewsPage-content-img"]}>
                <Image alt="News 1 Image" src={news1} />
            </div>
            <div className={styles["DetailNewsPage-Content-Container"]}>
                <h1 className={styles["DetailNewsPage-content-title"]}>Penghargaan Innovation Awards</h1>
                <h2 className={styles["DetailNewsPage-content-desc"]}>
                    Tim Big Data Analitik PUU 2.0 dengan produk Big Data Analytics PUU 2.0 “Transforming the Regulatory making Process” sebagai pemenang tim innovator dari inkubator Telkom Indonesia!
                </h2>
                <h2 className={styles["DetailNewsPage-content-desc"]}>Telkom sebagai mitra yang secara utuh mendukung kegiatan inovatif ini dengan tetap mengedepankan kolaborasi yang efektif.</h2>
                <h2 className={styles["DetailNewsPage-content-desc"]}>
                    Saya melihat produk-produk yang diciptakan setiap tim dari program ini sangat inovatif. Saya harap semoga produk inovatif yang dihasilkan bisa terus dikembangkan dan tentunya dikelola secara berkelanjutan sehingga dampak
                    dan manfaatnya bisa cepat dirasakan oleh banyak orang.
                </h2>
            </div>
        </div>
    );
}
