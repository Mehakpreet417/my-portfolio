import React from "react";
import Tag from "@/components/Tag";
import Button from "@/components/Button";
import DownloadIcon from "../../../public/icons/download.svg";

const DeveloperProfile = () => {
  return (
    <div className="flex flex-col ">
      <div className="px-[6.67vw] bg-[#292F36]">
        <hr className="flex justify-center  items-center self-stretch border-t border-[#43454D]" />
      </div>

      <div className="flex flex-col relative py-[3.33vw] px-[6.67vw] justify-center items-center self-stretch bg-[#292F36]">
        {/* Sidebar */}
      

        <div>
          <h1 className="text-[#98FAEC] font-ubuntu text-[6.09vw] font-normal leading-[6.98vw] capitalize">
            Developer
          </h1>
        </div>
        <div className="flex pt-[3.33vw] px-[6.67vw] gap-[6.67vw]">
          {/* Main Content */}
          {/* Left Section */}
          <div className="flex w-[30%] gap-[1.67vw] p-[1.25vw] flex-col justify-center items-start rounded-[160px_0] border-4 border-white bg-[#292F36] shadow-[4px_-4px_2px_0px_#12F7D6]">
            <div className="flex flex-col gap-[1.67vw]">
              <div className="flex flex-col justify-center items-center">
                <img
                  src="/me2-crop.png"
                  alt="Profile"
                  className="w-20 h-20 rounded-full"
                />
                <h2 className="text-white font-plexMono text-[32px] font-medium leading-[42px] capitalize">
                  Mehakpreet Chopra
                </h2>
                <p className="text-white font-plexMono text-[14px] font-normal leading-[18px]">
                  Full-stack developer
                </p>
              </div>
              <div className="text-left flex flex-col gap-[0.83vw] ">
                <div className="text-white font-plexMono text-[14px] font-normal leading-[18px] inline-flex gap-[0.83vw]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.583361 3.48988C0.583267 3.49564 0.583257 3.50139 0.583333 3.50715V10.5C0.583333 11.4638 1.3695 12.25 2.33333 12.25H11.6667C12.6305 12.25 13.4167 11.4638 13.4167 10.5V3.50721C13.4167 3.50141 13.4167 3.4956 13.4166 3.4898C13.4111 2.53063 12.6271 1.75 11.6667 1.75H2.33333C1.37287 1.75 0.588839 2.53067 0.583361 3.48988ZM1.81217 3.2398C1.90864 3.04904 2.10702 2.91667 2.33333 2.91667H11.6667C11.893 2.91667 12.0914 3.04904 12.1878 3.2398L7 6.87128L1.81217 3.2398ZM12.25 4.62038V10.5C12.25 10.8195 11.9862 11.0833 11.6667 11.0833H2.33333C2.01383 11.0833 1.75 10.8195 1.75 10.5V4.62038L6.66548 8.06122C6.86633 8.20182 7.13367 8.20182 7.33452 8.06122L12.25 4.62038Z"
                      fill="#12F7D6"
                    />
                  </svg>
                  <p>chopramehakpreet@gmail.com</p>
                </div>
                <div className="text-white font-plexMono text-[14px] font-normal leading-[18px] inline-flex gap-[0.83vw]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.99999 3.5C5.71133 3.5 4.66666 4.54467 4.66666 5.83333C4.66666 7.122 5.71133 8.16667 6.99999 8.16667C8.28865 8.16667 9.33332 7.122 9.33332 5.83333C9.33332 4.54467 8.28865 3.5 6.99999 3.5ZM5.83332 5.83333C5.83332 5.189 6.35566 4.66667 6.99999 4.66667C7.64432 4.66667 8.16666 5.189 8.16666 5.83333C8.16666 6.47767 7.64432 7 6.99999 7C6.35566 7 5.83332 6.47767 5.83332 5.83333Z"
                      fill="#12F7D6"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.6761 13.9018C6.67627 13.9019 6.67641 13.902 6.99999 13.4167L6.6761 13.9018C6.87204 14.0324 7.12762 14.0327 7.32356 13.902L6.99999 13.4167C7.32356 13.902 7.3234 13.9021 7.32356 13.902L7.32555 13.9007L7.32944 13.8981L7.3428 13.8891C7.35416 13.8813 7.37036 13.8703 7.39108 13.8559C7.43251 13.8272 7.49205 13.7854 7.56711 13.7312C7.71717 13.6228 7.92961 13.4646 8.18368 13.2623C8.69088 12.8584 9.36868 12.275 10.0485 11.5574C11.3842 10.1475 12.8333 8.10947 12.8333 5.83333C12.8333 4.28624 12.2187 2.80251 11.1248 1.70854C10.0308 0.614581 8.54709 0 6.99999 0C5.45289 0 3.96916 0.614581 2.8752 1.70854C1.78124 2.80251 1.16666 4.28624 1.16666 5.83333C1.16666 8.10947 2.61581 10.1475 3.95152 11.5574C4.6313 12.275 5.3091 12.8584 5.8163 13.2623C6.07037 13.4646 6.28281 13.6228 6.43287 13.7312C6.50793 13.7854 6.56747 13.8272 6.6089 13.8559C6.62962 13.8703 6.64582 13.8813 6.65718 13.8891L6.67054 13.8981L6.67443 13.9007L6.6761 13.9018ZM3.70016 2.5335C4.57533 1.65833 5.76231 1.16667 6.99999 1.16667C8.23767 1.16667 9.42465 1.65833 10.2998 2.5335C11.175 3.40867 11.6667 4.59566 11.6667 5.83333C11.6667 7.64053 10.4908 9.39415 9.20152 10.7551C8.5688 11.4229 7.9341 11.9697 7.45693 12.3497C7.27934 12.4911 7.12423 12.6089 6.99999 12.7007C6.87575 12.6089 6.72064 12.4911 6.54305 12.3497C6.06588 11.9697 5.43118 11.4229 4.79846 10.7551C3.50917 9.39415 2.33332 7.64053 2.33332 5.83333C2.33332 4.59566 2.82499 3.40867 3.70016 2.5335Z"
                      fill="#12F7D6"
                    />
                  </svg>
                  <p>Punjab, India</p>
                </div>
                <div className="text-white font-plexMono text-[14px] font-normal leading-[18px] inline-flex gap-[0.83vw]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.83334 1.16669C5.36921 1.16669 4.9241 1.35106 4.59591 1.67925C4.26772 2.00744 4.08334 2.45256 4.08334 2.91669V3.50002H2.33334C1.36685 3.50002 0.583344 4.28352 0.583344 5.25002V11.0834C0.583344 12.0499 1.36685 12.8334 2.33334 12.8334H11.6667C12.6332 12.8334 13.4167 12.0499 13.4167 11.0834V5.25002C13.4167 4.28352 12.6332 3.50002 11.6667 3.50002H9.91668V2.91669C9.91668 2.45256 9.7323 2.00744 9.40411 1.67925C9.07593 1.35106 8.63081 1.16669 8.16668 1.16669H5.83334ZM8.75001 3.50002V2.91669C8.75001 2.76198 8.68855 2.6136 8.57916 2.50421C8.46976 2.39481 8.32139 2.33335 8.16668 2.33335H5.83334C5.67863 2.33335 5.53026 2.39481 5.42086 2.50421C5.31147 2.6136 5.25001 2.76198 5.25001 2.91669V3.50002H8.75001ZM5.25001 4.66669H8.75001V11.6667H5.25001V4.66669ZM4.08334 4.66669H2.33334C2.01118 4.66669 1.75001 4.92785 1.75001 5.25002V11.0834C1.75001 11.4055 2.01118 11.6667 2.33334 11.6667H4.08334V4.66669ZM9.91668 11.6667V4.66669H11.6667C11.9888 4.66669 12.25 4.92785 12.25 5.25002V11.0834C12.25 11.4055 11.9888 11.6667 11.6667 11.6667H9.91668Z"
                      fill="#12F7D6"
                    />
                  </svg>
                  <p>Full-time / Freelancer</p>
                </div>
                <div className="text-white font-plexMono text-[14px] font-normal leading-[18px] inline-flex gap-[0.83vw]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_548_675)">
                      <path
                        d="M9.91417 0.622203C8.99648 0.614228 8.11237 0.967009 7.45226 1.60456L7.44624 1.61047L6.4429 2.60797C6.21443 2.83511 6.21336 3.20445 6.4405 3.43292C6.66764 3.66139 7.03698 3.66247 7.26545 3.43533L8.26563 2.44096C8.7054 2.01767 9.29357 1.78352 9.90403 1.78883C10.5158 1.79414 11.1011 2.03954 11.5337 2.47215C11.9663 2.90477 12.2117 3.49 12.217 4.1018C12.2223 4.71199 11.9884 5.29992 11.5654 5.73962L9.8192 7.48583C9.58265 7.72247 9.29791 7.90553 8.98442 8.02247C8.67093 8.13941 8.33596 8.18757 8.00223 8.16367C7.66849 8.13976 7.3438 8.04437 7.05018 7.88395C6.75656 7.72353 6.50087 7.50184 6.30046 7.23391C6.10749 6.97593 5.74192 6.92323 5.48394 7.1162C5.22596 7.30917 5.17326 7.67474 5.36623 7.93272C5.66685 8.33461 6.05038 8.66715 6.49082 8.90778C6.93125 9.14841 7.41829 9.2915 7.91889 9.32735C8.41949 9.3632 8.92194 9.29097 9.39217 9.11556C9.8624 8.94016 10.2894 8.66567 10.6442 8.31072L12.3942 6.56079L12.4013 6.55356C13.0388 5.89345 13.3916 5.00935 13.3836 4.09166C13.3756 3.17397 13.0076 2.29613 12.3586 1.6472C11.7097 0.998268 10.8319 0.630177 9.91417 0.622203Z"
                        fill="#12F7D6"
                      />
                      <path
                        d="M6.08111 4.6726C5.58051 4.63675 5.07805 4.70898 4.60782 4.88439C4.13762 5.05979 3.71064 5.33425 3.35584 5.68916L1.60584 7.43916L1.59873 7.44639C0.96118 8.1065 0.608399 8.99061 0.616374 9.9083C0.624348 10.826 0.99244 11.7038 1.64137 12.3528C2.2903 13.0017 3.16814 13.3698 4.08583 13.3778C5.00352 13.3857 5.88763 13.0329 6.54773 12.3954L6.55496 12.3883L7.55246 11.3908C7.78027 11.163 7.78027 10.7936 7.55246 10.5658C7.32466 10.338 6.95531 10.338 6.72751 10.5658L5.73378 11.5596C5.29408 11.9825 4.70616 12.2164 4.09597 12.2111C3.48417 12.2058 2.89894 11.9604 2.46633 11.5278C2.03371 11.0952 1.78831 10.51 1.783 9.89816C1.77769 9.28796 2.01164 8.70004 2.43458 8.26034L4.1808 6.51412C4.41734 6.27749 4.70209 6.09442 5.01558 5.97748C5.32906 5.86054 5.66403 5.81239 5.99777 5.83629C6.3315 5.86019 6.65619 5.95559 6.94981 6.11601C7.24344 6.27643 7.49913 6.49812 7.69954 6.76605C7.89251 7.02403 8.25808 7.07673 8.51606 6.88376C8.77403 6.69078 8.82673 6.32522 8.63376 6.06724C8.33315 5.66535 7.94961 5.33281 7.50918 5.09218C7.06874 4.85155 6.58171 4.70846 6.08111 4.6726Z"
                        fill="#12F7D6"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_548_675">
                        <rect width="14" height="14" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <a href="http://www.sinantokmak.com">www.sinantokmak.com</a>
                </div>
              </div>
              <div className="flex gap-[0.83vw] items-start">
                <Tag name="HTML" type="primary" />
                <Tag name="CSS" type="primary" />
                <Tag name="JS" type="primary" />
                <Tag name="REACT" type="primary" />
              </div>
            </div>
            <Button
              name="Download CV"
              icon={<DownloadIcon />}
              bgColor="bg-[#FFF]"
              borderColor="border-[#FFF]"
            />
          </div>

          <div className="flex items-center space-y-4 md:space-y-0 md:flex-row md:space-x-8">
            {/* Right Section */}
            <div className="text-left flex flex-col gap-[1.67vw]">
              <div>
                <span className="text-[#98FAEC] font-plexMono text-[0.73vw] font-normal leading-[0.94vw]">
                  {"<h1>"}
                </span>
                <h1 className="text-[#FFFFFF] font-ubuntu text-[3.33vw] font-normal leading-[3.75vw] capitalize px-[0.83vw]">
                  Hey
                  <br />
                  I'm <span className="text-[#12F7D6]">Mehakpreet</span>,<br />
                  Full-Stack Developer
                </h1>
                <span className="text-[#98FAEC] font-plexMono text-[0.73vw] font-normal leading-[0.94vw]">
                  {"</h1>"}
                </span>
              </div>
              <div className="flex flex-col gap-[0.83vw] items-start">
                <span className="text-[#98FAEC] font-plexMono text-[0.73vw] font-normal leading-[0.94vw]">
                  {"<p>"}
                </span>
                <p className="text-[#FFFFFF] font-plexMono text-[0.83vw] font-normal leading-[1.04vw] pl-[1.25vw] ">
                  I help businesses grow by crafting amazing web experiences. If
                  you're looking for a developer that likes to get stuff done,
                </p>
                <span className="text-[#98FAEC] font-plexMono text-[0.73vw] font-normal leading-[0.94vw]">
                  {"</p>"}
                </span>
                <button className="text-[#12F7D6] font-plexMono text-[1.67vw] font-medium leading-[2.19vw] capitalize gap-[0.83vw] ">
                  <span className="pl-[1.25vw]">Let's Talk </span>
                  <i className="fas fa-envelope ml-2"></i>
                </button>
              </div>
            </div>

            {/* Stats Section */}
            <div className="flex flex-col p-[2.5vw_1.67vw] justify-center items-start gap-[2.5vw] rounded-[4.17vw] bg-[#1A1E23] shadow-[2px_2px_4px_rgba(0,0,0,0.25)]">
              <div className="flex items-center gap-4">
                <h3 className="text-[#12F7D6] font-plexMono text-[2.5vw] font-medium leading-[3.23vw] capitalize">
                  4
                </h3>
                <p className="text-white font-plexMono text-[0.83vw] font-normal leading-[1.04vw]">
                  Programming Language
                </p>
              </div>
              <div className="flex items-center gap-4">
                <h3 className="text-[#12F7D6] font-plexMono text-[2.5vw] font-medium leading-[3.23vw] capitalize">
                  6
                </h3>
                <p className="text-white font-plexMono text-[0.83vw] font-normal leading-[1.04vw]">
                  Development Tools
                </p>
              </div>
              <div className="flex items-center gap-4">
                <h3 className="text-[#12F7D6] font-plexMono text-[2.5vw] font-medium leading-[3.23vw] capitalize">
                  8
                </h3>
                <p className="text-white font-plexMono text-[0.83vw] font-normal leading-[1.04vw]">
                  Years of Experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeveloperProfile;



