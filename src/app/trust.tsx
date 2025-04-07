import Image from "next/image";
import React from "react";

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
      className="flex items-center justify-center mt-20 p-5 max-w-7xl mx-auto mb-20 bg-green-100"
      id="trust"
    >
      <div className="max-w-5xl mx-auto flex p-4 flex-col-reverse lg:flex-row">
        <div className="w-full lg:w-1/2 flex items-center justify-center h-[300px] sm:h-[400px] lg:h-[500px] overflow-hidden relative rounded-lg lg:ml-20 mt-8 lg:mt-0">
          {/* <img
            src="/don_bimohit.png"
            alt="Sample Image"
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"
          /> */}
          <Image
            src="/group.jpg"
            alt="Sample Image"
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-500 ease-in-out transform hover:scale-110"
          />
        </div>

        <div className="lg:w-1/2 flex flex-col gap-10 lg:ml-16">
          <div>
            <p className="text-slate-900 text-4xl font-serif leading-16 spaxe-x-2">
              Trust Our Best Accountants
            </p>
          </div>

          <p className="text-base font-light text-gray-600">
            {`Our team of seasoned accounting professionals brings years of
            experience across industries and financial systems. With deep
            expertise in VAT, TAX, compliance audits, and business advisory, we
            deliver precise, reliable, and forward-thinking financial solutions.
            We're not just accountants — we're your partners in financial
            growth. Trust our experts to keep your business on the right track.`}
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
      </div>
    </div>
  );
};

export default Trust;
