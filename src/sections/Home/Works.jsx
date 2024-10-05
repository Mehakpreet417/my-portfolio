import SectionTitle from "@/components/SectionTitle";
import WorkCard from "@/components/WorkCard";


// components/Works.js
export default function Works() {
  return (
    <section
      id="works"
      className="flex p-[6.67vw] flex-col items-center self-stretch bg-[#1A1E23]"
    >
      <SectionTitle
        title="Works"
        paragraph="I had the pleasure of working with these awesome projects"
      />
      {/* Project Display */}
      <div className="flex max-w-[35vw] mx-[7vw] items-center justify-center gap-[3.33vw]">
        {/* Left Arrow */}
        <button className="hidden lg:block p-3 bg-gray-800 rounded-full hover:bg-gray-700">
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

        {/* Computer Screens */}
        <div className="flex justify-center items-center space-x-12">
          {/* Coding Screen */}
          <WorkCard heading="Restaurent Website" link="https://my-restaurant-app-three.vercel.app/" img1="/images/Home/Works/restaurant-small.png" img2="/images/Home/Works/restaurant-large.png"/>
          <WorkCard heading="tinDog" link="https://tin-dog-wine.vercel.app/" img1="/images/Home/Works/tindog-small.png" img2="/images/Home/Works/tindog-large.png"/>
          <WorkCard heading="Notes Keeper" link="https://q5pcdv.csb.app/" img1="/images/Home/Works/notes-small.png" img2="/images/Home/Works/notes-large.png"/>
        </div>
        {/* Right Arrow */}
        <button className="hidden lg:block p-3 bg-gray-800 rounded-full hover:bg-gray-700">
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
      </div>
    </section>
  );
}
