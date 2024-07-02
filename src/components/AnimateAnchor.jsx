import { motion } from "framer-motion";

export default function AnchorTag({ href, src, text }) {
  const anchorVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.3,
      },
    },
  };
  return (
    <motion.a
      variants={anchorVariants}
      whileHover="hover"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span>
        <img src={src} alt="icon" />
      </span>
      <span>{text}</span>
    </motion.a>
  );
}
