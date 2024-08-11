import React, { useState } from "react";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav className="bg-white bg-opacity-30 backdrop-blur-lg p-3.5 fixed left-1/2 transform -translate-x-1/2 bottom-8 flex gap-3 rounded-full z-10">
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={`p-3.5 rounded-full flex text-lg ${
          activeNav === "#" ? "bg-gray-800 text-white" : "bg-transparent"
        }`}
      >
        <AiOutlineHome />
      </a>
      <a
  href="#about"
  onClick={() => setActiveNav("#about")}
  className={`p-3.5 rounded-full flex text-lg ${
    activeNav === "#about" ? "bg-gray-800 text-white" : "bg-transparent"
  }`}
>
  <AiOutlineUser />
</a>
      <a
        href="#skills"
        onClick={() => setActiveNav("#skills")}
        className={`p-3.5 rounded-full flex text-lg ${
          activeNav === "#skills" ? "bg-gray-800 text-white" : "bg-transparent"
        }`}
      >
        <BiBook />
      </a>
      <a
        href="#projects"
        onClick={() => setActiveNav("#projects")}
        className={`p-3.5 rounded-full flex text-lg ${
          activeNav === "#projects" ? "bg-gray-800 text-white" : "bg-transparent"
        }`}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={`p-3.5 rounded-full flex text-lg ${
          activeNav === "#contact" ? "bg-gray-800 text-white" : "bg-transparent"
        }`}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
