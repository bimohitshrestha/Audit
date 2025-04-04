import React from "react";

const Trust = () => {
  const data = [
    {
      number: "4500",
      name: "Successful Audits",
    },
    {
      number: "99%",
      name: "On-Time Filing Rate",
    },
  ];

  return (
    <div className="flex items-center justify-center mt-20 p-5 max-w-7xl mx-auto mb-20 bg-amber-50">
      <div className="max-w-5xl mx-auto flex p-4">
        <div className="lg:w-1/2 flex items-center justify-center lg:h-[500px] overflow-hidden relative rounded-lg">
          <img
            src="/don_bimohit.png"
            alt="Sample Image"
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"
          />
        </div>

        <div className="lg:w-1/2 flex flex-col gap-10 ml-10 lg:ml-16">
          <div>
            <p className="text-6xl font-medium leading-tight text-gray-800">
              Trust Our Best Accountants
            </p>
          </div>

          <p className="text-base font-light text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
            praesentium veniam nemo. Voluptatem laudantium maiores quas animi
            amet. Laborum reiciendis totam in impedit quibusdam ab neque illum
            voluptate magni libero.
          </p>

          <div className="flex items-center justify-between gap-6 mt-8">
            {data.map((value, index) => (
              <div className="flex flex-col items-center gap-4" key={index}>
                <p className="text-black text-4xl font-semibold">
                  {value.number}
                </p>
                <p className="text-gray-700 text-lg font-medium">
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
