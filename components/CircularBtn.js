import Image from "next/image";
import Link from "next/link";
import React from "react";

function CircularBtn() {
  return (
    <div className="fixed left-4 bottom-4">
      <div className="relative flex items-center justify-center overflow-hidden w-[148px] h-[148px]">
        <Image
          src={"/rounded-text.png"}
          width={141}
          height={148}
          className="animate-spin-slow w-full h-full max-w-[141px] max-h-[148px]"
          alt=""
        />
        <Link
          href="mailto:nurul.islam02310@gmail.com"
          className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-dark bg-white w-[80px] h-[80px] rounded-full font-semibold"
        >
          Hire me
        </Link>
      </div>
    </div>
  );
}

export default CircularBtn;
