import React from "react";
import {
  BsInstagram,
  BsTwitterX,
  BsLinkedin,
  BsWhatsapp,
} from "react-icons/bs";
import { FaFacebook } from "react-icons/fa6";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-white mb-3">
                Chartered Management
              </h2>
              <p className="text-gray-400 text-lg">
                Your Wealth , Our Responsibility
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MdLocationOn className="text-blue-600" size={22} />
                <span className="text-gray-300 text-base">
                  Dillibazar, Kathmandu
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <MdPhone className="text-green-600" size={22} />
                <span className="text-gray-300 text-base">
                  9851012852,9849909999
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <MdEmail className="text-rose-600" size={22} />
                <span className="text-gray-300 text-base">
                  bidur9999@gmail.com
                </span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-6 text-white">Company</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#service"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#career"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-6 text-white">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Refund Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-6 text-white">
              Connect With Us
            </h3>
            <div className="flex gap-3 justify-center">
              <a
                href="#"
                className="flex items-center justify-center p-3 bg-gray-800 rounded-full hover:bg-blue-500 transition duration-300 pointer-events-none opacity-50"
              >
                <FaFacebook
                  size={24}
                  className="text-gray-200 hover:text-white"
                />
              </a>
              <a
                href="#"
                className="flex items-center justify-center p-3 bg-gray-800 rounded-full hover:bg-pink-700 transition duration-300 pointer-events-none opacity-50"
              >
                <BsInstagram
                  size={24}
                  className="text-gray-200 hover:text-white"
                />
              </a>
              <a
                href="#"
                className="flex items-center justify-center p-3 bg-gray-800 rounded-full hover:bg-black transition duration-300 pointer-events-none opacity-50"
              >
                <BsTwitterX
                  size={24}
                  className="text-gray-200 hover:text-white"
                />
              </a>
              <a
                href="#"
                className="flex items-center justify-center p-3 bg-gray-800 rounded-full hover:bg-green-500 transition duration-300 pointer-events-none opacity-50"
              >
                <BsWhatsapp
                  size={24}
                  className="text-gray-200 hover:text-white"
                />
              </a>
              <a
                href="#"
                className="flex items-center justify-center p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition duration-300 pointer-events-none opacity-50"
              >
                <BsLinkedin
                  size={24}
                  className="text-gray-400 hover:text-white"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-center items-center text-sm text-gray-400">
          <p>&copy; 2025 Chartered Management Pvt Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
