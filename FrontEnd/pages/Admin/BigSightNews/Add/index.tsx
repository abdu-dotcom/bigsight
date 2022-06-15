import React from "react";
import AdminBigSightAdd from "../../../../containers/Admin/AdminBigSightAdd/AdminBigSightAdd";

export default function AddNews() {
    return (
        <div>
            <AdminBigSightAdd/>
        </div>
    );
}

export const getServerSideProps = (context: { req: { cookies: { [x: string]: any; }; }; }) => {
  const token = context.req.cookies["refreshToken"];

  // If token does not exist, return back to '/'.
  if (!token) {
    return {
      redirect: {
        destination: "/Admin/Login",
        permanent: false,
      },
    };
  }

  // If token exist, return the user data as props.
  return {};
};
