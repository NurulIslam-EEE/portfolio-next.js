import { motion } from "framer-motion";

import { styles } from "../../pages/styles";
import { staggerContainer } from "../utils/motion";
import { StarsCanvas } from "../canvas";

const StarWrapper = (Component, idName) =>
  function HOC() {
    return (
      <div className="absolutes">
        <motion.section
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className={`${styles.padding} relative z-0`}
        >
          <span className="hash-span" id={idName}>
            &nbsp;
          </span>

          <Component />
        </motion.section>
      </div>
    );
  };

export default StarWrapper;
