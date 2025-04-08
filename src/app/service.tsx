"use client";
import React, { useState } from "react";

import { TbCertificate, TbReportMoney, TbBuildingBank } from "react-icons/tb";
import HeaderText from "./component/common/HeaderText/HeaderText";
import Image from "next/image";
import ParagraphHeading from "./component/common/HeaderText/ParagraphHeading";

const ServicesSection = () => {
  const [activeService, setActiveService] = useState(1);

  const services = [
    {
      id: 1,
      title: "Registration and Certification Services",
      titleNepali: "दर्ता तथा नविकरण सम्बन्धित कार्यहरु",
      icon: <TbCertificate className="w-8 h-8" />,
      items: [
        {
          english: "Company/Firm",
          nepali: "दर्ता/नविकरण",
        },
        {
          english: "NGOs/INGOs/NPOs",
          nepali: " दर्ता/नविकरण",
        },

        "Construction Company License ",
        "(ठेक्का पट्टाको लाइसेन्स) दर्ता",
        "EXIM Code दर्ता, कम्पनीको नाम परिवर्तन, उद्देश्य परिवर्तन, ठेगाना परिवर्तन तथा नामसारी।",
        "कम्पनीको अध्यावधिक, शेयर लगत, शेयर किनबेच तथा खारेजी।",
        "VAT Return Filing / E-tax Filing / Excise Return Filing",
        "COPOMIS Training for co-operative",
      ],
    },
    {
      id: 2,
      title: "Auditing Related Services",
      titleNepali: "लेखापरीक्षण सम्बन्धित कार्यहरु",
      icon: <TbReportMoney className="w-8 h-8" />,
      items: [
        {
          english: "Return Filing",
          nepali: "डे-०१, डे-०२, डे-०३, डे-०४",
        },
        {
          english: "Construction",
          nepali: "कर समायोजन ",
        },
        // "कर समायोजन (Construction)",
        "Tax Clearance",
        "५० % माथि स्वामित्व परिवर्तनको अवस्थामा दफा ५७ बमोजिमको आयविवरण",
        "आन्तरीक तथा बाह्य लेखापरीक्षण",
      ],
    },
    {
      id: 3,
      title: "Bank Loan Related Services",
      titleNepali: "Bank Loan सँग सम्बन्धित कार्यहरु",
      icon: <TbBuildingBank className="w-8 h-8" />,
      items: [
        "Projected Financial & Business Planning",
        "Income Sources related documents for educational loan (abroad study)",
        "1 day Fund Management Facilities for bank balance in case of (abroad study)",
        "Engineering valuation and Consulting",
      ],
    },
  ];

  return (
    <section className="" id="service">
      <div className="px-4 sm:px-6 lg:px-8 flex flex-col p-3 mb-32">
        {/* <HeaderText
          title="Our Services"
          required={true}
          description="Professional business registration,auditing , and financial services to help your business grow and succeed"
        /> */}

        <div className="relative w-full h-[500px] rounded-lg overflow-hidden shadow-lg ">
          <div className="absolute inset-0  bg-black  "></div>
          <Image
            src="/peoples.jpg"
            alt="Sample Image"
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-500 ease-in-out transform hover:scale-110"
          />

          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent p-6 flex justify-between items-center">
            <div className="text-white w-[500px]">
              <ParagraphHeading
                title="Driving Growth Through Strategic Business Marketing"
                className="text-white"
              />
            </div>
            <div className="flex flex-col gap-3 text-white ">
              <p className="text-2xl font-bold">5 Years</p>
              <p className="font-medium">in accounting service</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 mt-8">
          <div className="w-full lg:w-1/3">
            <div className="bg-white rounded-2xl shadow-lg p-2 ">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setActiveService(service.id)}
                  className={`w-full text-left p-4 mb-2 rounded-xl transition duration-300 ${
                    activeService === service.id
                      ? "bg-level text-white text-base shadow-md"
                      : "hover:bg-gray-100"
                  }`}
                >
                  <div className="flex flex-col space-y-1">
                    <h3 className="font-medium">{service.title}</h3>
                    <p
                      className={`font-bold ${
                        activeService === service.id
                          ? "text-blue-100"
                          : "text-base  font-medium text-accent"
                      }`}
                    >
                      {service.titleNepali}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="lg:w-2/3 ">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              {services.map(
                (service) =>
                  service.id === activeService && (
                    <div className="" key={service.id}>
                      <div className="flex items-center mb-6 pb-4 border-b border-gray-100">
                        <div className="bg-gradient-to-r from-blue-950 to bg-indigo-900 text-white p-3 rounded-xl mr-4">
                          {service.icon}
                        </div>
                        <div className="flex flex-row items-center gap-4 ">
                          <h3 className="text-2xl  text-secondary ">
                            {service.title}
                          </h3>

                          <p className="text-lg  text-secondary ">
                            {service.titleNepali}
                          </p>
                        </div>
                      </div>

                      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-6 list-disc items-center justify-center m-4 text-gray-700">
                        {service.items.map((item, index) => (
                          <li key={index}>
                            {typeof item === "object" ? (
                              <div className="flex flex-col text-base  text-accent">
                                <span>{item.english}</span>
                                <span className="">{item.nepali}</span>
                              </div>
                            ) : (
                              item
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
