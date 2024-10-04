// pages/blog.js
import BlogsLayout from '../src/layouts/HomeLayout';
import BlogSection from '../src/sections/Blogs/Blogs';

export default function BlogPage() {
  return (
    <BlogsLayout>
      <BlogSection />
    </BlogsLayout>
  );
}
