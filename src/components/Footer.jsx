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
    <footer className="w-[90%] mx-auto mt-14">
      <AnimationContainer>
        <div className="flex flex-col items-center">
          <div className="text-center">
            <h2 className="text-[28px] font-helvetica-medium">
              Let us work together on your next project or product
            </h2>
            <p className="my-5">
              Bringing your ideas and products from conceptualisation to reality
              is what I live for.
            </p>
            <button
              onClick={sendEmail}
              className="bg-white w-full text-primaryOrange border border-primaryOrange rounded-lg py-2 px-4"
            >
              Send an email
            </button>
          </div>
          <div className="flex flex-col gap-6 items-center mt-14">
            <div className="flex flex-col items-center">
              <div>
                <img src={Logo} alt="logo" />
              </div>
              <div className="flex items-center">
                <a
                  href="mailto:oluwatoyinoredein@gmail.com"
                  className="text-sm mr-2"
                >
                  Email
                </a>
                <span className="text-sm mr-2">|</span>
                <a
                  href="https://linkedin.com/in/oluwatoyin_oredein"
                  className="text-sm mr-2"
                >
                  LinkedIn
                </a>
                <span className="text-sm mr-2">|</span>
                <a href="https://github.com/codinBabe" className="text-sm mr-2">
                  GitHub
                </a>
                <span className="text-sm mr-2">|</span>
                <a
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
              className="bg-primaryOrange border-2 text-white text-sm px-5 py-3 rounded-lg"
            >
              Contact Oluwatoyin
            </button>
          </div>
          <p className="text-center my-5 text-sm">
            Designed by{" "}
            <a
              href="https://twitter.com/"
              className="underline font-helvetica-medium"
            >
              Isaac
            </a>{" "}
            and developed by{" "}
            <a
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
