import { useState } from "react";
import Logo from "../assets/logo.svg";
import Contact from "./Contact";
import AnimationContainer from "../utils/AnimationContainer";
import { Link } from "react-router-dom";
export default function Footer() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  function sendEmail() {
    const recipientEmail = "oluwatoyinoredein@gmail.com";
    const mailtoUrl = "mailto:" + recipientEmail;
    window.location.href = mailtoUrl;
  }

  return (
    <footer className="w-[90%] mx-auto mt-14 md:mt-28">
      <AnimationContainer>
        <div className="flex flex-col items-center text-center">
          <div className="max-w-lg md:max-w-xl lg:max-w-3xl">
            <h2 className="block md:hidden text-[28px] md:text-[40px] font-helvetica-medium leading-tight">
              Let us work together on your next project or product
            </h2>
            <h2 className="hidden md:block text-[28px] md:text-[40px] font-helvetica-medium leading-tight">
              Let us work together on your next <br />
              project or product
            </h2>
            <p className="my-5">
              Bringing your ideas and products from conceptualisation to reality
              is what I live for.
            </p>
            <button
              onClick={sendEmail}
              className="bg-white w-full md:w-40 text-primaryOrange border border-primaryOrange rounded-lg py-[14px] px-3"
            >
              Send an email
            </button>
          </div>
          <div className="hidden md:block w-full mt-14 md:mt-24">
            <hr className="border-t border-orange200 w-[calc(100% + 2rem)] -mx-16" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-60 mt-10">
            <div className="flex flex-col items-center">
              <div>
                <img src={Logo} alt="logo" />
              </div>
              <div className="flex items-center mt-1">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="mailto:oluwatoyinoredein@gmail.com"
                  className="text-sm mr-2"
                >
                  Email
                </a>
                <span className="text-sm mr-2">|</span>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://linkedin.com/in/oluwatoyin_oredein"
                  className="text-sm mr-2"
                >
                  LinkedIn
                </a>
                <span className="text-sm mr-2">|</span>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/codinBabe"
                  className="text-sm mr-2"
                >
                  GitHub
                </a>
                <span className="text-sm mr-2">|</span>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://twitter.com/techiebaker"
                  className="text-sm mr-2"
                >
                  Twitter
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <Link to="/" className="mr-2">
                Home
              </Link>
              <span className="text-sm mr-2">|</span>
              <Link to="/works" className="mr-2">
                Works
              </Link>
              <span className="text-sm mr-2">|</span>
              <Link to="/about" className="mr-2">
                About
              </Link>
              <span className="text-sm mr-2">|</span>
              <Link to="/resume" className="mr-2">
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
              href="https://twitter.com/"
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
