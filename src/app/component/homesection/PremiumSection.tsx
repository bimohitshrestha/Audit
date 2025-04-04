import React from "react";
import ButtonWhiteText from "../common/button/ButtonWhiteText";

interface PremiumSectionProps {
  title: string;
  cta: string;
}

const PremiumSection = ({ cta, title }: PremiumSectionProps) => {
  return (
    <section className="w-full h-[175px] bg-level text-white flex items-center justify-center py-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center w-full px-6">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center sm:text-left sm:w-[700px] mb-4 sm:mb-0">
          {title}
        </h2>
        <ButtonWhiteText name={cta} />
      </div>
    </section>
  );
};

export default PremiumSection;
