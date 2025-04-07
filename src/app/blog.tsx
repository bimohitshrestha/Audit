"use client";

import { useState } from "react";
import ImageSection from "./component/blog/ImageSection";
import PostDetails from "./component/blog/PostDetails";
import SearchBar from "./component/blog/SearchBar";
import CategoryFilter from "./component/blog/CategoryFilter";

const blogPosts = [
  {
    id: 1,
    title: "Understanding the New IFRS Standards",
    description:
      "A comprehensive guide to implementing the latest International Financial Reporting Standards in your organization.",
    category: "Accounting Standards",
    author: "Admin",
    date: "April 2, 2025",
    image: "/blogimage2.png",
    readTime: "8 min read",
  },
  {
    id: 2,
    title: "Tax Planning Strategies for Mid-Size Businesses",
    description:
      "Effective tax planning approaches that can help mid-size businesses optimize their tax positions while ensuring compliance.",
    category: "Tax Advisory",
    author: "Admin",
    date: "March 28, 2025",
    image: "/blogimage5.png",
    readTime: "6 min read",
  },
  {
    id: 3,
    title: "ESG Reporting: What Auditors Need to Know",
    description:
      "As Environmental, Social, and Governance (ESG) reporting becomes mandatory in more jurisdictions, auditors must adapt.",
    category: "ESG",
    author: "Admin",
    date: "April 5, 2025",
    image: "/blogimage2.png",
    readTime: "10 min read",
  },
  {
    id: 4,
    title: "Audit Automation: Tools and Technologies",
    description:
      "Explore the latest automation tools that are transforming the audit process and increasing efficiency.",
    category: "Technology",
    author: "Admin",
    date: "April 5, 2025",
    image: "/blogimage5.png",
    readTime: "7 min read",
  },
  {
    id: 5,
    title: "Navigating Regulatory Changes in 2025",
    description:
      "A summary of key regulatory changes affecting auditors and financial professionals this year.",
    category: "Compliance",
    author: "Admin",
    date: "March 25, 2025",
    image: "/blogimage1.png",
    readTime: "9 min read",
  },
];

const categories = [
  "All",
  "Accounting Standards",
  "Tax Advisory",
  "ESG",
  "Technology",
  "Compliance",
];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title
        .toLocaleLowerCase()
        .includes(searchQuery.toLocaleLowerCase()) ||
      post.description
        .toLocaleLowerCase()
        .includes(searchQuery.toLocaleLowerCase());

    return matchesCategory && matchesSearch;
  });
  return (
    <div
      className="min-h-screen bg-blue-100 rounded-md max-w-7xl mx-auto p-10"
      id="blog"
    >
      <SearchBar
        title="Audit Blogs"
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <div className="container mx-auto px-4 py-8">
        {filteredPosts.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-gray-700">
              No articles found matching your criteria
            </h3>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-lg shadow-md overflow-hidden "
              >
                <ImageSection post={post} />
                <PostDetails post={post} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
