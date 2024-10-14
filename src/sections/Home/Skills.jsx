import SectionTitle from "@/components/SectionTitle";
import SkillName from "@/components/SkillName";
import SkillService from "@/components/SkillService"
import HTML from "../../../public/icons/html.svg";
import CSS from "../../../public/icons/css.svg";
import JAVASCRIPT from "../../../public/icons/javas.svg";
import REACT from "../../../public/icons/react.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SkillsSection = () => {
  const settings = {
    dots: false, // Hide dots navigation
    infinite: true, // Enable looping of slides
    speed: 500, // Slide transition speed
    slidesToShow: 3, // Show one slide at a time
    slidesToScroll: 3, // Scroll one slide at a time
    arrows: true, // Show navigation arrows
    nextArrow: <NextArrow />, // Custom next arrow
    prevArrow: <PrevArrow />, // Custom previous arrow
  };
  return (
    <section id="skills"
    className="flex p-[6.67vw] flex-col items-center self-stretch bg-[#292F36] bg-cover bg-no-repeat bg-center"
    style={{ backgroundImage: 'url("/images/Home/Skills.png")' }} >

      <SectionTitle title="Skills" paragraph="I am striving to never stop learning and improving" />
      <div className="flex flex-col relative container mx-auto text-center gap-[4.69vw]">
        {/* Skills header */}
        

        {/* Web and App Development Cards */}
        <div className="flex flex-wrap justify-center gap-[6.67vw]">
          <SkillService 
            icon="/icons/icon-monitor.png"
            title="Web Developement"
            description="HTML·CSS·JS·REACT"
          />
          {/* <SkillService 
            icon="/icons/icon-smartphone.png"
            title="Software Development"
            description="C++.DSA.SQL.DBMS"
          /> */}
        </div>

        {/* Skills Icons */}
        <div className="max-w-[50vw] mx-auto relative">
        <Slider {...settings}>
          <SkillName 
            title="HTML"
            icon={<HTML />}
            bgcolor="bg-[#E54F26]"
          />
          <SkillName 
            title="CSS"
            icon={<CSS />}
            bgcolor="bg-[#0C73B8]"
          />
          <SkillName 
            title="JavaScript"
            icon={<JAVASCRIPT />}
            bgcolor="bg-[#E7A020]"
          />
          <SkillName 
            title="React"
            icon={<REACT />}
            bgcolor="bg-[#28A9E0]"
          />
          <SkillName 
            title="Next"
            icon={<HTML />}
            bgcolor="bg-[#E54F26]"
          />
           <SkillName 
            title="Tailwind CSS"
            icon={<CSS />}
            bgcolor="bg-[#0C73B8]"
          />
           <SkillName 
            title="UI/UX"
            icon={<JAVASCRIPT />}
            bgcolor="bg-[#E7A020]"
          />
     </Slider>
        </div>
      </div>
    </section>
  );
};

const NextArrow = ({ onClick }) => {
  return (
    <button
      className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 absolute right-[-2vw] top-1/2 transform -translate-y-1/2 z-10"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 5l7 7-7 7"
        />
      </svg>
    </button>
  );
};

// Custom Previous Arrow
const PrevArrow = ({ onClick }) => {
  return (
    <button
      className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 absolute left-[-2vw] top-1/2 transform -translate-y-1/2 z-10"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </button>
  );
};


export default SkillsSection;
