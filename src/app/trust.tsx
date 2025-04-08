import Image from "next/image";
import React from "react";
import ParagraphHeading from "./component/common/HeaderText/ParagraphHeading";
import DescriptionText from "./component/common/HeaderText/DescriptionText";

const Trust = () => {
  const data = [
    {
      number: "400",
      name: "Successful Audits",
    },
    {
      number: "99%",
      name: "On-Time Filing Rate",
    },
  ];

  return (
    <div
      className="flex items-center justify-center mx-10 mb-32 bg-green-100 "
      id="trust"
    >
      <div className="flex flex-col lg:flex-row p-4 my-10 mx-10  ">
        <div className="w-full lg:w-1/2 flex items-center justify-center h-[300px] sm:h-[400px] lg:h-[500px] overflow-hidden relative rounded-lg mt-8 lg:mt-0">
          <Image
            src="/vectorimage.png"
            alt="Sample Image"
            layout="fill"
            objectFit="contain"
            className="transition-transform duration-500  ease-in-out transform hover:scale-110"
          />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-10 mb-10  lg:ml-20 lg:mb-0">
          <div>
            {/* <p className="text-secondary text-3xl md:text-4xl lg:text-4xl  leading-tight md:leading-12 spaxe-x-2">
            We provide expert business for all size businesses
          </p> */}
            <ParagraphHeading title="Trust Our Best Accountant" />
          </div>

          <DescriptionText
            desc={`Our team of seasoned accounting professionals brings years of
                   experience across industries and financial systems. With deep
                  expertise in VAT, TAX, compliance audits, and business advisory, we
                   deliver precise, reliable, and forward-thinking financial solutions.
                   We're not just accountants — we're your partners in financial
                 growth. Trust our experts to keep your business on the right track.`}
          />

          <div className="flex items-end justify-between gap-6 mt-8">
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
      </div>
    </div>
  );
};

export default Trust;
