import Image from "next/image";
import React from "react";
import ParagraphHeading from "./component/common/HeaderText/ParagraphHeading";
import DescriptionText from "./component/common/HeaderText/DescriptionText";

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
      className="flex items-center justify-center mx-10 mb-32 bg-blue-100 "
      id="about"
    >
      <div className="flex flex-col lg:flex-row p-4 my-10 mx-10  ">
        <div className="w-full lg:w-1/2 flex flex-col gap-10 mb-10 lg:mb-0">
          <div>
            {/* <p className="text-secondary text-3xl md:text-4xl lg:text-4xl  leading-tight md:leading-12 spaxe-x-2">
              We provide expert business for all size businesses
            </p> */}
            <ParagraphHeading title="We provide expert business for all size businesses" />
          </div>

          <DescriptionText
            desc={` Whether you're a startup taking your first steps or a large
            enterprise navigating complex financial landscapes, we have tailored
            solutions for you. Our expert services span across bookkeeping, tax
            filing, audits, financial planning, and business consulting. No
            matter the size of your business, we provide the expertise you need
            to thrive and scale with confidence.`}
          />

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
            src="/vectorimage.png"
            alt="Sample Image"
            layout="fill"
            objectFit="contain"
            className="transition-transform duration-500  ease-in-out transform hover:scale-110"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
