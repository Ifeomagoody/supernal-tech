
import React from 'react'
import * as motion from "motion/react-client";
import Image from "next/image";


export default function page() {
  return (
    <>
      <section className="min-h-screen p-6 w-full  flex flex-col justify-around bg-black">
        <div className="flex flex-wrap justify-around m-10  ">
          <motion.div
      initial={{ opacity: 0, y: 100}}
      animate={{ opacity: 1, y: 0}}
      transition={{ duration: 1, ease: 'easeInOut' }}
      >
        <h1 className="text-[3rem] text-white font-bold">Explore The Latest<br/> Statistics And Data-<br/> Driven Insights</h1>
      </motion.div>
      
      <motion.div
      initial={{ opacity: 0, y: 100}}
      animate={{ opacity: 1, y: 0}}
      transition={{ duration: 2, ease: 'easeInOut' }}
      >
      
         <p className="text-white ">Explore the latest statistics and data-driven insights<br/> to understand the evolving tech landscape. Dive<br/> deep into market trends, user behaviors, and<br/> emerging innovations with our comprehensive and<br/> up-to-date data analysis. Our detailed visualizations<br/> and expert interpretations make complex data<br/> accessible, helping you stay informed and ahead in<br/> the world of technology.</p>
      </motion.div>
        </div>
      
       
      
      <div className="relative flex flex-col items-center mb-20">
        {/* Long background image */}
        <Image 
          src="/images/corporate devs.webp"
          alt="Empowering Picture"
          width={800}
          height={300}
          className="object-contain mt-3 rounded-3xl w-3/5 hidde"
        />
      
        {/* White boxes container */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="absolute md:top-1/2 md:left-1/2 md:-translate-y-1/3 md:flex md:flex-wrap md:justify-center md:gap-8
                     w-full md:w-auto mt-30 md:mt-0"
        >
          <div className="flex flex-row mt-2 md:grid md:grid-cols-2 md:gap-8 gap-4 items-center justify-center">
            <div className="md:h-[170px] md:w-[210px] h-[130px] w-[130px] px-5 py-4 rounded-2xl bg-white text-center">
              <h1 className="text-[#C28D01] font-medium md:text-[3rem] text-[1.5rem] ">150+</h1>
              <div className="md:w-[8.3rem] w-[4.15rem] my-[0.5rem] border border-[#919191] mx-auto"></div>
              <h3 className="font-semibold md:text-[1rem] text-[0.7rem]">Happy Clients</h3>
            </div>
            <div className="md:h-[170px] md:w-[210px] h-[130px] w-[130px] px-5 py-4 rounded-2xl bg-white text-center">
              <h1 className="text-[#C28D01] font-medium md:text-[3rem] text-[1.5rem]">45+</h1>
              <div className="md:w-[8.3rem] w-[4.15rem] my-[0.5rem] border border-[#919191] mx-auto"></div>
              <h3 className="font-semibold md:text-[1rem] text-[0.7rem]">Experienced Staff</h3>
            </div>
            <div className="md:h-[170px] md:w-[210px] h-[130px] w-[130px] px-5 py-4 rounded-2xl bg-white text-center">
              <h1 className="text-[#C28D01] font-medium md:text-[3rem] text-[1.5rem]">22+</h1>
              <div className="md:w-[8.3rem] w-[4.15rem] my-[0.5rem] border border-[#919191] mx-auto"></div>
              <h3 className="font-semibold md:text-[1rem] text-[0.7rem]">Years of Experience</h3>
            </div>
            <div className="md:h-[170px] md:w-[210px] h-[130px] w-[130px] px-5 py-4 rounded-2xl bg-white text-center">
              <h1 className="text-[#C28D01] font-medium md:text-[3rem] text-[1.5rem]">820</h1>
              <div className="md:w-[8.3rem] w-[4.15rem] my-[0.5rem] border border-[#919191] mx-auto"></div>
              <h3 className="font-semibold md:text-[1rem] text-[0.7rem]">Projects Done</h3>
            </div>
          </div>
        </motion.div>
      </div>
      
      
      </section>
    </>
  )
}
