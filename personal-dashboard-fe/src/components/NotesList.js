import { useEffect, useState } from "react";
import { getNotes } from "../services/api";
import "./list.css";

function NotesList() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getNotes().then(setNotes);
  }, []);

  return (
    <div>
      <h2>Notes</h2>
      {notes.map((note) => (
        <div key={note.id} className="card">
          <h4>{note.title}</h4>
          <p>{note.content}</p>
        </div>
      ))}
    </div>
  );
}

export default NotesList;