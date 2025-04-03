import Link from "next/link";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaUser } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXFill } from "react-icons/ri";

const NavHeader = () => {
  return (
    <>
      <div className="bg-white w-full text-kalo border-b border-black p-2">
        <div className=" flex items-center justify-between max-w-7xl mx-auto ">
          <div className="flex items-center cursor-pointer gap-3">
            <button className="text-black">
              <FaFacebookF className="w-4 h-4 " title="facebook" />
            </button>
            <button className="">
              <IoLogoInstagram className="w-4 h-4 " title="Instagram" />
            </button>
            <button className="">
              <FaLinkedinIn className="w-4 h-4" title="Linkedin" />
            </button>
            <button>
              <RiTwitterXFill className="w-4 h-4" title="Twitter" />
            </button>
            {/* <button>
              <FiGithub className="w-4 h-4" title="Github" />
            </button> */}
          </div>
          <div className="flex items-center  space-x-8 text-sm font-medium">
            <Link href="" className="hover:text-rato">
              Careers
            </Link>
            <Link href="" className="hover:text-rato">
              Locations
            </Link>

            <Link href="" className="hover:text-rato flex items-center gap-2">
              <FaUser />
              <span>Login/Register</span>
            </Link>

            <button className="px-3 py-2 h-full text-xl bg-secondary text-seto">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavHeader;
