// App.js:

// Import Components
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

// Import sections
import Billing from "./sections/Billing";
import Business from "./sections/Business";
import CardDeal from "./sections/CardDeal";
import Hero from "./sections/Hero";
import Stats from "./sections/Stats";
import Testimonial from "./sections/Testimonial";

// Import styles
import styles from "./styles/styles";
import "./App.css";

function App() {
  return (
    <div className={styles.root}>
      {/* Navigation Bar */}
      <div className={styles.navbar}>
        <Navbar />
      </div>
      {/* Hero Section */}
      <div className={styles.hero}>
        <Hero />
      </div>
      {/* Other sections */}
      <div className={styles.sections}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonial />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
