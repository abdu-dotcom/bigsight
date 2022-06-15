import Link from "next/link";
import React from "react";
import styles from "./SectionContactUs.module.css";
import useTranslation from "next-translate/useTranslation";

export default function SectionContactUs() {
    let { t } = useTranslation();

    return (
        <div id={styles["SectionContactUs"]}>
            <h1 className={styles["SectionContactUs-title"]} data-aos="fade-down" data-aos-delay="0">
                {t("common:SectionContactUs-Title")}{" "}
            </h1>
            <h2 className={styles["SectionContactUs-desc"]} data-aos="fade-down" data-aos-delay="300">
                {t("common:SectionContactUs-Desc")}{" "}
            </h2>

            <div data-aos="fade-down" data-aos-delay="300">
                <Link href={"/contact-us"} passHref>
                    <button className={styles["SectionContactUs-button"]}>{t("common:SectionContactUs-Button")} </button>
                </Link>
            </div>
        </div>
    );
}
