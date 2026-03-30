import { useEffect, useState } from "react";
import { getLinks } from "../services/api";
import "./list.css";

function LinksList() {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    getLinks().then(setLinks);
  }, []);

  return (
    <div>
      <h2>Useful Links</h2>
      {links.map((link) => (
        <div key={link.id} className="card">
          <a href={link.url} target="_blank" rel="noreferrer">
            {link.url}
          </a>
          <p>{link.description}</p>
        </div>
      ))}
    </div>
  );
}

export default LinksList;