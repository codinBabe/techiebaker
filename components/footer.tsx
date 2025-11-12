"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "./ui/button";
import { Logo } from "@/hooks/use-icon";
import Contact from "./contact-dialog";

const Footer = () => {
  const [isContactOpen, setIsContactOpen] = React.useState(false);

  const socialLinks = [
    { href: "mailto:oluwatoyinoredein@gmail.com", label: "Email" },
    { href: "https://linkedin.com/in/oluwatoyin_oredein", label: "LinkedIn" },
    { href: "https://github.com/codinBabe", label: "GitHub" },
    { href: "https://twitter.com/techiebaker", label: "Twitter" },
  ];

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/work", label: "Works" },
    { to: "/about", label: "About" },
    { to: "/resume", label: "Resume" },
  ];

  // helper to render navigation and social links
  const renderLinks = (
    links: { href?: string; to?: string; label: string }[],
    isExternal = false
  ) =>
    links.map(({ href, to, label }, index) => (
      <span key={label}>
        {isExternal ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:underline"
          >
            {label}
          </a>
        ) : (
          <Link href={to!} className="text-sm hover:underline">
            {label}
          </Link>
        )}
        {index < links.length - 1 && <span className="text-sm mx-2">|</span>}
      </span>
    ));

  const sendEmail = () => {
    const recipientEmail = "oluwatoyinoredein@gmail.com";
    const subject = "Let's work together";
    window.location.href = `mailto:${recipientEmail}?subject=${encodeURIComponent(
      subject
    )}`;
  };

  return (
    <footer className="w-full space-y-10 mt-8">
      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center space-y-4 px-4"
      >
        <h2 className="block md:hidden text-[28px] md:text-[40px] font-semibold leading-tight">
          Let us work together on your next project or product
        </h2>
        <h2 className="hidden md:block text-[28px] md:text-[40px] font-semibold leading-tight">
          Let us work together on your next <br /> project or product
        </h2>
        <p>
          Bringing your ideas and products from conceptualisation to reality is
          what I live for.
        </p>
        <Button onClick={sendEmail} size={"lg"} variant={"outline"}>
          Send an email
        </Button>
      </motion.div>

      {/* Footer Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="space-y-6 border-t border-tertiary"
      >
        <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-4 justify-center md:justify-between mt-4">
          {/* Logo + Socials */}
          <div className="flex flex-col items-center">
            <Link href="/">
              <Logo />
            </Link>
            <div className="flex items-center mt-1">
              {renderLinks(socialLinks, true)}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex justify-center items-center">
            {renderLinks(navLinks)}
          </div>

          {/* Contact Button */}
          <Button onClick={() => setIsContactOpen(true)} size={"lg"}>
            Contact Oluwatoyin
          </Button>
        </div>

        {/* Attribution */}
        <p className="text-center">
          Designed by{" "}
          <a
            href="https://x.com/dareytemy"
            target="_blank"
            rel="noopener noreferrer"
            className="underline font-helvetica-medium"
          >
            Isaac
          </a>{" "}
          and developed by{" "}
          <a
            href="https://twitter.com/techiebaker"
            target="_blank"
            rel="noopener noreferrer"
            className="underline font-helvetica-medium"
          >
            Me
          </a>
        </p>
      </motion.div>

      {/* Contact Modal */}

      {isContactOpen && (
        <Contact isOpen={isContactOpen} setIsOpen={setIsContactOpen} />
      )}
    </footer>
  );
};

export default Footer;
