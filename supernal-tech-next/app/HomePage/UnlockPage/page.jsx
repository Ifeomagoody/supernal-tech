
import React from 'react'
import * as motion from "motion/react-client";
import Image from "next/image";


export default function page() {
  return (
    <>
       <section className="flex flex-wrap  justify-around items-center bg-[url('/images/table-bg.svg')] bg-cover bg-center bg-no-repeat w-full ">
                <div className="md:flex md:flex-col md:items-start items-center md:text-left text-center px-4">
                  <motion.div
                    initial={{opacity: 0, y: 100 }}
                    whileInView={{opacity: 1, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                  >
                    <h1 className="text-white text-[4rem] leading-[1.1] font-bold sm:w">
                      Unlock the
                      <br /> Latest in Tech
                      <br /> <span className="text-[#C28D01]">Innovation</span>
                    </h1>
                    <p className="text-white text-[1.5rem] sm:text-[1rem] font-light mt-4">
                      Stay informed with our expert reviews, insightful
                      <br /> articles, and comprehensive guides to navigate
                      <br /> the ever-evolving tech landscape.
                    </p>
      
                    <button className="bg-[#C28D01] my-10 flex justify-center hover:bg-transparent border border-[#C28D01] hover:text-[#C28D01] px-[1.8rem] py-[1rem] rounded-full text-[1.3rem]  items-center gap-2 text-white">
                      Discover Now
                      <Image
                        src="/arrow-up-solid-full.svg"
                        alt="navigation"
                        width={15}
                        height={15}
                        className="rotate-45 transition-all duration-300"
                      />
                    </button>
                  </motion.div>
                </div>
      
                <div>
                  <motion.div
                    className="relative  flex items-center justify-center z-1 min-h-screen"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.5,
                      ease: [0.5, 0.71, 0.2, 1.01],
                    }}
                  >
                    <img
                      src="/images/orange lines.svg"
                      alt="orbit lines"
                      className="relative w-[650px] h-[700px] object-contain z-0"
                    />
      
                    <img
                      src="images/668bc631552245e0b1f1f6ac_667d0d3673903a7f735aa1cc_Screenshot 2024-06-27 at 10.56.39-p-500.webp"
                      alt="person"
                      className="absolute z-10  w-[350px] h-[350px] rounded-2xl object-cover"
                    />
      
                    {/** floating icons around the orbit lines */}
                    <div className="absolute top-50 left-0.5 animate-icon-1 z-30 px-4 py-3 rounded-2xl border border-[#ffffff26]  bg-[#ffffff26]">
                      <img
                        src="/images/667d1ea1458bb01af5a47b39_Icon_1.svg"
                        alt="laptop"
                        className="w-12 h-12"
                      />
                    </div>
      
                    <div className="absolute top-13 right-35 animate-icon-2 z-30 px-4 py-3 rounded-2xl border border-[#ffffff26]  bg-[#ffffff26]">
                      <img
                        src="/images/667d1f159491ad7d8138a56e_Icon_2.svg"
                        alt="VR"
                        className="w-12 h-12"
                      />
                    </div>
      
                    <div className="absolute bottom-35 left-1/10 animate-icon-3 z-30 px-4 py-3 rounded-2xl border border-[#ffffff26]  bg-[#ffffff26]">
                      <img
                        src="/images/667d20430bdeb0613eb7260a_Icon_3.svg"
                        alt="phone"
                        className="w-12 h-12"
                      />
                    </div>
      
                    <div className="absolute bottom-20 right-1/4 animate-icon-4 z-30 px-4 py-3 rounded-2xl border border-[#ffffff26]  bg-[#ffffff26]">
                      <img
                        src="/images/667d218ce38eb57331b53962_Icon_5.svg"
                        alt="shield"
                        className="w-12 h-12"
                      />
                    </div>
      
                    <div className="absolute top-1/3.5 right-10 animate-icon-5 z-30 px-4 py-3 rounded-2xl border border-[#ffffff26]  bg-[#ffffff26]">
                      <img
                        src="/images/667d20e58f08a445ae96240d_Icon_4.svg"
                        alt="scanner"
                        className="w-12 h-12"
                      />
                    </div>
                  </motion.div>
                </div>
       </section>
    </>
  )
}
