import React from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaEnvelopeOpen } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
const Header = ({ setOpen, open }) => {
  return (
    <header className="bg-[#283c73]">
      <div className="flex items-center gap-4 py-5 px-8">
        <span
          className="text-white text-2xl font-bold cursor-pointer"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <RxCross1 /> : <FaBarsStaggered />}
        </span>
        <span className="text-white text-2xl font-bold border-l-2 border-white pl-4 ml-4">
          <FaEnvelopeOpen />
        </span>
      </div>
    </header>
  );
};

export default Header;
