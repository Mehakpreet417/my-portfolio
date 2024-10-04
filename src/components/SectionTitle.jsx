import React from 'react';
import SectionUnderline from "../../public/images/Home/TitleUnderline.svg"

const SectionTitle = ({ title, paragraph }) => {
  return (
    <div className="text-center flex justify-center items-center flex-col">
      <img src="/images/Home/Scrolltitle mouse.png" alt="mouse" />
      <h1 className="text-[#12F7D6] font-ubuntu text-[3.33vw] font-normal leading-[3.75vw] capitalize mt-[3.33vw]">
        {title}
      </h1>
      <SectionUnderline />
      <p className="text-white text-center font-plexMono text-[0.83vw] font-normal leading-[1.04vw] mb-[3.33vw]">
        {paragraph}
      </p>
    </div>
  );
};

export default SectionTitle;
