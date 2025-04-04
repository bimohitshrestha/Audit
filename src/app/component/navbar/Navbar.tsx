"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import HeroSection from "../Herosection/HeroSection";
import ButtonText from "../common/button/ButtonText";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("/homepage");

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    {
      /* <div className="ml-6 hidden lg:block">
        <Link href="/get-started">
          <button
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 bg-kalo text-seto shadow-md hover:shadow-lg transform hover:-translate-y-0.5`}
          >
            Get Started
          </button>
        </Link>
      </div> */
    }
  }, [scrolled]);

  const navigationItems = [
    { href: "", label: "Home" },
    { href: "", label: "Services" },
    { href: "", label: "Blogs" },
    { href: "", label: "Careers" },
    { href: "", label: "Contact" },
  ];

  return (
    <nav
      className={` h-screen transition-all duration-300 p-6  bg-amber-100 rounded-3xl m-8  text-kalo font-bold`}
    >
      <div className=" px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/homepage">
            <div className="flex items-center space-x-3 group">
              <div className="relative h-16 w-16 overflow-hidden rounded-lg shadow-md transition-transform group-hover:scale-105">
                <img
                  src="https://cdn.pixabay.com/photo/2022/03/28/08/12/business-7096914_1280.png"
                  alt="AuditPro Logo"
                  className="object-cover"
                />
              </div>
              <span className="text-xl font-bold text-rato">Audit</span>
            </div>
          </Link>

          <div className="hidden md:flex flex-grow justify-center">
            <div className="flex space-x-5">
              {navigationItems.map(({ href, label }) => {
                const isActive = activeItem === href;
                return (
                  <Link key={href} href="">
                    <div
                      className={`relative px-4 py-2 rounded-md text-lg font-medium hover:text-level transition-all duration-200 `}
                      onClick={() => setActiveItem(href)}
                    >
                      {label}
                      {isActive && (
                        <motion.div
                          layoutId="activeIndicator"
                          className="absolute bottom-0 left-0 right-0 h-0.5 "
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

          <ButtonText name="Sign in" />

          <div className="md:hidden">
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
          </div>
        </div>
      </div>

      {/* <div className="flex mt-20"> */}
      {/* <div className="w-full lg:w-1/2">
       <h3 className="text-black"> </h3>
       </div> */}

      <HeroSection />
      {/* </div> */}

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
          >
            <div className={`shadow-lg px-4 pt-2 pb-4 bg-secondary`}>
              {navigationItems.map(({ href, label }) => (
                <Link key={href} href={href}>
                  <div
                    className={`block py-3 px-4 text-base rounded-md mb-1 transition-all ${
                      activeItem === href &&
                      (scrolled
                        ? " text-blue-600 font-medium"
                        : " text-primary font-medium")
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
    </nav>
  );
}
