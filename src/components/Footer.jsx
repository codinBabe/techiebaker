import { useState } from "react";
import Logo from "../assets/logo.svg";
import Contact from "./Contact";
import AnimationContainer from "../utils/AnimationContainer";
import { Link } from "react-router-dom";
export default function Footer() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <footer className="w-full mt-14 md:mt-20 md:border-t border-orange200">
      <AnimationContainer>
        <div className="w-[80%] mx-auto">
          <div className="grid md:grid-cols-3 gap-6 md:gap-52 mt-10 justify-center">
            <div className="flex flex-col items-center">
              <div>
                <img src={Logo} alt="logo" />
              </div>
              <div className="flex items-center mt-1">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="mailto:oluwatoyinoredein@gmail.com"
                  className="text-sm mr-2 hover:underline"
                >
                  Email
                </a>
                <span className="text-sm mr-2">|</span>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://linkedin.com/in/oluwatoyin_oredein"
                  className="text-sm mr-2 hover:underline"
                >
                  LinkedIn
                </a>
                <span className="text-sm mr-2">|</span>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/codinBabe"
                  className="text-sm mr-2 hover:underline"
                >
                  GitHub
                </a>
                <span className="text-sm mr-2">|</span>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://twitter.com/techiebaker"
                  className="text-sm mr-2 hover:underline"
                >
                  Twitter
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <Link to="/" className="mr-2 hover:underline">
                Home
              </Link>
              <span className="text-sm mr-2">|</span>
              <Link to="/works" className="mr-2 hover:underline">
                Works
              </Link>
              <span className="text-sm mr-2">|</span>
              <Link to="/about" className="mr-2 hover:underline">
                About
              </Link>
              <span className="text-sm mr-2">|</span>
              <Link to="/resume" className="mr-2 hover:underline">
                Resume
              </Link>
            </div>

            <button
              onClick={() => setIsContactOpen(true)}
              className="bg-primaryOrange border-2 text-white text-sm px-[12px] py-[14px] rounded-lg"
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
