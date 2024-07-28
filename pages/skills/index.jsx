import React from "react";
import { BallCanvas, StarsCanvas } from "../../components/canvas";
import { styles } from "../styles";
import { SectionWrapper } from "../../components/hoc";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../components/utils/motion";
import SkillCard from "../../components/SkillCard";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaGithub,
  FaSass,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import {
  SiTailwindcss,
  SiAntdesign,
  SiMongodb,
  SiTypescript,
  SiNextdotjs,
  SiRedux,
  SiNodedotjs,
  SiPrisma,
  SiMui,
  SiExpress,
  SiFirebase,
  SiPostgresql,
  SiGithub,
  SiHeroku,
} from "react-icons/si";

const technologies = [
  {
    name: "HTML 5",
    icon: <FaHtml5 />,
    image: false,
  },
  {
    name: "CSS 3",
    icon: <FaCss3 />,
    image: false,
  },
  {
    name: "SASS",
    icon: <FaSass />,
    image: false,
  },
  {
    name: "JavaScript",
    icon: <IoLogoJavascript />,
    image: false,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
    image: false,
  },
  {
    name: "React JS",
    icon: <FaReact />,
    image: false,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
    image: false,
  },
  {
    name: "Redux Toolkit",
    icon: <SiRedux />,
    image: false,
  },
  {
    name: "MUi",
    icon: <SiMui />,
    image: false,
  },
  {
    name: "Ant Design",
    icon: <SiAntdesign />,
    image: false,
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss />,
    image: false,
  },
];

const backend = [
  {
    name: "Node JS",
    icon: <SiNodedotjs />,
    image: false,
  },
  {
    name: "Firebase",
    icon: <SiExpress />,
    image: false,
  },

  {
    name: "TypeScript",
    icon: <SiTypescript />,
    image: false,
  },
  {
    name: "Prisma",
    icon: <SiPrisma />,
    image: false,
  },
  // {
  //   name: "Sanity",
  //   icon: "assets/tech/sanity.svg",
  // },
  {
    name: "Firebase",
    icon: <SiFirebase />,
    image: false,
  },
];

const database = [
  {
    name: "MongoDB",
    icon: <SiMongodb />,
    image: false,
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql />,
    image: false,
  },
];

const tools = [
  {
    name: "figma",
    icon: <FaFigma />,
    image: false,
  },
  {
    name: "git",
    icon: <SiGithub />,
    image: false,
  },
  {
    name: "Heroku",
    icon: <SiHeroku />,
    image: false,
  },
];

function Skills() {
  const skillsData = [
    {
      icon: <FaHtml5 />,
    },
    {
      icon: <FaCss3 />,
    },
    {
      icon: <FaJs />,
    },
    {
      icon: <FaReact />,
    },
    {
      icon: <FaFigma />,
    },
    {
      icon: <FaGithub />,
    },
  ];
  return (
    <div className="pb-24 pt-10 md:pb-14">
      <StarsCanvas />
      <div className="container mx-auto">
        <motion.div
          variants={textVariant()}
          className="flex flex-col items-center"
        >
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>Overview.</h2>
        </motion.div>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] mx-auto"
        >
          As a full-stack developer, I offer a comprehensive range of services
          to create robust and user-friendly applications. Let me break down my
          expertise:
        </motion.p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Frontend</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5  xl:grid-cols-6  gap-3">
          {technologies.map((skill, ind) => (
            <SkillCard
              key={ind}
              icon={skill.icon}
              image={skill.image}
              className="text-white text-6xl"
            />
          ))}
        </div>

        {/* <div className="flex flex-row flex-wrap justify-center gap-10">
          {technologies.map((technology) => (
            <div className="w-28 h-28" key={technology.name}>
              <BallCanvas icon={technology.icon} />
            </div>
          ))}
        </div> */}

        <h2 className={`${styles.sectionHeadText} text-center my-4`}>
          Backend
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5  xl:grid-cols-6  gap-3">
          {backend.map((skill, ind) => (
            <SkillCard
              key={ind}
              icon={skill.icon}
              image={skill.image}
              className="text-white text-6xl"
            />
          ))}
        </div>
        {/* <div className="flex flex-row flex-wrap justify-center gap-10">
          {backend.map((technology) => (
            <div className="w-28 h-28" key={technology.name}>
              <BallCanvas icon={technology.icon} />
            </div>
          ))}
        </div> */}
        <h2 className={`${styles.sectionHeadText} text-center`}>Database</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5  xl:grid-cols-6  gap-3">
          {database.map((skill, ind) => (
            <SkillCard
              key={ind}
              icon={skill.icon}
              image={skill.image}
              className="text-white text-6xl"
            />
          ))}
        </div>
        {/* <div className="flex flex-row flex-wrap justify-center gap-10">
          {database.map((technology) => (
            <div className="w-28 h-28" key={technology.name}>
              <BallCanvas icon={technology.icon} />
            </div>
          ))}
        </div> */}
        <h2 className={`${styles.sectionHeadText} text-center`}>Tools</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5  xl:grid-cols-6  gap-3">
          {tools.map((skill, ind) => (
            <SkillCard
              key={ind}
              icon={skill.icon}
              image={skill.image}
              className="text-white text-6xl"
            />
          ))}
        </div>
        {/* <div className="flex flex-row flex-wrap justify-center gap-10">
          {tools.map((technology) => (
            <div className="w-28 h-28" key={technology.name}>
              <BallCanvas icon={technology.icon} />
            </div>
          ))}
        </div> */}
      </div>

      {/*  */}
      <FaHtml5 />
    </div>
  );
}

export default SectionWrapper(Skills, "skills");
