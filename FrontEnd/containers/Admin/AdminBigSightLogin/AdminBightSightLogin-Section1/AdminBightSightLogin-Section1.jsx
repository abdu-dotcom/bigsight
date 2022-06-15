import React, { useState } from "react";
import LogoBigSight from "../../../../src/Big-Sight/LogoBigSight-white.png";
import styles from "../AdminBightSightLogin-Section1/AdminBightSightLogin-Section1.module.css";
import Image from "next/image";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { useRouter } from "next/router";

export default function AdminBightSightLoginSection1() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const router = useRouter();

  const Auth = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:5000/login",
        {
          username: username,
          password: password,
        },
        {
          withCredentials: true,
        }
      );
      router.push("/Admin/BigSightNews");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };
  return (
    <div id={styles["AdminBightSightLogin-Section1-Container"]}>
      <div className={styles["AdminBightSightLogin-Section1-Content-Form"]}>
        <p>{msg}</p>
        <form onSubmit={Auth}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{ color: "white" }}>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="masukan username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label style={{ color: "white" }}>password</Form.Label>
            <Form.Control
              type="password"
              placeholder="masukan password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Form.Group>
          <Button
            type="submit"
            className={styles["AdminBightSightLogin-Section1-Contenet-Button"]}
            style={{ color: "#EE2E24" }}
          >
            Login
          </Button>
        </form>

        <div
          className={
            styles["AdminBightSightLogin-Section1-Container-content-img"]
          }
        >
          <Image src={LogoBigSight}></Image>
        </div>
      </div>
    </div>
  );
}
