import React, { useState } from "react";
import api from "../api";
import "../styles/Home.css";

const CreateNote = ({ getNotes }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const createNote = (e) => {
    e.preventDefault();
    api
      .post("/api/notes/", { content, title })
      .then((res) => {
        if (res.status === 201) {
          window.alert("Created Note!");
          getNotes();
        } else {
          window.alert("Failed to create note...");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={createNote}>
      <h2>New Note</h2>
      <label htmlFor="title">Title: </label>
      <br />
      <input
        type="text"
        id="title"
        name="title"
        required
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />

      <label htmlFor="content">Content: </label>
      <br />
      <textarea
        id="content"
        name="content"
        value={content}
        required
        onChange={(e) => setContent(e.target.value)}
      />

      <br />
      <input type="submit" value="Submit"></input>
    </form>
  );
};

export default CreateNote;
