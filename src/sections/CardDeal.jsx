import { card } from "../assets/images";
import styles, { layout } from "../styles/styles";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better card deal <br className="sm:block hidden" /> in few easy
        steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        With so many different types of credit cards available, it can be hard
        to find the right one for your needs. Once you
        decide what features and benefits are important to you, the decision
        becomes a bit easier.
      </p>

      <button className="bg-blue-gradient">Get Started</button>
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
