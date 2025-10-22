
import React from 'react'
import Image from "next/image";


export default function page() {
  return (
    <>
        <section>
                <div className="relative w-full h-screen overflow-hidden">
                  <video
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    src="/Ife_Video.webm"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
      
                  <div className="relative z-10 flex flex-col items-center justify-center h-full mt-4 text-white">
                    <img
                      src="images/668bc631552245e0b1f1f6ac_667d0d3673903a7f735aa1cc_Screenshot 2024-06-27 at 10.56.39-p-500.webp"
                      alt="person"
                      className="absolute z-10 :hidden w-[240px] h-[250px] rounded-2xl object-cover left-10 bottom-35"
                    />
                    <div></div>
                    <h1 className="text-[4rem] font-bold text-center">
                      Explore the Future
                      <br /> of Tech Today
                    </h1>
                    <p className="mt-4 text-lg text-center">
                      Stay at the cutting edge of innovation with our comprehensive
                      <br /> coverage of the latest technological advancements
                    </p>
                    <button className="bg-[#C28D01] mt-8 flex justify-center hover:bg-transparent border border-[#C28D01] hover:text-[#C28D01] px-[3rem] py-[0.8rem] rounded-full text-[1.3rem]  items-center gap-2 text-white">
                      Discover Now
                      <Image
                        src="/arrow-up-solid-full.svg"
                        alt="navigation"
                        width={15}
                        height={15}
                        className="rotate-45 transition-all duration-300"
                      />
                    </button>
      
                    <img
                      src="/images/man_VR.webp"
                      alt="person"
                      className="absolute z-10  w-[220px] h-[250px] rounded-2xl object-cover right-10 top-45"
                    />
                  </div>
      
                  <div className="absolute inset-0 bg-black/40 z-5"></div>
                </div>
              </section>
    </>
  )
}
