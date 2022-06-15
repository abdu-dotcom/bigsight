import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Section1 from "../../../containers/Admin/AdminBigSightLogin/AdminBightSightLogin-Section1/AdminBightSightLogin-Section1";
import FooterBigSight from "../../../containers/Footer/Footer";

export default function Login() {
    return (
        <div>
            <Section1/>
            <FooterBigSight/>
        </div>
    );
}

export const getServerSideProps = (context: any) => {
  const token = context.req.cookies["refreshToken"];

  // If token does not exist, return back to '/'.
  if (token) {
    return {
      redirect: {
        destination: "/Admin/BigSightNews",
        permanent: false,
      },
    };
  }

  // If token exist, return the user data as props.
  return {};
};


