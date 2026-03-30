// src/components/LinksList.jsx

import { useEffect, useState } from "react";
import { getLinks } from "../services/api";

function LinksList() {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    getLinks().then(setLinks);
  }, []);

  return (
    <div>
      <h2>Useful Links</h2>
      {links.map((link) => (
        <div key={link.id} style={styles.card}>
          <a href={link.url} target="_blank" rel="noreferrer">
            {link.url}
          </a>
          <p>{link.description}</p>
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

export default LinksList;