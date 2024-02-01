import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Billing from "./sections/Billing";
import Business from "./sections/Business";
import CardDeal from "./sections/CardDeal";
import Hero from "./sections/Hero";
import Stats from "./sections/Stats";
import Testimonial from "./sections/Testimonial";
import styles from "./styles/styles";

function App() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={styles.boxWidth}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing/>
          <CardDeal/>
          <Testimonial/>
          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default App;
