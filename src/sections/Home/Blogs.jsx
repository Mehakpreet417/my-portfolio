import Button from "@/components/Button";
import SectionTitle from "@/components/SectionTitle";
import Tag from "@/components/Tag";

export default function Blogs() {
  return (
    <section className="flex px-[6.67vw] py-[5.21vw] flex-col items-center self-stretch bg-[#292F36]">
      <SectionTitle
        title="Blogs"
        paragraph="My thoughts on technology and business, welcome to subscribe"
      />
      <div className="flex flex-col justify-center items-center gap-[3.33vw] max-w-[53.33vw]">
        <div className="flex  justify-center items-center gap-[3.33vw] self-stretch py-[3.33vw] px-[4.06vw]  border-t border-b border-white">
          <img
            src="https://via.placeholder.com/300" // Placeholder image (Replace with actual image)
            alt="Web Developer"
            className="w-[12.5vw] h-[12.5vw] "
          />
          <div className="flex flex-col text-start gap-[1.25vw] justify-start">
            <h2 className="text-[#12F7D6] font-ubuntu  text-[1.25vw] leading-[1.88vw] font-normal  self-stretch">
              What does it take to become a web developer?
            </h2>
            <p className="text-white font-ubuntu text-[0.83vw] font-light leading-[0.94vw] max-w-[720px]">
              Web development, also known as website development, encompasses a
              variety of tasks and processes involved in creating websites for
              the internet...
            </p>
            <div className="flex flex-col">
              <a
                href="#"
                className="text-[#12F7D6] font-ubuntu text-[0.83vw] font-light leading-[0.94vw]"
              >
                Read More &gt;&gt;
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="5vw"
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
            <div className="flex items-center gap-[1.25vw] w-full">
              <Tag name="Web Developer" type="secondary" />
              <span className="text-white font-ubuntu text-[0.73vw] leading-[0.83vw] capitalize">
                <b>Text</b> Sinan
              </span>
              <span className="text-white font-ubuntu text-[0.73vw] leading-[0.83vw] capitalize">
                <strong>Date</strong> 10.Oct 2023
              </span>
              <span className="text-white font-ubuntu text-[0.73vw] font-light leading-[0.83vw] capitalize">
                <strong>Read</strong> 1 Min
              </span>
            </div>
          </div>
        </div>

        <div className="flex gap-[1.67vw]">
          <Button
            name="View More"
            icon={""}
            bgColor="bg-[#12F7D6]"
            borderColor="border-[#12F7D6]"
          />
          <Button
            name="Subscribe"
            icon={""}
            bgColor="bg-[#292F36]"
            borderColor="border-[#12F7D6]"
            textColor="text-[#FFFFFF]"
          />
        </div>
      </div>
    </section>
  );
}
