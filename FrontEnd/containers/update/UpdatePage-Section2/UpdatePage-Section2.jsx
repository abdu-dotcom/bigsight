import Image from "next/image";
import styles from "../UpdatePage-Section2/UpdatePage-Section2.module.css";
import news1 from "../../../src/Big-Sight/LandingPage/news/news1.png";
import news2 from "../../../src/Big-Sight/LandingPage/news/news2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function UpdatePageSection1() {
    return (
        <div id={styles["UpdatePage-Section2"]}>
            <div className={styles["UpdatePage-Section2-Container"]} data-aos="fade-down" data-aos-delay="0">
                <div className={styles["UpdatePage-Section2-Container-content"]}>
                    <div className={styles["UpdatePage-Section2-content-img"]}>
                        <Image alt="Image News 1" src={news1} />
                    </div>
                    <h2 className={styles["UpdatePage-Section2-content-title"]}>Penghargaan Innovation Awards</h2>
                    <h3 className={styles["UpdatePage-Section2-content-dec"]}>
                        Tim Big Data Analitik PUU 2.0 dengan produk Big Data Analytics PUU 2.0 “Transforming the Regulatory making Process” sebagai pemenang tim innovator dari inkubator Telkom Indonesia!
                    </h3>
                    <Link href="/update/1">
                        <button className={styles["UpdatePage-Section2-content-button"]}>
                            <span style={{ marginRight: "15px" }}>Lihat Lebih Detail</span> <FontAwesomeIcon icon={faAngleRight} />
                        </button>
                    </Link>
                </div>
            </div>
            <div className={styles["UpdatePage-Section2-Container"]} data-aos="fade-down" data-aos-delay="100">
                <div className={styles["UpdatePage-Section2-Container-content"]}>
                    <div className={styles["UpdatePage-Section2-content-img"]}>
                        <Image alt="Image News 2" src={news2} />
                    </div>
                    <h2 className={styles["UpdatePage-Section2-content-title"]}>DDB Telkom Sharing Edukasi Pengolahan Big Data Kepada Mahasiswa Universitas Telkom</h2>
                    <h3 className={styles["UpdatePage-Section2-content-dec"]}>Bandung - Tribe Big Data & Smart Platform (BSP) Direktorat Digital Business Technology (DBT) PT Telkom Indonesia Tbk (Telkom) bekerjasama..</h3>
                    <button className={styles["UpdatePage-Section2-content-button"]}>
                        <span style={{ marginRight: "15px" }}>Lihat Lebih Detail</span> <FontAwesomeIcon icon={faAngleRight} />
                    </button>
                </div>
            </div>
        </div>
    );
}
