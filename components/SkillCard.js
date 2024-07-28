import Image from "next/image";
import React from "react";

function SkillCard({ icon, image }) {
  // #00ff99 #00e187 #1c1c22 #232329 #64FFDA
  return (
    <div className="bg-black-100 h-[150px] w-[150px] rounded-md flex items-center justify-center text-white text-6xl hover:text-[#64FFDA]">
      {image ? (
        <Image
          src={`/${icon}`}
          alt=""
          width={60}
          height={60}
          style={{ width: "auto", height: "auto" }}
        />
      ) : (
        icon
      )}
    </div>
  );
}

export default SkillCard;
