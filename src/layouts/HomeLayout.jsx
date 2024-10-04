
import NavigationBar from '@/components/NavigationBar';
import Header from '../sections/Home/Header';
import Link from 'next/link';

export default function HomeLayout({ children }) {
  return (
    <div className="bg-dark text-white relative">
      <Header />
      <NavigationBar />
      <div className="z-10">
      {children}
      </div>
      <div>
      <Link href="/blogs">Go to Blogs</Link>
    </div>
    </div>
  );
}
