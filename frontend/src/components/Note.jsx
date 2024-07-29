import React from "react";
import "../styles/Note.css";
import { Link } from "react-router-dom";

const Note = ({ note, deleteCallback }) => {
  const formattedDate = new Date(note.created_at).toLocaleDateString("en-uk");

  return (
    <div>
      <p className="note-title">{note.title}</p>
      <p className="note-content">{note.content}</p>
      <p className="note-date">{formattedDate}</p>
      <Link to="/edit-note" state={note}>
        <button className="edit-button">Edit</button>
      </Link>
      <button className="delete-button" onClick={deleteCallback}>
        Delete
      </button>
    </div>
  );
};

export default Note;
