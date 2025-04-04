"use client";
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Bimohit Shrestha",
    role: "Lorem Ipsum",
    feedback:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque omnis facilis quaerat dignissimos sequi assumenda pariatur exercitationem ducimus nulla provident! Nostrum eius recusandae facere soluta pariatur quas quaerat voluptates iusto.",
  },
  {
    name: "Shrestha Bimohit",
    role: "Lorem Ipsum",
    feedback:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque omnis facilis quaerat dignissimos sequi assumenda pariatur exercitationem ducimus nulla provident! Nostrum eius recusandae facere soluta pariatur quas quaerat voluptates iusto.",
  },
  {
    name: "Paul Pogba",
    role: "Lorem Ipsum",
    feedback:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque omnis facilis quaerat dignissimos sequi assumenda pariatur exercitationem ducimus nulla provident! Nostrum eius recusandae facere soluta pariatur quas quaerat voluptates iusto.",
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
    <div className="py-12">
      <div className="max-w-7xl mx-auto text-center px-4">
        <div className="relative bg-white p-8 rounded-lg shadow-xl ">
          <p className="text-2xl font-medium text-gray-700 font-serif mb-4">
            {feedback}
          </p>

          <div className="flex justify-center items-center gap-4 mt-6">
            <div className="flex flex-col gap-1 text-center">
              <p className="text-2xl font-semibold text-gray-800">{name}</p>
              <p className="text-lg font-medium text-gray-500">{role}</p>
            </div>

            <div className="absolute left-2 top-1/2 transform -translate-y-1/2 flex gap-2 z-10">
              <button
                onClick={prevTestimonial}
                className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 focus:outline-none"
                aria-label="Previous testimonial"
              >
                <FaChevronLeft />
              </button>
            </div>

            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex gap-2 z-10">
              <button
                onClick={nextTestimonial}
                className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 focus:outline-none"
                aria-label="Next testimonial"
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
