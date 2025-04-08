import React from "react";

interface ParagraphHeadingProps {
  title: string;
  className?: string;
}

const ParagraphHeading = ({ title, className }: ParagraphHeadingProps) => {
  return (
    <h2
      className={`text-3xl md:text-4xl lg:text-4xl text-secondary  leading-tight md:leading-12 spaxe-x-2 ${className}`}
    >
      {title}
    </h2>
  );
};

export default ParagraphHeading;
