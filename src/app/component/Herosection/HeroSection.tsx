import React from "react";
import ButtonText from "../common/button/ButtonText";
import ButtonWhiteText from "../common/button/ButtonWhiteText";

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
    <div className="flex mt-20  max-w-7xl mx-auto">
      <div className=" lg:w-1/2 flex flex-col gap-10">
        <div className="">
          <button className="px-4 py-2 max-w-max rounded-lg bg-white text-sm font-bold text-level">
            {" "}
            Your Success, Our Priority
          </button>
          <p className="text-5xl font-bold  mt-3 leading-12 text-gray-700">
            {" "}
            Transform Your Business With Expert Accounting Services
          </p>
        </div>

        <p className=" text-base font-normal">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
          praesentium veniam nemo. Voluptatem laudantium maiores quas animi
          amet. Laborum reiciendis totam in impedit quibusdam ab neque illum
          voluptate magni libero.
        </p>
        <div className="flex gap-6">
          <ButtonText name="Get Started" />

          <ButtonWhiteText name="Get Started" />
        </div>
      </div>

      <div className="lg:w-1/2 relative ml-44">
        <div className="absolute w-64 h-64 bg-level rounded-full -top-12 -right-6 z-0"></div>
        <div className=""></div>
        <div className="relative z-10">
          <div className="bg-white flex flex-col gap-3  rounded-lg shadow-lg  p-4 absolute -left-20 bottom-10 z-20 max-w-max">
            {data.map((value) => (
              <>
                <div className="flex items-center justify-between gap-10">
                  <p className="text-base font-normal">{value.title}</p>
                  <p className="text-xs ">{value.number}</p>
                </div>
                <div className="bg-black h-2 w-full rounded-xl"></div>
              </>
            ))}
          </div>
          <img
            src="https://images.pexels.com/photos/7698834/pexels-photo-7698834.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Accounting professionals"
            className="rounded-lg shadow-xl relative z-10 object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
