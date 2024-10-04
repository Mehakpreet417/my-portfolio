// pages/blogs.js
import BlogCard from "@/components/BlogCard";
import blogsData from "../../../public/data/blogs.json";
import SectionUnderline from "../../../public/images/Home/TitleUnderline.svg";
import Button from "@/components/Button";

export default function Blogs() {
  return (
    <div className="p-[6.67vw] flex flex-col gap-[3.33vw] bg-[#292F36] ">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-[#12F7D6] font-ubuntu text-[3.33vw] font-normal leading-[3.75vw] capitalize mt-[3.33vw]">
          Blogs
        </h1>
        <SectionUnderline />
        <p className="text-white text-center font-plexMono text-[0.83vw] font-normal leading-[1.04vw] mb-[3.33vw]">
          My thoughts on technology and business, welcome to subscribe.
        </p>
        <button
          className={`flex px-[1.8vw] py-[1vw] justify-center items-center gap-[0.83vw] rounded-[1.67vw] bg-[#292F36] border-[#12F7D6] border`}
        >
          <span
            className={`flex justify-center items-center text-[#FFFFFF] font-ubuntu text-[1.5vw] font-normal leading-[1.25vw] capitalize`}
          >
            Subscribe My Blogs
          </span>
        </button>
      </div>

      <div className="flex flex-col justify-center items-center gap-[3.33vw] ">
        {blogsData.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
}
