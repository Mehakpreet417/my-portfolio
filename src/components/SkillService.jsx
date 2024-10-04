import React from "react";

const SkillService = ({ icon, title, description }) => {
  return (
    <div className="flex">
      <div className="flex w-[0.42vw] h-[6.88vw] flex-col justify-center items-start rounded-l-[0.42vw] bg-[#28A9E0]" />
      <div className="flex flex-col py-[0.83vw] px-[1.25vw] justify-center items-center gap-[0.42vw] rounded-r-[0.42vw] bg-[#98FAEC]">
        <div className="flex w-[1.67vw] h-[1.67vw] justify-center items-center">
          <img src={icon} alt={title} className="w-full h-full" />
        </div>
        <h3 className="text-[#292F36] text-center font-plexMono text-[1.25vw] font-normal leading-[1.67vw] capitalize">
          {title}
        </h3>
        <p className="text-[#43454D] text-center font-plexMono text-[0.83vw] font-normal leading-[0.83vw] ">
          {description}
        </p>
      </div>
    </div>
  );
};

export default SkillService;
