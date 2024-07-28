// icons
import Link from "next/link";
import { useRouter } from "next/router";
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from "react-icons/hi2";
import { FaGear } from "react-icons/fa6";

// nav data
export const navData = [
  { name: "Home", path: "/", icon: <HiHome /> },
  { name: "About", path: "/about", icon: <HiUser /> },
  { name: "Projects", path: "/projects", icon: <HiRectangleGroup /> },
  { name: "Experience", path: "/experience", icon: <FaGear /> },
  {
    name: "Skills",
    path: "/skills",
    icon: <HiChatBubbleBottomCenterText />,
  },
  {
    name: "Contact",
    path: "/contact",
    icon: <HiEnvelope />,
  },
];

// text-accent #FDD064 #61F7D1 #00ff99

const Nav2 = () => {
  // `${ link.path === pathname && "text-red" } hover:text-red cursor-pointer relative flex items-center group  transition-all duration-300`
  const router = useRouter();
  const pathname = router.pathname;
  return (
    <nav className="hidden xl:block flex-col items-center xl:justify-center gap-y-4 fixed bottom-[-20px] mt-auto xl:right-[2%] z-50 w-full xl:w-16 xl:max-w-md">
      <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-[24px] px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full md:bg-transparent ">
        {navData.map((link, index) => {
          6;
          return (
            <Link
              href={link.path}
              key={index}
              className={`  ${
                link.path === pathname ? "text-[#64FFDA]" : "text-white"
              } hover:text-[#64FFDA] cursor-pointer relative flex items-center group  transition-all duration-300`}
            >
              <div
                className={`border-[0.5px] ${
                  link.path === pathname && "border-[#64FFDA] bg-black"
                } rounded-full p-[10px] hover:border-[#64FFDA] bg-[#f5f5f32a] hover:bg-black`}
              >
                <div className="absolute pr-14 right-0 top-[-1px] hidden xl:group-hover:flex">
                  {" "}
                  <div className="bg-white relative flex text-primary items-center p-[6px] rounded-[3px]">
                    <div className="text-[12px]">{link.name}</div>
                    <div className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"></div>
                  </div>
                </div>

                <div className="w-[15px] h-[15px] flex justify-center items-center">
                  {" "}
                  {link?.icon}
                </div>
              </div>
            </Link>
          );
        })}
        <div className="bg-white h-[128px] w-[1px]"></div>
      </div>
    </nav>
  );
};

export default Nav2;
