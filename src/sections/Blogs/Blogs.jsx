// pages/blogs.js
import BlogCard from '@/components/BlogCard';
import blogsData from '../../../public/data/blogs.json';

export default function Blogs() {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-4 md:px-16 py-16">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-teal-400 mb-4">Blogs</h1>
        <p className="text-lg text-gray-300 mb-8">
          My thoughts on technology and business, welcome to subscribe.
        </p>
        <button className="bg-transparent border-2 border-teal-400 text-teal-400 px-6 py-2 rounded hover:bg-teal-400 hover:text-gray-900">
          Subscribe My Blogs
        </button>
      </div>

      <div>
        {blogsData.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
}
