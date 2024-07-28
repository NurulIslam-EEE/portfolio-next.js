import { FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const socialIcon = [
  {
    icon: <FaLinkedinIn className="text-[#64FFDA] text-2xl ml-8" />,
    link: "https://www.linkedin.com/in/nurul-islam-4a592a216/",
  },
  {
    icon: <FaTwitter className="text-[#64FFDA] text-2xl ml-8" />,
    link: "/",
  },
  {
    icon: <IoCallSharp className="text-[#64FFDA] text-2xl ml-8" />,
    link: "tel:+8801670376042",
  },
  {
    icon: <FaGithub className="text-[#64FFDA] text-2xl ml-8" />,
    link: "https://github.com/NurulIslam-EEE",
  },
];

const MotionLink = motion(Link);

const raise = {
  initial: { width: 0, height: 0 },
  transition: {
    duration: 8,
    delay: 8.5,
    ease: [0, 0.71, 0.2, 1.01],
  },
  animate: { width: 48, height: 48 },
};

function Navigation() {
  return (
    <div className="fixed w-full z-20">
      <div className="container mx-auto w-full">
        <div className=" flex justify-between items-center bg-transparent py-5 ">
          {/* <MotionLink
            whileHover={{
              backgroundColor: [
                "#f5f5f5",
                "rgba(131,58,180,1)",
                "rgba(253,29,29,1)",
                "rgba(252,176,69,1)",
                "rgba(22,116,59,1)",
                "rgba(222,116,159,1)",
              ],
              transition: { duration: 1, repeat: Infinity },
            }}
            href="/"
            className="bg-transparent text-dark flex items-center justify-center rounded-full h-16 w-16 text-2xl font-bold overflow-hidden"
          >
            <Image
              src="/my.png"
              width={60}
              height={60}
              alt=""
              className="overflow-hidden -z-6"
            />
          </MotionLink> */}

          <Link href={"/"}>
            <Image src="/n.svg" width={60} height={60} alt="" />
          </Link>

          <div className="flex items-center">
            {socialIcon.map((data, ind) => (
              <MotionLink
                target="_blank"
                key={ind}
                href={data.link}
                initial={{ opacity: 0, scale: 0.5 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
                whileHover={{
                  opacity: 1,
                  scale: 1,
                }}
                animate={{ opacity: 1, scale: 1 }}
                // variants={raise}
              >
                {data.icon}
              </MotionLink>
            ))}
            {/* <Link href={"/"}>
              {" "}
              <FaLinkedinIn className="text-[#61F7D1] text-2xl ml-2" />
            </Link>
            <Link href={"/"}>
              {" "}
              <FaTwitter className="text-[#61F7D1] text-2xl ml-8" />
            </Link>
            <Link href={"/"}>
              {" "}
              <FaGithub className="text-[#61F7D1] text-2xl ml-8" />
            </Link>
            <Link href={"/"}>
              {" "}
              <IoCallSharp className="text-[#61F7D1] text-2xl ml-8" />
            </Link> */}
          </div>

          {/* <div className="flex">
            {socialIcon.map((data, ind) => (
              <motion.div
                initial="initial"
                animate="initial"
                whileHover="animate"
                key={ind}
                className="icon-container p-2 border-2 rounded-full cursor-pointer ml-2 text-white h-12 w-12 flex items-center justify-center relative group hover:text-black hover:translate-x-0"
              >
                {data.icon}

                <motion.div
                  // initial={{ opacity: 0, scale: 0.5 }}
                  // transition={{
                  //   duration: 0.8,
                  //   delay: 0.5,
                  //   ease: [0, 0.71, 0.2, 1.01],
                  // }}
                  // whileHover={{
                  //   opacity: 1,
                  //   scale: 1,
                  // }}
                  // animate={{ opacity: 1, scale: 1 }}
                  variants={raise}
                  className="bg-white absolute h-12 w-12 rounded-full z-[-1]"
                ></motion.div>
              </motion.div>
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Navigation;
