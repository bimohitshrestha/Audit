"use client";
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Suraz Koirala",
    role: "CEO",
    feedback:
      "Reliable, thorough, and highly professional— Chartered Management has been an invaluable partner in ensuring our financial integrity.",
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const { name, role, feedback } = testimonials[currentIndex];

  return (
    <div className="mb-32 ">
      <div className=" text-center py-4">
        <div className="relative mx-10 py-10 rounded-lg shadow-xl ">
          <p className="text-xl font-normal text-gray-700  mb-4 max-w-[80%] mx-auto">
            {feedback}
          </p>

          <div className="flex justify-center items-center gap-4 mt-6">
            <div className="flex flex-col gap-1 text-center">
              <p className="text-2xl font-semibold text-gray-800">{name}</p>
              <p className="text-lg font-medium text-gray-500">{role}</p>
            </div>

            {/* <div className="absolute left-8 top-1/2 transform -translate-y-1/2 flex gap-2 z-10">
              <button
                onClick={prevTestimonial}
                className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 focus:outline-none"
                aria-label="Previous testimonial"
              >
                <FaChevronLeft />
              </button>
            </div>

            <div className="absolute right-8 top-1/2 transform -translate-y-1/2 flex gap-2 z-10">
              <button
                onClick={nextTestimonial}
                className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 focus:outline-none"
                aria-label="Next testimonial"
              >
                <FaChevronRight />
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
