import NotesList from "../components/NotesList";
import LinksList from "../components/LinksList";
import "./dashboard.css";

function Dashboard() {
  return (
    <div className="container">
      <h1>Personal Dashboard</h1>

      <div className="grid">
        <div className="section">
          <NotesList />
        </div>

        <div className="section">
          <LinksList />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;