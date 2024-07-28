import { motion } from "framer-motion";
import Nav from "../components/Nav";
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn.js";
import { styles } from "./styles.js";
import { fadeIn } from "../components/utils/motion.js";
import Image from "next/image.js";
import CircularBtn from "../components/CircularBtn.js";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link.js";
import { useEffect, useState } from "react";

const options = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      delay: 1,
      staggerChildren: 0.5,
    },
  },
};

const singleWord = {
  initial: {
    opacity: 0,
    y: 150,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 5,
    },
  },
};

const Home = () => {
  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      setCursorX(e.pageX);
      setCursorY(e.pageY);
    });
  }, []);

  return (
    <div className="relative">
      <ParticlesContainer />

      <div className="min-h-lvh flex-col-reverse md:flex-row  flex items-center justify-between max-w-[1300px] mx-auto pb-20 pt-[70px]">
        <div className={` ${styles.paddingX} flex flex-col justify-end gap-5 `}>
          {/* <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div> */}

          <div className="hover-animation relative">
            <motion.h1
              className={`${styles.heroHeadText} text-white `}
              variants={options}
              initial="initial"
              animate="animate"
            >
              Im <br />
              <motion.span className="text-[#64FFDA]" variants={singleWord}>
                Nurul Islam
              </motion.span>
            </motion.h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I develop user
              {/* <br className="sm:block hidden" /> */}
              interfaces and web applications
            </p>
            <div
              className="cursor"
              style={{ left: cursorX + "px", top: cursorY + "px" }}
            ></div>
          </div>
          {/* <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="relatives"
          >
            <ProjectsBtn />
          </motion.div> */}

          <Link
            href="mailto:nurul.islam02310@gmail.com"
            className="relative my-4"
          >
            <button className="button uppercase">
              {" "}
              Download cv{" "}
              <span className="icon">
                <FaArrowRightLong />
              </span>
            </button>
          </Link>

          {/* <CircularBtn /> */}
        </div>

        {/*  */}

        {/* image */}
        <div className="mt-20">
          <Image
            className="z-[100]"
            src="/assets/error.png"
            alt=""
            height={1000}
            width={800}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
