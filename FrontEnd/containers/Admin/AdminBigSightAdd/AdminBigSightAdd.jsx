import React from "react";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { Container } from "react-bootstrap";

export default function AdminBigSightAdd() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  // const [file, setFile] = useState("");
  const [img, setImg] = React.useState("");
  // const [linkVideo, setLinkVideo] = React.useState("");
  // const [createObjectURL, setCreateObjectURL] = useState(null);

  const router = useRouter();
  const saveNews = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("img", img);

    console.log(formData);
    await axios.post("http://localhost:5000/news", formData);
    router.push("/Admin/BigSightNews");
  };

  return (
    <div>
      <form onSubmit={saveNews} method="POST" enctype="multipart/form-data">
        <div className="field">
          <label className="title">Title</label>
          <input
            type="text"
            placeholder="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="field">
          <label className="description">description</label>
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        {/* <Container>
          <img src={img} sizes={200} />
        </Container> */}
        <div className="field">
          <label className="file">Upload Image / video </label>
          <input
            type="file"
            name="img"
            onChange={(e) => setImg(e.target.files[0])}
            multiple
          />
        </div>

        <div className="field">
          <button className="button">Save </button>
        </div>
      </form>
      {title} - {description}
    </div>
  );
}
