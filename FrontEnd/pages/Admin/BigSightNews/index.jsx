import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import FooterBigSight from "../../../containers/Footer/Footer";
import Section1 from "../../../containers/Admin/AdminBigSightNews/AdminBigSightNews-Section1/AdminBigSightNews-section1";
import Section2 from "../../../containers/Admin/AdminBigSightNews/AdminBigSightNews-Section2/AdminBigSightNews-section2";

import axios from "axios";

export default function BigSightUpdate() {
  const [token, setToken] = useState("");
  // const [expire, setExpire] = useState("");
  useEffect(() => {
    refreshToken();
  }, []);

  const refreshToken = async () => {
    const response = await axios.get("http://localhost:5000/token", {
      withCredentials: true,
    });
    setToken(response.data.accessToken);
  };
  return (
    <div>
      <Section1 />
      <Section2 />
      <FooterBigSight />
    </div>
  );
}

export const getServerSideProps = (context) => {
  const token = context.req.cookies["refreshToken"];

  // If token does not exist, return back to '/'.
  if (!token) {
    return {
      redirect: {
        destination: "Login",
        permanent: false,
      },
    };
  }

  // If token exist, return the user data as props.
  return {};
};
