import React, { useEffect, useState, useRef } from "react";
import Logo from "../utils/icons/Logo";
import Menu from "../assets/menu.svg";
import Close from "../assets/clear.svg";
import Tick from "../assets/tick-icon.svg";
import { Link, useLocation } from "react-router-dom";
import Contact from "./Contact";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const menuButtonRef = useRef(null);
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });

  const backdrop = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const modal = {
    hidden: {
      x: buttonPosition.x,
      y: buttonPosition.y,
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  useEffect(() => {
    if (menuButtonRef.current) {
      const rect = menuButtonRef.current.getBoundingClientRect();
      setButtonPosition({ x: rect.left, y: rect.top });
    }
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header
      className="relative md:bg-orange100 md:border-b border-orange200 md:fixed"
      style={{
        top: "0",
        width: "100%",
        zIndex: "1000",
      }}
    >
      {/* Desktop View */}
      <nav className="hidden md:flex w-[80%] mx-auto py-4 px-2 justify-between items-center">
        <div>
          <Logo />
        </div>
        <div>
          <ul className="flex items-center">
            <li>
              <Link
                to="/"
                className={`${
                  location.pathname === "/"
                    ? "bg-orange300 font-helvetica-medium text-primaryBlack"
                    : "bg-none font-helvetica-regular text-black100"
                } py-[10px] px-[20px] border border-orange400 rounded-tl-full rounded-bl-full flex items-center gap-2`}
              >
                {location.pathname === "/" && (
                  <img src={Tick} alt="tick" className="w-4 h-4" />
                )}
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/works"
                className={`${
                  location.pathname.includes("/works")
                    ? "bg-orange300 font-helvetica-medium text-primaryBlack"
                    : "bg-none font-helvetica-regular text-black100"
                } py-[10px] px-[16px] border border-orange400 flex items-center gap-2`}
              >
                {location.pathname.includes("/works") && (
                  <img src={Tick} alt="tick" className="w-4 h-4" />
                )}
                Works
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`${
                  location.pathname === "/about"
                    ? "bg-orange300 font-helvetica-medium text-primaryBlack"
                    : "bg-none font-helvetica-regular text-black100"
                } py-[10px] px-[16px] border border-orange400 flex items-center gap-2`}
              >
                {location.pathname === "/about" && (
                  <img src={Tick} alt="tick" className="w-4 h-4" />
                )}
                About
              </Link>
            </li>
            <li>
              <Link
                to="/resume"
                className={`${
                  location.pathname === "/resume"
                    ? "bg-orange300 font-helvetica-medium text-primaryBlack"
                    : "bg-none font-helvetica-regular text-black100"
                } py-[10px] px-[18px] border border-orange400 rounded-tr-full rounded-br-full flex items-center gap-2`}
              >
                {location.pathname === "/resume" && (
                  <img src={Tick} alt="tick" className="w-4 h-4" />
                )}
                Resume
              </Link>
            </li>
          </ul>
        </div>
        {/* Right: Contact Link */}
        <button
          onClick={() => setIsContactOpen(true)}
          className="bg-primaryOrange border-2 text-white text-sm px-[12px] py-[14px] rounded-lg"
        >
          Contact Oluwatoyin
        </button>
      </nav>

      {/* Mobile View */}
      <nav className="md:hidden w-[90%] mx-auto py-4 px-2 flex justify-between items-center">
        <div>
          <Logo />
        </div>
        <button
          ref={menuButtonRef}
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-1 text-sm fixed z-20 bg-white rounded-[50px] p-3"
          style={{
            bottom: "0",
            right: "60px",
            transform: "translate(50%, -50%)",
          }}
        >
          <img src={isOpen ? Close : Menu} alt="menu" />
          <span>{isOpen ? "CLOSE" : "MENU"}</span>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={backdrop}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="fixed inset-0 z-10 overflow-auto bg-black bg-opacity-60 flex flex-col justify-center items-center gap-4"
              style={{ justifyContent: "flex-end", paddingBottom: "80px" }}
            >
              <motion.ul
                variants={modal}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="flex flex-col gap-6 w-[80%] bg-white rounded-[32px] py-6 pr-5 pl-7 relative z-20"
              >
                <li>
                  <Link
                    to="/"
                    className={`${
                      location.pathname === "/"
                        ? "bg-orange300 rounded-[50px] py-3 px-3 ml-[-12px] text-primaryBlack font-helvetica-medium"
                        : "bg-none font-helvetica-regular text-black100"
                    } flex items-center justify-between`}
                  >
                    Home
                    {location.pathname === "/" && (
                      <img src={Tick} alt="tick" className="w-4 h-4" />
                    )}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/works"
                    className={`${
                      location.pathname.includes("/works")
                        ? "bg-orange300 rounded-[50px] py-3 px-3 ml-[-12px] text-primaryBlack font-helvetica-medium"
                        : "bg-none font-helvetica-regular text-black100"
                    } flex items-center justify-between`}
                  >
                    Works
                    {location.pathname.includes("/works") && (
                      <img src={Tick} alt="tick" className="w-4 h-4" />
                    )}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className={`${
                      location.pathname === "/about"
                        ? "w-full bg-orange300 rounded-[50px] py-3 px-3 ml-[-12px] text-primaryBlack font-helvetica-medium"
                        : "bg-none font-helvetica-regular text-black100"
                    } flex items-center justify-between`}
                  >
                    About
                    {location.pathname === "/about" && (
                      <img src={Tick} alt="tick" className="w-4 h-4" />
                    )}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/resume"
                    className={`${
                      location.pathname === "/resume"
                        ? "w-full bg-orange300 rounded-[50px] py-3 px-3 ml-[-12px] text-primaryBlack font-helvetica-medium"
                        : "bg-none font-helvetica-regular text-black100"
                    } flex items-center justify-between`}
                  >
                    Resume
                    {location.pathname === "/resume" && (
                      <img src={Tick} alt="tick" className="w-4 h-4" />
                    )}
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => setIsContactOpen(true)}
                    className={`${
                      location.pathname === "/contact"
                        ? "w-full bg-orange300 rounded-[50px] py-3 px-3 ml-[-12px] text-primaryBlack font-helvetica-medium"
                        : "bg-none font-helvetica-regular text-black100"
                    } flex items-center justify-between`}
                  >
                    Contact Oluwatoyin
                    {location.pathname === "/contact" && (
                      <img src={Tick} alt="tick" className="w-4 h-4" />
                    )}
                  </Link>
                </li>
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      {isContactOpen && (
        <Contact isOpen={isContactOpen} setIsOpen={setIsContactOpen} />
      )}
    </header>
  );
}
