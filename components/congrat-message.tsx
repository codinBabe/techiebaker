import { motion } from "framer-motion";

const CongratMessage = () => {
  return (
    <motion.div
      className="my-2 md:text-lg font-semibold"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: [0.8, 1.1, 1], opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      🎉 Congratulations! You’ve unlocked your cupcake{" "}
      <motion.span
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className="inline-block"
      >
        🧁
      </motion.span>
    </motion.div>
  );
};
export default CongratMessage;
