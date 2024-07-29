import React, { useEffect, useState } from "react";
import api from "../api";
import "../styles/Home.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const CreateNote = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const location = useLocation();
  const note = location.state;
  const navigate = useNavigate();

  useEffect(() => {
    if (note !== null) {
      setTitle(note.title);
      setContent(note.content);
    }
  }, [note]);

  const createNote = (e) => {
    e.preventDefault();
    api
      .post("/api/notes/", { content, title })
      .then((res) => {
        if (res.status === 201) {
          navigate("/");
        } else {
          window.alert("Failed to create note...");
        }
      })
      .catch((err) => console.log(err));
  };

  const updateNote = (e) => {
    e.preventDefault();
    api
      .put("/api/notes/update/" + note.id.toString(), { content, title })
      .then((res) => {
        if (res.status === 200) {
          navigate("/");
        } else {
          window.alert("Failed to update note...");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={note ? updateNote : createNote}>
      {note === null ? <h2>New Note</h2> : null}
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
