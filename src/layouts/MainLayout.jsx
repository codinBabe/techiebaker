import { Outlet, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Cta from "../components/Cta";
import { useState, useEffect } from "react";
import Loader from "../utils/Loader";

function MainLayout() {
  const location = useLocation();
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const isFirstTimeUser = !localStorage.getItem("hasVisitedBefore");

    if (isFirstTimeUser) {
      setShowLoader(true);
    } else {
      setShowLoader(false);
    }

    const loaderTimer = setTimeout(() => setShowLoader(false), 2500);

    return () => clearTimeout(loaderTimer);
  }, []);

  if (showLoader) {
    return <Loader />;
  }

  return (
    <>
      <Header />
      <AnimatePresence mode="wait">
        <motion.main
          className="w-[90%] md:w-[80%] mx-auto mt-2"
          key={location.pathname}
          initial={{ opacity: 0, x: "100vw" }}
          animate={{ opacity: 1, x: 0 }}
          variants={{ exit: { x: "-100vh" } }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Cta />
      <Footer />
    </>
  );
}

export default MainLayout;
