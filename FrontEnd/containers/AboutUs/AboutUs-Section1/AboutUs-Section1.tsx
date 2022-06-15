import React from "react";
import styles from "./AboutUs-Section1.module.css";
import  useTranslation  from "next-translate/useTranslation";

export default function AboutUsSection1() {
    let { t } = useTranslation();

    return (
        <div id={styles["AboutUs-Section1"]}>
            <div className={styles["AboutUs-Section1-Content-Container"]} data-aos="fade-right">
                <h1 className={styles["AboutUs-Section1-Title"]}>{t("about-us:Section1-Title")}</h1>
            </div>
        </div>
    );
}
