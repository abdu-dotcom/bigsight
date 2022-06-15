import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function AdminBigSightUpdate() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();
  const id = router.query.id;

  const editNews = async (e) => {
    e.preventDefault();
    await axios.patch(`http://localhost:5000/news/${id}`, {
      title: title,
      description: description,
    });
    router.push("/Admin/BigSightNews");
  };

  useEffect(() => {
    getNewsById();
  }, []);

  const getNewsById = async () => {
    const response = await axios.get(`http://localhost:5000/news/${id}`);
    setTitle(response.data.title);
    setDescription(response.data.description);
  };
  return (
    <div>
      <form onSubmit={editNews}>
        <div className="field">
          <label className="label">Title</label>
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
        <div className="field">
          <button className="button">Update</button>
        </div>
      </form>
      {title} - {description}
    </div>
  );
}
