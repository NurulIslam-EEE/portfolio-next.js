import { motion } from "framer-motion";
import Nav from "../components/Nav";
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn.js";
import { styles } from "./styles.js";
import { fadeIn } from "../components/utils/motion.js";

const Home = () => {
  return (
    <div className="relatives ">
      <ParticlesContainer />

      <div className="h-lvh flex items-center max-w-[900px] ">
        <div className={` ${styles.paddingX} flex flex-col justify-end gap-5`}>
          {/* <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div> */}

          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I m <span className="text-[#915EFF]">Nurul Islam</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I develop 3D visuals, user <br className="sm:block hidden" />
              interfaces and web applications
            </p>
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
