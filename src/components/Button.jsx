import React from 'react';

const Button = ({ name, icon = null, bgColor = "bg-white", borderColor = "border-transparent", textColor = "text-[#292F36]" }) => {
  return (
    <button
      className={`flex px-[1.67vw] py-[0.83vw] justify-center items-center gap-[0.83vw] rounded-[1.67vw] ${bgColor} ${borderColor} border`}
    >
      
      <span className={`flex justify-center items-center ${textColor} font-ubuntu text-[1.04vw] font-normal leading-[1.25vw] capitalize`}>
        {name}
      </span>
      {icon && <span className="">{icon}</span>}
    </button>
  );
};

export default Button;
