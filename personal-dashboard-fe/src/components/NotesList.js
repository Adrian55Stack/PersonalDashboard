// src/components/NotesList.jsx

import { useEffect, useState } from "react";
import { getNotes } from "../services/api";

function NotesList() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getNotes().then(setNotes);
  }, []);

  return (
    <div>
      <h2>Notes</h2>
      {notes.map((note) => (
        <div key={note.id} style={styles.card}>
          <h4>{note.title}</h4>
          <p>{note.content}</p>
        </div>
      ))}
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ccc",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "8px",
  },
};

export default NotesList;