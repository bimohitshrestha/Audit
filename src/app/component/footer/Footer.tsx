import React from "react";
import { BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="md:flex md:justify-between">
          <div className="space-y-6 md:w-1/3">
            <h3 className="text-lg font-semibold uppercase text-gray-300">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-6 md:w-1/3">
            <h3 className="text-lg font-semibold uppercase text-gray-300">
              Legal
            </h3>
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
            </ul>
          </div>

          <div className="space-y-6 md:w-1/3">
            <h3 className="text-lg font-semibold uppercase text-gray-300">
              Connect
            </h3>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-600 transition duration-300"
              >
                <span className="sr-only">Facebook</span>
                <FaFacebook size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-pink-600 transition duration-300"
              >
                <span className="sr-only">Instagram</span>
                <BsInstagram size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition duration-300"
              >
                <span className="sr-only">Twitter</span>
                <BsTwitter size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-500 transition duration-300"
              >
                <span className="sr-only">LinkedIn</span>
                <BsLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 Vehicle. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
