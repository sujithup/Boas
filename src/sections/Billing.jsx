import React from "react";
import styles, { layout } from "../styles/styles";
import { apple, bill, google } from "../assets/images";

function Billing() {
  return (
    <section id="product" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={bill} alt="billing" className="w-[100%] h-[100%] relative" />
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Easily control your <br className="sm:block hidden" /> Billing and
          Invoice.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          To improve your business's billing process, you must embrace digital
          transformation by integrating reliable payment methods and automated
          invoicing.
        </p>
        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <img
            src={apple}
            alt="apple_play"
            className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer"
          />
          <img
            src={google}
            alt="google_play"
            className="w-[144.17px] h-[43.08px] object-contain cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
}

export default Billing;
