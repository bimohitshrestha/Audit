import Image from "next/image";
import Link from "next/link";
import React from "react";

interface PostDetailsProps {
  post: {
    image: string;
    title: string;
    category: string;
    id: number;
    date: string;
    readTime: string;
    description: string;
    author: string;
  };
}

const PostDetails = ({ post }: PostDetailsProps) => {
  return (
    <div className="p-6">
      <div className="flex items-center justify-between text-sm text-accent mb-3">
        <span>{post.date}</span>
        <span>{post.readTime}</span>
      </div>
      <h3 className="text-xl font-bold mb-3">
        <Link
          //   href={`/blog/${post.id}`}
          href={""}
          className="text-gray-800 hover:text-blue-900"
        >
          {post.title}
        </Link>
      </h3>
      <p className="text-accent mb-4  min-h-max mx-auto line-clamp-3">
        {post.description}
      </p>

      <div className="flex items-center">
        <div className=" rounded-full bg-gray-400 mr-3">
          <Image
            src={post.image}
            alt={post.title}
            width={100}
            height={200}
            className="rounded-full object-cover w-8 h-8"
          />
        </div>
        <span className="text-sm font-medium">{post.author}</span>
      </div>
    </div>
  );
};

export default PostDetails;
