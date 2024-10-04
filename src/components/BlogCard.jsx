// components/BlogCard.js
import Image from 'next/image';

export default function BlogCard({ blog }) {
  return (
    <div className="flex flex-col md:flex-row bg-gray-800 p-4 mb-8 rounded-md">
      <div className="md:w-1/4 w-full mb-4 md:mb-0">
        <Image
          src={blog.image}
          alt={blog.title}
          width={500}
          height={300}
          className="rounded-md"
        />
      </div>
      <div className="md:w-3/4 w-full md:pl-8">
        <h3 className="text-2xl font-bold mb-2 text-teal-400">
          {blog.title}
        </h3>
        <p className="text-gray-400 mb-4">{blog.description}</p>
        <div className="flex items-center mb-2">
          <span className="bg-teal-600 text-white px-2 py-1 rounded mr-2">
            {blog.category}
          </span>
          <span className="text-gray-400 text-sm">Text: {blog.author}</span>
          <span className="text-gray-400 text-sm ml-4">
            Date: {blog.date}
          </span>
          <span className="text-gray-400 text-sm ml-4">
            Read: {blog.readTime}
          </span>
        </div>
        <a
          href={blog.link}
          className="text-teal-400 hover:text-teal-300 font-semibold"
        >
          Read More &gt;&gt;
        </a>
      </div>
    </div>
  );
}
