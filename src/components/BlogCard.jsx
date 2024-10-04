// components/BlogCard.js
import Image from "next/image";
import Tag from "./Tag";

export default function BlogCard({ blog }) {
  return (
    <div className="flex flex-col justify-center items-center gap-[3.33vw] max-w-[53.33vw]">
      <div className="flex justify-center items-center gap-[3.33vw] self-stretch py-[3.33vw] px-[4.06vw]  border-t border-b border-white">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-[12.5vw] h-[12.5vw] "
        />
        <div className="flex flex-col text-start gap-[1.25vw] justify-start">
          <h2 className="text-[#12F7D6] font-ubuntu  text-[1.25vw] leading-[1.88vw] font-normal  self-stretch">
            {blog.title}
          </h2>
          <p className="text-white font-ubuntu text-[0.83vw] font-light leading-[0.94vw] max-w-[720px]">
            {blog.description}
          </p>
          <div className="flex flex-col">
            <a
              href="#"
              className="text-[#12F7D6] font-ubuntu text-[0.83vw] font-light leading-[0.94vw]"
            >
              Read More &gt;&gt;
            </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="5vw"
              height="0.21vw"
              viewBox="0 0 174 3"
              fill="none"
            >
              <path
                d="M0.74646 1.43677H173.746"
                stroke="white"
                stroke-width="0.14vw"
              />
            </svg>
          </div>
          <div className="flex items-center gap-[1.25vw] w-full">
            <Tag name={blog.category} type="secondary" />
            <span className="text-white font-ubuntu text-[0.73vw] leading-[0.83vw] capitalize">
              <b>Text</b> {blog.author}
            </span>
            <span className="text-white font-ubuntu text-[0.73vw] leading-[0.83vw] capitalize">
              <strong>Date</strong> {blog.date}
            </span>
            <span className="text-white font-ubuntu text-[0.73vw] font-light leading-[0.83vw] capitalize">
              <strong>Read</strong> {blog.readTime}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
