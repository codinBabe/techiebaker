import Email from "../assets/mail.svg";
import Linkedin from "../assets/linkedin.svg";
import Twitter from "../assets/twitter.svg";
import Github from "../assets/github.svg";
import Close from "../assets/clear.svg";
import Bant from "../assets/bant.svg";
import { motion, AnimatePresence } from "framer-motion";
import AnchorTag from "./AnimateAnchor";
export default function Contact({ isOpen, setIsOpen }) {
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
    <AnimatePresence>
      {isOpen && (
        <main>
          <motion.div
            variants={backdrop}
            initial="hidden"
            animate="visible"
            className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-60 flex justify-center items-center"
          >
            <motion.div
              variants={modal}
              className="contact-modal bg-white py-8 px-6 rounded-lg relative"
            >
              <img src={Bant} alt="bant" />
              <div className="border-b border-b-black200">
                <h1 className="text-2xl font-helvetica-medium">
                  Contact Oluwatoyin
                </h1>
                <p className="text-black100 mb-2">
                  Software engineer • Full stack developer
                </p>
              </div>
              <div className="contact-icons grid grid-cols-3 gap-5 mt-5 text-sm">
                <AnchorTag
                  href="mailto:oluwatoyinoredein@gmail.com"
                  src={Email}
                  text={"Email"}
                ></AnchorTag>
                <AnchorTag
                  href="https://linkedin.com/in/oluwatoyin-oredein"
                  src={Linkedin}
                  text="LinkedIn"
                ></AnchorTag>

                <AnchorTag
                  href="https://github.com/codinBabe"
                  src={Github}
                  text="Github"
                ></AnchorTag>
                <AnchorTag
                  href="https://twitter.com/techiebaker"
                  src={Twitter}
                  text="Twitter"
                ></AnchorTag>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-0 right-0 m-4"
              >
                <img src={Close} alt="icon" />
              </button>
            </motion.div>
          </motion.div>
        </main>
      )}
    </AnimatePresence>
  );
}
