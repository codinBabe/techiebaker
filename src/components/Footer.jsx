import { useState } from "react";
import Logo from "../assets/logo.svg";
import Contact from "./Contact";
import AnimationContainer from "../utils/AnimationContainer";
import { Link } from "react-router-dom";

export default function Footer() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const socialLinks = [
    { href: "mailto:oluwatoyinoredein@gmail.com", label: "Email" },
    { href: "https://linkedin.com/in/oluwatoyin_oredein", label: "LinkedIn" },
    { href: "https://github.com/codinBabe", label: "GitHub" },
    { href: "https://twitter.com/techiebaker", label: "Twitter" },
  ];

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/works", label: "Works" },
    { to: "/about", label: "About" },
    { to: "/resume", label: "Resume" },
  ];

  const renderLinks = (links, isExternal = false) =>
    links.map(({ href, to, label }, index) => (
      <span key={label}>
        {isExternal ? (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={href}
            className="text-sm hover:underline"
          >
            {label}
          </a>
        ) : (
          <Link to={to} className="text-sm hover:underline">
            {label}
          </Link>
        )}
        {index < links.length - 1 && <span className="text-sm mx-2">|</span>}
      </span>
    ));

  return (
    <footer className="w-full mt-14 md:mt-20 md:border-t border-orange200">
      <AnimationContainer>
        <div className="w-[80%] mx-auto">
          <div className="grid md:grid-cols-3 gap-6 md:gap-52 mt-10 justify-center">
            <div className="flex flex-col items-center">
              <img src={Logo} alt="logo" />
              <div className="flex items-center mt-1">
                {renderLinks(socialLinks, true)}
              </div>
            </div>
            <div className="flex items-center">{renderLinks(navLinks)}</div>
            <button
              onClick={() => setIsContactOpen(true)}
              className="bg-primaryOrange border-2 text-white text-sm px-[12px] py-[14px] rounded-lg md:w-[58%] md:ml-28"
            >
              Contact Oluwatoyin
            </button>
          </div>
          <p className="text-center my-5 md:mt-10 md:mb-8 text-sm">
            Designed by{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://x.com/dareytemy"
              className="underline font-helvetica-medium"
            >
              Isaac
            </a>{" "}
            and developed by{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/techiebaker"
              className="underline font-helvetica-medium"
            >
              Me
            </a>
          </p>
        </div>
      </AnimationContainer>

      {isContactOpen && (
        <Contact isOpen={isContactOpen} setIsOpen={setIsContactOpen} />
      )}
    </footer>
  );
}
