import React from "react";

const LearnMore = () => {
  return (
    <div className="bg-primary w-full h-full p-7 ">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-start justify-between mt-10">
          <div className="flex flex-col w-[50%] gap-10">
            <p className="text-slate-900 text-5xl font-serif leading-16 spaxe-x-2">
              {`Learn More About Our Firm's Journey And Values`}
            </p>
            <p className="text-lg text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et unde
              doloribus nam iste at maxime, nostrum alias porro consequatur
              natus sint ratione laudantium quis sunt voluptate eum asperiores.
              Sapiente.
            </p>
          </div>
          <button className="px-8 py-5 rounded-4xl border-1 border-black text-black">
            Learn More
          </button>
        </div>

        <div className="flex gap-10 mt-5">
          <div className="w-full lg:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1742238346056-c73aa0fca41f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D"
              alt="free images"
              className="w-full  object-contain rounded-lg"
            />
          </div>

          <div className="w-full lg:w-1/2 ">
            <p className="text-base text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              quasi sit perspiciatis aut cum omnis natus fuga placeat, aliquid
              accusantium et. Quas recusandae necessitatibus assumenda
              aspernatur nobis natus doloribus iusto. Minima qui neque nostrum
              adipisci laborum soluta eaque error ullam eos libero tempore quasi
              aut laboriosam odio cupiditate, deleniti nemo! Eveniet, fugit et
              voluptatum vero enim quo iure soluta repellendus?
            </p>
            <div className="flex items-center justify-center mt-10 gap-4">
              <img
                src="https://img.freepik.com/free-vector/colorful-bird-illustration-gradient_343694-1741.jpg?uid=R193316077&ga=GA1.1.580918557.1743581001&semt=ais_hybrid"
                alt="free image"
                className="rounded-full w-45 object-contain "
              />
              <img
                src="https://img.freepik.com/free-vector/colorful-bird-illustration-gradient_343694-1741.jpg?uid=R193316077&ga=GA1.1.580918557.1743581001&semt=ais_hybrid"
                alt="free image"
                className="rounded-full w-45 object-contain "
              />
              <img
                src="https://img.freepik.com/free-vector/colorful-bird-illustration-gradient_343694-1741.jpg?uid=R193316077&ga=GA1.1.580918557.1743581001&semt=ais_hybrid"
                alt="free image"
                className="rounded-full w-45 object-contain "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnMore;
