import SectionTitle from "@/components/SectionTitle";
import SkillName from "@/components/SkillName";
import SkillService from "@/components/SkillService"
import HTML from "../../../public/icons/html.svg";
import CSS from "../../../public/icons/css.svg";
import JAVASCRIPT from "../../../public/icons/javas.svg";
import REACT from "../../../public/icons/react.svg";

const SkillsSection = () => {
  return (
    <section
    className="flex p-[6.67vw] flex-col items-center self-stretch bg-[#292F36] bg-cover bg-no-repeat bg-center"
    style={{ backgroundImage: 'url("/images/Home/Skills.png")' }} >

      <SectionTitle title="Skills" paragraph="I am striving to never stop learning and improving" />
      <div className="flex flex-col relative container mx-auto text-center gap-[4.69vw]">
        {/* Skills header */}
        

        {/* Web and App Development Cards */}
        <div className="flex flex-wrap justify-center gap-[6.67vw]">
          <SkillService 
            icon="/icons/icon-monitor.png"
            title="Web Developement"
            description="HTML·CSS·JS·REACT"
          />
          <SkillService 
            icon="/icons/icon-smartphone.png"
            title="App Development"
            description="iOS·Android"
          />
        </div>

        {/* Skills Icons */}
        <div className="flex justify-center gap-[6.67vw]">
          <SkillName 
            title="HTML"
            icon={<HTML />}
            bgcolor="bg-[#E54F26]"
          />
          <SkillName 
            title="CSS"
            icon={<CSS />}
            bgcolor="bg-[#0C73B8]"
          />
          <SkillName 
            title="JavaScript"
            icon={<JAVASCRIPT />}
            bgcolor="bg-[#E7A020]"
          />
          <SkillName 
            title="React"
            icon={<REACT />}
            bgcolor="bg-[#28A9E0]"
          />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
