import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../contants";
import { logo, menu, close } from "../assets";
import cn from "../utils/twMerge";

const Navbar: React.FC = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className={cn(
        `${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`
      )}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to={"/"}
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-11 h-11 md:w-11 md:h-11  object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Andro &nbsp; <span className="sm:block"> | Web Developer</span>{" "}
          </p>
        </Link>
        <ul className="list-non hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => {
            return (
              <li
                key={link.id}
                className={cn(
                  `hover:text-white text-[18px] font-medium cursor-pointer`,
                  active === link.title ? "text-white" : "text-secondary"
                )}
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}> {link.title} </a>
              </li>
            );
          })}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center ">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => {
              setToggle((prev) => !prev);
            }}
          />

          <div
            className={cn(
              `p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`,
              `${!toggle ? "hidden" : "flex"}`
            )}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => {
                return (
                  <li
                    key={link.id}
                    className={cn(
                      ` font-poppins font-medium cursor-pointer text-[16px]`,
                      active === link.title ? "text-white" : "text-secondary"
                    )}
                    onClick={() => {
                      setActive(link.title)
                      setToggle(prev => !prev)
                    }}
                  >
                    <a href={`#${link.id}`}> {link.title} </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
