import SectionTitle from "@/components/SectionTitle";
import Contact from "../../../public/icons/contact.svg"
import Button from "@/components/Button";

// ContactForm.jsx
export default function ContactForm() {
  return (
    <section className="min-h-screen font-[ubuntu] flex flex-col justify-center items-center bg-[#1A1E23] text-center py-[3.33vw] ">
      <SectionTitle
        title="Contact"
        paragraph="I’m currently available for freelance work"
      />
      <div className="text-white flex flex-col gap-[3.33vw] w-fillAvailable">
        <div className="flex p-[0.83vw] px-[2.08vw] items-start border-[0.21vw] border-[#12F7D6] rounded-tl-[2.08vw] rounded-br-[2.08vw] bg-[#292F36]  mx-auto">
          <h4 className="text-[#12F7D6] font-ubuntu text-[1.67vw] font-medium leading-[2.19vw] capitalize">
            Send Me A Message
          </h4>
        </div>
        <form className="flex flex-col gap-[3.33vw]">
          <div className="flex flex-col gap-[3.33vw] px-[20.83vw] w-[100%]">
            <div className="flex gap-[3.33vw]">
              <div className="flex flex-col w-full gap-[1.25vw] font-ubuntu text-[0.83vw] leading-[0.94vw] font-light text-start">
                <label className="text-[#12F7D6]" htmlFor="name">
                  Your name *
                </label>
                <input
                  className=" w-full pb-[0.42vw] border-b-[0.05vw] border-[#98FAEC] bg-transparent text-white focus:outline-none "
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="flex flex-col w-full gap-[1.25vw] font-ubuntu text-[0.83vw] leading-[0.94vw] font-light text-start">
                <label className="text-[#12F7D6]" htmlFor="name">
                  Your email *
                </label>
                <input
                  className=" w-full pb-[0.42vw] border-b-[0.05vw] border-[#98FAEC] bg-transparent text-white focus:outline-none "
                  type="email"
                  id="email"
                  placeholder="Enter your Email"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col w-full gap-[1.25vw] font-ubuntu text-[0.83vw] leading-[0.94vw] font-light text-start">
              <label className="text-[#12F7D6]" htmlFor="message">
                Your message *
              </label>
              <textarea
                className="w-full pb-[0.42vw] border-b-[0.05vw] border-[#98FAEC] bg-transparent text-white focus:outline-none"
                id="message"
                rows="2"
                placeholder="Enter your needs"
                required
              />
            </div>
          </div>
          <div className="w-auto flex justify-center">
          <Button
            name="Send Message"
            icon={<Contact />}
            bgColor="bg-[#12F7D6]"
            borderColor="border-[#12F7D6]"
          />
          </div>
        </form>
        
      </div>
    </section>
  );
}
