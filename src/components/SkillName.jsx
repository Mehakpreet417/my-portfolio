import React from 'react';

const SkillName = ({ icon, title, bgcolor }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-[24px]">
      <div className={`flex p-[39.94px] justify-center items-center ${bgcolor} rounded-[80.06px]`}>
        {icon}
      </div>
      <h3 className="text-[#E54F26] font-plexMono text-[32.06px] font-medium leading-[42.05px] capitalize">
        {title}
      </h3>
    </div>
  );
};

export default SkillName;
