import React, { useEffect, useState } from "react";
import api from "../api";
import CreateNote from "../components/CreateNote";
import Note from "../components/Note";
import "../styles/Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  const [notes, setNotes] = useState([]);

  const getNotes = () => {
    api
      .get("/api/notes/")
      .then((res) => res.data)
      .then((data) => {
        setNotes(data);
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  const deleteNote = (id) => {
    api
      .delete("/api/notes/delete/" + id.toString())
      .then((res) => {
        console.log(res.status);
        if (res.status === 204) {
          window.alert("Note deleted!");
          getNotes();
        } else {
          window.alert("Failed to delete note!");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <div>
      <h1>Notes</h1>
      <div className="notes-section">
        {notes.map((note) => (
          <div key={note.id} className="note">
            <Note
              key={note.id}
              note={note}
              deleteCallback={() => deleteNote(note.id)}
            />
          </div>
        ))}
        <Link to="/new-note">
          <button className="new-note-button">New Note</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
