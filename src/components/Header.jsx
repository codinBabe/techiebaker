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

  const menuItems = [
    { name: "Home", path: "/", isActive: location.pathname === "/" },
    {
      name: "Works",
      path: "/works",
      isActive: location.pathname.includes("/works"),
    },
    { name: "About", path: "/about", isActive: location.pathname === "/about" },
    {
      name: "Resume",
      path: "/resume",
      isActive: location.pathname === "/resume",
    },
  ];

  const renderMenuItem = (
    { name, path, isActive },
    index,
    isMobile = false
  ) => {
    const isFirstChild = index === 0;
    const isLastChild = index === menuItems.length - 1;

    const roundedClasses = isFirstChild
      ? "rounded-tl-full rounded-bl-full"
      : isLastChild
      ? "rounded-tr-full rounded-br-full"
      : "";

    return (
      <li key={name}>
        <Link
          to={path}
          className={`${
            isActive
              ? "bg-orange300 font-helvetica-medium text-primaryBlack"
              : "bg-none font-helvetica-regular text-black100"
          }
            ${
              isMobile
                ? "rounded-[50px] py-3 px-3 ml-[-12px] border-none"
                : `py-[10px] px-[16px] ${roundedClasses}`
            }
            border border-orange400 flex items-center justify-between`}
        >
          {isMobile && name}
          {isActive && (
            <img src={Tick} alt="tick" className="w-4 h-4 md:mr-2" />
          )}
          {!isMobile && name}
        </Link>
      </li>
    );
  };

  return (
    <header
      className="relative md:bg-orange100 md:border-b border-orange200 md:fixed"
      style={{ top: 0, width: "100%", zIndex: 1000 }}
    >
      {/* Desktop View */}
      <nav className="hidden md:flex w-[80%] mx-auto py-4 px-2 justify-between items-center">
        <Logo />
        <ul className="desktop-nav flex items-center">
          {menuItems.map((item, index) => renderMenuItem(item, index))}
        </ul>
        <button
          onClick={() => setIsContactOpen(true)}
          className="bg-primaryOrange border-2 text-white text-sm px-[12px] py-[14px] rounded-lg"
        >
          Contact Oluwatoyin
        </button>
      </nav>

      {/* Mobile View */}
      <nav className="md:hidden w-[90%] mx-auto py-4 px-2 flex justify-between items-center">
        <Logo />
        <button
          ref={menuButtonRef}
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-1 text-sm fixed z-20 bg-white rounded-[50px] p-3"
          style={{
            bottom: 0,
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
              className="fixed inset-0 z-10 overflow-auto bg-black bg-opacity-60 flex flex-col justify-end items-center pb-20"
            >
              <motion.ul
                variants={modal}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="flex flex-col gap-2 w-[80%] bg-white rounded-[32px] py-6 pr-5 pl-7 relative z-20"
              >
                {menuItems.map((item, index) =>
                  renderMenuItem(item, index, true)
                )}
                <li>
                  <button
                    onClick={() => {
                      setIsContactOpen(true);
                      setIsOpen(false);
                    }}
                    className="w-full bg-none font-helvetica-regular text-black100 flex items-center justify-between"
                  >
                    Contact Oluwatoyin
                  </button>
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
