import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function CustomSection({ number, title, className, children }) {
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
    <section className="mt-10 md:mt-20 mx-auto">
      <motion.div
        ref={ref}
        variants={sectionVariants}
        initial="hidden"
        animate={controls}
      >
        <p>{number}</p>
        <h2 className="font-fraunces font-semibold text-2xl mb-2">{title}</h2>
      </motion.div>
      <div className={className}>{children}</div>
    </section>
  );
}
