// components/AboutMe.js
export default function AboutMe() {
  return (
    <section className="flex p-[6.67vw] flex-col items-center justify-center">

      <div className="flex flex-col gap-[6.67vw] items-center justify-center">
        {/* Background pattern */}

        <img src="/images/Home/Scrolltitle mouse.png" alt="mouse" />

        {/* Content Section */}
        <div className="flex flex-col md:flex-row items-center justify-start space-y-8 md:space-y-0 md:space-x-8">
          <div className="flex flex-col px-[6.67vw] gap-[3.33vw] items-start ">
            {/* About Me Header */}
            <div className="flex p-[0.83vw] px-[2.08vw] items-start border-[0.21vw] border-[#12F7D6] rounded-tl-[2.08vw] rounded-br-[2.08vw] bg-[#292F36] w-auto">
              <h4 className="text-[#FFF] font-ubuntu text-[3.33vw] font-normal leading-[3.75vw] capitalize">
                About Me
              </h4>
            </div>
            {/* Text Content */}
            <div className="flex flex-col py-[1.25vw] px-[2.08vw] items-start gap-[0.83vw] rounded-[2.08vw] bg-[#292F36]">         
              <p className="text-[#98FAEC] font-plexMono text-[0.73vw] font-normal leading-[0.94vw]">&lt;p&gt;</p>
              <div>
              <h2 className="text-[#12F7D6] font-plexMono text-[1.67vw] font-medium leading-[2.19vw] capitalize">Hello!</h2>
              <br />
              <p className="text-[#FFFFFF] font-plexMono text-[0.83vw] font-normal leading-[1.04vw]">
                My name is Sinan and I specialize in web development that
                utilizes <span className="text-teal-400">HTML</span>,{" "}
                <span className="text-teal-400">CSS</span>,{" "}
                <span className="text-teal-400">JS</span>, and{" "}
                <span className="text-teal-400">REACT</span> etc.
                <br />
                <br />
                I am a highly motivated individual and eternal optimist
                dedicated to writing clear, concise, robust code that works.
                Striving to never stop learning and improving.
                <br />
                <br />
                When I'm not coding, I am{" "}
                <span className="text-teal-400">writing blogs</span>, reading,
                or picking up some new hands-on art project like{" "}
                <span className="text-teal-400">photography</span>.
                <br />
                <br />
                I like to have my perspective and belief systems challenged so
                that I see the world through new eyes.
              </p>
              </div>
              <p className="text-[#98FAEC] font-plexMono text-[0.73vw] font-normal leading-[0.94vw]">&lt;/p&gt;</p>
            </div>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/3 pr-[3.33vw] m-auto ml-0 " style={{"margin": "auto"}}>
            <img
              src="https://via.placeholder.com/400"
              alt="Sinan Coding"
              className="rounded-[0.83vw] shadow-lg w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
