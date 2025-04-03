import React from "react";
import { BiSupport } from "react-icons/bi";
import { FaPerson } from "react-icons/fa6";
import { GiOfficeChair } from "react-icons/gi";
import { GrServices } from "react-icons/gr";
import { SiMicrostrategy } from "react-icons/si";
import HeaderText from "../common/HeaderText/HeaderText";
import { FaArrowRight, FaCreativeCommonsNcEu } from "react-icons/fa";

const service = [
  {
    title: "Consultant",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A illum ipsa praesentium adipisci labore dolor, corrupti eveniet possimus in corporis natus nulla eum vitae, deserunt, velit tempore reprehenderit repudiandae quia",
    icon: <FaCreativeCommonsNcEu className="w-10 h-10 text-slate-500" />,
  },
  {
    title: "Speciality Services",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. A illum ipsa praesentium adipisci labore dolor, corrupti eveniet possimus in corporis natus nulla eum vitae, deserunt, velit tempore reprehenderit repudiandae quia?",
    icon: <GrServices className="w-10 h-10 text-slate-500" />,
  },
  {
    title: "Audit & Assurance",
    description:
      "A illum ipsa praesentium adipisci labore dolor, corrupti eveniet possimus in corporis natus nulla eum vitae, deserunt, velit tempore reprehenderit repudiandae quia",
    icon: <GiOfficeChair className="w-10 h-10 text-slate-500" />,
  },
  {
    title: "Tax Planning Services",
    description:
      "Tempora pariatur eum eaque cum, reprehenderit eveniet sint nihil deleniti repellendus temporibus quia repellat qui in sequi neque",
    icon: <FaPerson className="w-10 h-10 text-slate-500" />,
  },
  {
    title: "Growth Strategies",
    description:
      "Tempora pariatur eum eaque cum, reprehenderit eveniet sint nihil deleniti repellendus temporibus quia repellat qui in sequi neque",
    icon: <SiMicrostrategy className="w-10 h-10 text-slate-500" />,
  },
  {
    title: "Supporting Enterprises",
    description:
      "Tempora pariatur eum eaque cum, reprehenderit eveniet sint nihil deleniti repellendus temporibus quia repellat qui in sequi neque",
    icon: <BiSupport className="w-10 h-10 text-slate-500" />,
  },
];

const ServiceSection = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 mt-4 mb-4">
      <HeaderText
        title="Our Services"
        description="Our umbrella of services"
        required={true}
      />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {service.map((value, index) => (
          <div
            key={index}
            className="flex flex-col items-start p-6 border border-black rounded-lg hover:bg-teal-300"
          >
            <div className="flex items-center gap-6">
              <p>{value.icon}</p>
              <h3 className="text-lg text-gray-600 font-extrabold mb-2">
                {value.title}
              </h3>
            </div>
            <p className="ml-15 text-gray-500">{value.description}</p>
            <button className="flex items-center gap-2 text-secondary mt-3 ml-14 ">
              Read More
              <FaArrowRight className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceSection;
