import "./App.css";
import Navbar from "./components/Navbar";
import styles from "./styles/styles";

function App() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={styles.boxWidth}>
          <Navbar />
        </div>
      </div>
    </div>
  );
}

export default App;
