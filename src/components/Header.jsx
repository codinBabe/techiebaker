import React, { useState } from "react";
import Logo from "../utils/icons/Logo";
import Menu from "../assets/menu.svg";
import Close from "../assets/clear.svg";
import { Link, useLocation } from "react-router-dom";
import Contact from "./Contact";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const backdrop = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const modal = {
    hidden: { y: "-100vh", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { delay: 0.5 },
    },
  };

  return (
    <header>
      <nav className="w-[90%] mx-auto py-4 px-2">
        <div className="flex items-center justify-between relative z-10">
          <div>
            <Logo />
          </div>

          <button
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-1 text-sm relative z-10 bg-white rounded-[50px] p-3"
          >
            <img src={Menu} alt="menu" />
            <span>MENU</span>
          </button>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={backdrop}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="menu fixed inset-0 z-50 overflow-auto bg-black bg-opacity-60 flex flex-col justify-center items-center gap-4"
            >
              <motion.ul
                variants={modal}
                className="flex flex-col gap-6 w-[90%] bg-white rounded-[32px] py-6 px-5"
              >
                <li>
                  <Link
                    to="/"
                    className={location.pathname === "/" ? "active" : ""}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/works"
                    className={
                      location.pathname.includes("/works") ? "active" : ""
                    }
                  >
                    Works
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className={location.pathname === "/about" ? "active" : ""}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/resume"
                    className={location.pathname === "/resume" ? "active" : ""}
                  >
                    Resume
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => setIsContactOpen(true)}
                    className={location.pathname === "/contact" ? "active" : ""}
                  >
                    Contact Oluwatoyin
                  </Link>
                </li>
              </motion.ul>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="ml-52 flex items-center gap-1 text-sm relative z-10 bg-white rounded-[50px] p-3"
              >
                <img src={Close} alt="close" />
                <span>CLOSE</span>
              </button>
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
