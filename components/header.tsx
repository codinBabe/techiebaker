"use client";

import { useEffect, useState } from "react";
import { Menu, X, Check } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Contact from "./contact-dialog";
import { Logo } from "@/hooks/use-icon";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogOverlay,
  DialogTrigger,
} from "./ui/dialog";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const menuItems = [
    { name: "Home", path: "/", isActive: pathname === "/" },
    { name: "Works", path: "/work", isActive: pathname.includes("/work") },
    { name: "About", path: "/about", isActive: pathname === "/about" },
    { name: "Resume", path: "/resume", isActive: pathname === "/resume" },
  ];

  const renderMenuItem = (
    { name, path, isActive }: { name: string; path: string; isActive: boolean },
    index: number,
    isMobile = false
  ) => {
    const isFirstChild = index === 0;
    const isLastChild = index === menuItems.length - 1;

    const roundedClasses = isFirstChild
      ? "rounded-tl-full rounded-bl-full"
      : isLastChild
      ? "rounded-tr-full rounded-br-full"
      : "";

    return (
      <li key={name}>
        <Link
          href={path}
          className={`${
            isActive
              ? "bg-secondary font-medium"
              : "bg-none text-foreground-secondary"
          } ${
            isMobile
              ? "rounded-[50px] p-3 border-none"
              : `py-[10px] px-[16px] ${roundedClasses}`
          } border border-muted flex items-center justify-between transition-all duration-300 hover:bg-tertiary`}
        >
          {isMobile && name}
          {isActive && <Check className="w-4 h-4 md:mr-2" />}
          {!isMobile && name}
        </Link>
      </li>
    );
  };

  return (
    <header className="md:bg-background md:border-b border-tertiary">
      <div className="w-full max-w-6xl py-4 px-2 mx-auto relative">
        {/* Desktop Navigation */}
        <nav className="hidden md:flex justify-between items-center">
          <Logo />
          <ul className="flex items-center">
            {menuItems.map((item, index) => renderMenuItem(item, index))}
          </ul>
          <Button onClick={() => setIsContactOpen(true)} size={"lg"}>
            Contact Oluwatoyin
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <nav className="md:hidden flex justify-between items-center">
          <Link href="/">
            <Logo />
          </Link>

          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogOverlay className="fixed inset-0 bg-black/50 backdrop-blur-sm" />

            <DialogContent
              aria-describedby={undefined}
              className="fixed left-1/2 top-1/2 w-full max-w-[280px] -translate-x-1/2 -translate-y-1/2 
                   bg-white p-4 rounded-[30px] shadow-xl space-y-4"
            >
              <DialogTitle className="sr-only">Menu</DialogTitle>
              <ul className="flex flex-col justify-center gap-2">
                {menuItems.map((item, index) =>
                  renderMenuItem(item, index, true)
                )}
                <li>
                  <button
                    onClick={() => {
                      setIsContactOpen(true);
                      setIsOpen(false);
                    }}
                    className="w-full text-foreground-secondary ml-3 flex items-center justify-between"
                  >
                    Contact Oluwatoyin
                  </button>
                </li>
              </ul>
            </DialogContent>

            <DialogTrigger className="fixed inline-flex items-center justify-center gap-2 whitespace-nowrap border border-primary bg-white text-foreground z-20 bottom-8 right-2.5 shadow-shadow h-9 rounded-full px-3">
              {isOpen ? <X size={18} /> : <Menu size={18} />}
              <span>{isOpen ? "CLOSE" : "MENU"}</span>
            </DialogTrigger>
          </Dialog>
        </nav>

        {isContactOpen && (
          <Contact isOpen={isContactOpen} setIsOpen={setIsContactOpen} />
        )}
      </div>
    </header>
  );
}
