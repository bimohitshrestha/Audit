"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import HeroSection from "../Herosection/HeroSection";
import ButtonText from "../common/button/ButtonText";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("/");

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const navigationItems = [
    { href: "", label: "Home" },
    { href: "#service", label: "Services" },
    { href: "#trust", label: "Trust" },
    { href: "#about", label: "About Us" },
    { href: "#career", label: "Careers" },
    { href: "#blog", label: "Blogs" },
    // { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className={`transition-all duration-300 p-6 bg-gradient-to-r from-white via-blue-300 to-green-500 rounded-3xl m-8 font-bold mb-32`}
      style={{ height: "calc(100vh - 3.8rem)" }}
    >
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/">
            <div className="flex items-center space-x-3 group">
              <div className="relative h-16 w-16 overflow-hidden rounded-lg shadow-md transition-transform group-hover:scale-105">
                <Image
                  src="/logo.jpg"
                  alt="free image"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-Merriweather">
                Chartered Management
              </span>
            </div>
          </Link>

          <div className="hidden md:hidden lg:block md:text-base justify-center">
            <div className="flex space-x-5">
              {navigationItems.map(({ href, label }) => {
                const isActive = activeItem === href;
                return (
                  <Link key={href} href={href}>
                    <div
                      className={`relative px-4 py-2 rounded-md text-lg font-medium  hover:bg-level  hover:text-white transition-all duration-200`}
                      onClick={() => setActiveItem(href)}
                    >
                      {label}
                      {isActive && (
                        <motion.div
                          layoutId="activeIndicator"
                          className="absolute bottom-0 left-0 right-0 h-0.5"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.2 }}
                        />
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <ButtonText name="Sign in" />

            <div className="lg:hidden relative">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                  scrolled
                    ? "text-gray-800 hover:bg-gray-100 focus:ring-gray-300"
                    : "text-black hover:bg-white/10 focus:ring-white/30"
                }`}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <FiX className="h-6 w-6" />
                ) : (
                  <FiMenu className="h-6 w-6" />
                )}
              </button>

              <AnimatePresence>
                {isMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute right-0 top-full mt-2 w-56 z-50"
                  >
                    <div className="shadow-lg px-4 pt-2 pb-4 custom-gradient rounded-lg">
                      {navigationItems.map(({ href, label }) => (
                        <Link key={href} href={href}>
                          <div
                            className={`block py-3 px-4 text-base rounded-md mb-1 transition-all  ${
                              activeItem === href
                                ? " text-blue-500 font-normal"
                                : "text-gray-800"
                            }`}
                            onClick={() => {
                              setActiveItem(href);
                              setIsMenuOpen(false);
                            }}
                          >
                            {label}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      <HeroSection />
    </nav>
  );
}
