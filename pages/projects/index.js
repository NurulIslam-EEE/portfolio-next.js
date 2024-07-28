import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { fadeIn, textVariant } from "../../components/utils/motion";
import { styles } from "../styles";
import { SectionWrapper } from "../../components/hoc";
import { StarsCanvas } from "../../components/canvas";

const projectsAll = [
  {
    name: "HR Care",
    description:
      "This is human resource management software also known as payroll software. Using this software, a company can manage their employer details, attendance, leave, vacation, salary etc.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Material UI",
        color: "pink-text-gradient",
      },
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
      {
        name: "Firebase",
        color: "text-primaryDark",
      },
    ],
    image: "/hr-care.png",
    source_code_link: "https://github.com/NurulIslam-EEE/hr-care",
  },
  {
    name: "Helping Hand",
    description:
      "Web application that enables users to register as volunteer, participate in an event as a volunteer. Anyone can donate for any social work.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "Redux",
        color: "pink-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "text-primaryDark",
      },
    ],
    image: "/helping_hand.png",
    source_code_link: "https://github.com/NurulIslam-EEE/helping-hand",
  },
];

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1.1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src="assets/github.png"
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <div className="pb-20 pt-16">
      <StarsCanvas />

      <div className="container mx-auto pb-5">
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} text-center`}>My work</p>
          <h2 className={`${styles.sectionHeadText} text-center`}>Projects.</h2>
        </motion.div>

        <div className="w-full flex justify-center">
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            Following projects showcases my skills and experience through
            real-world examples of my work. Each project is briefly described
            with links to code repositories and live demos in it. It reflects my
            ability to solve complex problems, work with different technologies,
            and manage projects effectively.
          </motion.p>
        </div>

        <div className="mt-20 gap-7 grid grid-cols-1 md:grid-cols-3">
          {projectsAll.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Projects, "projects");
