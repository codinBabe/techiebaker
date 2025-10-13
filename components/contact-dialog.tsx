"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogTitle,
} from "@/components/ui/dialog";
import { Email, Linkedin, Twitter, Github, Bant } from "@/hooks/use-icon";

interface ContactProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Contact = ({ isOpen, setIsOpen }: ContactProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogOverlay className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
      <DialogContent
        aria-describedby={undefined}
        className="fixed left-1/2 top-1/2 w-full max-w-xs md:max-w-md -translate-x-1/2 -translate-y-1/2 
                   bg-white p-4 rounded-xl shadow-xl space-y-4"
      >
        <DialogTitle className="sr-only">Contact Oluwatoyin</DialogTitle>

        {/* Title and subtitle */}
        <div className="border-b border-foreground-muted pb-2 space-y-1">
          <Bant />
          <h1 className="text-2xl font-semibold">Contact Oluwatoyin</h1>
          <p className="text-sm">Software Engineer • Full Stack Developer</p>
        </div>

        {/* Social links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-2 text-center">
          {[
            {
              href: "mailto:oluwatoyinoredein@gmail.com",
              icon: <Email />,
              text: "Email",
            },
            {
              href: "https://linkedin.com/in/oluwatoyin-oredein",
              icon: <Linkedin />,
              text: "LinkedIn",
            },
            {
              href: "https://github.com/codinBabe",
              icon: <Github />,
              text: "GitHub",
            },
            {
              href: "https://twitter.com/techiebaker",
              icon: <Twitter />,
              text: "Twitter",
            },
          ].map(({ href, icon, text }) => (
            <motion.a
              key={href}
              whileHover={{ scale: 1.1 }}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-1 text-sm"
            >
              <span className="w-14 h-14 bg-background rounded-full p-2 flex items-center justify-center">
                {icon}
              </span>
              <span>{text}</span>
            </motion.a>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Contact;
