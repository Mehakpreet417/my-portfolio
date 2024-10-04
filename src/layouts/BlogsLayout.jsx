import NavigationBar from "@/components/NavigationBar";
import Header from "../sections/Home/Header";

export default function BlogLayout({ children }) {
  return (
    <div className="bg-dark text-white relative">
      <Header />
      <div className="px-[6.67vw] bg-[#292F36]">
        <hr className="flex justify-center  items-center self-stretch border-t border-[#43454D]" />
      </div>
      <div className="z-10">{children}</div>
    </div>
  );
}
