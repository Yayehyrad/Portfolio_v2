"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
// import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import logo from "@/public/yayehyrad.png";
// import { navLinksdata } from "../../constants";
import { links } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
// import { FiMenu } from "react-icons/fi";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <motion.div
      className="w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <div>
        <Image src={logo} alt="logo" width={200} height={100} />
      </div>
      <div>
        <ul className="hidden mdl:inline-flex items-center gap-2 lg:gap-2 mr-6">
          {links.map((link) => (
            <motion.li
              className="text-base font-normal text-gray-700 tracking-wide cursor-pointer hover:text-designColor duration-300"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              whileHover={
                activeSection === link.name ? { scale: 1 } : { scale: 1.1 }
              }
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(" relative", {
                  " p-2 text-designColor ": activeSection === link.name,
                })}
                onClick={() => {
                  setTimeOfLastClick(Date.now());
                  setActiveSection(link.name);
                }}
                href={link.hash}
              >
                {link.name}
                {activeSection === link.name && (
                  <motion.span
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      damping: 20,
                      stiffness: 300,
                    }}
                    className="border-black border-2 rounded-lg -z-20 absolute inset-0 p-2"
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
      <span
        onClick={() => setShowMenu(!showMenu)}
        className="text-2xl mdl:hidden   w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer   mr-4"
      >
        <FiMenu />
      </span>
      {true && (
        <motion.div
          initial={showMenu ? { x: -100, opacity: 0 } : { x: 0, opacity: 1 }}
          animate={showMenu ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
          transition={{
            duration: 0.5,
          }}
          className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide"
        >
          <div className="flex flex-col gap-8 py-2 relative">
            <div>
              <Image width={150} height={80} src={logo} alt="logo" />
              <p className="text-sm text-gray-400 mt-2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum
                soluta perspiciatis molestias enim cum repellat, magnam
                exercitationem distinctio aliquid nam.
              </p>
            </div>
            <ul className="flex flex-col gap-4">
              {links.map((item) => (
                <li
                  key={item.name}
                  className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                >
                  <Link
                    onClick={() => setShowMenu(false)}
                    // activeClass="active"
                    href={item.hash}
                    // spy={true}
                    // smooth={true}
                    // offset={-70}
                    // duration={500}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-4">
              <h2 className="text-base uppercase font-titleFont mb-4">
                Find me on
              </h2>
              <div className="flex gap-4">
                <span className="bannerIcon">
                  <FaFacebookF />
                </span>
                <span className="bannerIcon">
                  <FaTwitter />
                </span>
                <span className="bannerIcon">
                  <FaLinkedinIn />
                </span>
              </div>
            </div>
            <span
              onClick={() => setShowMenu(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
            >
              <MdClose />
            </span>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};
//     </motion.div>
//   </div>
// );
// };

export default Navbar;
