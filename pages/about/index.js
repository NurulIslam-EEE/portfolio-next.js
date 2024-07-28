import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";

import { fadeIn } from "../../components/utils/motion";
import { textVariant } from "../../components/utils/motion";

import { SectionWrapper } from "../../components/hoc";
import { StarsCanvas } from "../../components/canvas";
import ServiceCard2 from "../../components/ServiceCard2";

const services = [
  {
    title: "Frontend Developer",
    icon: "assets/creator.png",
    description:
      "I specialize in building engaging and responsive user interfaces using React and Next.js. 	Whether it’s crafting beautiful landing pages, interactive dashboards, or e-commerce sites, I ensure that the frontend is visually appealing, accessible, and optimized for performance.",
  },
  {
    title: "Backend Developer",
    icon: "assets/backend.png",
    description: "",
  },
  {
    title: "React Native Developer",
    icon: "assets/mobile.png",
    description: "",
  },
  {
    title: "Responsive Design",
    icon: "assets/web.png",
    description: "",
  },
];

const services2 = [
  {
    title: "Frontend Developer",
    icon: "assets/web.svg",
    description:
      "I specialize in building engaging and responsive user interfaces using React and Next.js. 	Whether it’s crafting beautiful landing pages, interactive dashboards, or e-commerce sites, I ensure that the frontend is visually appealing, accessible, and optimized for performance.",
  },
  {
    title: "Responsive Design",
    icon: "assets/ui.svg",
    description:
      "I use media queries and CSS frameworks to make sure the layout adjusts gracefully to different screens. Whether it’s a large monitor or a small phone, the user experience remains top-notch",
  },
  {
    title: "Backend Developer",
    icon: "assets/api.svg",
    description:
      "I design RESTful APIs, implement authentication (using JWT tokens and refresh tokens), and connect to databases (such as MongoDB or PostgreSQL) to store and retrieve data securely",
  },

  {
    title: "React Native Developer",
    icon: "assets/smartphone.png",
    description:
      "I build feature-rich mobile applications that run smoothly on both iOS and Android devices. Whether it’s a productivity app, social platform, or e-commerce solution, I ensure a consistent experience across platforms.",
  },
];

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="md:w-[230px] w-[250px] h-[282px]">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-6 md:px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img
            src={icon}
            alt="web-development"
            className="w-16 h-16 object-contain"
          />

          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <div className="pb-20 pt-16">
      <StarsCanvas />

      <div className="container mx-auto pb-10">
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
          {/* I m a skilled software developer with experience in TypeScript and
          JavaScript, and expertise in frameworks like React, Node.js, and
          Three.js. I m a quick learner and collaborate closely with clients to
          create efficient, scalable, and user-friendly solutions that solve
          real-world problems. Lets work together to bring your ideas to life! */}
          As a full-stack developer, I offer a comprehensive range of services
          to create robust and user-friendly applications. Let me break down my
          expertise:
        </motion.p>

        <motion.div
          variants={textVariant()}
          className="flex flex-col items-center"
        >
          <h2 className={styles.sectionHeadText}>What i Do !!!</h2>
        </motion.div>
        {/* <div className="mt-20 flex flex-wrap gap-10 justify-between">
          {services?.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div> */}
        <div className="work">
          {services2?.map((service, index) => (
            <ServiceCard2 key={service.title} index={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
