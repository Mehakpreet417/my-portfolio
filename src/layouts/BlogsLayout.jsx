
import NavigationBar from '@/components/NavigationBar';
import Header from '../sections/Home/Header';

export default function BlogLayout({ children }) {
  return (
    <div className="bg-dark text-white relative">
        <Header />
      <div className="z-10">
      {children}
      </div>
    </div>
  );
}
