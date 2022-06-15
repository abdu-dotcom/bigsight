import React from "react";
import AdminBigSightUpdate from "../../../../containers/Admin/AdminBigSightUpdate/AdminBigSightUpdate";

export default function EditNews() {
  return (
    <div>
      <AdminBigSightUpdate />
    </div>
  );
}

export const getServerSideProps = (context) => {
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
