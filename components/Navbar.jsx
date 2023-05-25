/** @format */

import Image from "next/image";

import LogoLg from "./LogoLg";
import LogoSm from "./LogoSm";
import Link from "next/link";
import { useState } from "react";
import { CgMenuRight, CgClose } from "react-icons/cg";
import oscaLogo from "../public/images/osca-logo.png";

import { FaFacebook, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const LINKS = [
  { text: "about", path: "/" },
  { text: "projects", path: "/projects" },
  { text: "experience", path: "/experience" },
  { text: "events", path: "/events" },
];

function Navbar() {
  return (
    <div className="fixed w-full h-20 shadow-xl z-10 bg-[#e5e7eb] mt-0">
      <DeskTopNavbar />
      <MobileNavbar />
    </div>
  );
}

const MobileNavbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };

  const socialLinks = [
    {
      icon: <FaFacebook size={20} />,
      link: "https://www.facebook.com/oscakampala",
    },
    { icon: <FaGithub size={20} />, link: "https://github.com/oscakampala" },
    {
      icon: <FaLinkedinIn size={20} />,
      link: "https://www.linkedin.com/company/open-source-community-africa-kampala/",
    },
    { icon: <FaTwitter size={20} />, link: "https://twitter.com/oscakampala" },
  ];

  return (
    <div>
      <div
        onClick={handleClick}
        className="text-primary-dark md:hidden absolute right-7 top-5"
      >
        <CgMenuRight size={30} />
      </div>
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 bottom-0 w-full bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? " fixed left-0 top-0 h-full w-[75%] sm:w-[60%] md:w-[45%] bg-slate-50 p-10 ease-in duration-500"
              : "fixed h-full left-[-100%] top-0 w-[75%] p-10 ease-in duration-500"
          }
        >
          <div className="flex w-full items-center justify-between">
            <Image src={oscaLogo} alt="logo" height={100} width={100} />

            <div
              onClick={handleClick}
              className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
            >
              <CgClose size={25} />
            </div>
          </div>

          <div className="border-b pb-3 border-gray-300 my-4">
            <p className="sm:py-4">Lets build something legendary together</p>
          </div>

          <ul className="uppercase">
            {LINKS.map((link, index) => {
              const { text, path } = link;
              return (
                <Link href={path} key={index} passHref>
                  <li
                    className="py-2 sm:py-4 text-sm"
                    onClick={() => setNav(false)}
                  >
                    {text}
                  </li>
                </Link>
              );
            })}
            <div className="flex flex-col mt-5">
              <Link href="/joinComm" passHref>
                <button
                  className="py-4 text-sm shadow text-white p-2.5 bg-secondary-4 font-bold tracking-wider"
                  onClick={() => setNav(false)}
                >
                  Join Community
                </button>
              </Link>
              <Link href="/user/login" passHref>
                <button
                  className=" text-white py-4 text-sm shadow p-2.5 bg-[#5A75AB] mt-4 tracking-wider"
                  onClick={() => setNav(false)}
                >
                  login
                </button>
              </Link>
            </div>
          </ul>
          <div className="mt-7 md:pt-10">
            <p className="uppercase tracking-widest text-[#5651e5]">
              Let's Connect
            </p>
          </div>
          <div className="mt-4 flex justify-between w-full">
            {socialLinks.map((socialLink, index) => {
              const { icon, link } = socialLink;
              return (
                <Link href={link} key={index}>
                  <div className="shadow-lg shadow-gray-400 p-2 rounded-full cursor-pointer text-orange-600">
                    {icon}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const DeskTopNavbar = () => {
  return (
    <div className="flex justify-between items-center w-full h-full pr-8 pl-2 mx-auto">
      <LogoLg />
      <ul className="hidden md:flex items-center">
        {LINKS.map((link, index) => {
          const { text, path } = link;
          return (
            <Link href={path} key={index}>
              <li className="capitalize text-xs lg:text-sm tracking-wider ml-5 lg:ml-10 font-bold">
                {text}
              </li>
            </Link>
          );
        })}
        <Link href="/joinComm">
          <button className="ml-5 lg:ml-10 text-xs lg:text-sm tracking-wider none shadow-md hover:shadow-xl normal-case text-white py-2 px-6 bg-[#C6C600] font-bold rounded-md">
            Join community
          </button>
        </Link>
        <Link href="/user/login" passHref>
          <button className="ml-5 lg:ml-10 text-xs lg:text-sm tracking-wider capitalize shadow-md hover:shadow-xl text-white py-2 px-6 bg-[#5A75AB] font-bold rounded-md">
            login
          </button>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
