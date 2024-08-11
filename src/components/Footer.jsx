import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { IoLogoGithub, IoMail } from 'react-icons/io5';

const Footer = () => {
  return (
    <footer className="relative w-full bg-black min-h-[100px] py-5 pb-28 px-12 flex flex-col items-center justify-center bg-[linear-gradient(to_right,#2A2A2A_1px,transparent_1px),linear-gradient(to_bottom,#2A2A2A_1px,transparent_1px)] bg-[size:45px_45px] ">
      <ul className="flex flex-wrap justify-center items-center space-x-4 mt-2 mb-4">
        <li className="list-none">
          <a
            className="text-white text-3xl transition-transform duration-500 hover:translate-y-[-10px]"
            href="https://github.com/NirmiteeS"
          >
            <IoLogoGithub />
          </a>
        </li>
        <li className="list-none">
          <a
            className="text-white text-3xl transition-transform duration-500 hover:translate-y-[-10px]"
            href="https://www.linkedin.com/in/nirmitee-sarode-2b09ba251"
          >
            <FaLinkedin />
          </a>
        </li>
        <li className="list-none">
          <a
            className="text-white text-3xl transition-transform duration-500 hover:translate-y-[-10px]"
            href="mailto:nirmiteesarode04@gmail.com"
          >
            <IoMail />
          </a>
        </li>
      </ul>
      <p className="text-white poppins-light text-base font-light mt-4">Made with ❤️ by Nirmitee</p>
    </footer>
  );
};

export default Footer;
