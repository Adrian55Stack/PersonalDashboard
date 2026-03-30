const API_BASE = "http://localhost:8080/api";

export const getNotes = async () => {
  const res = await fetch(`${API_BASE}/notes`);
  return res.json();
};

export const getLinks = async () => {
  const res = await fetch(`${API_BASE}/links`);
  return res.json();
};