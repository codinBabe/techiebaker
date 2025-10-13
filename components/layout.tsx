"use client";

import { useLoader } from "@/hooks/use-loader";
import { motion } from "framer-motion";
import Header from "./header";
import Footer from "./footer";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isLoading, showCircle1, showCircle2, showCircle3, showCircle4 } =
    useLoader();

  if (isLoading) {
    return (
      <motion.div
        className="flex justify-center items-center h-screen bg-white text-primary text-2xl font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {showCircle1 && "●"}
        {showCircle2 && "●"}
        {showCircle3 && "●"}
        {showCircle4 && "●"}
      </motion.div>
    );
  }

  return (
    <>
      <Header />
      <main className="w-full max-w-6xl mx-auto p-4">{children}</main>
      <Footer />
    </>
  );
}
