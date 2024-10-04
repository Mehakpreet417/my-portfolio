import clsx from "clsx";

const Tag = ({ name, type = "primary" }) => {
    return (
      <div className="flex items-center justify-center">
        <div
          className={clsx(
            "px-[0.42vw] py-0 rounded-[0.42vw] text-[0.73vw] font-normal loading-[0.94vw]",
            {
              "bg-[#12F7D6] text-[#292F36]": type === "primary", 
              "bg-[#43454D] text-[#FFF]": type === "secondary",      
            }
          )}
        >
          {name}
        </div>
      </div>
    );
  };

export default Tag;
