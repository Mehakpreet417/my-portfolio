import SectionTitle from "@/components/SectionTitle";

// components/Works.js
export default function Works() {
  return (
    <section
      id="works"
      className="flex p-[6.67vw] flex-col items-center self-stretch"
    >
      <SectionTitle
        title="Works"
        paragraph="I had the pleasure of working with these awesome projects"
      />
      {/* Project Display */}
      <div className="flex items-center justify-center gap-[3.33vw]">
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
          <div className="relative flex flex-col items-center">
            <img
              src="/images/Home/Dual-screen.png"
              alt="Monitor with Code"
              className="w-[33.8vw] h-[22.5vw]"
            />
            <div className="flex flex-col justify-center items-center absolute top-[2.5vw] right-[5vw] items-start gap-[0.28vw]">
              <a
                href="#"
                className="text-[#12F7D6] font-plexMono text-[1.65vw] font-normal leading-[2.2vw] capitalize"
              >
                View Website
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11.98vw"
                height="0.21vw"
                viewBox="0 0 174 3"
                fill="none"
              >
                <path
                  d="M0.74646 1.43677H173.746"
                  stroke="white"
                  stroke-width="0.14vw"
                />
              </svg>
            </div>
          </div>
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
