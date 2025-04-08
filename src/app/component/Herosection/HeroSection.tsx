import React from "react";
import ButtonText from "../common/button/ButtonText";

import Image from "next/image";
import ParagraphHeading from "../common/HeaderText/ParagraphHeading";

const data = [
  {
    number: "99%",
    title: "Tax Consultations",
  },
  {
    number: "91%",
    title: "Budget Management",
  },
];

const HeroSection = () => {
  return (
    <div className="flex flex-col lg:flex-row mt-20 max-w-7xl mx-auto ">
      <div className="lg:w-1/2 flex flex-col gap-10">
        <div className="">
          <button className="px-4 py-2 max-w-max rounded-lg bg-white text-sm font-bold text-level">
            Your Success, Our Priority
          </button>
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-secondary leading-tight md:leading-14 spaxe-x-2 mt-2">
            Transform Your Business With Expert Accounting Services
          </h1>
          {/* <ParagraphHeading title="Transform Your Business With Expert Accounting Services" /> */}
        </div>

        <p className="text-base font-normal">
          {`Managing VAT and TAX documentation can be complicated and time-consuming — but it doesn't have to be. Our VAT/TAX Filing Documentation System is designed to make your tax processes seamless, accurate, and fully compliant with local regulations. `}
        </p>
        <div className="flex flex-col items-center justify-center lg:flex-row w-[50%] gap-3">
          <ButtonText name="Get Started" />
        </div>
      </div>

      <div className="lg:w-1/2 relative lg:ml-44 mt-10 lg:mt-0 hidden md:hidden lg:block">
        <div className="absolute w-64 h-64 bg-level rounded-full -top-12 -right-6 z-0"></div>
        <div className="relative z-10">
          <div className="bg-white flex flex-col gap-3 rounded-lg shadow-lg p-4 absolute -left-20 bottom-10 z-20 max-w-max">
            {data.map((value, index) => (
              <div key={index}>
                <div className="flex items-center justify-between gap-10">
                  <p className="text-base font-normal">{value.title}</p>
                  <p className="text-xs ">{value.number}</p>
                </div>
                <div className="bg-black h-2 w-full rounded-xl"></div>
              </div>
            ))}
          </div>
          <Image
            src="/hero.jpg"
            alt="Accounting professionals"
            width={1200}
            height={800}
            className="rounded-lg shadow-xl relative z-10 object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
