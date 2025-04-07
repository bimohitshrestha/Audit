import Image from "next/image";
import React from "react";

const About = () => {
  const data = [
    {
      number: "99",
      name: "Industries Served",
    },
    {
      number: "90%",
      name: "Client satisfaction rate",
    },
  ];

  return (
    <div
      className="flex items-center justify-center mt-20 p-5 max-w-7xl mx-auto mb-20 bg-blue-100"
      id="about"
    >
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row p-4">
        <div className="w-full lg:w-1/2 flex flex-col gap-10 mb-10 lg:mb-0">
          <div>
            <p className="text-slate-900 text-3xl md:text-4xl lg:text-4xl font-serif leading-tight md:leading-16 spaxe-x-2">
              We provide expert business for all size businesses
            </p>
          </div>

          <p className="text-base font-light text-gray-600">
            {` Whether you're a startup taking your first steps or a large
            enterprise navigating complex financial landscapes, we have tailored
            solutions for you. Our expert services span across bookkeeping, tax
            filing, audits, financial planning, and business consulting. No
            matter the size of your business, we provide the expertise you need
            to thrive and scale with confidence.`}
          </p>

          <div className="flex items-center justify-between gap-6 mt-8">
            {data.map((value, index) => (
              <div className="flex flex-col items-center gap-4" key={index}>
                <p className="text-black text-3xl md:text-4xl font-semibold">
                  {value.number}
                </p>
                <p className="text-gray-700 text-base md:text-lg font-medium">
                  {value.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex items-center justify-center h-[300px] sm:h-[400px] lg:h-[500px] overflow-hidden relative rounded-lg lg:ml-20 mt-8 lg:mt-0">
          <Image
            src="/group.jpg"
            alt="Sample Image"
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-500 ease-in-out transform hover:scale-110"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
