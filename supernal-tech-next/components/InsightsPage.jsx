

import React from 'react'
import * as motion from "motion/react-client";


export default function page() {
  return (
    <>
    
             <title>Analytics</title>
      <link rel="icon" type="image/svg+xml" href="/Ife_Logo.png" />

      <section className=" relative min-h-screen bg-white flex flex-wrap-reverse justify-center  lg:flex-nowrap p-6 lg:p-20">
      
          <div className="absolute top-30 right-30 animate-icon-1 p-3 rounded-2xl border border-[#ffffff26] bg-black">
              <img src="/images/667d1ea1458bb01af5a47b39_Icon_1.svg" alt="laptop" className="w-12 h-12" />
            </div>
        <div className="w-full lg:w-3/4 space-y-10">
          <h1 className="text-[2rem] text-black sm:text-[2.5rem] lg:text-[3rem] font-semibold text-center hover:text-[#C28D01] leading-tight">
            Empowering Tech<br /> Insights & Analytics
          </h1>
      
      
      <motion.div
      initial={{ opacity: 0, y: 100}}
      animate={{ opacity: 1, y: 0}}
      transition={{ duration: 1, ease: 'easeInOut' }}
      >
          <div className="border border-black flex flex-col sm:flex-row gap-5 px-6 sm:px-10 py-6 sm:py-10  rounded-2xl">
            <h1 className="text-[#C28D01] text-[2.5rem] sm:text-[3rem] font-semibold">01</h1>
            <div>
              <h1 className="text-[1.5rem] sm:text-[2rem] hover:text-[#C28D01] text-black font-semibold leading-tight">
                Real-Time Data<br /> Tracking
              </h1>
              <p className="text-[1rem] mt-2 text-black">
                Visualize key tech performance indicators (KPIs) through intuitive dashboards,
                facilitating quick insights into software performance, user engagement, and
                operational efficiency.
              </p>
            </div>
          </div>
      </motion.div>
      
      
      
      <motion.div
      initial={{ opacity: 0, y: 100}}
      animate={{ opacity: 1, y: 0}}
      transition={{ duration: 2, ease: 'easeInOut' }}
      >
          <div className="border border-black flex flex-col sm:flex-row gap-5 px-6 sm:px-10 py-6 sm:py-8 rounded-2xl">
            <h1 className="text-[#C28D01] text-[2.5rem] sm:text-[3rem] font-semibold">02</h1>
            <div>
              <h1 className="text-[1.5rem] text-black sm:text-[2rem] hover:text-[#C28D01] font-semibold leading-tight">
                Performance<br /> Dashboards
              </h1>
              <p className="text-[1rem] mt-2 text-black">
                - tech trends and user behaviors over time, leveraging insights to
                anticipate market shifts and drive innovation in software development and digital
                solutions.
              </p>
            </div>
          </div>
      </motion.div>
      
      
      
      <motion.div
      initial={{ opacity: 0, y: 100}}
      animate={{ opacity: 1, y: 0}}
      transition={{ duration: 3, ease: 'easeInOut' }}
      >
          <div className="border border-black  flex flex-col sm:flex-row gap-5 px-6 sm:px-10 py-6 sm:py-8 rounded-2xl">
            <h1 className="text-[#C28D01] text-[2.5rem] sm:text-[3rem] font-semibold">03</h1>
            <div>
              <h1 className="text-[1.5rem] text-black sm:text-[2rem] hover:text-[#C28D01] font-semibold leading-tight">
                Trend Analysis
              </h1>
              <p className="text-[1rem] mt-2 text-black">
                Generate customized reports focusing on tech-specific metrics vital for strategic
                planning and digital product development, ensuring alignment with business goals.
              </p>
            </div>
          </div>
      </motion.div>
        </div>
      
       
      </section>
    </>
  )
}
