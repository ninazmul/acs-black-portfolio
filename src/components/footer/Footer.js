import React from 'react'
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { logo } from "../../assets/index";
import { navLinksdata } from "../../constants";
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <div className="w-full py-20 h-auto border-b-[1px] border-b-black flex justify-around">
      <div className=" h-full flex flex-col gap-8">
        <div className="flex items-center gap-2">
          <img className="w-16 rounded-full" src={logo} alt="logo" />{" "}
          <h1 className="text-3xl font-bold text-designColor">N.I. Nazmul</h1>
        </div>
        <p>Versatile artist with skills in programming, graphics, and voice!</p>
      </div>
      <div className=" h-full">
        <h3 className="text-xl uppercase text-designColor tracking-wider pb-4">
          Quick Link
        </h3>
        <ul className="flex flex-col gap-4">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
              key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className=" h-full">
        <h3 className="text-xl uppercase text-designColor tracking-wider pb-4">
          Social
        </h3>
        <div className="flex gap-4">
          <a
            href="https://www.facebook.com/nazmulsaw"
            target="_blank"
            rel="noreferrer"
            className="bannerIcon"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://github.com/ninazmul"
            target="_blank"
            rel="noreferrer"
            className="bannerIcon"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/ninazmul"
            target="_blank"
            rel="noreferrer"
            className="bannerIcon"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer