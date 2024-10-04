// pages/blog.js
import BlogsLayout from '../src/layouts/BlogsLayout';
import BlogSection from '../src/sections/Blogs/Blogs';

export default function BlogPage() {
  return (
    <BlogsLayout>
      <BlogSection />
    </BlogsLayout>
  );
}
