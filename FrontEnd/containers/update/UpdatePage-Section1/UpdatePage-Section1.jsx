import LogoBigSight from "../../../src/Big-Sight/LogoBigSight-white.png";
import styles from "../UpdatePage-Section1/UpdatePage-Section1.module.css";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";

export default function UpdatePageSection1() {
    let { t } = useTranslation();

    return (
        <div id={styles["UpdatePage-Section1"]}>
            <div className={styles["UpdatePage-Section-Container"]}>
                <div className={styles["UpdatePage-Section-Container-left"]} data-aos="fade-right" data-aos-delay="0">
                    <h1 className={styles["UpdatePage-Section-Container-content-title"]}>{t("news:title")}</h1>
                </div>
                <div className={styles["UpdatePage-Section-Container-right"]} data-aos="fade-left" data-aos-delay="0">
                    <Image src={LogoBigSight} alt={`Logo Big sigt`} className={styles["UpdatePage-Section-Container-content-img"]} width={435} height={150} />
                </div>
            </div>
        </div>
    );
}
