import React from "react";
import CountUp from "../NumberCount/CountUp";
import Image from "next/image";
import ParagraphHeading from "../common/HeaderText/ParagraphHeading";
import DescriptionText from "../common/HeaderText/DescriptionText";
import ButtonText from "../common/button/ButtonText";
import Button from "../common/button/Button";

const learnData = [
  {
    number: "100%",
    description:
      "provident quod nulla aliquam repellendus exercitationem dignissimos",
  },
  {
    number: "199k",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
];

const LearnMore = () => {
  return (
    <div className="bg-green-100 w-full    mb-32" id="career">
      <div className="mx-10 py-20">
        <div className="flex flex-col lg:flex-row items-start justify-between ">
          <div className="flex flex-col w-full lg:w-[50%] gap-10">
            {/* <p className="text-slate-900 text-4xl  leading-16 spaxe-x-2">
              {`Learn More About Our Firm's Journey And Values`}
            </p> */}
            <ParagraphHeading title="Learn More About Our Firm's Journey And Values" />
            {/* <p className="text-lg text-accent line-clamp-4">
             
            </p> */}
            <DescriptionText
              desc={`Our story began with a simple mission: to make financial management accessible, accurate, and empowering for businesses of all sizes. From our humble beginnings, we have grown into a trusted firm, known for delivering exceptional accounting, tax, and business advisory services.  `}
            />
          </div>

          <Button name="Learn More" required={true} />
        </div>

        <div className="flex flex-col lg:flex-row gap-10 mt-5 mb-5">
          <div className="w-full lg:w-1/2">
            <Image
              src="/vectorimage.png"
              alt="free images"
              className="w-full object-cover rounded-lg"
              height={500}
              width={300}
            />
          </div>

          <div className="w-full lg:w-1/2 flex flex-col justify-between">
            <p className="text-lg text-accent">
              {`At the core of our firm are the values that guide everything we do:`}
            </p>

            {/* <p className="text-lg text-accent">
              {`Today, our firm stands as a symbol of trust, innovation, and excellence in the financial services industry. As we continue to grow, we remain committed to helping businesses like yours achieve financial clarity and sustainable success. Join us on our journey — let’s build a stronger financial future together.`}
            </p> */}
            <ul className="list-disc pl-6 text-base  text-accent">
              <li>
                <strong>Integrity:</strong> We hold ourselves to the highest
                standards of honesty and ethics in every client interaction.
              </li>
              <li>
                <strong>Excellence:</strong> We are committed to delivering
                precise, timely, and impactful financial solutions.
              </li>
              <li>
                <strong>Client-Centricity:</strong> Your success is our success.
                We listen, adapt, and tailor our services to fit your unique
                needs.
              </li>
              <li>
                <strong>Innovation:</strong> We embrace new technologies and
                smarter ways of working to add more value to your business.
              </li>
              <li>
                <strong>Trust:</strong> We build long-term partnerships based on
                transparency, reliability, and consistent results.
              </li>
            </ul>
            <div className="flex flex-wrap items-center justify-center mt-5 gap-4">
              <Image
                src="/logo.jpg"
                alt="free image"
                width={80}
                height={80}
                className="rounded-full object-contain"
              />

              <Image
                src="/logo.jpg"
                alt="free image"
                width={80}
                height={80}
                className="rounded-full object-contain"
              />
              <Image
                src="/logo.jpg"
                alt="free image"
                width={80}
                height={80}
                className="rounded-full object-contain"
              />
            </div>

            <div className="flex flex-col lg:flex-row gap-6 mt-8">
              <div className="flex flex-col items-center justify-center gap-4">
                <div className="text-2xl font-medium text-accent flex">
                  <CountUp start={0} end={100} duration={2000} />%
                </div>
                <p className="text-lg text-accent  text-center">
                  provident quod nulla aliquam repellendus exercitationem
                  dignissimos
                </p>
              </div>

              <div className="flex flex-col items-center justify-center gap-4">
                <div className="text-2xl font-medium text-accent flex">
                  <CountUp start={0} end={199} duration={2000} />K
                </div>
                <p className="text-lg text-accent  text-center">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnMore;
