import Image from "next/image";
import React from "react";

interface ImageSectionProps {
  post: {
    image: string;
    title: string;
    category: string;
  };
}

const ImageSection = ({ post }: ImageSectionProps) => {
  return (
    <div className="h-48 relative">
      <Image
        src={post.image}
        alt={post.title}
        className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"
        width={500}
        height={300}
      />

      <div className="absolute top-4 left-4 ">
        <span className="bg-level text-white text-xs px-3 py-1 rounded-full">
          {post.category}
        </span>
      </div>
    </div>
  );
};

export default ImageSection;
