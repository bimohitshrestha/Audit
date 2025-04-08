import React from "react";

interface DescriptionTextProps {
  desc: string;
}

const DescriptionText = ({ desc }: DescriptionTextProps) => {
  return <p className="text-base  text-accent">{desc}</p>;
};

export default DescriptionText;
