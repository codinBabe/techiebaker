import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function AboutCard({ number, text, children, clsname }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  const sectionVariants = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.5, ease: "easeOut" },
    },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <div className="my-10 md:flex items-start gap-48">
      <motion.div
        ref={ref}
        variants={sectionVariants}
        initial="hidden"
        animate={controls}
        className="flex items-center gap-3 mt-5 mb-3"
      >
        <div className="bg-primaryOrange w-[48px] py-1 px-2 text-white rounded-r-2xl">
          {number}
        </div>
        <h2 className="md:whitespace-nowrap">{text}</h2>
      </motion.div>
      <div className={clsname}>{children}</div>
    </div>
  );
}
