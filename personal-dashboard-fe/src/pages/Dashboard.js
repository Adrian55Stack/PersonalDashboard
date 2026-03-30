import NotesList from "../components/NotesList";
import LinksList from "../components/LinksList";

function Dashboard() {
  return (
    <div style={styles.container}>
      <h1>Personal Dashboard</h1>

      <div style={styles.grid}>
        <div style={styles.section}>
          <NotesList />
        </div>

        <div style={styles.section}>
          <LinksList />
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
  },
  section: {
    background: "#f9f9f9",
    padding: "15px",
    borderRadius: "10px",
  },
};

export default Dashboard;