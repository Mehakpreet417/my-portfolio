import SectionTitle from "@/components/SectionTitle";
import WorkCard from "@/components/WorkCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Works() {
  const settings = {
    dots: false, // Hide dots navigation
    infinite: true, // Enable looping of slides
    speed: 500, // Slide transition speed
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    arrows: true, // Show navigation arrows
    nextArrow: <NextArrow />, // Custom next arrow
    prevArrow: <PrevArrow />, // Custom previous arrow
  };

  return (
    <section
      id="works"
      className="flex p-[6.67vw] flex-col items-center self-stretch bg-[#1A1E23]"
    >
      <SectionTitle
        title="Works"
        paragraph="I had the pleasure of working with these awesome projects"
      />

      {/* Slider Component */}
      <div className="max-w-[34vw] mx-auto relative">
        <Slider {...settings}>
          <WorkCard
            heading="Restaurant Website"
            link="https://my-restaurant-app-three.vercel.app/"
            img1="/images/Home/Works/restaurant-small.png"
            img2="/images/Home/Works/restaurant-large.png"
          />
          <WorkCard
            heading="tinDog"
            link="https://tin-dog-wine.vercel.app/"
            img1="/images/Home/Works/tindog-small.png"
            img2="/images/Home/Works/tindog-large.png"
          />
          <WorkCard
            heading="Notes Keeper"
            link="https://q5pcdv.csb.app/"
            img1="/images/Home/Works/notes-small.png"
            img2="/images/Home/Works/notes-large.png"
          />
          <WorkCard
            heading="Shopping Website"
            link="https://shopping-website-beryl.vercel.app/"
            img1="/images/Home/Works/shopping-small.png"
            img2="/images/Home/Works/shopping-large.png"
          />
          <WorkCard
            heading="Book Store"
            link="https://my-book-store-hn45.vercel.app/"
            img1="/images/Home/Works/book-small.png"
            img2="/images/Home/Works/book-large.png"
          />
          <WorkCard
            heading="Quiz Platform"
            link="https://quiz-platform-beta.vercel.app/"
            img1="/images/Home/Works/quiz-small.png"
            img2="/images/Home/Works/quiz-large.png"
          />
          <WorkCard
            heading="Code Editor"
            link="https://95lzyv.csb.app/"
            img1="/images/Home/Works/editor-small.png"
            img2="/images/Home/Works/editor-large.png"
          />
          {/* <WorkCard
            heading="Quiz Platform"
            link="https://quiz-platform-beta.vercel.app/"
            img1="/images/Home/Works/quiz-small.png"
            img2="/images/Home/Works/quiz-large.png"
          /> */}
        </Slider>
      </div>
    </section>
  );
} 
// Custom Next Arrow
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
