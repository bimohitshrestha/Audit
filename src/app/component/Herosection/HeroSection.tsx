"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import ServiceSection from "../service-section/ServiceSection";
import LearnMore from "../homesection/LearnMore";

export default function EnhancedHeroSection() {
  const slides = [
    {
      image:
        "https://images.pexels.com/photos/164686/pexels-photo-164686.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Financial ",
      spanTitle: "Integrity",
      subtitle: "Building trust through transparency",
      description:
        "Our commitment to financial transparency builds trust with clients and stakeholders alike.",
      cta: "Learn More",
      ctaSecondary: "Contact Us",
    },
    {
      image:
        "https://images.pexels.com/photos/8962476/pexels-photo-8962476.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Comprehensive Audit ",
      spanTitle: "Services",
      subtitle: "Tailored solutions for your business",
      description:
        "We provide customized audit solutions to address your unique business challenges and goals.",
      cta: "Our Services",
      ctaSecondary: "Get a Quote",
    },
    {
      image:
        "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Loremm",
      spanTitle: "Title",
      subtitle: "  Lorem ipsum dolor sit amet consectetur",
      description:
        "   Repudiandae fugiat, soluta ducimus dolore in ex pariatur. Officiis aspernatur dolore ad eum omnis.",
      cta: "Our Lorem",
      ctaSecondary: "Cta Section",
    },
  ];

  return (
    <>
      <div className="relative h-screen overflow-hidden mb-16">
        <Swiper
          modules={[Autoplay, EffectFade, Navigation, Pagination]}
          pagination={{ type: "bullets" }}
          navigation={true}
          effect="fade"
          speed={1500}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className="w-full h-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-10000 "
                style={{
                  backgroundImage: `url(${slide.image})`,
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

              <div className="relative z-20 flex flex-col h-full justify-center px-8 md:px-16 lg:px-24 xl:px-32">
                <div className="max-w-3xl">
                  <h2 className="font-light text-white/90 text-lg md:text-2xl mb-4 transition-all duration-1000 ">
                    {slide.subtitle}
                  </h2>

                  <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight transition-all duration-1000">
                    {slide.title}
                    <span className="text-secondary">{slide.spanTitle}</span>
                  </h1>

                  <p className="text-white/80 text-base md:text-lg mb-8 max-w-xl transition-all duration-1000 delay-200 ">
                    {slide.description}
                  </p>

                  <div className="flex gap-4 transition-all duration-700 delay-300">
                    <button className="flex items-center bg-secondary text-white font-medium py-3 px-8 rounded-full transition-all duration-300 gap-2">
                      {slide.cta}
                      <BsArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>

                    <button className="border-1 border-white text-white font-medium py-3 px-8 rounded-full transition-all duration-300 gap-2">
                      {slide.ctaSecondary}
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <ServiceSection />
      <LearnMore />
    </>
  );
}
