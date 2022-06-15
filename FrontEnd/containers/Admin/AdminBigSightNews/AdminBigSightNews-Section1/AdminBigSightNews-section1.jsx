import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import styles from "./AdminBigSightNews-section1.module.css";
import React from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function AdminBigSightNewsection1() {
  const route = useRouter();
  const Logout = async () => {
    try {
      await axios.delete("http://localhost:5000/logout", {
        withCredentials: true,
      });
      route.push("/Admin/Login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div id={styles["AdminBigSightNews-Section1"]}>
      <div className={styles["AdminBigSightNews-Section1-Container-left"]}>
        {" "}
        <h1 className={styles["AdminBigSightNews-Section1-Content-title"]}>
          Berita Saat ini
        </h1>
      </div>
      <div className={styles["AdminBigSightNews-Section1-Container-Right"]}>
        <Link href={"/Admin/BigSightNews/Add"}>
          <FontAwesomeIcon
            icon={faPlusCircle}
            className={styles["AdminBigSightNews-Section1-Right-button-add"]}
          />
        </Link>
        <div
          className={
            styles["AdminBigSightNews-Section1-Right-container-button-logout"]
          }
        >
          <button
            className={styles["AdminBigSightNews-Section1-Right-button-logout"]}
            onClick={Logout}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
