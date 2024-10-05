import React from 'react'
import Image from 'next/image'

const WorkCard = ({ heading, link, img1, img2}) => {
  return (
    <div className="relative flex flex-col items-center">
        <div >
    <img
      src="/images/Home/Dual-screen.png"
      alt="Monitor with Code"
      className="min-w-[33.8vw] min-h-[22.5vw] relative"
    />
    <Image 
          src={img1}
          alt="img1"
          width={500}
          height={300}
          className="w-[11.5vw] h-[14.5vw] absolute top-[3vw] left-[2.7vw]"
          />
    <Image 
              src={img2}
              alt="img2"
              width={500}
              height={300}
              className="w-[15.5vw] h-[9vw] absolute top-[7vw] right-[2.5vw]"
              />
    </div>
    <div className="flex flex-col justify-center absolute top-[2.5vw] right-[5vw] items-start gap-[0.28vw]">
      <a
        href={link}
        className="text-[#12F7D6] font-plexMono text-[1vw] font-normal leading-[1.2vw] capitalize"
      >
        {heading}
      </a>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="11.98vw"
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
  </div>
  )
}

export default WorkCard
